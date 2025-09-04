import { View, Text, TextInput, ScrollView, FlatList, Button } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
// import { useTheme } from './../theme/ThemeProvider';
import Header from './../Components/Header';

const HomeScreen = () => {
  // const { isDark } = useTheme();
    const { colorScheme, toggleTheme } = useTheme();

  return (
    <View className={`flex-1 bg-white dark:bg-black`}>
      <Header />
    </View>
  );
};

export default HomeScreen;