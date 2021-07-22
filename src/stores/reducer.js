
const initialstate={
    showsuccess:false,
    showfailure:false,
    msg:'',
    candidatename:'',
    Panalistname:'',
    date:null,
    onselecthtml:false,
        onselectangular:false,
        onselectcss:false,
        onselectjs:false,
        imagePreviewUrl:''
}


const reducer=(state=initialstate,action)=>{
    switch(action.type)
    {
        case "showtext":
            {
                
            return{
                ...state,
                showsuccess:true,
                msg:action.data.msg
                
            }
            
            }
            case "hidetext":
                {
                    // console.log(this.props)
                return{
                    ...state,
                    showsuccess:false,
                    msg:'',
                }
                
                }    
                case "showfail":
                    {
                        
                    return{
                        ...state,
                        showfailure:true,
                        msg:action.data.msg
                        
                    }
                    
                    }
                    case "hidefail":
                        {
                            // console.log(this.props)
                        return{
                            ...state,
                            showfailure:false,
                            msg:'',
                        }
                        
                        }    
                
                case "basic":{
                    return{
                        ...state,
                        candidatename:action.data.candidatename,
                        Panalistname:action.data.Panalistname,
                        date:action.data.date,
                        imagePreviewUrl:action.data.imagePreviewUrl
                    }
                }
                case "skill":{
                    return{
                        ...state,
                        onselecthtml:action.data.onselecthtml,
                        onselectangular:action.data.onselectangular,
                        onselectcss:action.data.onselectcss,
                        onselectjs:action.data.onselectjs
                    }
                }
       
        default:{
            return{
                ...state
            }}
            
    }
    
}
export default reducer;