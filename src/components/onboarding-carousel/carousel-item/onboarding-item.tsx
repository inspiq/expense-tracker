import React from 'react';
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
    src: string;
  };
}

const OnboardingItem = ({item}: CarouselItems) => {
  return (
    <SlideItem key={item.id}>
      <SlideImage source={item.src} />
      <SlideInfo>
        <SlideTitle>{item.title}</SlideTitle>
        <SlideDescription>{item.description}</SlideDescription>
      </SlideInfo>
    </SlideItem>
  );
};

export default OnboardingItem;
