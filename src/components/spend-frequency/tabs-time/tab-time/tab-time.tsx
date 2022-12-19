import {Dispatch, SetStateAction} from 'react';
import {TabItem} from './styles';
import {TabTitle} from './styles';

interface TabTimeProps {
  titleTabTime: string;
  index: number;
  activeTabTime: number;
  setActiveTabTime: Dispatch<SetStateAction<number>>;
}

const TabTime = ({
  titleTabTime,
  index,
  activeTabTime,
  setActiveTabTime,
}: TabTimeProps) => {
  return (
    <TabItem
      activeOpacity={0.8}
      index={index}
      onPress={() => setActiveTabTime(index)}
      activeTabTime={activeTabTime}>
      <TabTitle index={index} activeTabTime={activeTabTime}>
        {titleTabTime}
      </TabTitle>
    </TabItem>
  );
};

export default TabTime;
