import React from 'react';
import { MdFiberManualRecord } from 'react-icons/md';

import {
  ContainerDelivered,
  ContainerPending,
  ContainerCanceled,
  ContainerStarted,
} from './styles';

export function ActionDelivered() {
  return (
    <ContainerDelivered>
      <MdFiberManualRecord size={20} color="#2CA42B" />
      <span>ENTREGUE</span>
    </ContainerDelivered>
  );
}
export function ActionPending() {
  return (
    <ContainerPending>
      <MdFiberManualRecord size={20} color="#C1BC35" />
      <span>PENDENTE</span>
    </ContainerPending>
  );
}
export function ActionCanceled() {
  return (
    <ContainerCanceled>
      <MdFiberManualRecord size={20} color="#DE3B3B" />
      <span>CANCELADO</span>
    </ContainerCanceled>
  );
}
export function ActionStarted() {
  return (
    <ContainerStarted>
      <MdFiberManualRecord size={20} color="#588CEF" />
      <span>RETIRADO</span>
    </ContainerStarted>
  );
}
