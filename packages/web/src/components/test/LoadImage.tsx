import React,{ useState, FC, CSSProperties}  from 'react';
import './testslist.css'
import {GLOBAL_PATH_API} from '../../Global'

type TLoadImage={
  img:string
  id:string
  onDel?:any
  onLoad?:any
  height:string
  width:string
  zoom:string
  alter?:boolean
}

const LoadImage:FC<TLoadImage>=({img,id,onDel,onLoad,height,width,zoom,alter})=>{
  const [showBig, setShowBig] = useState(false);
  const imgStyle:CSSProperties={
    maxWidth:`${width}`,
    maxHeight: `${height}`,
    height: "auto",
    width: "auto"
  }
  let forId:any="img"+id
  return <div className={"pic"}>
      {img&&<img alt="" style={imgStyle}
        src={GLOBAL_PATH_API+'/'+img}
        onClick={()=>{setShowBig(true)}}/>}
        {alter&&!img&&<img alt="" style={imgStyle}
          src={GLOBAL_PATH_API+"/images/system/unnamed.jpg"}
          onClick={()=>{setShowBig(true)}}/>}
      {!img&&onLoad&&<div>
                     <input className="inputfile" type="file" name="image" id={forId} onChange={onLoad}/>
                     {/*
                     // @ts-ignore */}
                     <label for={forId}>Выберите файл </label></div>}
      {img&&onDel&&<button onClick={onDel}>Удалить фото</button>}
      {zoom&&<ShowBigImage img={img} show={showBig} close={()=>{setShowBig(false)}} />}
  </div>
}

type TShowBigImage={
  img:string
  show:boolean
  close:()=>void
}

const ShowBigImage:FC<TShowBigImage>=({img,show,close})=>{
  if (show) {
  return <div className="ShowBigImageBox" >
    <div className="BlockLayer" onClick={close}/>
    <div className="ShowBigImage">
        <div onClick={close}><img alt="" src={GLOBAL_PATH_API+'/'+img}/></div>
    </div>
  </div>
  }
return <></>
}

export default LoadImage;
