import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';
const window = Dimensions.get('window');
const PAGE_WIDTH = window.width;
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const PaginationItem = props => {
  const {animValue, index, length, backgroundColor, isRotate} = props;
  const width = 10;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);

  return (
    <View
      style={{
        backgroundColor: 'white',
        width,
        height: width,
        borderRadius: 50,
        overflow: 'hidden',
        transform: [
          {
            rotateZ: isRotate ? '90deg' : '0deg',
          },
        ],
      }}>
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  );
};

export default function App() {
  const [isVertical, setIsVertical] = useState(false);
  const [isFast, setIsFast] = useState(false);
  const progressValue = useSharedValue(0);
  const [autoPlay, setAutoPlay] = useState(false);

  const [pagingEnabled, setPagingEnabled] = useState(false);
  const [enableSnap, setEnableSnap] = useState(false);

  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_WIDTH * 0.6,
  };

  const CAROUSEL_ITEMS = [
    '#26292E',
    '#899F9C',
    '#B3C680',
    '#5C6265',
    '#F5D399',
    '#F5D399',
    '#F5D399',
    '#F5D399',
    '#F5D399',
    '#F5D399',
    '#F5D399',
  ];

  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
      }}>
      <Carousel
        {...baseOptions}
        loop
        pagingEnabled={pagingEnabled}
        enableSnap={enableSnap}
        autoPlay={true}
        autoPlayInterval={1500}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        // mode="parallax"
        parallaxScrollingScale={0.9}
        parallaxScrollingOffset={50}
        data={CAROUSEL_ITEMS}
        renderItem={() => <SBImageItem />}
      />
      {!!progressValue && (
        <View
          style={
            isVertical
              ? {
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: 10,
                  alignSelf: 'center',
                  position: 'absolute',
                  right: 5,
                  top: 40,
                }
              : {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 100,
                  alignSelf: 'center',
                }
          }>
          {CAROUSEL_ITEMS.map((backgroundColor, index) => {
            return (
              <PaginationItem
                backgroundColor={backgroundColor}
                animValue={progressValue}
                index={index}
                key={index}
                isRotate={isVertical}
                length={CAROUSEL_ITEMS.length}
              />
            );
          })}
        </View>
      )}
    </SafeAreaView>
  );
}

// : React.FC<{
//   index: number;
//   backgroundColor: string;
//   length: number;
//   animValue: Animated.SharedValue<number>;
//   isRotate?: boolean;
// }>

const SBImageItem = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" />
      <Image
        style={styles.image}
        source={{
          uri: `https://picsum.photos/800/600?t=${new Date().getTime()}`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  image: {
    borderRadius: 4,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
