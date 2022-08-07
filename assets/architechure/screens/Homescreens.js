import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity, FlatList } from 'react-native';
import { Card,  Title, Paragraph, Button } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts, Overpass_100Thin, Overpass_200ExtraLight } from '@expo-google-fonts/overpass';
import { Header } from '../components/Header';
import { History } from './History';
import { customize } from './Customize';
import { Profile } from './Profile';
import { Notifications } from './Notifications';
import { Ionicons } from '@expo/vector-icons';
import { Theme} from '../theme/Theme';

const data = {
    favourites: [
        { name: 'Mozzarella', price:3450, rating:3.5, id: '1', thumbnail: 'https://cdn-icons.flaticon.com/png/512/2454/premium/2454219.png?token=exp=1656954610~hmac=205b712d391169cf1d932a9d0e7ba82a' },
        { name: 'Parmesan', price:3250, rating:2.5, id: '2', thumbnail: 'https://cdn-icons.flaticon.com/png/512/2497/premium/2497913.png?token=exp=1656594472~hmac=7c065c3ac82f4394166025fe725dcb8d' },
        { name: 'Provolone', price:2500, rating:4.5, id: '3', thumbnail: 'https://cdn-icons-png.flaticon.com/512/1384/1384676.png' },
        { name: 'Blue Cheese',price:4950, rating:4, id: '4', thumbnail: 'https://cdn-icons-png.flaticon.com/512/2674/2674065.png' },
        { name: 'Broccoli', price:3050, rating:1, id: '5', thumbnail: 'https://cdn-icons-png.flaticon.com/512/432/432339.png' }
    ],
    bakersChoice: [
        { name: 'pancetta', id: '6', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg' },
        { name: 'speck', id: '7', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg' },
        { name: 'anchovies', id: '8', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg' },
        { name: 'zucchini', id: '9', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg' },
        { name: 'pancetta', id: '10', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg' }
    ]
}

function HomeScreen ({navigation}) {
    let [FontsLoaded] = useFonts({
        Overpass_200ExtraLight,
        Overpass_100Thin
    });

    return (
        <View style={styles.container} >
            <Header />

            <TextInput
                placeholder='search for a topin'
                outlineColor='#FF9F45'
                underlineColor='#F76E11'
                style={styles.search}
            />

            <View style={styles.popular}>
                <Text style={styles.popularHeadingText}>Polular topins</Text>
                <FlatList data={data.favourites} renderItem={({ item }) => {
                    
                    return (
                        <TouchableOpacity style={styles.popularItem} onPress={ () => {
                            navigation.navigate('Popular',{
                                pizzaImg:item.thumbnail,
                                pizzaName:item.name,
                                pizzaRating:item.rating,
                                pizzaPrice:item.price
                            });
                        } }>
                            <Image source={{ uri: item.thumbnail }} style={{ width: 60, height: 60 }} />
                            <Text style={styles.popularItemText}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                }} key={({ item }) => { item.id }} horizontal />
            </View>

            {/* baker's choice */}
            <View style={styles.bakersChoice}>
                <Text style={styles.popularHeadingText}>Baker's choice</Text>
                <FlatList data={data.bakersChoice} renderItem={({ item }) => {
                    return (
                        <Card style={{marginBottom:10}}>
                            <Card.Cover source={{ uri: item.thumbnail }} />
                            <Card.Content>
                                <Title>{item.name}</Title>
                                <Paragraph>{item.note}</Paragraph>
                                <Button mode='contained' color={Theme.colors.ui.secondary}>Order</Button>
                            </Card.Content>
                        </Card>
                    );
                }} key={({ item }) => { item.id }} />
            </View>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export function Home () {
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
  
                if (route.name === 'HomeScreen') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'History') {
                    iconName = focused ? 'md-file-tray-stacked' : 'ios-file-tray-stacked-outline';
                } else if (route.name === 'Customize') {
                    iconName = focused ? 'ios-logo-codepen' : 'ios-logo-codepen';
                }else if (route.name === 'Profile') {
                    iconName = focused ? 'person-circle' : 'person-circle-outline';
                }else if (route.name === 'Notifications') {
                    iconName = focused ? 'notifications-circle' : 'notifications-circle-outline';
                }
  
              // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#F76E11',
            tabBarInactiveTintColor: 'gray',
          })}
        >
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}} />
            <Tab.Screen name='History' component={History} />
            <Tab.Screen name='Customize' component={customize} options={{headerShown:false}}  />
            <Tab.Screen name='Profile' component={Profile} options={{headerShown:false}} />
            <Tab.Screen name='Notifications' component={Notifications}  />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    search: {
        marginTop: Theme.points[3],
        paddingVertical: Theme.points[3],
        paddingLeft: Theme.points[3],
        borderWidth: 1,
        borderRadius: 50,
        fontSize: Theme.points[3],
        backgroundColor: '#Fff'
    },
    popularHeadingText: {
        fontSize: Theme.points[4],
        marginBottom: Theme.points[2],
        marginTop: Theme.points[3],
        
    },
    popularItem: {
        width: 120,
        height: 120,
        paddingVertical: Theme.points[2],
        paddingHorizontal: Theme.points[2],
        backgroundColor: Theme.colors.ui.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15

    },
    popularItemText: {
        color: Theme.colors.text.primary,
        fontWeight: 'bold'
    }
});