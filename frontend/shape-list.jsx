import _ from "lodash"
import React from "react"
import Modal from "react-modal"

import {ShapeForm} from "./shape-form"

class ShapeItem extends React.Component {

    render() {
        let moveTop, moveBottom
        if (this.props.canShapeBeMoved(this.props.id, -1)) {
            moveBottom = <span>
                [<a href="#" onClick={(ev) => this.props.onMoveShape(ev, this.props.id, -1)}>↑</a>]
            </span>
        }
        if (this.props.canShapeBeMoved(this.props.id, 1)) {
            moveTop = <span>
                [<a href="#" onClick={(ev) => this.props.onMoveShape(ev, this.props.id, 1)}>↓</a>]
            </span>
        }

        return <li>
            <a href="#" onClick={(ev) => this.props.onEditShape(ev, this.props.id)}>
                {this.props.name || "Untitled"}
            </a>
            &nbsp;
            [<a href="#" onClick={(ev) => this.props.onRemoveShape(ev, this.props.id)}>x</a>]
            {moveTop}
            {moveBottom}
            <p>{this.props.type}</p>
        </li>
    }

}

class ShapeList extends React.Component {

    state = {
        isModalOpen: false,
        currentShape: null,
    }

    openModal = () => {
        this.setState({isModalOpen: true})
    }

    closeModal = () => {
        this.setState({isModalOpen: false})
    }

    onRemoveShape = (ev, id) => {
        ev.preventDefault()

        this.props.removeShape(id)
    }

    onAddShape = (ev) => {
        ev.preventDefault()

        this.openModal()
    }

    onEditShape = (ev, id) => {
        ev.preventDefault()

        let currentShape = _.find(this.props.shapes, (x) => x.id === id)
        this.setState({currentShape}, this.openModal)
    }

    onMoveShape = (ev, id, dir) => {
        ev.preventDefault()

        this.props.moveShape(id, dir)
    }

    onExportShapes = (ev) => {
        ev.preventDefault()

        let shapes = this.props.shapes.map((x) => _.omit(x, ["id"]))

        console.log(JSON.stringify(shapes, null, 4))

        alert("Shapes exported to console!")
    }

    addShape = (shape) => {
        this.closeModal()

        this.props.addShape(shape)
    }

    updateShape = (shape) => {
        this.closeModal()
        this.setState({currentShape: null})

        this.props.updateShape(shape)
    }

    render() {
        return <div id="shape-list">
            <ol>
                {this.props.shapes.map((shapeProps) =>
                    <ShapeItem
                        key={shapeProps.id}
                        {...shapeProps}
                        onRemoveShape={this.onRemoveShape}
                        onEditShape={this.onEditShape}
                        canShapeBeMoved={this.props.canShapeBeMoved}
                        onMoveShape={this.onMoveShape}
                    />
                )}
            </ol>

            <p><a href="#" onClick={this.onAddShape}>Add Shape</a></p>
            <p><a href="#" onClick={this.onExportShapes}>Export Shapes</a></p>

            <Modal isOpen={this.state.isModalOpen} onRequestClose={this.closeModal}>
                <ShapeForm
                    addShape={this.addShape}
                    updateShape={this.updateShape}
                    closeModal={this.closeModal}
                    currentShape={this.state.currentShape}
                />
            </Modal>
        </div>
    }

}

export {ShapeList}
