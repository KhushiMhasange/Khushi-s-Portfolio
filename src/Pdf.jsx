import React, { useState, useEffect } from 'react';
import {pdfjs, Document, Page} from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


function Pdf(){
    const resume = '/Resume.pdf';
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
      ).toString()
    
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
    
    const maxWidth = 900;
    const pdfWidth = width > maxWidth ? maxWidth : width * 0.9;

    return(
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Document file={resume} >
        <Page pageNumber={1} width={pdfWidth}></Page>
        </Document>
        </div>
    )
}
export default Pdf ;