//import {IAnswer,IQuestion} from '../redux/interface';

export const stripHTML=(html:string)=>{
  let tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText;
}

// Определяет вхождение числа в интервал между двумя числами
export const numBetween=(val:number,num1:number,num2:number):boolean=>{
    let min=num1<num2?num1:num2
    let max=num1>num2?num1:num2
    return min<=val&&val<=max
}

//Преобразует строку в число и отсекает указанный интервал
export const toNumLimMinMax=(str:any,min:number,max:number):number=>{
  let val=parseInt(str,10);
  let itog=val>max?max:(val<min?min:val);
  return !itog?0:itog;
}

// Возвращает случайное отрицательное число
export const idRandom=():number=>{
  return (0-Math.floor(Math.random()*10000000));
}

//Перемешивает мссив данных в случайном порядке и возвращает truncsize первых элементов (если 0 то все)
export const shuffle=(array:any[],truncsize:number=0):any[]=>{
  let currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  debugger;
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return truncsize>0?array.filter((a,i)=>i<truncsize):array;
}

//удаляет неуникальные значения
export const uniqueArray=(M:any[]):boolean=> {
   for (var j = 0, R = true, J = M.length - 1; j < J; j++)
   for (var k = j + 1, K = J + 1; k < K; k++) R = (R && M [j].anstext != M [k].anstext);
   return R;
}
