import _ from "lodash"
import uuid from "uuid4"
import React from "react"
import ReactDOM from "react-dom"

import {Scene} from "./scene"
import {ShapeList} from "./shape-list"

import "./base.scss"

import "file?name=[name].[ext]!./index.html"

const SCENE_WIDTH = 600
const SCENE_HEIGHT = 800

const INITIAL_SHAPES = [
    {
        type: "circle",
        cx: "100",
        cy: "100",
        r: "100",
        fill: "#446CB3",
        name: "Blue Circle",
        id: uuid(),
    },
    {
        type: "rect",
        x: "120",
        y: "20",
        width: "150",
        height: "150",
        fill: "#26A65B",
        name: "Green Rectangle",
        id: uuid(),
    },
]

class App extends React.Component {

    state = {
        shapes: INITIAL_SHAPES,
    }

    removeShape = (id) => {
        let shapes = _.filter(this.state.shapes, (x) => x.id !== id)

        this.setState({shapes})
    }

    addShape = (shape) => {
        shape.id = uuid()
        let shapes = _.concat(this.state.shapes, shape)

        this.setState({shapes})
    }

    updateShape = (shape) => {
        let shapes = this.state.shapes
        let i = _.findKey(shapes, (x) => x.id === shape.id)
        shapes[i] = shape

        this.setState({shapes})
    }

    canShapeBeMoved = (id, dir) => {
        let i = Number(_.findKey(this.state.shapes, (x) => x.id === id))
        return !!this.state.shapes[i + dir]
    }

    moveShape = (id, dir) => {
        let shapes = this.state.shapes
        let i = Number(_.findKey(shapes, (x) => x.id === id))
        let shape = shapes[i]
        let shapeBefore = shapes[i + dir]
        shapes[i + dir] = shape
        shapes[i] = shapeBefore

        this.setState({shapes})
    }

    render() {
        return <div>
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
    let mountNode = document.getElementById("react")
    ReactDOM.render(<App />, mountNode)
}

document.addEventListener("DOMContentLoaded", onReady)
