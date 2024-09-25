import {isString} from 'lodash';
import {Dimensions, Platform} from 'react-native';

// Platform •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••--
export const isIos = Platform.OS === 'ios';

// DIMENSIONS •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••--
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

// Base dimensions (iPhone 14 Pro Max)
const baseWidth = 430;
const baseHeight = 932;

// Calculate scale factors
const widthScaleFactor = screenWidth / baseWidth;
const heightScaleFactor = screenHeight / baseHeight;
const scaleFactor = Math.min(widthScaleFactor, heightScaleFactor);

// Scaling functions
export const getSize = (size: number): number => {
  if (isString(size)) {
    return size;
  }

  const numericSize = typeof size === 'string' ? parseFloat(size) : size;
  if (isNaN(numericSize)) {
    return size;
  }

  return Math.round(numericSize * scaleFactor);
};

export const getScaledSize = (size: number): number => {
  return Math.round(size * scaleFactor);
};

export const getScaledWidth = (size: number): number => {
  return Math.round(size * widthScaleFactor);
};

export const getScaledHeight = (size: number): number => {
  return Math.round(size * heightScaleFactor);
};

// Original functions
export const getWidthByRatio = (ratio: number) => screenWidth * ratio;
export const getHeightByRatio = (ratio: number) => screenHeight * ratio;

// on android window is without topBar and bottomBar, on iOS includes topBar
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
export const getWidthByWindowRatio = (ratio: number) => windowWidth * ratio;
export const getHeightByWindowRatio = (ratio: number) => windowHeight * ratio;

// design based on iPhone 14 PRO MAX
// according XD design
export const getAdjustedWidth = (width: number, designScreenWidth = 430) =>
  isString(width) ? width : width * (screenWidth / designScreenWidth);
export const getAdjustedHeight = (height: number, designScreenHeight = 932) =>
  isString(height) ? height : height * (screenHeight / designScreenHeight);

// Export other useful dimensions
export {screenHeight, screenWidth, windowHeight, windowWidth};
