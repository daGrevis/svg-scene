import React from "react"

class LineForm extends React.Component {

    render() {
        return <div>
            <div className="row">
                <label htmlFor="x1">X1</label>
                <input
                    id="x1"
                    type="number"
                    value={this.props.x1}
                    onChange={(ev) => this.props.onChange(ev, "x1")}
                />
            </div>

            <div className="row">
                <label htmlFor="y1">Y1</label>
                <input
                    id="y1"
                    type="number"
                    value={this.props.y1}
                    onChange={(ev) => this.props.onChange(ev, "y1")}
                />
            </div>

            <div className="row">
                <label htmlFor="x2">X2</label>
                <input
                    id="x2"
                    type="number"
                    value={this.props.x2}
                    onChange={(ev) => this.props.onChange(ev, "x2")}
                />
            </div>

            <div className="row">
                <label htmlFor="y2">Y2</label>
                <input
                    id="y2"
                    type="number"
                    value={this.props.y2}
                    onChange={(ev) => this.props.onChange(ev, "y2")}
                />
            </div>
        </div>
    }

}

export {LineForm}
