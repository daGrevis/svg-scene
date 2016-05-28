import _ from "lodash"
import React from "react"

class Scene extends React.Component {

    render() {
        return <svg id="scene" width={this.props.width} height={this.props.height}>
            {this.props.shapes.map((shapeProps) => {
                let Shape = shapeProps.type
                let props = _.omit(shapeProps, ["type", "id", "name"])
                return <Shape key={shapeProps.id} {...props} />
            })}
        </svg>
    }

}

export {Scene}
