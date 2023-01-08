// import { createDrawerNavigator } from 'react-navigation-drawer'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../screens/Dashboard';
import Signup from '../screens/Signup';
import Login from '../screens/Login'
import Work from '../screens/Work'
import Chats from '../screens/Chats'
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import GroupChat from '../screens/GroupChat';

// function HomeScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Button
//                 onPress={() => navigation.navigate('Notifications')}
//                 title="Go to notifications"
//             />
//         </View>
//     );
// }

// function NotificationsScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Button onPress={() => navigation.goBack()} title="Go back home" />
//         </View>
//     );
// }

export default function Navigation() {
    // const Drawer = createDrawerNavigator();
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Dashboard'>
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Chats" component={Chats} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Work" component={Work} />
                <Stack.Screen name="GroupChat" component={GroupChat} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Setting" component={Setting} />
            </Stack.Navigator>

            {/* <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator> */}
        </NavigationContainer>
    )
}
