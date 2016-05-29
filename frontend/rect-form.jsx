import React from "react"

class RectForm extends React.Component {

    render() {
        return <div>
            <div className="row">
                <label htmlFor="x">X</label>
                <input
                    id="x"
                    type="number"
                    value={this.props.x}
                    onChange={(ev) => this.props.onChange(ev, "x")}
                />
            </div>

            <div className="row">
                <label htmlFor="y">Y</label>
                <input
                    id="y"
                    type="number"
                    value={this.props.y}
                    onChange={(ev) => this.props.onChange(ev, "y")}
                />
            </div>

            <div className="row">
                <label htmlFor="width">Width</label>
                <input
                    id="width"
                    type="number"
                    value={this.props.width}
                    onChange={(ev) => this.props.onChange(ev, "width")}
                />
            </div>

            <div className="row">
                <label htmlFor="height">Height</label>
                <input
                    id="height"
                    type="number"
                    value={this.props.height}
                    onChange={(ev) => this.props.onChange(ev, "height")}
                />
            </div>
        </div>
    }

}

export {RectForm}
