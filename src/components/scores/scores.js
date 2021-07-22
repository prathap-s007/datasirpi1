import React,{Component} from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom';


class score extends Component{
    state={
        Experience:'',
        Technology:'',
        Design:'',
        Leadership:''
    }
    hideit=()=>{
        this.props.hidefail();
        
    }
    hidenot=()=>{
        this.props.hidesuccess();
    }
    render(){
    return(
        <div >
            <div className="container font1" style={{color:"#d2d2d2"}}>
                <div className="row">
                <div className="col col-lg-4">
                    Experience
                    </div>    
                    <div className="col col=lg-8">
           
                    <input type="radio" name="exp" id="exp"  value="Beginner" onChange={(event)=>{this.setState({Experience:event.target.value})}} / >
                    <label htmlFor="exp"   value="Begin" >
                        Beginner</label> 
                    <input type="radio" name="exp" id="exp1"  value="Intermediate" onChange={(event)=>{this.setState({Experience:event.target.value})}}  /> 
                    <label htmlFor="exp1" >Intermediate</label>  
                    <input type="radio" name="exp" id="exp2" value="Excellent" onChange={(event)=>{this.setState({Experience:event.target.value})}}  /> 
                    <label htmlFor="exp2"  >Excellent</label>
                    </div>
                 </div>
                 <div className="row">
                <div className="col col-lg-4">
                    Technology Strength
                    </div> 
                    <div className="col col=lg-8">
                    <input type="radio" name="tech" id="tech1"  value="Beginner" onChange={(event)=>{this.setState({Technology:event.target.value})}}  />
                    <label htmlFor="tech1">
                         Beginner</label>
                    <input type="radio" name="tech" id="tech2" value="Intermediate" onChange={(event)=>{this.setState({Technology:event.target.value})}}  /> 
                    <label htmlFor="tech2">Intermediate</label>
                    <input type="radio" name="tech" id="tech3" value="Excellent" onChange={(event)=>{this.setState({Technology:event.target.value})}}  /> 
                    <label htmlFor="tech3">Excellent</label>
                    </div>
                 </div>
                 <div className="row">
                <div className="col col-lg-4">
                    Design Capabilities
                    </div>    
                    <div className="col col=lg-8">
                    <input type="radio" name="design" id="design1"  value="Beginner" onChange={(event)=>{this.setState({Design:event.target.value})}}  /> 
                    <label htmlFor="design1">Beginner</label>
                    <input type="radio" name="design" id="design2" value="Intermediate" onChange={(event)=>{this.setState({Design:event.target.value})}}  /> 
                    <label htmlFor="design2">Intermediate</label>
                    <input type="radio" name="design" id="design3" value="Excellent" onChange={(event)=>{this.setState({Design:event.target.value})}}  /> 
                    <label htmlFor="design3">Excellent</label>
                    </div>
                 </div>
                 <div className="row">
                <div className="col col-lg-4">
                    Leadership Ability
                    </div>    
                    <div className="col col=lg-8">
                    <input type="radio" name="leader" id="leader1"  value="Beginner" onChange={(event)=>{this.setState({Leadership:event.target.value})}}  /> 
                    <label htmlFor="leader1">Beginner</label> 
                    <input type="radio" name="leader" id="leader2" value="Intermediate" onChange={(event)=>{this.setState({Leadership:event.target.value})}}  /> 
                    <label htmlFor="leader2">Intermediate</label>
                    <input type="radio" name="leader" id="leader3" value="Excellent"  onChange={(event)=>{this.setState({Leadership:event.target.value})}} /> 
                    <label htmlFor="leader3">Excellent</label>
                    </div>
                 </div>
                 <div className="ff" style={{paddingTop:"30px"}}>
                 <NavLink to ={{pathname:'/Skills'}} >      <button className="button" style={{float:"left"}}>Previous</button></NavLink>
                 <NavLink to ={{pathname:'/Basic'}} >      <button className="button" style={{float:"right"}} onClick={()=>{
            if(this.state.Experience===''||this.state.Technology===''||this.state.Design===''||this.state.Leadership===''){
                
                const data={msg:"Scores Information are not filled completely."}
                this.props.showfail(data);
                window.setTimeout(this.hideit,2000);
                
            }else{
                const data={msg:"Scores Information Successfully saved."}
                 this.props.showsuccess(data);
                
                 window.setTimeout(this.hidenot,2000);}
             }}  >Complete</button></NavLink>
        </div>
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
            hidesuccess:()=>dispatch({type:"hidetext"}),
            showfail: (data) =>dispatch({type:"showfail",data}),
            hidefail:()=>dispatch({type:"hidefail"})
            
        }
    }

export default connect(mapStateToProps,mapDispatchtoProps)(score);