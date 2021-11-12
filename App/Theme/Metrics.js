import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

export const MetricsHorizontal = {
  baseMargin: scale(10),
  fifteen:scale(15),
  doubleBaseMargin: scale(20),
  section: scale(25),
  doubleSection: scale(50),
};

export const MetricsVertical = {
  baseMargin: verticalScale(10),
  fifteen:moderateScale(15),
  doubleBaseMargin: verticalScale(20),
  section: verticalScale(25),
  doubleSection: verticalScale(50),
};

export const MetricsMod = {
  baseMargin: moderateScale(10),
  fifteen:moderateScale(15),
  doubleBaseMargin: moderateScale(20),
  section: moderateScale(25),
  doubleSection: moderateScale(50),
  sixty: moderateScale(60),
};
