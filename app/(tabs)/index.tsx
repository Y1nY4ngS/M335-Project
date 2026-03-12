import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { items } from '../../assets/data/items';
import CollectibleCard from '../../components/collectible-card';
import { useItems } from '../../components/items-context';

export default function AllItemsScreen() {
  const { foundItems, toggleItem } = useItems();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>All Red Collectibles</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <CollectibleCard
            item={item}
            isFound={!!foundItems[item.id]}
            onPress={() => toggleItem(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  header: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  list: {
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
});