import React,{useState,useEffect} from 'react';
import './TestList.css';
import {Redirect,NavLink} from 'react-router-dom';
import { ITest } from '../../../redux/interface';

export interface ITestList{
  testlist:any[]
  idTest:number
  isAuth:boolean
  getTestsListForEdit():void
  deleteTest(id:number):void
  addTest():void
}

const TestsList:React.FC<ITestList>=({testlist,idTest,isAuth,getTestsListForEdit,deleteTest,addTest})=>{
  let [edit,setEdit]=useState(false)

  useEffect(()=>{getTestsListForEdit();},[testlist])
  useEffect(()=>{ if (idTest>-1) setEdit(true)},[idTest])

  const del=(e:any,id:number)=>{
     e.preventDefault();
     deleteTest(id)
  }
    if (edit) return <Redirect to={"/testedit/"+idTest}/>
    return <div className="testlist">
    <div className="addButton" onClick={addTest}> + Создать тест</div>
     {testlist&&testlist.map( (l:ITest,key:number)=>{
        return (isAuth?<NavLink to={"/testedit/"+l.id} key={key}><div className={!l.published?"testsitem":"testsitem published"} >
                       <div className="idtest">{l.id}</div>
                       <div  className="name">{l.testname}</div>
                       <div>{l.published&&"Опубликован"}</div>
                       <div className="deleteButton" onClick={(e)=>{del(e,l.id)}}>Удалить</div>
               </div></NavLink>:<></>)
      }
    )}</div>
}

export default TestsList
