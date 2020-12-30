import React, { FC, useState } from "react"
import "./helptools.css"
import { compose } from "redux"
import { connect } from "react-redux"
import {h_FiftyFifty_AC,h_Wrong_AC,h_PhoneCall_AC,h_Replace_AC} from "../../redux/reducerTests"
import {PlayerMp3} from '../../common/audio';

type THelpTools={
    h_FiftyFifty:()=>void
    h_Replace:()=>void
    h_PhoneCall:()=>void
    h_Wrong:()=>void
    h_Money?:()=>void
}

const HelpTools:FC<THelpTools>=({h_FiftyFifty,h_Wrong,h_PhoneCall,h_Replace})=>{
    let [b5050,disB5050]=useState(false)
    let [bReplace,disBReplace]=useState(false)
    let [bPhoneCall,disBPhoneCall]=useState(false)
    let [bWrong,disBWrong]=useState(false)
    let [bMoney,disBMoney]=useState(false)

    const b1=()=>{
      if (!b5050) {PlayerMp3.helpEvent("5050");h_FiftyFifty();disB5050(true)}
    }
    const b2=()=>{
      if (!bWrong) {PlayerMp3.helpEvent("wrong");h_Wrong();disBWrong(true)}
    }
    const b3=()=>{
      if (!bPhoneCall) {PlayerMp3.helpEvent("phone");disBPhoneCall(true);setTimeout(h_PhoneCall, 1000);}
    }
    const b4=()=>{
      if (!bReplace) {PlayerMp3.helpEvent("replace");h_Replace();disBReplace(true)}
    }
    const bmoney=()=>{
      if (!bMoney) {PlayerMp3.helpEvent("money");disBMoney(true)}
    }

    return <div className="HelpTools">
      <div className={bMoney?"btnMoney disabled":"btnMoney"} onClick={()=>{bmoney()}} data-title="Забрать деньги" title="Забрать деньги"/>
      <div className={b5050?"btn5050 disabled":"btn5050"} onClick={()=>{b1()}} data-title="Убрать два неверных ответа"/>
      <div className={bReplace?"btnreplace disabled":"btnreplace"} onClick={()=>{b4()}} data-title="Замена вопроса"/>
      <div className={bPhoneCall?"btnphonecall disabled":"btnphonecall"} onClick={()=>{b3()}} data-title="Звонок другу"/>
      <div className={bWrong?"btnwrong disabled":"btnwrong"} onClick={()=>{b2()}} data-title="Право на ошибку"/>
     </div>
}

let mapStateToProps=()=>{
      return{
      }
}

export default compose(
    connect(mapStateToProps,{
      h_FiftyFifty:h_FiftyFifty_AC,
      h_Wrong:h_Wrong_AC,
      h_PhoneCall:h_PhoneCall_AC,
      h_Replace:h_Replace_AC,
    }),
  )
  (HelpTools);
