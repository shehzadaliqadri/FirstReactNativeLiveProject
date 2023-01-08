import EIcon from 'react-native-vector-icons/Entypo';
import MIIcon from 'react-native-vector-icons/MaterialIcons';
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import IIcon from 'react-native-vector-icons/Ionicons';


export function ProfileIcon({ color }) {
    return (<AIcon
        size={25}
        color={color}
        name="profile"
    />)
}

export function DashboardIcon({ color }) {
    return (<MIIcon
        size={25}
        color={color}
        name="dashboard"
    />)
}

export function ChatIcon({ color }) {
    return (<EIcon
        size={25}
        color={color}
        name="chat"
    />)
}

export function GroupChatIcon({ color }) {
    return (<FAIcon
        size={25}
        color={color}
        name="object-group"
    />)
}

export function SettingsIcon({ color }) {
    return (<FIcon
        size={25}
        color={color}
        name="settings"
    />)
}

export function Reports({ color }) {
    return (<IIcon
        size={25}
        color={color}
        name="file-tray-full-outline"
    />)
}
// function componentIcon(whichLib, name, size) {
//     return (`<${whichLib} name=${name} size=${size}/>`)
// }

// const con = () => {
//     return (componentIcon(`AIcon`, `profile`, 100))
// }
// const ProfileIcon = componentIcon(`AIcon`, `profile`, 100)

// console.log(con)
