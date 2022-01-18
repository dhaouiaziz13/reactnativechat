import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";
import Auth from "./components/Auth";
import Signup from "./components/Signup"
import Login from "./components/Login"
export default function App() {
  const [loaded] = useFonts({
    Dongle: require('./assets/fonts/Dongle-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<Auth/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
      </Routes>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
