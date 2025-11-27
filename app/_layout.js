import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{  tabBarActiveTintColor: "#0f68",
            tabBarInactiveTintColor: "#0f684b"}}>
            
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="temaobgt"
                options={{
                    title: 'Obrigatório',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="group" color={color} />,
                    headerShown: false,
                }}
            />

            <Tabs.Screen
                name="temalivre"
                options={{
                    title: 'Livre',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="soccer-ball-o" color={color} />,
                    headerShown: false,
                }}
            />

            <Tabs.Screen
                name="sobremim"
                options={{
                    title: 'Sobre',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="person" color={color} />,
                    headerShown: false,
                }}
            />

        </Tabs>
    );
}
