import {ContentContainer, DotsPagination, Dot} from './styles';
import carousel from 'assets/carousel';
import OnboardingItem from './carousel-item/onboarding-item';
import React, {useState} from 'react';
import Container from 'src/components/container/container';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

const OnboardingCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== activeSlide) {
      setActiveSlide(slide);
    }
  };

  return (
    <>
      <ContentContainer
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}>
        {carousel.map(item => (
          <Container key={item.id}>
            <OnboardingItem item={item} />
          </Container>
        ))}
      </ContentContainer>
      <DotsPagination>
        {carousel.map((el, i) => (
          <Dot key={el.id} i={i} activeSlide={activeSlide} />
        ))}
      </DotsPagination>
    </>
  );
};

export default OnboardingCarousel;
