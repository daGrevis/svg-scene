import React from "react"

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

    render() {
        return <div id="shape-list">
            <ol>
                {this.props.shapes.map((shapeProps, i) =>
                    <ShapeItem
                        key={i}
                        {...shapeProps}
                        removeShape={this.props.removeShape}
                    />
                )}
            </ol>
        </div>
    }

}

export {ShapeList}
