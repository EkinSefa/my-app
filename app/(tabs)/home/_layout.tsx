import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3c7ad8ff',
        },
        headerTintColor: '#ffffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
          
        },
      }}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="details" />
    </Stack>
  );
}
