import _ from "lodash"
import React from "react"

class Scene extends React.Component {

    render() {
        return <svg id="scene" width={this.props.width} height={this.props.height}>
            {this.props.shapes.map((shapeProps, i) => {
                let Shape = shapeProps.type
                let props = _.omit(shapeProps, ["type", "id", "name"])
                return <Shape key={i} {...props} />
            })}
        </svg>
    }

}

export {Scene}
