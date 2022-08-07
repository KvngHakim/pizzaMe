import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Intro } from '../screens/intro';
import { Profile } from '../screens/Profile';
import { Home } from '../screens/Homescreens';
import { Popular } from '../screens/Popular';
import { Loop } from '../components/loop';
import { Theme } from '../theme/Theme';
import { Order } from '../screens/Order';

const Stack = createNativeStackNavigator();

export function AuthNavigator () {
    return (
        <Stack.Navigator initialRouteName='Order' screenOptions={{headerShown:true}}>
            <Stack.Screen name='Intro' component={Intro} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Loop' component={Loop} />
            <Stack.Screen name='Popular' component={Popular} options={{
                headerShown:true,
                title:'From Popular Pizzas',
                headerStyle:{
                    backgroundColor:Theme.colors.ui.success
                },
                headerTintColor:'#C1F4C5',
                headerTitleStyle:{
                    fontWeight:'bold',
                    fontSize:20
                },
                headerBackTitle:'Go back'
                }} 
            />
            <Stack.Screen name='Order' component={Order} />
        </Stack.Navigator>
    )
}