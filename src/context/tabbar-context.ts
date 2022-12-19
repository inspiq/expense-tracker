import {useContext} from 'react';
import {TabBarContext} from 'src/providers/tabbar-provider';

export const useTabBarContext = () => useContext(TabBarContext);
