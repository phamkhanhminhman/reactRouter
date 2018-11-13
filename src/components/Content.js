import React, { Component} from 'react';
class Content extends Component {

    render() {
        return (
            <div>
                <header className="intro-header" style={{ backgroundImage: 'url("img/home-bg.jpg")' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                <div className="site-heading">
                                    <h1>Clean Blog</h1>
                                    <hr className="small" />
                                    <span className="subheading">A Clean Blog Theme by Start Bootstrap</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                           <h2>Content</h2>
                            <hr />
                            {/* Pager */}
                            <ul className="pager">
                                <li className="next">
                                    <a href="#">Older Posts →</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Content;