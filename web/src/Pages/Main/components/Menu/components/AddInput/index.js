import React from "react";
import { MenuInput } from "./styles";

export default function AddInput({ label, value, setValue, setShowInput, handleActionAdd, action }) {
  return (
    <span className="action animationShow">
      {label}
      <MenuInput className="animationShow" autoFocus 
        value={value} onChange={e => setValue(e.target.value)}
        onKeyDown={(e => handleActionAdd(e.key, action))} 
        onBlur={() => setShowInput('')} />
    </span>
  )
}