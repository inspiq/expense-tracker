import {StatusBar} from 'react-native';
import {
  Container,
  Wrapper,
  SpendFrequency,
  RecentTransaction,
} from 'src/components';
import {mainStyles} from 'src/variables/styles';
import styled from 'styled-components/native';

export const HomeScreen = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={mainStyles.color.beige}
      />
      <Wrapper>
        <Container>
          <Separator>
            <SpendFrequency />
            <RecentTransaction />
          </Separator>
        </Container>
      </Wrapper>
    </>
  );
};

const Separator = styled.View`
  margin: 261px 0px 88px 0px;
`;
