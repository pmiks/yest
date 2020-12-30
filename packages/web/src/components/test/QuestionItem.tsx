import React, { FC } from 'react';
//import './QuestionItem.css';
//import LoadImage from './LoadImage';
import {GLOBAL_PATH_API} from '../../Global'
import { IQuestion, ITest, IAnswer } from '../../redux/interface'

type TQuestionItem={
  question:IQuestion|null
  tp:ITest|null
  onInputAnswer:(data:string|null,send?:boolean)=>void
  checkChoice:(idQ:number, idA:number)=>void
}

const QuestionItem:FC<TQuestionItem>=({question,onInputAnswer,checkChoice,tp})=>{
  if (!question||!tp) return <></>
  return (<div className={"questionDefault question_"+tp.displaystyle+(question.displaystyle?" "+question.displaystyle:"")} data-questionimg={GLOBAL_PATH_API+'/'+question.img} data-questiontext={question.question}>

              <QField quest={question} NumQuest={tp.NumQuest}/>
              <>
              {!question.istextanswer&&<div className="answerlist">{question.ans.map((answers,i)=>{
                  return <AField key={i}
                                  el_id={"answer"+i}
                                  answer={answers}
                                  onSelect={()=>{checkChoice(question.id,answers.id)}}
                                  win={Boolean(question.win)}
                                  type_levelgame={tp.type_levelgame}
                                  isChecked={Boolean(question.isChecked)}
                                  NumAns={tp.NumAns}
                                  />})}</div>
                  }
              {question.istextanswer&& <AFieldInput quest={question} onInputAnswer={onInputAnswer}/>}
              {question.comment&& <AFieldComment comment={question.comment}/>}
              </>
  </div>);
}

/*
editMode - режим отрисовки (просмотр/редактирование)
idQuest - id вопроса
qestion - контейнер вопроса
onEdit - calback при изменении вопроса
onDel - calback при удалении вопроса
*/

type TQField={
  quest:IQuestion
  NumQuest:string
}

const QField:FC<TQField>=({quest,NumQuest})=>{
  // let kodNum=NumQuest.length>0?NumQuest.charCodeAt(0):0;
  // let num="";
  // if (kodNum===65||kodNum===97) num=String.fromCharCode(kodNum+(quest.num?quest.num:0)-1)+NumQuest.substr(1,2);
  // if (kodNum===49) num=String(quest.num)+NumQuest.substr(1,2);
  return <>
      {quest.img&&<img alt={""} className="questionitempic" src={GLOBAL_PATH_API+'/'+quest.img}/>}
      {/*quest.img&&<img className="questionitempic" src={GLOBAL_PATH_API+'/'+quest.img}/>*/}
      {/*<LoadImage zoomer="true" height="200px" img={quest.img}/>*/}
      <div className="questionitemtext"><div dangerouslySetInnerHTML={{__html:(quest.question&&NumQuest&&quest.num+'. ')+quest.question}}/></div>
    </>
}

type TAField={
  el_id:string,
  answer:IAnswer
  win:boolean
  isChecked:boolean
  type_levelgame:boolean
  onSelect:()=>void
  NumAns:string
}

const AField:FC<TAField>=({el_id,answer,win,isChecked,type_levelgame,onSelect,NumAns})=>{
  let kodnum=NumAns.length>0?NumAns.charCodeAt(0):0;
  let num="";
  if (kodnum===65||kodnum===97) num=String.fromCharCode(kodnum+answer.num-1)+NumAns.substr(1,2);
  if (kodnum===49) num=String(answer.num)+NumAns.substr(1,2);
  return    <div  onClick={onSelect} id={el_id}
                 className={"answeritem "+(answer.uch ? (type_levelgame&&win?"rightitem":(type_levelgame&&!win?"wrongitem":"itemselected")):(type_levelgame&&isChecked&&answer.truth?"rightitem":"item"))+(answer.nonactiv?" notactive ":"")}>
                 <div className="nn">  {num} </div>
                 {answer.img&&<img alt={""} className="pic" src={GLOBAL_PATH_API+'/'+answer.img}/>}
                 <div className="answertext"><div dangerouslySetInnerHTML={{__html:answer.anstext}}/></div>
            </div>
}

type TAFieldInput={
  onInputAnswer:(data:string|null,send?:boolean)=>void
  className?:string
  quest:IQuestion
}

const AFieldInput:FC<TAFieldInput>=({onInputAnswer,quest})=>{
  let onEnter=(e:any)=>{
      if (e.key==='Enter'&&e.target.value.length>0) {e.key=0;e.target.value="";onInputAnswer(e.target.value,true)}
  }
  return <div className={"answerinputitem"}>
                    <input className="answerinput" type="text" value={quest.inputAnswer} autoFocus={true} onChange={(e)=>{onInputAnswer(e.target.value)}} onKeyPressCapture={onEnter} />
                    <div className="answerbutton" onClick={()=>{onInputAnswer(null,true)}}>Ответить</div>
      </div>
  }

type TAFieldComment={
    comment:string
}

const AFieldComment:FC<TAFieldComment>=({comment})=>{
    return <div className={"CommentShow"}> <div dangerouslySetInnerHTML={{__html:comment}}/> </div>
}


export default QuestionItem;