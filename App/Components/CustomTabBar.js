import React from 'react';
import VectorIcon from "./VectorIcon";
import { Colors } from "../Theme/Colors";
import { MetricsMod } from "../Theme/Metrics";
import { ICON_TYPES } from "../Utilities/Constants";
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const TAB_INFO = [
  { iconName: 'hamburger',iconType:ICON_TYPES.MaterialCommunityIcons },
  { iconName: 'profile',iconType:ICON_TYPES.AntDesign},
  { iconName: 'sliders-h',iconType:ICON_TYPES.FontAwesome5 },
];
const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={styles.container}>
      {state.routes.map((route, index) => {
        const { iconName,iconType } = TAB_INFO[index] || {};
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const color = isFocused ? Colors.red : Colors.grey;
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.itemContainer}>
            <VectorIcon name={iconName} type={iconType} color={color} size={MetricsMod.section} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius:MetricsMod.section,
    borderTopRightRadius:MetricsMod.section,
  },
  itemContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: MetricsMod.sixty,
  }
})

