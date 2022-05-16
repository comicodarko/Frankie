import React from "react";
import { Message } from "../ContentMessage/styles";

export default function TextMessage({index, messageObj}) {
  const array = messageObj.message.replace(/\*/g, '').split('\n');
  
  return (
    <Message me={messageObj.me} key={index} className={`${messageObj.me ? 'animationRight' : 'animationLeft'}`}>
      {array.map((element, index) => (
        <React.Fragment key={index}>
          {element}
          <br />
        </React.Fragment>
      ))}
    </Message>
  )
}