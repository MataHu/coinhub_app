/**
 * @Author: roycclu
 * @Date:   2017-08-16T10:34:04+08:00
 * @Last modified by:   roycclu
 * @Last modified time: 2017-08-16T12:50:15+08:00
 */

import { Dimensions } from 'react-native';

//iphone 6  w: 375
//iphone 6+ w: 414

const window = Dimensions.get('window');
const width = window.width;
const height = window.height;

const sizes = {
  small: {
    min: 200,
    max: 450,
  },
  medium: {
    min: 450,
    max: 620,
  },
  large: {
    min: 620,
    max: 1000,
  },
};

const SCREEN_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const Screen_Size =
    width >= sizes.small.min && width < sizes.small.max
        ? SCREEN_SIZES.SMALL
        : width >= sizes.medium.min && width < sizes.medium.max
        ? SCREEN_SIZES.MEDIUM
        : SCREEN_SIZES.LARGE;

export const ScreenSize = {
  isSmall: Screen_Size === SCREEN_SIZES.SMALL,
  isMedium: Screen_Size === SCREEN_SIZES.MEDIUM,
  isLarge: Screen_Size === SCREEN_SIZES.LARGE,
};

const fit = array => {
  return ScreenSize.isLarge ? array[0] : ScreenSize.isMedium ? array[1] : array[2];
};

// console.log('Screen_Size', Screen_Size, 'width', width);

ScreenSize.fit = fit;
ScreenSize.width = width;
ScreenSize.height = height;

export default ScreenSize;
