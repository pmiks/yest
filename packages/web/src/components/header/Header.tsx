import React, { FC, useState } from 'react';
import {NavLink} from 'react-router-dom';
import VolumeSettings from '../../common/archiv/VolumeSettings';
import './Header.css';
//import Avatar from '../../common/avatar';
import LoginScr from '../login/LoginScr';
import logo from '../../assets/images/Yes_i_64.png'
import { TypeMe } from '../../redux/interface';

type THeader={
  me:TypeMe
  getTestsList:(str:string)=>void
}

const Header:FC<THeader> = ({getTestsList}) =>{
  let [value,setValue]=useState("")
  return <div className="Header line">
       <div className="logo"><div><NavLink to={"/"}><img src={logo} alt="logo" height="40px"/></NavLink></div><div className="NAME">#лучшедома</div></div>
       <div><input value={value} onFocus={()=>{setValue("")}} onChange={(e)=>{setValue(e.target.value);getTestsList(e.target.value)}} style={{"width":"10em"}} type="text" placeholder="&#128269; Поиск"/></div>
       <div><VolumeSettings/></div>
       <LoginScr/>
   </div>
}

export default Header;
