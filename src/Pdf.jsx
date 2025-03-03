import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css"
import resume from '../src/assets/Resume.pdf'

function Pdf(){
    
    const [width,setWidth] = useState(window.innerWidth);

    useEffect(() => {
       const handleSize = () =>{
         setWidth(window.innerWidth);
       }
       window.addEventListener('resize',handleSize);
      return () => {
        window.removeEventListener('resize',handleSize);
      }
    }, [])
    
    const pdfWidth = width > 900 ? 900 : width*0.9;

    return(
        <div style={{width:pdfWidth, margin: "auto", padding: "10px",backgroundColor: "var(--bg-primary)"}}>
          <Worker workerUrl={"https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js"}>
            <Viewer fileUrl={resume} style={{width:pdfWidth}}/>
          </Worker>
        </div>
    )
}
export default Pdf ;
