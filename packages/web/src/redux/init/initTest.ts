import {ITestState} from '../interface';
export const initState:ITestState={
  list:[],
  result:[],
  currentTicket:-1,
  currentQuestion:-1,
  currentAnswer:-1,
  isSynchronizing:false,
  currTest:-1,
  idTest:-1,
  questionID:-1,
  answerID:-1,
  testslist:[],
  allAnswers:[],
  wrongattempt:0,
  showprompt:"",
  reservlist:[],
  testresult:{
     id:-1,
     sessionID:"",
     testcover:"",
     testname:"",
     resquestion:[],
     allIsChecked:false,
     isDoneTest:false,
     anscol:1,
     discription:"",
     hashtag:"",
     displaystyle:""
   },
   alltestresult:[]

};
