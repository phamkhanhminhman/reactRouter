import React, { Component } from 'react';
import Newitem from './Newitem';
import dl from './dulieu.json';
import Redirect from "react-router-dom/Redirect";



class Content_about extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            fname:"",
            sdt:"",
            cmnd:""
        }

    }
    submitForm = (event) => {
        event.preventDefault();//ngan ko cho chuyen trang
        this.setState({
            isRedirect:true
        })
       
    }
    isChange=(event)=>{
        const ten=event.target.name;
        const giatri=event.target.value;
       // console.log(ten);
        //console.log(giatri);
        this.setState({
            [ten]:giatri
        });
    }
    getGiaTri=()=>{
        var noidung="";
        noidung +="Ten nhan dc la: " + this.state.fname;
        noidung +="Sdt nhan dc la: " + this.state.sdt;
        noidung +="CMND nhan dc la: " + this.state.cmnd;
        noidung +="Thu nhan dc la: " +this.state.ngay;
        return noidung;
    }
    render() {
        if (this.state.isRedirect) {
             console.log(this.getGiaTri()); 
            return <Redirect to="/"></Redirect>
        }
        return (
            <div>
                <div>
                    <header className="intro-header" style={{ backgroundImage: 'url("img/about-bg.jpg")' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                    <div className="page-heading">
                                        <h1>About Me</h1>

                                        <hr className="small" />
                                        <span className="subheading">This is what I do.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* Main Content */}

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                <form action="/action_page.php">
                                    <div className="form-group">
                                        <label htmlFor="email">Email address:</label>
                                        <input onChange={(event)=>this.isChange(event)} type="text" name="fname"className="form-control" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Password:</label>
                                        <input onChange={(event)=>this.isChange(event)} type="text" name="sdt"className="form-control" id="sdt" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">CMND:</label>
                                        <input onChange={(event)=>this.isChange(event)} type="text" name="cmnd"className="form-control" id="cmnd" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Ngay:</label>
                                        <input onChange={(event)=>this.isChange(event)} type="text" name="cmnd"className="form-control" id="cmnd" />
                                    </div>
                                    <div className="form-group form-check">
                                        <label className="form-check-label">
                                           
                                             <select onChange={(event)=>this.isChange(event)} className="form-control" name="ngay" id="">
                                               <option value="thu2">Thu 2</option>
                                               <option value="thu3">Thu 3</option>
                                             </select>
                                           
                                         </label>
                                    </div>
                                    <button type="submit" onClick={(event) => this.submitForm(event)} className="btn btn-primary">Submit</button>
                                </form>
                                <hr />
                                {
                                    dl.map((value, key) => {
                                        return (
                                            <Newitem key={key} tieude={value.tieude} trichdan={value.trichdan}></Newitem>
                                        )
                                    })
                                }
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

            </div>
        );
    }
}

export default Content_about;