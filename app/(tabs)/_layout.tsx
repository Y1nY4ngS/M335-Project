import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: 'All Items' }}
      />
      <Tabs.Screen
        name="missing"
        options={{ title: 'Missing Items' }}
      />
      <Tabs.Screen
        name="maps"
        options={{ title: 'Maps' }}
      />
    </Tabs>
  );
}