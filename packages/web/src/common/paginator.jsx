import React from 'react';
import './paginator.css';

// totalCount, всего элементов
// pageSize, количество элементов на странице
// currentPage, текущая страница
// onClick, действие при выборе страницы
// prevnext,  true/false показать/скрыть кнопку в предыдущий следующий
// startend - true/false показать/скрыть кнопку в начало в конец

const Paginator=({totalCount,pageSize,currentPage,onClick,prevnext,startend,displaystyle})=>{
  let pagesCount=Math.ceil(totalCount/pageSize);
  let pages=[];
  let sizeframe=10;
  let mc=Math.ceil(sizeframe/2)
  let minPView=currentPage>mc?currentPage-mc:1;
  let  maxPView=currentPage<=pagesCount-Math.ceil(sizeframe/2)?minPView+sizeframe-1:pagesCount;
  minPView=maxPView-(sizeframe-1);
  for(let i=1;i<=pagesCount;i++) pages.push(i);
      return <div className={"pagenatorDefault pagenator_"+displaystyle}>
        {startend && currentPage>=7 && <div onClick={()=>{onClick(1,pageSize)}}>Начало</div>}
        {prevnext && currentPage!==1 && <div onClick={()=>{onClick(currentPage-1,pageSize)}}> &#8592; </div>}
        {minPView>1 && <>&emsp;...&emsp;</>}
        {pages.map(p=>{
                return (
                  (p>=minPView && p<=maxPView &&
                  <span onClick={onClick?()=>{onClick(p,pageSize)}:()=>{}}
                        className={currentPage===p?"selectedPageNumber":onClick?"":"notclicable"}>{p}
                  </span>)
                  )
                })}
         {maxPView<pagesCount &&  <>&emsp;...&emsp;</>}
         {prevnext && currentPage!==pagesCount && <div className={onClick?"clickable":""} onClick={()=>{onClick(currentPage+1,pageSize)}}> &#8594; </div>}
         {startend&&prevnext&& currentPage<=pagesCount-5 && <div className={onClick?"clickable":""} onClick={()=>{onClick(pagesCount,pageSize)}}>Конец</div>}
         {startend&&!prevnext&& currentPage<=pagesCount-5 && <div className={onClick?"clickable":""} onClick={()=>{onClick(pagesCount,pageSize)}}>{pagesCount}</div>}
         </div>
}

export default Paginator;
