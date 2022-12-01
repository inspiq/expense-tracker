import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Container from 'src/components/container/container';
import Button from 'src/components/UI/button/button';
import Wrapper from 'src/components/wrapper/wrapper';
import {AuthContext} from 'src/providers/auth-provider';

const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);

  return (
    <Wrapper>
      <Container>
        <View>
          <Text>Welcome {user.uid}</Text>
        </View>
        <TouchableOpacity onPress={logout}>
          <Button isPrimaryBackground={true} isPrimaryColor={true}>Logout</Button>
        </TouchableOpacity>
      </Container>
    </Wrapper>
  );
};

export default HomeScreen;
