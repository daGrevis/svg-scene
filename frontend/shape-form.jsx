import _ from "lodash"
import React from "react"

import {CircleForm} from "./circle-form"
import {RectForm} from "./rect-form"
import {LineForm} from "./line-form"
import {EllipseForm} from "./ellipse-form"

const TYPE_TO_FORM_DATA = {
    circle: {
        cx: "",
        cy: "",
        r: "",
    },
    rect: {
        x: "",
        y: "",
        width: "",
        height: "",
    },
    line: {
        x1: "",
        y1: "",
        x2: "",
        y2: "",
    },
    ellipse: {
        cx: "",
        cy: "",
        rx: "",
        ry: "",
    },
}

const TYPE_TO_EXTRA_FORM = {
    circle: CircleForm,
    rect: RectForm,
    line: LineForm,
    ellipse: EllipseForm,
}

class ShapeForm extends React.Component {

    // Fields shared by any shape.
    BASE_FIELDS = [
        "name",
        "type",
        "fill",
        "stroke",
        "strokeWidth",
    ]

    state = {
        name: "",
        type: "circle",
        fill: "#000000",
        stroke: "#000000",
        strokeWidth: "0",
    }

    constructor(props) {
        super(props)

        if (props.currentShape !== null) {
            this.state = _.merge(this.state, props.currentShape)
        }
    }

    getShapeTypes() {
        return _.keys(TYPE_TO_FORM_DATA)
    }

    onChange = (ev, field) => {
        let stateUpdate = {}
        stateUpdate[field] = ev.target.value

        this.setState(stateUpdate)
    }

    onSubmit = (ev) => {
        ev.preventDefault()

        let baseData = this.getBaseData()
        let extraData = this.getExtraData()

        if (!_.every(extraData)) {
            alert("Required field is missing!")
            return
        }

        let shapeData = _.merge(baseData, extraData)

        if (this.props.currentShape === null) {
            this.props.addShape(shapeData)
        } else {
            shapeData.id = this.props.currentShape.id
            this.props.updateShape(shapeData)
        }
    }

    getBaseData() {
        return _.pick(this.state, this.BASE_FIELDS)
    }

    getExtraData() {
        // Gets data from selected shape type form.
        return _.assign({},
            TYPE_TO_FORM_DATA[this.state.type],
            _.pick(this.state, _.keys(TYPE_TO_FORM_DATA[this.state.type]))
        )
    }

    getExtraForm() {
        let ExtraForm = TYPE_TO_EXTRA_FORM[this.state.type]
        return <ExtraForm onChange={this.onChange} {...this.getExtraData()} />
    }

    render() {
        return <div id="shape-form">
            <form onSubmit={this.onSubmit}>
                <div className="row">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        placeholder="Untitled"
                        value={this.state.name}
                        onChange={(ev) => this.onChange(ev, "name")}
                    />
                </div>

                <div className="row">
                    <label htmlFor="type">Type</label>
                    <select value={this.state.type} onChange={(ev) => this.onChange(ev, "type")}>
                        {this.getShapeTypes().map((type) => {
                            return <option key={type} value={type}>
                                {type}
                            </option>
                        })}
                    </select>
                </div>

                {this.getExtraForm()}

                <div className="row">
                    <label htmlFor="fill">Fill</label>
                    <input
                        id="name"
                        type="color"
                        value={this.state.fill}
                        onChange={(ev) => this.onChange(ev, "fill")}
                    />
                </div>

                <div className="row">
                    <label htmlFor="stroke">Stroke</label>
                    <input
                        id="stroke"
                        type="color"
                        value={this.state.stroke}
                        onChange={(ev) => this.onChange(ev, "stroke")}
                    />
                </div>

                <div className="row">
                    <label htmlFor="strokeWidth">Stroke Width</label>
                    <input
                        id="strokeWidth"
                        type="number"
                        value={this.state.strokeWidth}
                        onChange={(ev) => this.onChange(ev, "strokeWidth")}
                    />
                </div>

                <div className="row">
                    <button onClick={this.onClick}>Save</button>
                </div>
            </form>
        </div>
    }

}

export {ShapeForm}
