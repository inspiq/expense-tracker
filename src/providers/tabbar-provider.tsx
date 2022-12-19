import {createContext, useState} from 'react';
import {ChildrenProp} from 'src/types/children';

export const TabBarContext = createContext<Partial<any>>({});

const TabBarProvider = ({children}: ChildrenProp) => {
  const [isOpenRadialMenu, SetIsOpenRadialMenu] = useState(false);

  return (
    <TabBarContext.Provider
      value={{
        isOpenRadialMenu,
        SetIsOpenRadialMenu,
      }}>
      {children}
    </TabBarContext.Provider>
  );
};

export default TabBarProvider;
