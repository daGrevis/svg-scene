import React from "react"

class CircleForm extends React.Component {

    render() {
        return <div>
            <div className="row">
                <label htmlFor="cx">Center X</label>
                <input
                    id="cx"
                    type="number"
                    value={this.props.cx}
                    onChange={(ev) => this.props.onChange(ev, "cx")}
                />
            </div>

            <div className="row">
                <label htmlFor="cy">Center Y</label>
                <input
                    id="cy"
                    type="number"
                    value={this.props.cy}
                    onChange={(ev) => this.props.onChange(ev, "cy")}
                />
            </div>

            <div className="row">
                <label htmlFor="r">Radius</label>
                <input
                    id="r"
                    type="number"
                    value={this.props.r}
                    onChange={(ev) => this.props.onChange(ev, "r")}
                />
            </div>
        </div>
    }

}

export {CircleForm}
