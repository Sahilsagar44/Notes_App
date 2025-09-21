import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { colors } from './../theme/colors';
import { useTheme } from '../theme/ThemeProvider';

const Header = () => {
  const { colorScheme,toggleTheme } = useTheme();
  return (
    <View className='flex-row justify-between px-5 py-5 '>
      <Text className='text-black dark:text-white font-story text-5xl'>Notes</Text>
      <View className='flex-row gap-5'>
      <TouchableOpacity className='p-4 bg-gray-200 dark:bg-[#3B3B3B] rounded-[10]'>
        <MaterialIcons name='search' size={25} color={colorScheme==='light' ? colors.light.iconColor : colors.dark.iconColor} />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleTheme}  className='p-4 items-center justify-center bg-gray-200 dark:bg-[#3B3B3B] rounded-[10]'>
        <MaterialIcons name={colorScheme==='light'?'dark-mode':'light-mode'} size={25} color={colorScheme==='light' ? colors.light.iconColor : colors.dark.iconColor} />
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header