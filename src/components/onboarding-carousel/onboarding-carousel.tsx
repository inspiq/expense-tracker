import {ContentContainer, DotsPagination, Dot} from './styles';
import carousel from '../../../assets/carousel';
import OnboardingItem from './carousel-item/onboarding-item';
import React, {useState} from 'react';
import Container from '../container/container';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

const OnboardingCarousel = () => {
  const [active, setActive] = useState(0);

  const change = ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <>
      <ContentContainer
        horizontal
        pagingEnabled
        onScroll={change}
        showsHorizontalScrollIndicator={false}>
        {carousel.map(item => (
          <Container>
            <OnboardingItem item={item} />
          </Container>
        ))}
      </ContentContainer>
      <DotsPagination>
        {carousel.map((el, i) => (
          <Dot key={i} i={i} active={active} />
        ))}
      </DotsPagination>
    </>
  );
};

export default OnboardingCarousel;
