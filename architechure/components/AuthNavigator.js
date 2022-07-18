import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Intro } from '../screens/intro';
import { Profile } from '../screens/Profile';
import { Home } from '../screens/Homescreens';
import { Popular } from '../screens/Popular';
import { Loop } from '../components/loop';

 const Stack = createNativeStackNavigator();

export function AuthNavigator () {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Intro' component={Intro} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Loop' component={Loop} />
            <Stack.Screen name='Popular' component={Popular} options={{
                headerShown:true,
                title:'From Popular Pizzas',
                headerStyle:{
                    backgroundColor:'#65C18C'
                },
                headerTintColor:'#C1F4C5',
                headerTitleStyle:{
                    fontWeight:'bold',
                    fontSize:20
                },
                headerBackTitle:'Go back'
                }} 
            />
        </Stack.Navigator>
    )
}