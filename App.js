import { StatusBar, SafeAreaView, StyleSheet, View } from "react-native";
import Cesta from "./src/telas/Cesta";
import mock from "./src/mocks/cesta";

import Constants from "expo-constants";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import AppLoading from "expo-app-loading";

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
