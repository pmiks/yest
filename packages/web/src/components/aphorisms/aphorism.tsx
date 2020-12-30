import React, { FC } from 'react';
//import './QuestionItem.css';
//import LoadImage from './LoadImage';
import {GLOBAL_PATH_API} from '../../Global'
import {IAphorism} from '../../redux/interface'
import {getAphorism_TC} from "../../redux/reducerAphorism";

 type TAphorismBlock={
     aphorism:IAphorism[]
     getAphorism:()=>void
 }

const AphorismBlock:FC<TAphorismBlock>=({aphorism,getAphorism})=>{
    return <div onClick={getAphorism}><div dangerouslySetInnerHTML={{__html:aphorism[0]?.text}}/> <div>{aphorism[0]?.author} </div></div>;
}

export default AphorismBlock;