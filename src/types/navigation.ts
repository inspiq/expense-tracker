import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Screens} from 'src/navigation/routes';

export interface Router {
  navigation: NavigationProp<ParamListBase, Screens>;
}
