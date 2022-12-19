import {LineChart} from 'react-native-chart-kit';
import {windowWidth} from 'src/components';
import {bezierConfig} from './bezier-line-config';
import {data} from '../chart-data';

export const BezierLineChart = () => {
  return (
    <LineChart
      data={{...data}}
      width={windowWidth - 40}
      height={220}
      yAxisSuffix="$"
      yAxisInterval={1}
      withDots={false}
      chartConfig={{...bezierConfig}}
      bezier
      style={{
        borderRadius: 16,
      }}
    />
  );
};
