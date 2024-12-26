import { View, Text } from 'react-native'

import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'

const CalculatorApp = () => {
  return (
    <View
      style={ globalStyles.calculatorContainer }
    >
      <ThemeText
        numberOfLines={1}
        adjustsFontSizeToFit={true}
        variant='h1'
      >
        50 + 50
      </ThemeText>

      <ThemeText
        numberOfLines={1}
        adjustsFontSizeToFit={true}
        variant='h2'
      >
        100
      </ThemeText>

    </View>
  )
}

export default CalculatorApp