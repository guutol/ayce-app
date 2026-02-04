import { View, Text, Image } from "react-native";
import { Button } from "@rneui/themed";
import { styles } from "@/Home/styles";

export function Home() {
  return (
    <View style={[styles.container]}>
      <Image source={require("@/assets/logo.png")} style={[styles.logo]} />
      <Text style={[styles.title]}>Contador de Rodízio</Text>
      <Text style={[styles.subtitle]}>Escolha o tipo de rodízio</Text>
    </View>
  );
}
