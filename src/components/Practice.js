import React,{createRef} from 'react'
import {useNavigate} from "react-router-dom"
import {Pdf, ReactToPdf} from "react-to-pdf" 
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import './Practice.css'

function Practice() {
  const navigate = useNavigate();
  const ref = React.createRef();
  const stringifiedInfo = localStorage.getItem('info');
  const infoAsObjectAgain = JSON.parse(stringifiedInfo);
  const refreshPage=()=>{
      window.location.reload();
  };
  const download=()=>{
  //   html2canvas(document.body).then((canvas) =>{ //not needed extra copy in pages
  //     document.body.appendChild(canvas)
  //  });
   const input = document.getElementById('divIdToPrint');
  html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("download.pdf");  
    });
  }

  return (
    <div>
      <div>  
      {/* <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
      </ReactToPdf> */}
        <div id='divIdToPrint'> 
            <ul> 
                 <li>{infoAsObjectAgain.name}</li>
                 <li>{infoAsObjectAgain.email}</li>
                 <li>{infoAsObjectAgain.address}</li>
                 <li>{infoAsObjectAgain.phone}</li>
                 <hr/>
                 <h2>EDUCATION</h2>
                 <li>{infoAsObjectAgain.education1}</li>
                 <li>{infoAsObjectAgain.education1info}</li>
                 <li>{infoAsObjectAgain.education2}</li>
                 <li>{infoAsObjectAgain.education2info}</li>
                 <hr/>
                 <h2>SKILLS</h2>
                 <li>{infoAsObjectAgain.skills}</li>
                 <hr/>
                 <h2>EXPERIENCE</h2>
                 <li>{infoAsObjectAgain.experience1}</li>
                 <li>{infoAsObjectAgain.experience1info}</li>
                 <li>{infoAsObjectAgain.experience2}</li>
                 <li>{infoAsObjectAgain.experience2info}</li>
                 <hr/>
                 <h2>PROJECTS</h2>
                 <li>{infoAsObjectAgain.projects1}</li>
                 <li>{infoAsObjectAgain.projects1info}</li>
                 <li>{infoAsObjectAgain.projects2}</li>
                 <li>{infoAsObjectAgain.projects2info}</li>
                 <hr/>
                 <h2>OTHERS</h2>
                 <li>{infoAsObjectAgain.others}</li>
            </ul>
        </div>
        
        
      </div>

      <button onClick={()=>navigate(-1)}>Go Back Home</button>   
      <button onClick={refreshPage}>Build New</button>
      <button onClick={download}>Download</button>
        
    </div>
  )
}

export default Practice
