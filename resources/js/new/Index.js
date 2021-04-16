import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Index extends Component {
    render() {
        return (
            <div>
                <div className="products">
                    <div className="container">
                        <h2>Jonny</h2>
                    </div>
                </div>
            </div>
        )
    }
}
export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
