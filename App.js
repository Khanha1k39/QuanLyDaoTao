import { useEffect, useState } from "react";
import RNPickerSelect from "react-native-picker-select";
// import { Divider } from "@rneui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import LoginScreen from "./screens/SignupScreen";
import AuthContextProvider from "./store/auth-context";

const Stack = createStackNavigator();
export default function App() {
  const state = {};
  return (
    // <>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="login" component={LoginScreen}></Stack.Screen>
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </>
    <AuthContextProvider>
      <Stack.Navigator>
        {state.userToken == null ? (
          // No token found, user isn't signed in
          <Stack.Screen
            name="SignIn"
            component={LoginScreen}
            options={{
              title: "Sign in",
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: state.isSignout ? "pop" : "push",
            }}
          />
        ) : (
          // User is signed in
          <Stack.Screen name="Home" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    color: "#ffffff",
    borderColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  input: {
    color: "#fff",
  },
});
