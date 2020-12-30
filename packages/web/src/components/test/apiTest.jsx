import React  from 'react'
import Test from './Test';
import {GLOBAL_PATH_API,GLOBAL_PATH_SITE} from '../../Global'
import './apiTest.css'

export const ApiTest=()=>{
  return <>
  <a href={GLOBAL_PATH_SITE} target="_blank" className="logoYEST">
       <div className="logoYESTh1">Больше тестов на </div>
       <div className="logoYESTh2">https://yes-t.net</div>
       <img alt={""} className="logoYESTimg" src={GLOBAL_PATH_API+"/images/system/icon/yes_128s.jpg"}/>
       </a>
  <Test/>
  </>
}
