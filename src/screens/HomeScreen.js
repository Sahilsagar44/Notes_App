import { View,FlatList, Image, Text} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import Header from './../Components/Header';
import AddButton from './../Components/AddButton';
import NoteItem from './../Components/NoteItem';
import { FlashList } from '@shopify/flash-list';

const sampleNotes = [
  {
    id: "1",
    title: "Grocery List",
    description: "Milk, eggs, bread, and fruits",
    createdAt: Date.now(),
    bgImage: "https://picsum.photos/300/200?random=1",
  },
  {
    id: "2",
    title: "Meeting Notes",
    description: "Project kickoff meeting with client",
    createdAt: Date.now() - 1000000,
    bgImage: "https://picsum.photos/300/200?random=2",
  },
  {
    id: "3",
    title: "Ideas",
    description: "App concept: offline + online notes sync",
    createdAt: Date.now() - 2000000,
    bgImage: "https://picsum.photos/300/200?random=3",
  },
];

const HomeScreen = ({navigation}) => {
  // const { isDark } = useTheme();
    const { colorScheme, toggleTheme } = useTheme();
    const renderItem = ({item}) =>{
      return (
       <NoteItem
            note={item}
            index={(note) =>
              navigation.navigate("AddNoteScreen", { note })
            }
       />
          )
}

  return (
    <View className={`flex-1 bg-white dark:bg-black`}>
      <Header />
      <FlashList
        data={sampleNotes}
        keyExtractor={(item)=>item.id}
        renderItem={renderItem}
        contentContainerStyle={{ flexGrow: 1,paddingBottom:'10%'}}
        estimatedItemSize={120}
        ListEmptyComponent={
          <View className='flex-1 items-center justify-center'>
            <Image
              source={require('../assets/image/empty-note.jpg')}
              className='w-55 h-55 mb-4'
              resizeMode='contain'
            />
            <Text className='text-lg font-medium text-gray-600 dark:text-gray-300'>Create Your First Note</Text>
          </View>
        }
      />
      <View className='absolute bottom-10 right-10'>
      <AddButton />
      </View>
    </View>
  );

};

export default HomeScreen;