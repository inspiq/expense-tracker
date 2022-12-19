import {
  SlideImage,
  SlideItem,
  SlideInfo,
  SlideTitle,
  SlideDescription,
} from './styles';
import {windowWidth} from 'src/components';
import {ImageRequireSource} from 'react-native';

interface CarouselItemProps {
  id: number;
  title: string;
  description: string;
  src: ImageRequireSource;
}

const OnboardingItem = ({item}: {item: CarouselItemProps}) => {
  return (
    <SlideItem windowWidth={windowWidth}>
      <SlideImage source={item.src} />
      <SlideInfo>
        <SlideTitle>{item.title}</SlideTitle>
        <SlideDescription>{item.description}</SlideDescription>
      </SlideInfo>
    </SlideItem>
  );
};

export default OnboardingItem;
