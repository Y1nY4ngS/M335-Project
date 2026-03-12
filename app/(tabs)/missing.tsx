import { View, Text, StyleSheet } from 'react-native';

export default function MissingItemsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Missing Items</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});