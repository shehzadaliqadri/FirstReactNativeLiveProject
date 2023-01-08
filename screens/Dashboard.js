import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import EIcon from 'react-native-vector-icons/Entypo';
import AIcon from 'react-native-vector-icons/AntDesign';
import { ChatIcon, GroupChatIcon, ProfileIcon, Reports, SettingsIcon } from '../components/Icon';

export default function Dashboard({ navigation }) {
    return (
        <View>
            <TouchableOpacity
                style={[{ margin: 5 }, styles.appButtonContainer]}
                onPress={() => { navigation.navigate('Profile') }}>
                <Text style={styles.appButtonText}><ProfileIcon color={styles.appButtonText.color} />Profile Page</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[{ margin: 5 }, styles.appButtonContainer]}
                onPress={() => { navigation.navigate('Work') }}>
                <Text style={styles.appButtonText}><Reports color={styles.appButtonText.color} />Reports</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[{ margin: 5 }, styles.appButtonContainer]}
                onPress={() => { navigation.navigate('Chats') }}>
                <Text style={styles.appButtonText}><ChatIcon color={styles.appButtonText.color} />Chat with others (recorded)</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[{ margin: 5 }, styles.appButtonContainer]}
                onPress={() => { navigation.navigate('GroupChat') }}>
                <Text style={styles.appButtonText}><GroupChatIcon color={styles.appButtonText.color} />Group Chat (recorded)</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={[{ margin: 5 }, styles.appButtonContainer]}
                onPress={() => { navigation.navigate('Setting') }}>
                <Text style={styles.appButtonText}><SettingsIcon color={styles.appButtonText.color} />Settings</Text>
            </TouchableOpacity>


        </View>
    )
}


const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});