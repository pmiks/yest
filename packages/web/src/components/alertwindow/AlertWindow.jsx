import React from 'react';
import '../test/testslist.css';


const AlertWindow=({showWindow,showAlertWindow,error,message})=>{
    if(showWindow){
    return  <div> <div className="BlockLayer" onClick={()=>{showAlertWindow(false)}}/>
      <div className={"AlertWindow "+(error?"error":"")} onClick={()=>{showAlertWindow(false)}}>
      <div className="clousebutton"><button onClick={()=>{showAlertWindow(false)}}>	&#215;</button></div>
      <div> {message} </div>
      </div>
  </div>}
  return <></>
}

export default AlertWindow
