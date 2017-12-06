import { ScreenSize } from './screenSize';

const fontSizes = {
  h0: ScreenSize.isLarge ? 30 : ScreenSize.isMedium ? 26 : 24,
  h1: ScreenSize.isLarge ? 28 : ScreenSize.isMedium ? 24 : 22,
  h2: ScreenSize.isLarge ? 26 : ScreenSize.isMedium ? 22 : 20,
  h3: ScreenSize.isLarge ? 24 : ScreenSize.isMedium ? 20 : 18,
  h4: ScreenSize.isLarge ? 22 : ScreenSize.isMedium ? 18 : 16,
  h5: ScreenSize.isLarge ? 20 : ScreenSize.isMedium ? 16 : 14,
  h6: ScreenSize.isLarge ? 18 : ScreenSize.isMedium ? 14 : 12,
  h7: ScreenSize.isLarge ? 16 : ScreenSize.isMedium ? 12 : 10,
  p: ScreenSize.isLarge ? 20 : ScreenSize.isMedium ? 16 : 14,
};

export default fontSizes;