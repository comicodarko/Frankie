import React, {useRef} from 'react';
import {
  Cover,
  ContentArea,
  Message,
  MessagesWrapper,
  MessageText,
  NoCover,
  Content,
} from './styles';

export default function Chat({messages, setModal}) {
  const refChat = useRef(null);

  function handleDetailContent() {
    setModal(true);
  }

  return (
    <MessagesWrapper
      ref={refChat}
      contentContainerStyle={{paddingBottom: 20}}
      onContentSizeChange={() => refChat.current.scrollToEnd({animated: true})}>
      {messages.map((message, index) => (
        <Message key={index} frankie={message.frankie}>
          <MessageText>{message.message}</MessageText>
          {message.content && (
            <ContentArea horizontal>
              {message.content.map((element, index) => {
                return (
                  <Content key={index} onPress={handleDetailContent}>
                    {element.cover ? (
                      <Cover
                        resizeMode="stretch"
                        source={{uri: `http:${element.cover}`}}
                      />
                    ) : (
                      <NoCover>{element.name}</NoCover>
                    )}
                  </Content>
                );
              })}
            </ContentArea>
          )}
        </Message>
      ))}
    </MessagesWrapper>
  );
}
