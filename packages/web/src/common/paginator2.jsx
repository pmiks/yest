import React from 'react';
//import './paginator.css';

// totalCount, всего элементов
// pageSize, количество элементов на странице
// currentPage, текущая страница
// onClick, действие при выборе страницы
// prevnext,  true/false показать/скрыть кнопку в предыдущий следующий
// startend - true/false показать/скрыть кнопку в начало в конец

const Paginator=({totalCount,pageSize,currentPage,onClick,prevnext,startend,displaystyle,arrvalues,sizeframe})=>{
  let pagesCount=Math.abs(Math.ceil(totalCount/pageSize));
  let pages=[];
  sizeframe=sizeframe?sizeframe:10;
  let minPView=currentPage>Math.ceil(sizeframe/2)?currentPage-Math.ceil(sizeframe/2):1;
  let maxPView=currentPage<=pagesCount-Math.ceil(sizeframe/2)?minPView+sizeframe-1:pagesCount;
  minPView=maxPView-(sizeframe-1);
  for(let i=1;i<=pagesCount;i++) pages.push(i);
  pages=pages.map((p,i)=>{
      let discription=arrvalues&&arrvalues.length>=p?arrvalues[p-1]:""
      let style="pageItem "+(currentPage===p?"selectedPageNumber ":"")+(onClick?"":"notclicable ")+(p<currentPage?"done ":"")+(discription.indexOf('~')!==-1?" highlighting ":"")
      return (
          (p>=minPView && p<=maxPView &&
          <div onClick={onClick?()=>{onClick(p,pageSize)}:()=>{}} className={style} key={i}>
                <div className="num">{p}</div>
                {/*arrvalues&&<div className="value">{arrvalues.length>=p&&arrvalues[p][1]?arrvalues[p][0]:arrvalues[p]}</div>*/}
                {arrvalues&&<div className="value">{discription.replace(/~/g,"")}</div>}
          </div>)
        )
      })
  return <div className={"pagenatorDefault pagenator_"+displaystyle}>
        {startend && minPView>1 && <div className={onClick?"pageItem":"pageItem notclicable"} onClick={onClick?()=>{onClick(1,pageSize)}:()=>{}}>1</div>}
        {prevnext && currentPage!==1 && <div className={onClick?"pageItem":"pageItem notclicable"} onClick={onClick?()=>{onClick(currentPage-1,pageSize)}:()=>{}}> &#8592; </div>}
        {minPView>1 && <div>&emsp;...&emsp;</div>}
        {totalCount<0?pages.reverse():pages}
        {maxPView<pagesCount &&  <div>&emsp;...&emsp;</div>}
        {prevnext && currentPage!==pagesCount && <div className={onClick?"pageItem":"pageItem notclicable"} onClick={onClick?()=>{onClick(currentPage+1,pageSize)}:()=>{}}> &#8594; </div>}
        {/*startend&&prevnext&& currentPage<=pagesCount-5 && <div classname={onClick?"pageItem clickable":"pageItem"} onClick={onClick?()=>{onClick(pagesCount,pageSize)}:()=>{}}>Конец</div>*/}
        {startend&& maxPView<pagesCount && <div className={onClick?"pageItem":"pageItem notclicable"} onClick={onClick?()=>{onClick(pagesCount,pageSize)}:()=>{}}>{pagesCount}</div>}
     </div>
   }

export default Paginator;
