import React, { useState } from "react";
import { FiSquare, FiDelete, FiCheckSquare } from "react-icons/fi";
import { Message, MessageButton, MessageButtonsArea, MessageRow, MessageTitle } from "../../styles";

export default function ContentMessage({index, messageObj, handleSendMessage}) {
  const [content, setContent] = useState(messageObj.content);
  async function handle(action, id) {
    const index = content.findIndex(el => el.id === id);
    let arr = [...content];  
    if(action === 'check'){
      arr[index].watched = !arr[index].watched;
      await handleSendMessage(`!edit ${messageObj.database} ${id} ${arr[index].watched ? 'check' : 'unCheck'}`);
    }
    setContent([...arr]);
  }

  return (
    <Message key={index} className={`${messageObj.me ? 'animationRight' : 'animationLeft'}`}>
      <MessageTitle>{messageObj.contentLabel}</MessageTitle>
      {content.map(content => (
        <MessageRow key={content.id} watched={content.watched}>
          <MessageButtonsArea key={content.id}>
            {messageObj.actions && messageObj.actions.map(action => {
              return (
                <MessageButton key={`${content.id}-${action}`} onClick={() => handle(action, content.id)}>
                  {action === 'delete' && !content.deleted && <FiDelete className="btnDelete animationShow" size={28} />}
                  {action === 'delete' && content.deleted && <FiCheckSquare className="animationShow btnCheck" size={30} />}  
                  {action === 'check' && !content.watched && <FiSquare className="btnCheck animationShow" size={30} />}
                  {action === 'check' && content.watched && <FiCheckSquare className="animationShow btnCheck" size={28} />}
                </MessageButton>
              )
            })}
          </MessageButtonsArea>

          {content.label}
        </MessageRow>
      ))}
    </Message>
  )
}