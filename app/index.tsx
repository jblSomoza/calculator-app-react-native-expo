import { View } from "react-native";

import { globalStyles } from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";
import CalculatorButton from "@/components/CalculatorButton";
import { Colors } from "@/constants/Colors";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText numberOfLines={1} adjustsFontSizeToFit={true} variant="h1">
          50 + 50
        </ThemeText>

        <ThemeText numberOfLines={1} adjustsFontSizeToFit={true} variant="h2">
          100
        </ThemeText>
      </View>

      <View style={ globalStyles.row }>
        <CalculatorButton label="C" color={ Colors.lightGray } onPress={() => {}} blackText />
        <CalculatorButton label="+/-" color={ Colors.lightGray } onPress={() => {}} blackText />
        <CalculatorButton label="del" color={ Colors.lightGray } onPress={() => {}} blackText />
        <CalculatorButton label="/" color={ Colors.orange } onPress={() => {}} />
      </View>

      <View style={ globalStyles.row }>
        <CalculatorButton label="7" onPress={() => {}} />
        <CalculatorButton label="8" onPress={() => {}} />
        <CalculatorButton label="9" onPress={() => {}} />
        <CalculatorButton label="x" color={ Colors.orange } onPress={() => {}} />
      </View>

      <View style={ globalStyles.row }>
        <CalculatorButton label="4" onPress={() => {}} />
        <CalculatorButton label="5" onPress={() => {}} />
        <CalculatorButton label="6" onPress={() => {}} />
        <CalculatorButton label="-" color={ Colors.orange } onPress={() => {}} />
      </View>

      <View style={ globalStyles.row }>
        <CalculatorButton label="1" onPress={() => {}} />
        <CalculatorButton label="2" onPress={() => {}} />
        <CalculatorButton label="3" onPress={() => {}} />
        <CalculatorButton label="+" color={ Colors.orange } onPress={() => {}} />
      </View>

      <View style={ globalStyles.row }>
        <CalculatorButton label="0" doubleSize onPress={() => {}} />
        <CalculatorButton label="." onPress={() => {}} />
        <CalculatorButton label="=" color={ Colors.orange } onPress={() => {}} />
      </View>
    </View>
  );
};

export default CalculatorApp;
