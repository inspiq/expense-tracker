import React from 'react';
import {ImageRequireSource} from 'react-native';
import {
  SlideImage,
  SlideItem,
  SlideInfo,
  SlideTitle,
  SlideDescription,
} from './styles';

interface CarouselItems {
  item: {
    id: number;
    title: string;
    description: string;
    src: ImageRequireSource;
  };
}

const OnboardingItem = ({item}: CarouselItems) => {
  return (
    <SlideItem>
      <SlideImage source={item.src} />
      <SlideInfo>
        <SlideTitle>{item.title}</SlideTitle>
        <SlideDescription>{item.description}</SlideDescription>
      </SlideInfo>
    </SlideItem>
  );
};

export default OnboardingItem;
