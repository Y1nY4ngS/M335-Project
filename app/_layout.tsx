import { Stack } from 'expo-router';
import { ItemsProvider } from '../components/items-context';

export default function RootLayout() {
  return (
    <ItemsProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ItemsProvider>
  );
}