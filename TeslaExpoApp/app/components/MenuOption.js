import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

const MenuOption = ({option}) => {
  return (
    <View style={styles.optionRow}>
      <MaterialCommunityIcons name={option.iconName} size={26} color="gray" />
      <Text style={styles.optionText}>{option.name}</Text>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color="gray"
        style={{ marginLeft: 'auto' }} //put the icon to extreme right
      />
    </View>
  )
}

export default MenuOption

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },
  optionText: {
    color: '#eee',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
})