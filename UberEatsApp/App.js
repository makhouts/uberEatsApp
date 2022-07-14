import { StyleSheet, View } from 'react-native';
import { HomeScreen } from './src/screens/index';

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default App;