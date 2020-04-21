import styled from 'styled-components';
import { lighten } from 'polished';

export const ContainerDelivered = styled.div`
  display: flex;
  align-items: center;
  background: ${lighten(0.4, '#2CA42B')};
  padding: 2px 10px;
  border-radius: 8px;
  span {
    color: #2ca42b;
  }
`;
export const ContainerPending = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 8px;
  background: ${lighten(0.4, '#C1BC35')};
  span {
    color: #c1bc35;
  }
`;
export const ContainerCanceled = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 8px;
  background: ${lighten(0.4, '#DE3B3B')};
  span {
    color: #de3b3b;
  }
`;
export const ContainerStarted = styled.div`
  display: flex;
  align-items: center;
  background: ${lighten(0.2, '#588CEF')};
  padding: 2px 10px;
  border-radius: 8px;
  span {
    color: #588cef;
  }
`;
