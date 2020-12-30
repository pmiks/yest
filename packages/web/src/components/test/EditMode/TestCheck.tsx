import React, { FC } from 'react';
import '../testslist.css';
import { ICheck, ICheckList } from '../../../redux/interface';

type TTestCheck={
  check:ICheck
  goToQuest:(id:number)=>void
}

const TestCheck:FC<TTestCheck>=({check,goToQuest})=>{
if (check) {  return <div className={check.errors===0?"TestCheck green":"TestCheck red"}>
    <div>Ошибок:{check.errors} Предупреждений {check.warnings}</div>
    {check.List.map((c:ICheckList)=>{
              return <div>
          {c.notrightansw&&"Error!!! Не отмечен правильный ответ."}
          {c.notuniqueAnswer&&"Error!!! Несколько повторяющихся вариантов."}
          {c.emptyAnswer&&"Error!!! Пустые варианты ответов."}
          {c.emptyInputAnswer&&"Error!!! Пустое поле правильного ответа."}
          {!c.notchoice&&c.colansw&&"Warninig!!! Количество вариантов ответа меньше чем по умолчанию." }
          {c.notchoice&&"Error!!! Нет вариантов ответа."}
          {c.notalter&&"Error!!! Нет альтернативных вариантов."}
          ... вопрос №<button onClick={()=>{goToQuest(c.questionid)}}> {c.questnum} </button>
        </div>
    })}
  </div>}
  else {return <div>На ошибки не проверенно</div>}
}

export default TestCheck;
