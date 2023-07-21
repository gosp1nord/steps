import React, { MouseEventHandler } from "react";

type listTasks = {
  list: arrTasksTypeM
}
interface arrTasksTypeM {
  tempArr: Obj[]
  clear: MouseEventHandler<HTMLDivElement>
};
interface Obj {
  id: string
  dateTask: number
  date: string
  distance: number
}

export const Elements = ({list}: listTasks) => {
  const arr = list.tempArr;
  const clickDel = list.clear;
  const arrResult: React.ReactElement[] = [];  
  arr.forEach((element: Obj) => {
    arrResult.push(
      <div id={element.id} key={element.id} className="line-item">
        <div className="line-date">{element.date}</div>
        <div className="line-distance">{element.distance}</div>
        <div className="line-del">
          <div className="edit">&#128221;</div>
          <div onClick={clickDel} className="dell">&#10007;</div>
        </div>
      </div>
    )
  });

  return (
    <div className="container-list">
    {arrResult}
    </div>
  )
}
