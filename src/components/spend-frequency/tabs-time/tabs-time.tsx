import {useState} from 'react';
import {TabItems} from './styles';
import TabTime from './tab-time/tab-time';

const TabsTime = () => {
  const [activeTabTime, setActiveTabTime] = useState(0);

  return (
    <TabItems>
      <TabTime
        index={0}
        titleTabTime="Today"
        activeTabTime={activeTabTime}
        setActiveTabTime={setActiveTabTime}
      />
      <TabTime
        index={1}
        titleTabTime="Week"
        activeTabTime={activeTabTime}
        setActiveTabTime={setActiveTabTime}
      />
      <TabTime
        index={2}
        titleTabTime="Month"
        activeTabTime={activeTabTime}
        setActiveTabTime={setActiveTabTime}
      />
      <TabTime
        index={3}
        titleTabTime="Year"
        activeTabTime={activeTabTime}
        setActiveTabTime={setActiveTabTime}
      />
    </TabItems>
  );
};

export default TabsTime;
