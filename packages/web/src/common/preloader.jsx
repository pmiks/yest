import React from 'react';
import preloader from '../assets/images/preloader.gif'

let Preloader=()=>{
  return <div style={{backgroundColor:'white'}}><img alt={"Загрузка данных"} src={preloader}/> </div>
}

export default Preloader;
