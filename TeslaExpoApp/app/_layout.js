import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const _layout = ({children}) => {
    return (
      <>
        <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name="index" options={{title:"Home"}} />
        </Stack>
        <StatusBar style="light" />
      </>
        
    )
}

export default _layout;