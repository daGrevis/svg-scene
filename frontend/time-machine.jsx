import React from "react"

class TimeMachine extends React.Component {

    onUndo = (ev) => {
        ev.preventDefault()

        this.props.undo()
    }

    onRedo = (ev) => {
        ev.preventDefault()

        this.props.redo()
    }

    render() {
        let undo, redo
        if (this.props.canUndo()) {
            undo = <span>
                [<a href="#" onClick={this.onUndo}>undo</a>]
            </span>
        }
        if (this.props.canRedo()) {
            redo = <span>
                [<a href="#" onClick={this.onRedo}>redo</a>]
            </span>
        }

        return <div id="time-machine">
            History
            &nbsp;
            {undo}
            {redo}
        </div>
    }

}

export {TimeMachine}
