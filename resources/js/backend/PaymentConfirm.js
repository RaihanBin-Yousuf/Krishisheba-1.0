import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class PaymentConfirm extends Component {
    render() {
        return (
            <div>
                <h2>React Payment</h2>
                <div className="card">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

if (document.getElementById('react_payment')) {
    ReactDOM.render(<PaymentConfirm />, document.getElementById('react_payment'));
}

