import axios from 'axios';
import {IResUserResult, IResult, ITicket, ITest, IQuestion, IAnswer, IUserResult, IAphorism} from '../redux/interface';

  const instanceTest=axios.create({
    withCredentials:true,
//   headers:{"API-KEY":"8a359bed-90d2-4666-9ca3-e11c03a6d21a"},
    baseURL:"https://api.yes-t.net/1.2/"
  });


export const authTAPI={
getAuthInfo(){ return instanceTest.get(`/auth/me`)},
login(auth:any){ return instanceTest.post(`/auth/login`,auth)},
logout(){ debugger; return instanceTest.get(`/auth/logout`) }
}

export const  testAPI={
  loadTest(id:number){ return instanceTest.get<IQuestion[]>(`test/${id}`) },
  loadTestHL(id:number,total:number=0,rand:boolean=false,hl:string="",khsm:boolean=false){
     return instanceTest.get<IQuestion[]>(`testhl&id=${id}`+((total>0)?`&total=${total}`:"")+(rand?"&rand=true":"")+(khsm?'&khsm=true':'')+((hl.length>0)?`&hl=${hl}`:"")
  )
},

  addTest(data:ITest){ return instanceTest.post(`test`,data) },
  editTest(id:number,data:ITest){ return instanceTest.patch(`test/${id}`,data) },
  deleteTest(id:number){ return instanceTest.delete(`test/${id}`) },

  getQuestion(id:number){ return instanceTest.get<IQuestion>(`question/${id}`) },
  addQuestion(data:IQuestion){ return instanceTest.post(`question`,data) },
  editQuestion(idQ:number,data:IQuestion){ return instanceTest.patch(`question/${idQ}`,data) },
  deleteQuestion(idQ:number){ return instanceTest.delete(`question/${idQ}`)  },

  addAnswer(idA:number,data:IAnswer){ return instanceTest.post(`answer/${idA}`,data) },
  deleteAnswer(idA:number){ return instanceTest.delete(`answer/${idA}`)  },
  editAnswer(idA:number,data:IAnswer){ return instanceTest.patch(`answer/${idA}`,data) },

  saveQuestionPhoto(idQ:number,file:any){
    debugger;
    let formData=new FormData();
    formData.append('image',file);
    return instanceTest.post(`question/img/${idQ}`,formData,{headers:{'Content-Type':'multipart/form-data'} });
  },

  saveAnswerPhoto(idA:number,file:any){
    let formData=new FormData();
    formData.append('image',file);
    return instanceTest.post(`answer/img/${idA}`,formData,{ headers:{'Content-Type':'multipart/form-data'} } );
  },

  deleteQuestionPhoto(idQ:number){return instanceTest.delete(`question/img/${idQ}`);},
  deleteAnswerPhoto(idA:number){return instanceTest.delete(`answer/img/${idA}`);},

  getTestsList(find:string|null=null,sort:string|null=null){ return instanceTest.get<ITest[]>(`testslist`+(find?`&filter=`+encodeURI(`'${find}'`):``)+(sort?`&sort=`+encodeURI(`'${sort}'`):``)) },
  getTestsListForEdit(){ return instanceTest.get(`testslistforedit`) },

  sendStat(data:any){ return instanceTest.post(`sendstat`,data) },

  addTicket(data:ITicket){ return instanceTest.post(`ticket`,data) },
  editTicket(idTicket:number,data:ITicket){ return instanceTest.patch(`ticket/${idTicket}`,data) },
  deleteTicket(idTicket:number){ return instanceTest.delete(`ticket/${idTicket}`) },

  deleteTestCoverImg(idQ:number){return instanceTest.delete(`test/img/${idQ}`);},
  saveTestCoverImg(idT:number,file:any){
    let formData=new FormData();
    formData.append('image',file);
    return instanceTest.post(`test/img/${idT}`,formData,{ headers:{'Content-Type':'multipart/form-data'}} );
  },

  getAllAnswers(id:number){ return instanceTest.get<IAnswer[]>(`getallanswers/${id}`) },

  sendUResultQ(data:IResUserResult){ return instanceTest.post(`addurq`,data) },
  deleteUserResult(session:string){ return instanceTest.delete(`testresult/${session}`)  },
  testdone(session:string) {return instanceTest.patch(`testdone/${session}`)},

  gettestresult(session:string){ return instanceTest.get<IUserResult>(`testresult/${session}`) },
  getAllTestResult(){ return instanceTest.get(`testresult/all`) },

  getResult(idtest:number){ return instanceTest.get<IResult[]>(`result/${idtest}`) },
  addResult(data:IResult){ return instanceTest.post(`result`,data) },
  editResult(id:number,data:IResult){ return instanceTest.patch(`result/${id}`,data) },
  deleteResult(id:number){ return instanceTest.delete(`result/${id}`)  },

  getAphorism(id:number|null=null,rand:boolean|null=null,col:number|null=null,type:number|null=null){
    return instanceTest.get<IAphorism[]>(`aphorism`+(id?`&id=`+encodeURI(`'${id}'`):``)+(rand?`&rand`:``)+(col?`&col=`+encodeURI(`'${col}'`):``)+(type?`&type=`+encodeURI(`'${type}'`):``) ) },
}


