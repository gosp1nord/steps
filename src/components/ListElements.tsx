import React from "react";
import { useState } from "react";
import { ElementInput } from './addNew';
import { Elements } from './elements';

let arrTasks: Obj[] = []
interface Obj {
  id: string
  dateTask: number
  date: string
  distance: number
}
interface arrTasksType {
  tempArr: Obj[]
  clear: React.MouseEventHandler<HTMLDivElement>
};

export const Listing = () => {
  const dellElement = (event: React.MouseEvent) => {
    const elementParent = (event.target as HTMLElement).closest('.line-item');
    if (elementParent) {
      arrTasks = arrTasks.filter(value => value.id !== elementParent.id);
      setState({
        ...state, tempArr: arrTasks
      })
    }
  }

  const [state, setState] = useState<arrTasksType>({
    tempArr: [],
    clear: dellElement,
  });

  const addLineTask = (line: Obj) => {
    let flag = true;
    arrTasks.forEach((item: Obj) => {
      if (item.dateTask === line.dateTask) {
        item.distance += line.distance;
        flag = false;
      }
    })

    if (flag) {
      arrTasks.push({
        id: line.id,
        dateTask: line.dateTask,
        date: line.date,
        distance: line.distance,
      })
      arrTasks.sort((x, y) => y.dateTask - x.dateTask);
    }

    setState({
      ...state, tempArr: arrTasks
    })
  }

  return (
    <>
      <ElementInput props={addLineTask}/>
      <Elements list={state} />
    </>
  );
}
