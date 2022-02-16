import React from 'react';
import ModalComponent from 'react-native-modal';
import {ModalWrapper} from './styles';

export default function Modal({isVisible, setIsVisible}) {
  return (
    <ModalComponent
      isVisible={isVisible}
      backdropTransitionOutTiming={0}
      onBackButtonPress={() => setIsVisible(false)}
      onBackdropPress={() => setIsVisible(false)}>
      <ModalWrapper></ModalWrapper>
    </ModalComponent>
  );
}
