import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
  Navigate,
} from "react-router-dom";
import Practice from './components/Practice';
import FormComponent from './FormComponent';

function App() {
  return (
    <>
    {/* <FormComponent/> */} 
      <Router>
        <Routes>
          <Route exact path="/" element={<FormComponent/>}/>
          <Route exact path="/practice" element={<Practice/>}/> 
        </Routes>   
      </Router> 
    </>
  );
}

export default App;
