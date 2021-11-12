import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from "../Theme/Colors";
import { MetricsHorizontal, MetricsMod } from "../Theme/Metrics";
import { Fonts } from "../Theme/Fonts";
import { ICON_TYPES, ORDER_STATUS_KEYS } from "../Utilities/Constants";
import VectorIcon from "./VectorIcon";
import moment from "moment";

const STATUS_TO_COLOR_MAP = {
  [ORDER_STATUS_KEYS.PROCESSING]: Colors.orange,
  [ORDER_STATUS_KEYS.COMPLETED]: Colors.green,
}

const OrderItem = ({ item }) => {
  const {
    orderID,
    date,
    time,
    price,
    mealName,
    orderStatus,
    restaurantName,
  } = item || {}
  const statusColor = STATUS_TO_COLOR_MAP[orderStatus]

  const onPressNextHandler = () => {
    alert('next is clicked')
  }

  return <View style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.time}>
        {moment(time).format('DD MMM, YYYY hh:mm A')}
      </Text>
      <Text
        style={[styles.orderStatus, { color: statusColor }]}>{orderStatus}</Text>
    </View>
    <Text style={styles.mealName}>{mealName} {orderID}</Text>
    <View style={[styles.row, styles.footerRow]}>
      <Text style={styles.restaurantName}>{restaurantName}</Text>
      <TouchableOpacity
        onPress={onPressNextHandler}
        style={[styles.row, styles.nextButtonContainer]}>
        <Text style={styles.price}>{price}</Text>
        <VectorIcon
          type={ICON_TYPES.Feather}
          name={'chevron-right'}
          color={Colors.black}
          style={Fonts.regular}
        />
      </TouchableOpacity>
    </View>
  </View>
}

export default OrderItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: MetricsMod.baseMargin,
    paddingVertical: MetricsMod.fifteen,
    paddingHorizontal: MetricsHorizontal.fifteen,
    borderRadius: MetricsMod.baseMargin
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  time: {
    fontSize: Fonts.regular,
    color: Colors.grey
  },
  orderStatus: {
    fontWeight: 'bold',
    color: Colors.grey,
    fontSize: Fonts.regular1,
  },
  mealName: {
    fontWeight: '500',
    color: Colors.black,
    fontSize: Fonts.large,
    marginTop: MetricsMod.baseMargin
  },
  restaurantName: {
    flex: 1,
    color: Colors.black,
    fontSize: Fonts.regular1,
  },
  price: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: Fonts.regular1,
  },
  nextButtonContainer: {},
  footerRow: {
    alignItems: 'center',
    marginTop: MetricsMod.baseMargin / 2
  }
})

