import React,{useEffect, FC, useState} from 'react';
import './AllTestResult.css';
import { IResult } from '../../../redux/interface';

type TAllTestResult={
  atr:Array<IResult>
  getAllTestResult:()=>void
  deleteUserResult:(session:string)=>void
}

const AllTestResult:FC<TAllTestResult>=({atr,getAllTestResult,deleteUserResult})=>{
    useEffect(() => {
            getAllTestResult();
    },[]);

    const del=(e:any,session:string)=>{
       e.preventDefault();
       deleteUserResult(session)
    }

    let datec=(date:string)=>{ // date в формате дд.мм.гггг
        return (new Date(date)).getTime();
    }

    let [testDateFId,setTestDateFId]=useState("")
    let [testNameFId,setTestNameFId]=useState("")
    let [testUserFId,setTestUserFId]=useState("*")

    let UserF:Array<String>=[], NameF:Array<String>=[],DateF:Array<String>=[]

    atr&&atr.forEach((tr:any)=>{
         if (tr.first_name===null||tr.first_name==="") tr.first_name="-"
         if (DateF.indexOf(tr.datetimeend.substr(0, 10))===-1) {
           DateF.push(tr.datetimeend.substr(0, 10));
         }
         if (NameF.indexOf(tr.testname)===-1) {
           NameF.push(tr.testname);
         }
         if (UserF.indexOf(tr.first_name)===-1) {
           UserF.push(tr.first_name);
         }
    })

    DateF.sort(); NameF.sort(); UserF.sort()

    let testDateF=DateF.map((tr:any)=>{return <option value={tr} selected={tr===testDateFId}>{tr}</option>})
    let testNameF=NameF.map((tr:any)=>{return <option value={tr} selected={tr===testNameFId}>{tr}</option>})
    let testUserF=UserF.map((tr:any)=>{return <option value={tr} selected={tr===testUserFId}>{tr}</option>})

    testNameF.unshift(<option value={""} selected={true}>{""}</option>)
    testDateF.unshift(<option value={""} selected={true}>{""}</option>)
    testUserF.unshift(<option value={"*"} selected={true}>{"Все"}</option>)

    let testCounter=0
    let alltestresultlist=atr&&atr.map((tr:any)=>{
        let timetest=(new Date(datec(tr.datetimeend)-datec(tr.datetimestart)));
        if ((testNameFId===""||tr.testname===testNameFId)&&
            (testDateFId===""||tr.datetimeend.substr(0, 10)===testDateFId)&&
            (testUserFId==="*"||tr.first_name===testUserFId)){
        testCounter++
        return <a href={"/testresult/"+tr.session}  target="_blank"
             className={tr.finished<1?"notfinished allresultlistitem":"allresultlistitem"}>
            <div>{tr.testname}    </div>
            <div>{tr.datetimeend} </div>
            <div>{timetest.getMinutes()} мин. {timetest.getSeconds()} сек.</div>
            <div>{tr.questcol}</div>
            <div>{tr.win}</div>
            <div>{tr.totalscore}</div>
            <div>{tr.first_name} {tr.last_name}</div>
            <div>{tr.finished<1?"Прерван":"Закончен"}</div>
            <div><button onClick={(e)=>{del(e,tr.session)}}>Удалить</button></div>
        </a>}
     });
    return <div> <div className="allresultlist">Результаты ваших тестов (Отобранно {testCounter})
       <div  className={"allresultlistitem"}>
         <div>Тест:
            <div><select style={{"width":"auto"}} id="testNameF" onChange={(e)=>{setTestNameFId(e.target.value)}}> {testNameF} </select></div>
         </div>
         <div>Закончено
            <div><select style={{"width":"auto"}} id="testDateF" onChange={(e)=>{setTestDateFId(e.target.value)}}> {testDateF} </select></div>
         </div>
         <div>Потрачено время</div>
         <div>Вопросов всего</div>
         <div>Правильных ответов</div>
         <div>Набранных баллов</div>
         <div>Пользователь
            <div><select style={{"width":"auto"}} id="testUserF" onChange={(e)=>{setTestUserFId(e.target.value)}}> {testUserF} </select></div>
         </div>
         <div>Прерван/Закончен</div>
       </div>
       {alltestresultlist}
      </div>
     </div>
    }

export default AllTestResult;
