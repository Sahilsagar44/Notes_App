import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { format } from "date-fns";
import { useTheme } from '../theme/ThemeProvider';

const NoteItem = ({ note, index }) => {
    const { colorScheme } = useTheme()
    return (
        <View >
            <TouchableOpacity onPress={() => index(note)} className='mb-5 mx-6 rounded-xl'
                style={{
                    shadowColor: colorScheme==='light' ? '#000000':'#FFFFFF',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.75,
                    shadowRadius: 6,
                    elevation: 6,
                }}
            >
                <ImageBackground source={colorScheme === 'light' ? require("../assets/image/light-note-bg.jpg") : require("../assets/image/note-bg.jpg")}
                    className="px-7 py-6 overflow-hidden"
                    imageStyle={{ borderRadius: 12 }}
                >
                    <Text
                        className="text-3xl font-semibold text-black dark:text-white"
                        numberOfLines={1}
                    >
                        {note.title}
                    </Text>

                    <Text
                        className="text-sm text-gray-700 dark:text-gray-300  mt-1"
                        numberOfLines={2}
                    >
                        {note.description}
                    </Text>

                    <Text className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                        {format(new Date(note.createdAt), "dd MMM yyyy, HH:mm")}
                    </Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

export default NoteItem