import { useState } from 'react';
import { Item } from '../../types/Item';
import * as C from './styles';

type ItemProps = {
  item: Item;
}

export function ListItem({item}: ItemProps) {
  const [isdone, setIsdone] = useState(item.done);

  return (
    <C.Container done={isdone}>
      <input 
        type="checkbox" 
        checked={isdone}
        onChange={e => setIsdone(e.target.checked)}
      />
      <label>{item.name}</label>
    </C.Container>
  );
}