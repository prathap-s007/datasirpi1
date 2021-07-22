import React,{Component} from 'react';
import dp from '../../assets/dp.jpg';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
class basic extends Component{

    state={
        hastext:false,
        candidatename:'',
        hastext1:false,
        Panalistname:'',
        hastext2:false,
        date:'',
        showText:false,
        showText1:false,
        showText2:false,
        imagePreviewUrl:'',
        selectedFile:'',
        show:false
    }

    componentDidMount=()=>{
        
        
         this.setState({imagePreviewUrl:dp,
            candidatename:this.props.details.candidatename,
        Panalistname:this.props.details.Panalistname,
        date:this.props.details.date
    })
            if(!(this.props.details.candidatename===''))
                this.setState({hastext:true})
            
            if(!(this.props.details.Panalistname===''))
              this.setState({hastext1:true})
            
              if(!(this.props.details.date===''))
              this.setState({hastext2:true})
              if(!(this.props.details.imagePreviewUrl===''))
              this.setState({imagePreviewUrl:this.props.details.imagePreviewUrl})
        
    }

    onChangeCandidateName=(event )=>{
            if(event.target.value===''){
                
                this.setState({
                    hastext:false,
                    candidatename:event.target.value
                })
            }
            else{
                this.setState({
                    hastext:true,
                    candidatename:event.target.value
                })
            }
    }
    onChangePanalistName=(event )=>{
        if(event.target.value===''){
            
            this.setState({
                hastext1:false,
                Panalistname:event.target.value
            })
        }
        else{
            this.setState({
                hastext1:true,
                Panalistname:event.target.value
            })
        }
}
onChangedate=(event )=>{
    if(event.target.value===''){
        
        this.setState({
            hastext2:false,
            date:event.target.value
        })
    }
    else{
        this.setState({
            hastext2:true,
            date:event.target.value
        })
    }
}
hideit=()=>{
    this.props.hidefail();
}
hidenot=()=>{
    this.props.hidesuccess();
}
onFileChange = event => {
    
    const file=event.target.files[0];
    if(event.target.files[0].type==="image/png"|| event.target.files[0].type==="image/jpeg" || event.target.files[0].type==="image/jpg" )
  {
    let reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = () => {
    
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });}    
  }
  else{
    const data={
        msg:"Please provide only image file"
    }
    this.props.showfail(data);
    window.setTimeout(this.hideit,2000);
  }
  };

    render(){
    return(
        <div className="container">
            
        <div className="row ">
            <div className="col col-9" >
                <div className="field">
                <input type="text" name="candidate_name" id="candidate_name" value={this.state.candidatename} className="textbox" onChange={this.onChangeCandidateName} onBlur={(event)=>{
                    if(event.target.value===''){
                        
                        this.setState({showText:true})
                    }else{
                        
                        this.setState({showText:false})
                    }
                }} ></input>
                <label htmlFor="candidate_name" className={ this.state.hastext ? "label2" :"label1"}  > Candiate name</label>
                {this.state.showText ? <p style={{fontSize:"15px",color:"red", bottom:"20px",position:"relative"}}>&#9888;Please enter the Candidate Name</p>:null}
            </div>
            <div className="field">
                <input type="text" name="Penalist_name" id="Penalist_name"  className="textbox" onChange={this.onChangePanalistName} value={this.state.Panalistname} onBlur={(event)=>{
                    if(event.target.value===''){
                        
                        this.setState({showText1:true})
                    }else{
                        
                        this.setState({showText1:false})
                    }
                }}  ></input>
                <label htmlFor="Penalist_name" className={ this.state.hastext1 ? "label2" :"label1"} > Penalist name</label>
                {this.state.showText1 ? <p style={{fontSize:"15px",color:"red", bottom:"20px",position:"relative"}}>&#9888; Please enter the Panelist Name</p>:null}
            </div>
            <div className="field">
                <input type="date" name="doj" id="doj"  className="textbox" onChange={this.onChangedate} placeholder="" value={this.state.date} onBlur={(event)=>{
                    if(event.target.value===''){
                        
                        this.setState({showText2:true})
                    }else{
                        
                        this.setState({showText2:false})
                    }
                }} ></input>
                <label htmlFor="Date of Interview" className={ this.state.hastext2 ? "label2" :"label1"} > Date of Interview</label>
                {this.state.showText2 ? <p style={{fontSize:"15px",color:"red", bottom:"20px",position:"relative"}}>&#9888; Please enter the Date of Interview</p>:null}
            </div>
            </div>
            <div className="col col-3" >
            <label htmlFor="upload" className="pp"><img alt="" src={this.state.imagePreviewUrl} className="profileimage"></img></label>  
                                <input onChange={this.onFileChange} type="file" id="upload" style={{display:"none"}}></input>
                                <br></br>
                                <label htmlFor="Date of Interview" className="photo"> Candidate Photo</label>
            
            </div>
        </div>
        <div className="ff" style={{paddingTop:"30px"}}>
        
        <NavLink to ={{pathname:'/Skills'}} >    <button className="button" style={{float:"right"}} onClick={()=>{
            if(this.state.candidatename===''||this.state.Panalistname===''||this.state.date===null){
                
                const data={msg:"Basic Information are not filled completely."}
                this.props.showfail(data);
                window.setTimeout(this.hideit,2000);
                const data1={
                    candidatename:this.state.candidatename,
                    Panalistname:this.state.Panalistname,
                    date:this.state.date,
                    imagePreviewUrl:this.state.imagePreviewUrl
                }
                this.props.savebasic(data1);
            }else{
                const data={msg:"Basic Information Successfully saved."}
                 this.props.showsuccess(data);
                 window.setTimeout(this.hidenot,2000);}
             }}  >Next</button></NavLink>
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
            hidefail:()=>dispatch({type:"hidefail"}),
            savebasic:(data)=>dispatch({type:"basic",data})
            
        }
    }

export default connect(mapStateToProps,mapDispatchtoProps)(basic);