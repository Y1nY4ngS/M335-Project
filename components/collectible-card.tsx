import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export type CollectibleItem = {
  id: number;
  name: string;
  locationhint: string[];
  maps: string[];
};

type CollectibleCardProps = {
  item: CollectibleItem;
  isFound: boolean;
  onPress: () => void;
};

export default function CollectibleCard({
  item,
  isFound,
  onPress,
}: CollectibleCardProps) {
  return (
    <Pressable
      style={[styles.card, isFound && styles.cardFound]}
      onPress={onPress}
    >
      <Text style={[styles.title, isFound && styles.titleFound]} numberOfLines={2}>
        {item.name}
      </Text>

      <View style={styles.separator} />

      <View
        style={[
          styles.imagePlaceholder,
          isFound && styles.imagePlaceholderFound,
        ]}
      >
        <Text style={styles.placeholderText}>Image coming soon</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#1f1f1f',
    borderRadius: 14,
    padding: 12,
    minHeight: 220,
    borderWidth: 2,
    borderColor: '#3a3a3a',
  },
  cardFound: {
    borderColor: '#22c55e',
    backgroundColor: '#16261b',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    minHeight: 44,
    textAlign: 'center',
  },
  titleFound: {
    color: '#d9ffe4',
  },
  separator: {
    height: 1,
    backgroundColor: '#555',
    marginVertical: 10,
  },
  imagePlaceholder: {
    flex: 1,
    minHeight: 130,
    borderRadius: 10,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2b2b2b',
  },
  imagePlaceholderFound: {
    borderColor: '#22c55e',
    backgroundColor: '#203326',
  },
  placeholderText: {
    color: '#a1a1a1',
    fontSize: 13,
  },
});