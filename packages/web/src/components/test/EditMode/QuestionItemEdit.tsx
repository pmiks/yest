import React, { FC } from 'react';
import '../testslist.css';
import LoadImage from '../LoadImage';
import { IQuestion, IAnswer } from '../../../redux/interface';
import { toNumLimMinMax } from '../../../common/functions';

type TQuestionItemEdit={
  question:IQuestion
  editAnswer:(idQ:number,ans:IAnswer)=>void
  deleteAnswer:(idQ:number,idA:number)=>void
  editQuestion:(quest:IQuestion)=>void
  deleteQuestion:(id:number)=>void
  saveQPhoto:(id:number,file:any)=>void
  saveAPhoto:(id:number,file:any)=>void
  deleteAnswerPhoto:(id:number)=>void
  deleteQuestionPhoto:(id:number)=>void
  checkForKHSM:(idQ:number,value:boolean)=>void
}

const QuestionItemEdit:FC<TQuestionItemEdit>=(
  {question, editAnswer, deleteAnswer, editQuestion, deleteQuestion, saveQPhoto, saveAPhoto, deleteAnswerPhoto,
  deleteQuestionPhoto,checkForKHSM })=>{
  let saveQP=(e:any,id:number)=>{ if(e.target.files.length) saveQPhoto(id,e.target.files[0]);  }
  let saveAP=(e:any,id:number)=>{ if(e.target.files.length) saveAPhoto(id,e.target.files[0]); }
  return (<div className="questionEditDefault">
              <QFieldEdit quest={question}
                           onDel={()=>{deleteQuestion(question.id)}}
                           onEdit={editQuestion}
                           saveQPhoto={(e)=>{saveQP(e,question.id)}}
                           deleteQuestionPhoto={deleteQuestionPhoto}
                           checkForKHSM={checkForKHSM}
                 />
              {question.istextanswer&&<AFieldInputEdit quest={question} onEdit={editQuestion}/>}
              {!question.istextanswer&&<div className="answerlistedit">{question.ans.map((answers)=>{
                return <AFieldEdit answer={answers} idQ={question.id} onEdit={editAnswer}
                            onDelete={()=>{deleteAnswer(question.id,answers.id)}}
                            onSavePic={(e)=>{saveAP(e,answers.id)}}
                            onDeletePic={()=>{deleteAnswerPhoto(answers.id)}} />
                })}</div>}
              <QCommentField  quest={question} onEdit={editQuestion}/>
              <div className="info">ID:{question.id} Созданно: {question.datecreate} Отредактированно: {question.dateedit}</div>
         </div>);

}
/*
editMode - режим отрисовки (просмотр/редактирование)
idQuest - id вопроса
qestion - контейнер вопроса
onEdit - calback при изменении вопроса
onDel - calback при удалении вопроса
*/

type TQFieldEdit={
  quest:IQuestion
  onEdit:(quest:IQuestion)=>void
  onDel:()=>void
  saveQPhoto:(id:number,file:any)=>void
  deleteQuestionPhoto:(id:number)=>void
  checkForKHSM:(idQ:number,value:boolean)=>void
}

const QFieldEdit:FC<TQFieldEdit>=({quest,onEdit,onDel,saveQPhoto,deleteQuestionPhoto,checkForKHSM})=>{
return  <div className={"questionedit"}>
         <div id="pic">
            <LoadImage id={String("QUEST"+quest.id)} zoom="true" width="100px" height="50px" img={quest.img} onLoad={saveQPhoto} onDel={()=>{deleteQuestionPhoto(quest.id)}}/>
         </div>
        <div className="questiontext">
            <textarea onChange={(e)=>onEdit({...quest,question:e.target.value})} value={quest.question} />
            <textarea  placeholder={"Строка шаблонного перестроения вопроса"} value={quest.transcompilation} onChange={(e)=>onEdit({...quest,transcompilation:e.target.value})} style={{"height":"2em"}}/>
            <input type="text"  placeholder={"Дополнительные стили"} value={quest.displaystyle?quest.displaystyle:""} onChange={(e)=>onEdit({...quest,displaystyle:e.target.value})} style={{"width":"100%"}}/>
        </div>
        <div className="option">
            <div><button onClick={onDel}>&times;</button></div>
            <div>Текстовый ввод ответа
            <input type="checkbox" checked={quest.istextanswer} onChange={(e)=>{onEdit({...quest,istextanswer:e.target.checked})}}/></div>
            <div>Автом. добавить ответы: <input style={{width:"2em"}} min="0" max="10" step="1" type="number" value={quest.addalter} onChange={(e)=>{onEdit({...quest,addalter:parseInt(e.target.value,10)})}}/></div>
            <div>Уровень сложности (0,1-4):<input min="0" max="4" step="1" style={{width:"2em"}} type="number" value={quest.hardlevel} onChange={(e)=>{onEdit({...quest,hardlevel:parseInt(e.target.value,10)})}}/></div>
            <div>Добавить к викторине КХСМ
            <input type="checkbox" checked={quest.addtomillion} onChange={(e)=>{checkForKHSM(quest.id,e.target.checked)}}/></div>
        </div>
      </div>
}

type TQCommentField={
  quest:IQuestion
  onEdit:(quest:IQuestion)=>void
}

const QCommentField:FC<TQCommentField>=({quest,onEdit})=>{
return <>
        <div className={"questioncomment"}>
            <label>Коментарий к тесту</label>
            <textarea onChange={(e)=>onEdit({...quest,comment:e.target.value})} value={quest.comment} />
        </div>
      </>
}

type TAFieldInputEdit={
  onEdit:(quest:IQuestion)=>void
  className?:string
  quest:IQuestion
}

const AFieldInputEdit:FC<TAFieldInputEdit>=({onEdit,quest})=>{
  return <div className={"answerinputitem"}>
                 <div>Вариаты текстового ввода ответа:</div>
                 <input type="text" value={quest.textanswer} onChange={(e)=>{onEdit({...quest,textanswer:e.target.value})}}/>
         </div>
}

type TAFieldEdit={
  answer:IAnswer
  onEdit:(idQ:number,ans:IAnswer)=>void
  onDelete:()=>void
  onSavePic:(id:number,file:any)=>void
  onDeletePic:(id:number)=>void
  idQ:number
}

const AFieldEdit:FC<TAFieldEdit>=({answer,onEdit,onDelete,onSavePic,onDeletePic,idQ})=>{
  return  <>{!answer.deleted&&
     <div className={answer.truth ? "answeredit rightitem":"answeredit"}>
      <div className={"pic"}>
      <LoadImage id={String("ANSW"+answer.id)} zoom="true" width="100px" height="50px" img={answer.img} onLoad={onSavePic} onDel={()=>{onDeletePic(answer.id)}}/>
      </div>
      <div className="answer">
      <textarea onChange={(e)=>{onEdit(idQ,{...answer,anstext:e.target.value})}} value={answer.anstext} />
      </div>
      <div className="options">
        <input value={answer.score} type="text" placeholder="Баллы" name="score" onChange={(e)=>{onEdit(idQ,{...answer,score:toNumLimMinMax(e.target.value,0,9999)})}}/>
        <div><input type="checkbox" name="isTrue" checked={answer.truth} onChange={(e)=>{onEdit(idQ,{...answer,truth:e.target.checked})}}/>
        Правильный ответ</div>
        {onDelete&&<button onClick={onDelete}>Удалить вариант</button>}
      </div>
      </div>
  }</>
}

export default QuestionItemEdit;
