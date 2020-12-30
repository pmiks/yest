import React, { FC } from 'react';
import '../testslist.css';
import {useHistory} from 'react-router-dom';
import { IQuestion, ITicket, ITest } from '../../../redux/interface';


type TQuestionEditTools={
  currentQuestion:number
  idTest:number
  dataIsChanged:boolean
  list:Array<IQuestion>
  ticketlist:Array<ITicket>
  currentTest:ITest
  onSave:()=>void
  onCancel:()=>void
  addQuest:(id:number)=>void
  onPrev:()=>void
  onNext:()=>void
  addNewAnswer:(id:number)=>void
  deleteQuestion:(id:number)=>void
  selectTestEdit:(idtest:number)=>void
  addTicket:()=>void
  checkTest:()=>void
  onPublicate:()=>void
}

const QuestionEditTools:FC<TQuestionEditTools>=({
  currentQuestion, idTest, list, onSave, onCancel, addQuest, onPrev, onNext,  addNewAnswer,
  deleteQuestion, dataIsChanged, selectTestEdit, addTicket, checkTest, currentTest,  onPublicate })=>{
    const history=useHistory();
    let editDone=()=>{
          onSave();
          selectTestEdit(-1)
          history.push('/personalarea/mytests');
    }

    let editNotSave=()=>{
      if (!dataIsChanged||(dataIsChanged&&window.confirm("Вы уверены что хотите выйти не сохраняя изменения"))){
        selectTestEdit(-1)
        history.push('/personalarea/mytests');
        return;
      }
    }

// let onNextLocal=()=>{
//       }
//       let tool = document.getElementById('tool');
//
//         let listener = (e)=>{
//             let tool = document.getElementById('toolpanel');
//           tool.style.left=(e.clientX -30)+"px";
//           tool.style.top=(e.clientY-30)+"px";
//         };
//
//       function hide() {
// //          let tool = document.getElementById('toolpanel');
// //          alert(tool.hidden);
// //          if (tool.hidden==="true") tool.hidden="false"; else tool.hidden="true";
//            }
//       function move(e) {document.addEventListener('mousemove',listener); }
//       function stop(e) {document.removeEventListener('mousemove',listener); }
//<div className="edittools" onMouseDown={move} onBlur={stop} onMouseUp={stop} id="toolpanel">
//<div className="header" onClick={hide}>Панель инструментов</div>

  return <div className="edittools" id="toolpanel">
      <div className="header">Панель инструментов</div>
      <button onClick={()=>{addQuest(idTest)}}>Добавить вопрос</button>
      <button disabled={currentQuestion<0} onClick={()=>{deleteQuestion(list[currentQuestion].id)}}>Удалить вопрос &times;</button>
      <div className="delimiter"/>
      <button disabled={currentQuestion<0} onClick={()=>{addNewAnswer(list[currentQuestion].id)}}>Добавить ответ</button>
      <div className="delimiter"/>
      <button disabled={currentQuestion<0} onClick={()=>{addTicket()}}>Добавить билет</button>
      <div className="delimiter"/>
      <button onClick={editDone}>Завершить {dataIsChanged&&"и сохранить"}</button>
      <button  onClick={editNotSave}>{dataIsChanged?"Выйти без сохранения":"Выход"}</button>
      <div className="delimiter"/>
      <button onClick={checkTest}>Проверить на ошибки</button>
      {currentTest&&<button disabled={dataIsChanged} onClick={onPublicate}>{!currentTest.published?"Опубликовать":"Снять с публикации"}</button>}
      <div className="delimiter"/>
      <button disabled={!dataIsChanged} onClick={onSave}>Сохранить</button>
      <button disabled={!dataIsChanged} onClick={onCancel}>Отменить</button>
      <div className="delimiter"/>
      <div>
      {onPrev&& <button onClick={onPrev}>Предыдущий</button>}
      {onNext&& <button onClick={onNext}>Следующий</button>}
      </div>
  </div>
};

export default QuestionEditTools;
