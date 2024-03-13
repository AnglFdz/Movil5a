import React, { useState } from "react";
import { Input, Button, Image, Icon, Color, Text } from '@rneui/base';
import { View, StyleSheet, ScrollView } from 'react-native';
import Logo from '../../../../../assets/logoo.png';
import { isEmpty } from 'lodash';

export default function PracticaExamen(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                {/* Container 1: ScrollView con 6 imágenes pequeñitas */}
                <Image source={require('../../../../../assets/logoo.png')} style={styles.smallImage} />
                <Image source={require('../../../../../assets/logoo.png')} style={styles.smallImage} />
                <Image source={require('../../../../../assets/logoo.png')} style={styles.smallImage} />
                <Image source={require('../../../../../assets/logoo.png')} style={styles.smallImage} />
                <Image source={require('../../../../../assets/logoo.png')} style={styles.smallImage} />
                <Image source={require('../../../../../assets/logoo.png')} style={styles.smallImage} />
                <Image source={require('../../../../../assets/logoo.png')} style={styles.smallImage} />
                {/* ... Otras 4 imágenes pequeñas */}
            </View>
            <View style={styles.container2}>
                {/* Container 2: Texto */}
                <Text>Texto en Container 2</Text>
            </View>
            <View style={styles.container3}>
                {/* Container 3: Imágenes de tamaño normal */}
                <Image source={require('../../../../../assets/logoo.png')} style={styles.normalImage} />
                <Image source={require('../../../../../assets/logoo.png')} style={styles.normalImage} />
                {/* ... Otras imágenes de tamaño normal */}
            </View>
            <View style={styles.container4}>
                {/* Container 4: Dos textos y un botón */}
                <Text>Texto 1 en Container 4</Text>
                <Text>Texto 2 en Container 4</Text>
                <Button onPress={() => console.log('Botón presionado')}>Mi Botón</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        
    },
    container1: {
        backgroundColor: "#fff",
        flexDirection: 'row',
    },
    container2: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container3: {
        flex: 3,
        backgroundColor: "#fff",
    },
    container4: {
        flex: 1,
        backgroundColor: "#fff",
    },
    smallImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        margin: 5,
        
        
    },
    normalImage: {
        width: 150,
        height: 150,
        resizeMode: 'cover', // O ajusta según tus necesidades
        margin: 5,
    },
});
