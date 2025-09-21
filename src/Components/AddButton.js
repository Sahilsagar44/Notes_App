import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import  Octicons  from 'react-native-vector-icons/Octicons';
import { useTheme } from '../theme/ThemeProvider';
import { colors } from './../theme/colors';
import { useNavigation } from '@react-navigation/native';

const AddButton = () => {
    const {colorScheme} = useTheme()
    const navigation = useNavigation()
  return (
    <View >
      <TouchableOpacity onPress={()=>navigation.navigate('AddNoteScreen')}
      className="w-20 h-20 bg-gray-200 dark:bg-[#3B3B3B] rounded-full items-center justify-center shadow-lg">
        <Octicons name='plus' size={35} color={colorScheme==='light'?colors.light.iconColor:colors.dark.iconColor}/>
      </TouchableOpacity>
    </View>
  )
}

export default AddButton