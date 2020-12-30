import React, { FC } from 'react';
//import './QuestionResult.css';
import { ITest, IQuestion, IAnswer, IUserResult } from '../../redux/interface';
import {GLOBAL_PATH_API} from '../../Global'
import {PlayerMp3} from '../../common/audio';
import { stripHTML } from '../../common/functions';

type TQuestionResult={
  tp:ITest|null
  tR:IUserResult
  currQuest:IQuestion|null
  userAnswer:IAnswer|null
  rightAnswer:IAnswer|null
  onNext:()=>void
  testIsDone:()=>void
  result?:string|null
  cQ:number
  rightansertext?:string|null
  wronganswertext?:string|null
  rightanserpic?:string|null
  wronganswerpic?:string|null
}

const QuestionResult:FC<TQuestionResult>=({tp,currQuest,userAnswer,onNext,testIsDone,result,cQ,
              rightAnswer})=>{

  if (!tp||!currQuest||(tp.endOnWrong&&!currQuest.win)) return <></>
  //if (tp.endOnWrong&&!currQuest.win) return <></>

  let isNext=(!tp.endOnWrong||currQuest.win);

  let timerId=setTimeout(()=>{ testIsDone();  if (isNext) onNext();},tp.timeQuestResult)

  let onNextLocal=()=>{ clearTimeout(timerId); testIsDone(); if (isNext) onNext();}

  //Статистика ответов
  let questAll=currQuest.selectcounter;
  let inpAnswer=currQuest.answerinputcounter;
  let prop=currQuest.win?inpAnswer:(questAll-inpAnswer)
  let statistic=!currQuest.istextanswer?Math.round((100/(questAll))*(userAnswer?userAnswer.selectcounter:currQuest.answerinputcounter)):Math.round((100/(questAll))*prop);


  // Если парамет показывать результат сразу и пользователь сделал выбор то показываем результат ответа на вопрос
  if(tp.type_levelgame&&currQuest.isChecked&&tp.timeQuestResult>0){
    //Музыкальное сопровождение в зависимости от того правильный ответ или нет
    if (currQuest.win) PlayerMp3.rightChoice(cQ); else PlayerMp3.wrongChoice(cQ);
      return  <>
          <div className="BlockLayer" onClick={onNextLocal} />
          <div className={"QuestionResultDefault "+(!currQuest.win?"wrong":"")} onClick={onNextLocal}>
          {currQuest.img&&<img alt={""} className="picquestion" src={GLOBAL_PATH_API+'/'+currQuest.img}/>}
          {!currQuest.istextanswer?<>
          <div className="rightanswertext">Правильный ответ: {rightAnswer&&stripHTML(rightAnswer.anstext)}</div>
          <div className="wronganswertext">{!currQuest.win&&"Ваш ответ: "+(userAnswer?stripHTML(userAnswer.anstext):"")}</div>
          <>{!currQuest.win&&userAnswer&&userAnswer.img&&<img className="wronganswerpic" alt={""} src={GLOBAL_PATH_API+'/'+userAnswer.img}/>}</>
          <>{rightAnswer&&rightAnswer.img&&<img className="rightanswerpic" alt={""} src={GLOBAL_PATH_API+'/'+rightAnswer.img}/>}</>
          </>:<>
          <div className="rightanswertext">Правильный ответ: {currQuest.textanswer.split("/")[0]}</div>
          <div className="wronganswertext">{!currQuest.win&&"Ваш ответ: "}<div dangerouslySetInnerHTML={{__html:currQuest.inputAnswer}}/></div>
          </>
          }
          {!result?<div className="result" data-result={currQuest.win?"Поздравляем!!! Это правильный ответ!":"К сожалению, это не правильно..."}/>
          :<div className="result">{result}</div>}
          {(statistic>0)&&<div className="stat">(Так же считают {statistic} % отвечающих)</div>}
          {currQuest.comment&&<div className="comment">
              <div dangerouslySetInnerHTML={{__html:currQuest.comment.replace(/<!--/gi,"").replace(/-->/gi,"")}}/>
          </div>}
          <button style={{"width":"0.1px","height":"0.1px","opacity":"0","overflow":"hidden","position":"absolute"}} autoFocus={true} onKeyPress={onNextLocal}/>
          <div className="add_div1"/>
          </div>
      </>}
  return <></>
}

export default QuestionResult
