import { useState } from "react";

export default function Players({ initialName, symbol, isActive}) {
  const [isEiditing , setIsEiditing] = useState(false);
  const [changeName , setChangeName] = useState(initialName);

  function handleEiditClick() {
    setIsEiditing((eiditing) => !eiditing);
  }

  function handleChangeName(event){
    setChangeName(event.target.value)
  }

  let playername = <span className="player-name">{changeName}</span>

  if (isEiditing) {
    playername = <input type="text" required  value={changeName} onChange={handleChangeName}/>
  }

  return (
    <li className={isActive ? 'active': undefined}>
      <span className="player">
        {playername}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEiditClick}>{isEiditing ? 'Save' :'Eidit'}</button>
      </span>
    </li>
  );
}
