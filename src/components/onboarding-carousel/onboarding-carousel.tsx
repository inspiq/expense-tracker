import {ContentContainer, DotsPagination, Dot} from './styles';
import carousel from 'assets/carousel';
import OnboardingItem from './carousel-item/onboarding-item';
import {useState} from 'react';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

export const OnboardingCarousel = () => {
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
          <OnboardingItem item={item} key={item.id} />
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
