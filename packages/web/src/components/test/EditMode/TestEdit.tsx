import React, { FC, useState } from 'react';
import './TestEdit.css';

import LoadImage from '../LoadImage';
import { ITest } from '../../../redux/interface';
import { toNumLimMinMax } from '../../../common/functions';

type TTestEdit={
  tp:ITest
  setTP:(tp:ITest)=>void
  saveTestCoverImg:(id:number,file:any)=>void
  deleteTestCoverImg:(id:number)=>void
}
let testtype:Array<{id:number,name:string}>=[
    {id:0,name:"Тест на праильность ответа"},
    {id:1,name:"Тест без правильного результата (Психологический)"},
    {id:2,name:"Опрос"}
  ]

const TestEdit:FC<TTestEdit>=({tp,setTP,saveTestCoverImg,deleteTestCoverImg})=>{
  let [testTypeId,setTestTypeId]=useState(tp.typeid)
  let selectTypeTest=(event:any)=>{
      setTestTypeId(event.target.value);
      setTP({...tp,typeid:event.target.value})
  }
  let testTypeCont=testtype.map((tt)=>{return <option value={tt.id} selected={tt.id===testTypeId}>{tt.name}</option>})
  let saveTCI=(e:any,id:number)=>{alert(id); if(e.target.files.length) saveTestCoverImg(id,e.target.files[0]);  }
  return tp?<>
  <div className="testedit">
     <div style={{"width":"200px"}}><LoadImage zoom="true" id={"TEST"+tp.id} width="100px" height="100px" img={tp.coverimg} onLoad={(e:any)=>{saveTCI(e,tp.id)}} onDel={()=>{deleteTestCoverImg(tp.id)}}/></div>
     <div><select style={{"width":"45vw"}} id="typeTest" onChange={selectTypeTest}> {testTypeCont} </select></div>
     <div>Создан: {tp.datecreate}  Изменен: {tp.dateedit}</div>
     <div><label>Стиль</label>
           <input  style={{"width":"15vw"}} value={tp.displaystyle?tp.displaystyle:""} type="input" onChange={(e)=>{setTP({...tp,displaystyle:e.currentTarget.value})}}/></div>
     <div><label>Название теста</label>
           <input style={{"width":"40vw"}} value={tp.testname} type="input" onChange={(e)=>{setTP({...tp,testname:e.currentTarget.value})}}/></div>
     <div><label>Хэштеги:</label>
           <textarea style={{"width":"55vw","height":"4em"}} value={tp.hashtag} onChange={(e)=>{setTP({...tp,hashtag:e.currentTarget.value})}}/></div>
     <div><label>Описание:</label>
           <textarea style={{"width":"55vw","height":"4em"}} value={tp.discription} onChange={(e)=>{setTP({...tp,discription:e.currentTarget.value})}}/></div>
     <div><label>Вопрос по умолчанию</label>
           <input  style={{"width":"50vw"}} value={tp.defaultQuestion} onChange={(e)=>{setTP({...tp,defaultQuestion:e.currentTarget.value})}} type="input"/></div>
     <div><label>Ответ по  умолчанию</label>
           <input  style={{"width":"50vw"}} value={tp.defaultAnswer} onChange={(e)=>{setTP({...tp,defaultAnswer:e.currentTarget.value})}} type="input"/></div>
     <div><label>Количество вариантов ответов по умолчанию</label>
           <input style={{"width":"2em"}} min="0" max="10" step="1" type="number" value={tp.defaultAnswerCol} onChange={(e)=>{setTP({...tp,defaultAnswerCol:toNumLimMinMax(e.currentTarget.value,0,10)})}}/></div>
     <div><label>Автоматически добавлять неверные варианты ответа:</label>
           <input style={{"width":"2em"}} min="0" max="10" step="1" type="number" value={tp.addalter} onChange={(e)=>{setTP({...tp,addalter:toNumLimMinMax(e.currentTarget.value,0,10)})}} /></div>
     <div><label>Время для ответа на вопрос</label>
           <input style={{"width":"4em"}} min="0" max="360" step="1" type="number" value={tp.questiontime===0?tp.questiontime:tp.questiontime/1000} onChange={(e)=>{setTP({...tp,questiontime:Number(e.currentTarget.value)*1000})}}/></div>
     <div><label>Время для прохождения теста</label>
           <input style={{"width":"4em"}} value={tp.testtime} onChange={(e)=>{setTP({...tp,testtime:toNumLimMinMax(e.currentTarget.value,0,90000000)})}} type="input"/></div>
     <div><label className="checktype">Нумерация вопросов</label>
           <input style={{"width":"4em"}} value={tp.NumQuest} onChange={(e)=>{setTP({...tp,NumQuest:e.currentTarget.value.substr(0,3)})}} type="input"/><label>[nss n-начальный символ нумерации s-любые символы после номера]</label></div>
     <div><label className="checktype">Нумерация ответов</label>
           <input style={{"width":"4em"}} value={tp.NumAns} onChange={(e)=>{setTP({...tp,NumAns:e.currentTarget.value.substr(0,3)})}} type="input"/><label>[nss n-начальный символ нумерации s-любые символы после номера]</label></div>
     <div><label className="checktype">Тест до первого неверного ответа</label>
           <input checked={tp.endOnWrong} onChange={(e)=>{setTP({...tp,endOnWrong:e.target.checked})}} type="checkbox"/></div>
     <div><label className="checktype">Показывать результат ответа сразу</label>
           <input checked={tp.type_levelgame} onChange={(e)=>{setTP({...tp,type_levelgame:e.target.checked})}} type="checkbox"/></div>
     {testTypeId in [0]&&<div><label>Количество допустимых ошибок</label>
           <input style={{"width":"2em"}} value={tp.wrongpermissible} onChange={(e)=>{setTP({...tp,wrongpermissible:toNumLimMinMax(e.currentTarget.value,0,1000)})}} type="input"/></div>}
     <div><label>Время отображения окна результата вопроса</label>
           <input style={{"width":"4em"}} value={tp.timeQuestResult===0?0:(tp.timeQuestResult/1000)}  min="0" max="360" step="1" type="number" onChange={(e)=>{setTP({...tp,timeQuestResult:Number(e.currentTarget.value)*1000})}} /></div>
     <div><label>Отбирать случайным образом</label>
           <input style={{"width":"5em"}} min="0" max="99999" step="1" type="number" value={tp.limit_quest} onChange={(e)=>{setTP({...tp,limit_quest:Number(e.currentTarget.value)})}} /><label>вопросов</label></div>
     <div><label className="checktype">Сортировать воросы в случайном порядке</label>
           <input checked={tp.shuffleQuestion} onChange={(e)=>{setTP({...tp,shuffleQuestion:e.target.checked})}} type="checkbox"/></div>
     <div><label className="checktype">Сортировать ответы в случайном порядке</label>
           <input checked={tp.shuffleAnswer} onChange={(e)=>{setTP({...tp,shuffleAnswer:e.target.checked})}} type="checkbox"/></div>
     <div><label className="checktype">Показывать в фоне теста обложку</label>
           <input checked={tp.isbackground} onChange={(e)=>{setTP({...tp,isbackground:e.target.checked})}} type="checkbox"/></div>
  </div></>:<></>
}

export default TestEdit;
