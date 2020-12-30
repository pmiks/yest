import React,{FC} from 'react';
import './TestResultEdit.css';
import { IResult } from '../../../redux/interface';
import { ITestResult } from './TestResultEditContainer';

const TestResult:FC<ITestResult>=({result,setResultItem,addResultItem,deleteResultItem,typeid})=>{
  return <div className="testresult">Результаты теста
   <div className="testresultitem header">
   <div>{(typeid ===1)&&"Мin. баллы"} </div>
   <div>{(typeid ===1)&&"Мax. баллы"}</div>
   <div>{(typeid ===0)&&"Мin. %"}</div>
   <div>{(typeid ===0)&&"Мax. %"}</div>
   <div>Текст результата</div>
   <div>{(typeid ===0)&&"Тест пройден"}</div>
   </div>
    {result&&result.map((r:IResult)=>{
      if (r.deleted) return <></>
      return <div className="testresultitem">
        <div>{(typeid ===1)&&<input onChange={(e)=>{setResultItem({...r,scorestart:parseInt(e.currentTarget.value,10)})}} style={{"width":"3em"}} value={r.scorestart}/>}</div>
        <div>{(typeid ===1)&&<input onChange={(e)=>{setResultItem({...r,scoreend:parseInt(e.currentTarget.value,10)})}} style={{"width":"3em"}} value={r.scoreend}/>}</div>
        <div>{(typeid ===0)&&<input onChange={(e)=>{setResultItem({...r,startpercent:parseInt(e.currentTarget.value,10)})}} style={{"width":"3em"}} value={r.startpercent}/>}</div>
        <div>{(typeid ===0)&&<input onChange={(e)=>{setResultItem({...r,endpercent:parseInt(e.currentTarget.value,10)})}} style={{"width":"3em"}} value={r.endpercent}/>}</div>
        <div><textarea onChange={(e)=>{setResultItem({...r,result:e.currentTarget.value})}} value={r.result}/></div>
        <div>{(typeid ===0)&&<input onChange={(e)=>{setResultItem({...r,win:Boolean(e.target.checked)})}} type="checkbox" checked={r.win!==0}/>}</div>
        <div><button onClick={()=>{deleteResultItem(r.id)}}>x</button></div>
        </div>
    })}
    <button onClick={()=>{addResultItem()}}>Добавить</button>
 </div>
}

export default TestResult
