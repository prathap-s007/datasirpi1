import './App.css';
import Main from '../src/components/main/main'
import {Redirect} from 'react-router-dom';
function App() {
  return (
    <div style={{backgroundColor:"#eefaea"}}> 
      <Redirect to="/Basic"></Redirect>
    <Main/>
    </div>
  );
}

export default App;
