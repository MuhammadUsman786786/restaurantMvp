import React from 'react'
import { OrderItem } from "../Components";
import { FlatList, StyleSheet, View } from 'react-native'
import { MetricsHorizontal } from "../Theme/Metrics";

const DATA_LIST = [
  {
    'orderID': '#2BTVG',
    'date': '2021-11-08T18:44:33.928Z',
    'time': '2021-11-08T18:44:33.928Z',
    'price': '$14.46',
    'mealName': 'Avocado Toast',
    'restaurantName': 'NU Kitchen Somerville',
    'orderStatus': 'Processing',
  },
  {
    'orderID': '#2BTVH',
    'date': '2021-11-08T18:44:33.928Z',
    'time': '2021-11-08T18:44:33.928Z',
    'price': '$15.46',
    'mealName': 'Avocado Toast',
    'restaurantName': 'NU Kitchen Somerville',
    'orderStatus': 'Completed',
  }
]

const MyOrdersScreen = (props) => {
  const renderItem = ({ item }) => {
    return <OrderItem item={item} />
  }

  return <View style={styles.container}>
    <FlatList
      data={DATA_LIST}
      renderItem={renderItem}
      keyExtractor={(item) => item.orderID}
      contentContainerStyle={styles.listContainer}
    />
  </View>
}

export default MyOrdersScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flexGrow:1,
    paddingHorizontal: MetricsHorizontal.baseMargin
  }
})

