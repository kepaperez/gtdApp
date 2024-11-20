import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import InboxScreen from '../screens/InboxScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign'; 
import { colors } from '../constants';
import IncubatorScreen from '../screens/IncubatorScreen';
import SnoozeScreen from '../screens/SnoozeScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarShowLabel:false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName ='home' ;
              break;
            case 'Inbox':
              iconName = 'inbox';
              break;
            case 'Content':
              iconName ='document'
              break;
            case 'Snooze':
              iconName ='clockcircleo'
              break;
            default:
              break;


              
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.main,
        tabBarInactiveTintColor: colors.blackLigth,
        tabBarStyle: {
          backgroundColor: colors.blackDark,
          borderTopWidth: 0,
          elevation: 10,
          shadowOpacity: 0,
          paddingVertical:10,

        },
      })}
    >
      <Tab.Screen  name="Home" component={HomeScreen} />
      <Tab.Screen name="Incubator" component={IncubatorScreen} />
      <Tab.Screen name="Snooze" component={SnoozeScreen} />
      <Tab.Screen name="Inbox" component={InboxScreen} />

    </Tab.Navigator>
  );
};

export default AppNavigator;