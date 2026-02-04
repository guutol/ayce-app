import { AyceOptions } from "@/types/AyceOption";
import { View, Text, TouchableOpacity } from "react-native";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  label: string;
  type: AyceOptions;
};

export function Rodizio({ label, type, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}
