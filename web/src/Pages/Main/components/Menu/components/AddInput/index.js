import React from "react";
import { MenuInput } from "./styles";

export default function AddInput({ label, value, setValue, setShowInput, handleAction, action }) {
  return (
    <span className="action animationShow">
      {label}
      <MenuInput className="animationShow" autoFocus 
        value={value} onChange={e => setValue(e.target.value)}
        onKeyDown={(e => handleAction(e.key, action))} 
        onBlur={() => setShowInput('')} />
    </span>
  )
}