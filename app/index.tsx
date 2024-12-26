import { View, Text } from 'react-native'

import { globalStyles } from '@/styles/global-styles'

const CalculatorApp = () => {
  return (
    <View
      style={ globalStyles.calculatorContainer }
    >
      <Text
        style={{
          fontSize: 50,
          fontFamily: 'SpaceMono',
          color: 'white'
        }}
      >
        CalculatorApp
      </Text>
    </View>
  )
}

export default CalculatorApp