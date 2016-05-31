import _ from "lodash"
import uuid from "uuid4"
import React from "react"
import ReactDOM from "react-dom"

import {TimeMachine} from "./time-machine"
import {Scene} from "./scene"
import {ShapeList} from "./shape-list"

import {shapesFixture} from "./fixtures"

import "./base.scss"

import "file?name=[name].[ext]!./index.html"

const SCENE_WIDTH = 600
const SCENE_HEIGHT = 800

class App extends React.Component {

    history = []
    historyPosition = 0

    state = {
        shapes: [],
    }

    constructor(props) {
        super(props)

        let shapes = props.shapes || []

        // We assign unique ID for each shape. Only used for internal purposes, should not be exported.
        _.forEach(shapes, function(x) {
            x.id = uuid()
        })

        this.state.shapes = shapes
    }

    saveHistory() {
        if (this.history.length === this.historyPosition) {
            this.history.push(this.state)
        } else {
            this.history = _.slice(this.history, 0, this.historyPosition + 1)
        }

        this.historyPosition += 1
    }

    canUndo = () => {
        return this.historyPosition > 0
    }

    undo = () => {
        this.history[this.historyPosition] = this.state

        this.historyPosition -= 1

        let state = this.history[this.historyPosition]
        this.setState(state)
    }

    canRedo = () => {
        return this.history.length > this.historyPosition + 1
    }

    redo = () => {
        this.historyPosition += 1

        let state = this.history[this.historyPosition]
        this.setState(state)
    }

    removeShape = (id) => {
        this.saveHistory()

        let shapes = _.filter(this.state.shapes, (x) => x.id !== id)

        this.setState({shapes})
    }

    addShape = (shape) => {
        this.saveHistory()

        shape.id = uuid()
        let shapes = _.concat(this.state.shapes, shape)

        this.setState({shapes})
    }

    updateShape = (shape) => {
        this.saveHistory()

        let shapes = _.slice(this.state.shapes)
        let i = _.findKey(shapes, (x) => x.id === shape.id)
        shapes[i] = shape

        this.setState({shapes})
    }

    canShapeBeMoved = (id, dir) => {
        let i = Number(_.findKey(this.state.shapes, (x) => x.id === id))
        return !!this.state.shapes[i + dir]
    }

    moveShape = (id, dir) => {
        this.saveHistory()

        let shapes = _.slice(this.state.shapes)
        let i = Number(_.findKey(shapes, (x) => x.id === id))
        let shape = shapes[i]
        let shapeBefore = shapes[i + dir]
        shapes[i + dir] = shape
        shapes[i] = shapeBefore

        this.setState({shapes})
    }

    render() {
        return <div>
            <TimeMachine
                canUndo={this.canUndo}
                undo={this.undo}
                canRedo={this.canRedo}
                redo={this.redo}
            />

            <ShapeList
                shapes={this.state.shapes}
                removeShape={this.removeShape}
                addShape={this.addShape}
                updateShape={this.updateShape}
                canShapeBeMoved={this.canShapeBeMoved}
                moveShape={this.moveShape}
            />
            <Scene width={SCENE_WIDTH} height={SCENE_HEIGHT} shapes={this.state.shapes} />
        </div>
    }

}

function onReady() {
    let app = <App shapes={shapesFixture} />

    let mountNode = document.getElementById("react")
    ReactDOM.render(app, mountNode)
}

document.addEventListener("DOMContentLoaded", onReady)
