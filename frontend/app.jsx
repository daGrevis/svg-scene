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
