import React from "react";
import { View } from "react-native";
import { Svg } from "react-native-svg";
import KekuleRenderer from "./KekuleRenderer"; // Assumindo que esse componente existe e renderiza a molécula

interface Props {
  formula: string;
}

const DesenhoFuncaoOrganica: React.FC<Props> = ({ formula }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Svg width={200} height={200}>
        <KekuleRenderer smiles={formula} />
      </Svg>
    </View>
  );
};

export default DesenhoFuncaoOrganica;
