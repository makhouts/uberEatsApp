import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <View style={styles.flex}>
        <View>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subtitle}>${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} minutes</Text>
        </View>
        <View style={styles.rating}>
            <Text>{restaurant.rating}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    restaurantContainer: {
      width: '100%',
      marginVertical: 10
    },
    image: {
      width: '100%',
      aspectRatio: 5 / 3,
      marginBottom: 5
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
      marginVertical: 5
    },
    subtitle: {
      color: 'gray',
  
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rating: {
        backgroundColor: 'lightgray',
        width: 30,
        height: 30,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });
  