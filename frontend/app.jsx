import React from "react"
import ReactDOM from "react-dom"

import {Scene} from "./scene"

import "./base.scss"

import "file?name=[name].[ext]!./index.html"

class Root extends React.Component {

    render() {
        return <Scene />
    }

}

function onReady() {
    let mountNode = document.getElementById("react")
    ReactDOM.render(<Root />, mountNode)
}

document.addEventListener("DOMContentLoaded", onReady)
