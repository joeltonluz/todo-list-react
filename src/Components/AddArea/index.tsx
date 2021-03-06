import { useState, KeyboardEvent } from 'react';
import { ImPlus } from 'react-icons/im';
import * as C from './styles';

type OnEnterProps = {
  onEnter: (taskname: string) => void;
  clearAll: () => void;
}

export function AddArea({ onEnter, clearAll }: OnEnterProps) {
  const [inputtext, setInputtext] = useState('');

  function handleKeyUP(e: KeyboardEvent) {
    if (e.code==='Enter' && inputtext !== '') {
      onEnter(inputtext);
      setInputtext('');
    }
  }

  return (
    <C.Container>
      <div className="image"><ImPlus /></div>
      <input 
        type="text" 
        placeholder="Add a task and press Enter !"
        value={inputtext}
        onChange={e => setInputtext(e.target.value)}
        onKeyUp={handleKeyUP}
      />
      <button type="button" onClick={clearAll} >Limpar Lista</button>
    </C.Container>
  );
}