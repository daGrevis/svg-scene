import React from "react"
import Modal from "react-modal"

import {ShapeForm} from "./shape-form"

class ShapeItem extends React.Component {

    onDelete(ev, id) {
        ev.preventDefault()

        this.props.removeShape(id)
    }

    render() {
        return <li>
            <strong>{this.props.name || "Untitled"}</strong>
            &nbsp;[<a href="#" onClick={(ev) => this.onDelete(ev, this.props.id)}>x</a>]
            <p>{this.props.type}</p>
        </li>
    }

}

class ShapeList extends React.Component {

    state = {
        isModalOpen: false,
    }

    openModal = () => {
        this.setState({isModalOpen: true})
    }

    closeModal = () => {
        this.setState({isModalOpen: false})
    }

    onAddShape = (ev) => {
        ev.preventDefault()

        this.openModal()
    }

    render() {
        return <div id="shape-list">
            <ol>
                {this.props.shapes.map((shapeProps) =>
                    <ShapeItem
                        key={shapeProps.id}
                        {...shapeProps}
                        removeShape={this.props.removeShape}
                    />
                )}
            </ol>

            <a href="#" onClick={this.onAddShape}>Add Shape</a>

            <Modal isOpen={this.state.isModalOpen} onRequestClose={this.closeModal}>
                <ShapeForm
                    addShape={this.props.addShape}
                    closeModal={this.closeModal}
                />
            </Modal>
        </div>
    }

}

export {ShapeList}
