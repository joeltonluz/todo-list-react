
import { useState } from 'react';
import * as C from './App.styles';
import { ListItem } from './Components/ListItem';
import { AddArea } from './Components/AddArea';

import { Item } from './types/Item';

export function App () {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar Pão', done: false, },
    { id: 2, name: 'Comprar Bolo na Padoca', done: true, },
  ]);

  function handleAddTask(taskName: string) {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  function handleClearTask(indice: number) {
    let newList = [...list];
    newList.splice(indice-1,1);
    setList(newList);
  }

  function handleClearAllTasks() {
    setList([]);    
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>To Do List - Typescript (Simple)</C.Header>

        <AddArea onEnter={handleAddTask} clearAll={handleClearAllTasks} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} clearTask={handleClearTask} />
        ))}
      </C.Area>
    </C.Container>
  );
}