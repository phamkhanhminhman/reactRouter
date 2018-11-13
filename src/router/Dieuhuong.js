import React, { Component } from 'react';
import Content from '../components/Content';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Content_about from '../components/Content_about';

class Dieuhuong extends Component {
    render() {
        return (
            
                <div>
                    <Route exact path="/" component={Content} />
                    <Route exact path="/about/" component={Content_about} />

                </div>
            
        );
    }
}

export default Dieuhuong;