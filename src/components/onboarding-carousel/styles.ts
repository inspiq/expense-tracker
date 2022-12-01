import styled from 'styled-components/native';
import {mainStyles} from 'src/variables/styles';

export const ContentContainer = styled.ScrollView`
  flex-grow: 1;
  margin-top: 32px;
  position: relative;
`;

export const DotsPagination = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
  height: 16px;
`;

export const Dot = styled.Text<{i: number; activeSlide: number}>`
  background: ${props =>
    props.i == props.activeSlide
      ? mainStyles.color.violet100
      : mainStyles.color.dotDisable};
  margin: ${props => (props.i == 1 ? '16px' : '0px')};
  width: ${props => (props.i == props.activeSlide ? '16px' : '8px')};
  height: ${props => (props.i == props.activeSlide ? '16px' : '8px')};
  border-radius: 50px;
`;
