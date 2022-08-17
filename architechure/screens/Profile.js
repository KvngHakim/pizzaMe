import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';


export function Profile() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.bio}>
                    <View style={styles.topHeader}>
                        <Image style={[styles.camera, { backgroundColor: 'grey' }]} source={require('../../assets/images/camera.png')} />
                        <Text style={styles.newText}>Edit details</Text>
                    </View>
                    <Text style={styles.headBar}>PROFILE</Text>
                    <Image source={require('../../assets/images/jack.jpg')} style={styles.pPic} />
                    <Text style={styles.nameBar}>Jack Robinson</Text>
                    <Text style={styles.email}>meetjoeblack@gmail.com</Text>
                    <View style={styles.editBar}>
                        <Button mode='text' style={styles.btn}>Edit Details <Image source={require('../../assets/images/buttonPic.png')} style={styles.editDetails} /></Button>
                    </View>
                </View>
                <ScrollView style={styles.details}>
                    <View style={styles.city}>
                        <Image style={styles.icons} source={require('../../assets/images/location.png')} />
                        <Text style={styles.cityText}>Ikeja, Lagos</Text>
                        <Image style={styles.icons} source={require('../../assets/images/next.png')} />
                    </View>

                    <View style={styles.address}>
                        <Image style={styles.icons} source={require('../../assets/images/homeAddress.png')} />
                        <View style={styles.addressTextBar}>
                            <Text style={styles.addressText1}>62 Gado Nasko Road,</Text>
                            <Text style={styles.addressText2}>Kubwa, Bwari</Text>
                        </View>
                        <Image style={styles.icons} source={require('../../assets/images/next.png')} />
                    </View>

                    <View style={styles.city}>
                        <Image style={styles.icons} source={require('../../assets/images/hide.png')} />
                        <Text style={styles.nt}>Change password</Text>
                        <Image style={styles.icons} source={require('../../assets/images/next.png')} />
                    </View>

                    <View style={styles.logoutBar}>
                        <Image style={styles.icons} source={require('../../assets/images/logout.png')} />
                        <Text style={styles.logoutText}>Logout</Text>
                    </View>
                </ScrollView>
                <View style={styles.ratBar}>
                    <View style={styles.rating}>
                        <FontAwesomeIcon icon={faStar} color='#FF9F45' size={40} style={{ marginRight: 5 }} />
                        <FontAwesomeIcon icon={faStar} color='#FF9F45' size={40} style={{ marginRight: 5 }} />
                        <FontAwesomeIcon icon={faStar} color='#FF9F45' size={40} style={{ marginRight: 5 }} />
                        <FontAwesomeIcon icon={faStar} color='#FF9F45' size={40} style={{ marginRight: 5 }} />
                        <FontAwesomeIcon icon={faStarHalfStroke} color='#FF9F45' size={40} style={{ marginRight: 5 }} />
                    </View>
                    <Text style={styles.rate}>Rate Us</Text>
                </View>

                {/*icon to point right */}


            </View>

        </ScrollView>

    )
}


const styles = StyleSheet.create({
    bio: {
        backgroundColor: '#FF9F45',
    },

    cityText: {
        fontSize: 40,
        fontStyle: 'italic',
        color: '94B49F',
    },
    addressText1: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '94B49F',
        textAlign: 'center',
        marginTop: 10,

    },
    addressText2: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '94B49F',
        textAlign: 'center',
        marginBottom: 10

    },
    addressTextBar: {

    },
    nt: {
        fontSize: 25,
        fontStyle: 'italic',
        color: '94B49F',
        marginTop: 15
    },
    logoutText: {
        fontSize: 40,
        fontStyle: 'italic',
        color: '94B49F',
        paddingRight: 125
    },
    pPic: {
        height: 120,
        width: 120,
        borderRadius: 150,
        alignSelf: 'center',
        padding: 15
    },
    nameBar: {
        fontSize: 32,
        fontStyle: 'italic',
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '495C83'
    },
    headBar: {
        fontSize: 50,
        fontStyle: 'italic',
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '495C83',
        justifyContent: 'center'
    },
    email: {
        fontSize: 28,
        fontStyle: 'italic',
        alignSelf: 'center',
        paddingTop: 10,
        paddingHorizontal: 10,

    },
    editDetails: {
        width: 50,
        height: 50
    },
    city: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'grey',
        padding: 5,
        margin: 10,
        backgroundColor: '#FFBC80'
    },
    address: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'grey',
        padding: 5,
        margin: 10,
        backgroundColor: '#FFBC80'
    },
    logoutBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'grey',
        padding: 5,
        margin: 10,
        backgroundColor: '#FFBC80'
    },
    ratBar: {
        paddingTop: 50,
        backgroundColor: '7D9D9C'
    },
    icons: {
        width: 60,
        height: 60,
        alignSelf: 'flex-start'
    },
    camera: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignSelf: 'flex-end',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 10,
        marginRight: 10,
        marginBottom: 5
    },
    newText: {
        fontSize: 20,
        color: 'black',
        fontStyle: 'italic',
        alignSelf: 'flex-end',
        alignContent: 'flex-end',
        alignItems: 'flex-end'
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    rate: {
        fontSize: 50,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center'
    }

})