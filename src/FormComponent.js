import React,{useState} from 'react'
import { useNavigate ,Link, Outlet} from 'react-router-dom';
import Practice from './components/Practice';
import './FormComponent.css'

const initialValues={
  name:"",
  email:"",
  address:"",
  phone:"", 
  education1:"",
  education1info:"",
  education2:"",
  education2info:"",
  skills:"",
  experience1:"",
  experience1info:"",
  experience2:"",
  experience2info:"",
  projects1:"",
  projects1info:"",
  projects2:"",
  projects2info:"",
  others:"",
}

function FormComponent() {
  const[values,setValues]=useState(initialValues)
  const[visible,setVisible]=useState(true)
  // const navigate=useNavigate()
const handleChange=(e)=>{
  setValues({
    ...values,
     [e.target.name]:e.target.value
  });
};
const handleSubmit=()=>{
   localStorage.setItem('info', JSON.stringify(values));
}

  return (
    <div className='form-container'>
      <h1>ENTER YOUR DETAILS HERE TO GET RESUME FOR FREE</h1>
      <div  className='form'>
      <form onSubmit={(e)=>e.prevent.default} >
        <label> Enter your name: </label> <br/>
           <input  name="name" value={values.name} placeholder="Enter name"  onChange={handleChange} />
        <br/>

        <label> Enter your email:  </label> <br/>      
          <input name="email" value={values.email} placeholder="Enter email" onChange={handleChange} />
        <br/>

        <label>Enter Address:  </label> <br/>
           <input name="address" value={values.address} placeholder="Enter address" onChange={handleChange}  />
        <br/>

        <label> Enter Phone Number: </label> <br/>
           <input name="phone" value={values.phone} placeholder="Enter phone no." onChange={handleChange} />     
        <br/>

        <label> Education Details 1: </label> <br/>
           <input name="education1" value={values.education1} placeholder="Enter education details" onChange={handleChange} />
        <br/>
           <input name="education1info" value={values.education1info} placeholder=""  onChange={handleChange}  />
        <br/>

        <label> Education Details 2: </label> <br/>
           <input name="education2" value={values.education2} placeholder="Enter education details" onChange={handleChange} />
        <br/>
           <input name="education2info" value={values.education2info} placeholder="" onChange={handleChange} />
        <br/>

        <label> Enter Skills:</label> <br/>
           <input name="skills" value={values.skills} placeholder="Skills" onChange={handleChange} />
        <br/>

        <label> Experience 1: </label> <br/>
           <input  name="experience1" value={values.experience1} placeholder="Enter Experience" onChange={handleChange}  />
        <br/>
           <input  name="experience1info" value={values.experience1info} onChange={handleChange}  />
        <br/>

        <label> Experience 2: </label> <br/>
           <input  name="experience2" value={values.experience2} placeholder="Enter Experience" onChange={handleChange}  />
        <br/>
           <input  name="experience2info" value={values.experience2info} onChange={handleChange}  />
        <br/>

        <label> Projects 1: </label> <br/>
           <input name="projects1" value={values.projects1} placeholder="Enter your Projects" onChange={handleChange}  />
        <br/>
           <input name="projects1info" value={values.projects1info} onChange={handleChange}  />
        <br/>

        <label> Projects 2: </label> <br/>
           <input name="projects2" value={values.projects2} placeholder="Enter your Projects" onChange={handleChange}  />
        <br/>
           <input name="projects2info" value={values.projects2info} onChange={handleChange}  />
        <br/>

        <label> Other Information: </label> <br/>
           <input name="others" value={values.others} onChange={handleChange}  />
        <br/>
        {/* <div className='practice'><Practice props={values}/></div> */}
        <Link to='/practice'>
           <button type='submit' onClick={handleSubmit}>Submit</button>
        </Link>  
      </form>    
    </div>    
   </div>
    
  )
}

export default FormComponent