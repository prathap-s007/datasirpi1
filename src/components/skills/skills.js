import React,{Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'

class skills extends Component{

    state={
        onselecthtml:false,
        onselectangular:false,
        onselectcss:false,
        onselectjs:false

    }
    componentDidMount=()=>{
        this.setState({onselecthtml:this.props.details.onselecthtml,
            onselectangular:this.props.details.onselectangular,
            onselectcss:this.props.details.onselectcss,
            onselectjs:this.props.details.onselectjs})
        }
    hidenot=()=>{
        this.props.hidesuccess();
    }
    
    render(){
    return(
        <div className="container">
            <center>Select all Applicable skills</center>
            <div className="row" style={{paddingTop:"30px"}}>
            <div className="col col-lg-3">
                <div className={this.state.onselectangular ? "design":"design1"} onClick={()=>{if(this.state.onselectangular){
                this.setState({onselectangular:false})
            }
            else{
                this.setState({onselectangular:true})
            }}}>
                Angular 4
            </div>

                </div>

                <div className="col col-lg-3">
                <div className={this.state.onselecthtml ? "design":"design1"} onClick={()=>{if(this.state.onselecthtml){
                this.setState({onselecthtml:false})
            }
            else{
                this.setState({onselecthtml:true})
            }}}>
                HTML 5
            </div>

                </div>

                <div className="col col-lg-3">
                <div className={this.state.onselectcss ? "design":"design1"} onClick={()=>{if(this.state.onselectcss){
                this.setState({onselectcss:false})
            }
            else{
                this.setState({onselectcss:true})
            }}}>
                CSS
            </div>

                </div>

                <div className="col col-lg-3">
                <div className={this.state.onselectjs ? "design":"design1"} onClick={()=>{if(this.state.onselectjs){
                this.setState({onselectjs:false})
            }
            else{
                this.setState({onselectjs:true})
            }}}>
                Javascript
            </div>

                </div>

            </div>
        <div className="ff" style={{paddingTop:"30px"}}>
        <NavLink to ={{pathname:'/Basic'}} >      <button className="button" style={{float:"left"}} onClick={()=>{ const data1={
                    onselecthtml:this.state.onselecthtml,
        onselectangular:this.state.onselectangular,
        onselectcss:this.state.onselectcss,
        onselectjs:this.state.onselectjs

                }
                this.props.saveskill(data1);}} >Previous</button></NavLink>
        <NavLink to ={{pathname:'/Scores'}} >  <button className="button" style={{float:"right"}}  onClick={()=>{
                const data1={
                    onselecthtml:this.state.onselecthtml,
        onselectangular:this.state.onselectangular,
        onselectcss:this.state.onselectcss,
        onselectjs:this.state.onselectjs

                }
                this.props.saveskill(data1);
               const data={msg:"Skills Information Successfully saved."}
                 this.props.showsuccess(data);
                 window.setTimeout(this.hidenot,2000);}
             } >Next</button></NavLink>
        </div>
        </div>
    )
    }
}
const mapStateToProps=state=>{
    return{
        details:state
    };
    }
    const mapDispatchtoProps=dispatch=>{
        return{
            showsuccess: (data) =>dispatch({type:"showtext",data}),
            saveskill: (data) =>dispatch({type:"skill",data}),
            hidesuccess:()=>dispatch({type:"hidetext"}),
        }
    }

export default connect(mapStateToProps,mapDispatchtoProps)(skills);
