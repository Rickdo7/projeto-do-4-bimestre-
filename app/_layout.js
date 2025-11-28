import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: "#00ffb3",
                tabBarInactiveTintColor: "#b2ffe0",

                tabBarStyle: {
                    backgroundColor: "#00755c",
                    borderTopWidth: 0,
                    height: Platform.OS === "ios" ? 80 : 70,
                    paddingBottom: Platform.OS === "ios" ? 20 : 10,
                    paddingTop: 10,
                     
                   
                },

                tabBarLabelStyle: {
                    fontSize: 13,
                    marginBottom: 4,
                },

                tabBarIconStyle: {
                    marginTop: 6,
                },
            }}
        >

            {/* HOME */}
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesome
                            name="home"
                            size={focused ? 30 : 26}
                            color={color}
                        />
                    ),
                }}
            />

            {/* OBRIGATÓRIO */}
            <Tabs.Screen
                name="temaobgt"
                options={{
                    title: "Obrigatório",
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesome
                            name="group"
                            size={focused ? 30 : 26}
                            color={color}
                        />
                    ),
                }}
            />

            {/* LIVRE */}
            <Tabs.Screen
                name="temalivre"
                options={{
                    title: "Livre",
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesome
                            name="soccer-ball-o"
                            size={focused ? 30 : 26}
                            color={color}
                        />
                    ),
                }}
            />

            {/* SOBRE */}
            <Tabs.Screen
                name="sobremim"
                options={{
                    title: "Sobre",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name="person"
                            size={focused ? 32 : 26}
                            color={color}
                        />
                    ),
                }}
            />

        </Tabs>
    );
}
