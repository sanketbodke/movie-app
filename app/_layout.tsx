import { Stack } from "expo-router";
import "./globals.css"

export default function RootLayout() {
  return (
      <Stack>
        {/*Hide route groupe header*/}
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
            name="movies/[id]"
            options={{
              headerShown: false,
            }}
        />
      </Stack>
  );
}
