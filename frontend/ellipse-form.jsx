import React from "react"

class EllipseForm extends React.Component {

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
                <label htmlFor="rx">Radius X</label>
                <input
                    id="rx"
                    type="number"
                    value={this.props.rx}
                    onChange={(ev) => this.props.onChange(ev, "rx")}
                />
            </div>

            <div className="row">
                <label htmlFor="ry">Radius Y</label>
                <input
                    id="ry"
                    type="number"
                    value={this.props.ry}
                    onChange={(ev) => this.props.onChange(ev, "ry")}
                />
            </div>
        </div>
    }

}

export {EllipseForm}
