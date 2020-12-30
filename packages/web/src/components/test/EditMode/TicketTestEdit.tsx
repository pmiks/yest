import React, { FC } from 'react';
import '../testslist.css';
import { useState } from 'react';
import { ITicket, IQuestion } from '../../../redux/interface';

type TTicketsEdit={
  currentQuestion:IQuestion
  ticketlist:Array<ITicket>
  addQuestionToTicket:(add:boolean,idTik:number)=>void
  deleteTicket:(id:number)=>void
  editTicket:(id:number,name:string)=>void
  goToQuest:(id:number)=>void
}

const TicketsEdit:FC<TTicketsEdit>=({currentQuestion,ticketlist,addQuestionToTicket,deleteTicket,editTicket,goToQuest})=>{
  return <div><div className="TicketsEdit">
      {currentQuestion&&ticketlist&&ticketlist.map(tl=>{
        let checkedT=tl.questions.some(t=>t==currentQuestion.id);
        return !tl.deleted&&<div className="TicketItem"><div className="TicketItem1">
              <div><input onChange={(e)=>addQuestionToTicket(e.target.checked,tl.id)} type="checkbox" checked={checkedT}/></div>
              <div><TicketsEditName onClick={tl.questions?()=>{goToQuest(tl.questions[0])}:()=>{}} newt={Boolean(tl.added)} value={tl.ticketname} edit={(e:any)=>{editTicket(tl.id,e.currentTarget.value)}}/></div>
              <div>{tl.questions.length}</div>
              <div className="right"><button onClick={()=>{deleteTicket(tl.id)}}>&#215;</button></div>
            </div>
            {checkedT&&<div className="TicketItemQuest">{tl.questions.map((x:number)=>{return <div><button onClick={()=>{goToQuest(x)}}>{x}</button></div>})}</div>}
            </div>})}
          </div>
{/*  <button onClick={props.addTicket}>Добавить билет</button>
  <button onClick={()=>{props.saveTickets(props.currentTest)}}>Cохранить билеты</button>*/}
  </div>
}

type TTicketsEditName={
  value:string
  edit:(e:any)=>void
  newt:boolean
  onClick:()=>void
}

const TicketsEditName:FC<TTicketsEditName>=({value,edit,newt,onClick})=>{
  let [editMode,setEditMode]=useState(newt);
  // let changeMode=()=>{
  //   if (editMode) setEditMode(false);
  //         else setEditMode(true);
  // }
  return  <>
        {!editMode?<label onClick={onClick} onDoubleClick={()=>{setEditMode(true)}}>{value?value:"_________________"}</label>:
        <input autoFocus={true} onChange={edit} onBlur={()=>{setEditMode(false)}} type="text" value={value}/>}
        {/*<button onClick={changeMode}>&#9998;</button>*/}
        </>
}

export default TicketsEdit;
