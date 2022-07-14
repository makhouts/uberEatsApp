import { StyleSheet, FlatList } from 'react-native';
import { RestaurantItem } from '../../components/RestaurantItem';
import restaurants from '../../../data/restaurants.json';

export const HomeScreen = () => {
  return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantItem restaurant={item} />;
        }}
      />
  );
}

const styles = StyleSheet.create({

});
