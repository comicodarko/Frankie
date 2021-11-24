import React from "react";
import { FiCheck, FiDelete } from "react-icons/fi";
import { Message, MessageButton, MessageButtonsArea, MessageRow } from "../../styles";

export default function ContentMessage({index, messageObj}) {
  console.log(index, messageObj);
  return (
    <Message key={index} className={`${messageObj.me ? 'animationRight' : 'animationLeft'}`}>
      {messageObj.content.map(content => (
        <MessageRow key={content.id}>
          <MessageButtonsArea key={content.id}>
            <MessageButton>
              <FiDelete className="btnDelete" size={28} />
            </MessageButton>
            <MessageButton>
              <FiCheck className="btnCheck" size={30} />
            </MessageButton>
          </MessageButtonsArea>
          {content.label}
        </MessageRow>
      ))}
    </Message>
  )
}