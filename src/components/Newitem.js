import React, { Component } from 'react';

class Newitem extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <h3>{this.props.tieude}</h3>
                            <p>{this.props.trichdan}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Newitem;