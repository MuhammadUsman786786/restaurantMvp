import React from 'react'
import { OrderItem } from "../Components";
import { FlatList, StyleSheet, View } from 'react-native'
import { MetricsHorizontal } from "../Theme/Metrics";
import DATA_LIST from '../DataAssets/OrderHistory.json'


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

