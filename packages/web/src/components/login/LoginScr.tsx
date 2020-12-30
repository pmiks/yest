import React, { FC, CSSProperties } from 'react';
import {NavLink} from 'react-router-dom';
import './LoginScr.css';
import {connect} from 'react-redux'
import {logoutTC} from '../../redux/reducerAuthVK';

import logovk from '../../assets/images/iconsn/is_vk_124.png'
import logofb from '../../assets/images/iconsn/is_fb_124.png'
import logogoogle from '../../assets/images/iconsn/is_google_124.png'
import { TypeMe } from '../../redux/interface';
import { AppStateType } from '../../redux/redux-store';

type TLoginScr =  {
  me:TypeMe
  logout:()=>void
}
const LoginScr:FC<TLoginScr> =  ({me,logout}) =>  {
    const imgStyle:CSSProperties={
      maxHeight:'35px'
    }
      return <div className="Login">
        {me.isAuth&&
          <div className="btn">
          <NavLink to={"/personalarea/mytestresult"}>
          <div><div >{/*me.last_name*/} {me.first_name}</div><div><img alt={""} src={String(me.photo)}/></div></div>
          </NavLink>
        </div>}

        {!me.isAuth&&<div className="authchoise">
        <a href="https://oauth.vk.com/authorize?client_id=7444329&display=page&redirect_uri=http://api.yes-t.net/auth/vk.php&response_type=code&v=5.52"><div>
          <img alt={""} style={imgStyle} src={logovk}/></div></a>
          <div><img alt={""} style={imgStyle} src={logofb}/></div>
          <div><img alt={""} style={imgStyle} src={logogoogle}/></div>
          </div>}

       {me.isAuth&&<div  className="btn" onClick={logout}>Выход</div>}
      </div>
}

const mapStateToProps=(state:AppStateType)=>{
    return{
      me:state.me
    }
  };


export default connect( mapStateToProps,
     {
       logout:logoutTC
     }
   )(LoginScr)
