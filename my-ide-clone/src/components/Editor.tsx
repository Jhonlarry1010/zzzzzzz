import React, { Component } from 'react';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
    }

    render() {
        return (
            <div className="editor">
                <textarea
                    value={this.state.content}
                    onChange={this.handleInput}
                    placeholder="Start typing..."
                />
            </div>
        );
    }

    handleInput = (event) => {
        this.setState({ content: event.target.value });
    };
}

export default Editor;