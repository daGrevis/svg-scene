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
        fill: "#F89406",
        name: "My Circle",
        id: uuid(),
    },
    {
        type: "line",
        x1: "20",
        y1: "100",
        x2: "100",
        y2: "20",
        stroke: "black",
        strokeWidth: "2",
        id: uuid(),
    },
    {
        type: "ellipse",
        cx: "60",
        cy: "60",
        rx: "50",
        ry: "25",
        id: uuid(),
    },
    {
        type: "rect",
        x: "120",
        y: "40",
        width: "50",
        height: "50",
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

    render() {
        return <div>
            <ShapeList
                shapes={this.state.shapes}
                removeShape={this.removeShape}
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
