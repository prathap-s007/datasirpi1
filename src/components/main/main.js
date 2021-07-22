import React,{Component} from 'react';
import Basic from '../basic/basic';
import Skills from '../skills/skills';
import Scores from '../scores/scores';
import {Route,NavLink} from 'react-router-dom';
import {connect } from 'react-redux';
class main extends Component{
    state={
        show:false
    }

    hideit=()=>{
        this.setState({show:false})
    }
    render(){
    return(
        <div className="box">
            <div className="modal1" style={{display:this.props.details.showsuccess ? "block":"none"}}> <p className="thumb">&#128077;</p><p className="text">{this.props.details.msg}</p> </div>
            <div className="modal2" style={{display:this.props.details.showfailure  ? "block":"none"}}> <p className="thumb">&#x1F514;</p><p className="text">{this.props.details.msg}</p> </div>
            <div className="head">
                <p>Evaluation Wizard</p>

            </div>  
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
            
            <div className="nav">
                <NavLink to ={{pathname:'/Basic'}} > Basic</NavLink>
                <NavLink to ={{pathname:'/Skills'}} > Skills</NavLink>
                <NavLink to ={{pathname:'/Scores'}}>Scores</NavLink>
            </div>
            
            <Route path="/Basic" component={Basic}/>
            <Route path="/Skills" component={Skills}/>
            <Route path="/Scores" component={Scores}/>
            
             
            <br/><br/>
        </div>
    )
    }
}
const mapStateToProps=state=>{
return{
    details:state
};
}

export default connect(mapStateToProps,null)(main);