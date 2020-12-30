import React,{useEffect, FC, CSSProperties} from 'react';
import './mainpage.css';
//import ym1 from './rcyandex';
//import LoadImage from './LoadImage';
import {NavLink} from "react-router-dom";
import {GLOBAL_PATH_API,GLOBAL_PATH_SITE} from '../../Global'
import Share from '../share/share';
import noImg from '../../assets/images/noimg_yes.png'
import { ITest } from '../../redux/interface';
import {PlayerMp3} from '../../common/audio';
import { Helmet } from 'react-helmet';
import Aphorism from "../aphorisms/aphorism_container";

type TTestsList={
  testslist:Array<ITest>
  getTestsList:()=>void
}

const TestsList:FC<TTestsList>=({testslist,getTestsList})=>{
// const changeOG=()=>{
// }

  useEffect(() => {
    getTestsList();
    PlayerMp3.clear();
    //PlayerMp3.pause()
  },[]);

//  const frame4=()=>{return {__html:'<iframe align="absmiddle" frameborder="no" scrolling="no"  width="100%" height="100%" sandbox="allow-popups allow-same-origin allow-top-navigation allow-forms allow-scripts" src="https://yes-t.net/yr/rtb_4.html"></iframe>'}}
  const frame100p_90=()=>{return {__html:'<iframe frameborder="no" hspace="0" vspace="0" marginheight="0" marginwidth="0" scrolling="no"  width="100%" height="100%" sandbox="allow-same-origin allow-top-navigation allow-forms allow-scripts allow-popups" src="https://yes-t.net/yr/rtb_5.html"></iframe>'}}

  // const imgStyle:CSSProperties={
  //   // maxWidth:`${width}`,
  //   // maxHeight: `${height}`,
  //   // height: "auto",
  //   // width: "auto",
  //   //backgroundImage:`url(${l.coverimg?GLOBAL_PATH_API+'/'+l.coverimg:noimg})`
  // }

  let rcyn=Math.floor(Math.random() * Math.floor(testslist.length));
  return <><div className="TestList">
      <Helmet>
           <meta property="og:title" content={"Заголовок"} />
           {/*<meta name="og:image:secure_url" content={GLOBAL_PATH_API+'/'+img} />*/}
           <meta property="og:discription" content={"Описание"} />
           <meta property="og:url" content={GLOBAL_PATH_SITE} />
           <meta property="og:site_name" content={GLOBAL_PATH_SITE} />
           <meta property="og:image:height" content={"256"} />
           <meta property="og:locale" content={"ru_RU"} />
           <meta property="og:type" content={"article"} />
      </Helmet>

  {testslist&&testslist.map(
   (l:ITest,i:number)=>{/*if (props.editMode||l.published)*/
      return  <><div className={!l.published?"TestItem unpublished":"TestItem published"} key={i}>
              <NavLink className="NavLink" to={"test/"+l.id} >
                    {/* <div className="cover"><img className="coverimg" src={(l.coverimg?GLOBAL_PATH_API+'/'+l.coverimg:noimg)} /></div>*/}
                    {/*<div className="cover" style={{"background":`url(${l.coverimg?GLOBAL_PATH_API+'/'+l.coverimg:noimg})`, "backgroundSize": 'auto 25vw',  "backgroundPosition": 'center'}}></div>*/}
                    <div style={{"backgroundImage":`url(${l.coverimg?GLOBAL_PATH_API+'/'+l.coverimg:noImg})`}} className={"cover "}/>
                     <label>{l.testname}</label>
               </NavLink>
                     <div className="share"><Share url={GLOBAL_PATH_SITE+'/test/'+l.id} title={l.testname} img={l.coverimg} discription={l.discription?l.discription:""} size="30px"/></div>
               </div>
               {/*(i==rcyn)&&<div className="RekItem" dangerouslySetInnerHTML={frame4()}></div>*/}
               {(i==rcyn)&&<div className="TestItem published"><Aphorism/></div>}
              </>
    }
  )}
  </div>
  <div className="rekFieldMain" dangerouslySetInnerHTML={frame100p_90()}/>
  </>
}
export default TestsList
