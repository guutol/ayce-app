import { View, Text, Image, ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import { styles } from "@/Home/styles";
import { AyceOptions } from "@/types/AyceOption";
import { AyceOptionItem } from "@/types/AyceOptionItem";
import { Rodizio } from "@/components/Rodizio";

const AYCE_OPTION: AyceOptionItem[] = [
  { id: AyceOptions.PIZZA, label: "Pizza" },
  { id: AyceOptions.SUSHI, label: "Sushi" },
  { id: AyceOptions.ESFIHA, label: "Esfiha" },
  { id: AyceOptions.HAMBURGUER, label: "Hambúrguer" },
];

function handleSelect(type: AyceOptions) {
  console.log("clicou");
}

export function Home() {
  return (
    <View style={[styles.container]}>
      <Image source={require("@/assets/logo.png")} style={[styles.logo]} />
      <Text style={[styles.title]}>Contador de Rodízio</Text>
      <Text style={[styles.subtitle]}>Escolha o tipo de rodízio</Text>

      <View
        style={{
          backgroundColor: "red",
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <ScrollView>
          {AYCE_OPTION.map((item) => (
            <Rodizio
              key={item.id}
              label={item.label}
              type={item.id}
              onPress={() => handleSelect(item.id)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
