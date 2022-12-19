import styled from 'styled-components/native';
import {mainStyles} from 'src/variables/styles';

export const ContentContainer = styled.ScrollView`
  margin-top: 8px;
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
  background: ${({i, activeSlide}) =>
    i == activeSlide ? mainStyles.color.violet100 : mainStyles.color.violet20};
  margin: ${({i}) => (i == 1 ? '16px' : '0px')};
  width: ${({i, activeSlide}) => (i == activeSlide ? '16px' : '8px')};
  height: ${({i, activeSlide}) => (i == activeSlide ? '16px' : '8px')};
  border-radius: 50px;
`;
