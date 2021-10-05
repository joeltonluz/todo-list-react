import { useState } from 'react';
import { Item } from '../../types/Item';
import { IoTrashBinSharp } from 'react-icons/io5';
import * as C from './styles';

type ItemProps = {
  key: number;
  item: Item;
  clearTask: (indice: number) => void;
}

export function ListItem({key, item, clearTask}: ItemProps) {
  const [isdone, setIsdone] = useState(item.done);

  return (
    <C.Container done={isdone}>
      <input 
        type="checkbox" 
        checked={isdone}
        onChange={e => setIsdone(e.target.checked)}
      />
      <label>{item.name}</label>
      <button 
        type="button" 
        onClick={() => {clearTask(item.id)}} 
      >
        <IoTrashBinSharp className="trashIco" />
      </button>

    </C.Container>
  );
}