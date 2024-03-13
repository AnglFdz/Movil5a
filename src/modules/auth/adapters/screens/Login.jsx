import React, { useState } from "react";
import { Input, Button, Image, Icon, Color, Text } from '@rneui/base';
import { View, StyleSheet, Alert } from 'react-native';
import Logo from '../../../../../assets/logoo.png';
import { isEmpty, set } from 'lodash';
 
import Loading from "../../../../kernel/components/Loading";
import {getAuth, signInWithEmailAndPassword, } from "firebase/auth";

export default function Login(props) {
    const { navigation } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
    const [visible, setVisible] = useState(false);
    const auth = getAuth(); 
   
    const login = async () => {
        // proceso inicio de sesion
        if (!isEmpty(email) && !isEmpty(password)) {
            setEmail("");
            setPassword("");

            // Muestra la alerta de inicio de sesión exitoso
            
            setVisible(true);
            try {
                const response = await signInWithEmailAndPassword(
                    auth, 
                    email, 
                    password);
                    navigation.navigate("UserLogged");
                    setOverlayVisible(true);
            } catch (error) {
                console.log("error", error);
            } finally{
                setVisible(false)
            }
        } else {
            setEmailErrorMessage('Campo obligatorio para el correo electrónico');
            setPasswordErrorMessage('Campo obligatorio para la contraseña');
            setTimeout(() => {
                setEmailErrorMessage("");
                setPasswordErrorMessage("");
              }, 2000);
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={Logo}
                style={styles.logo}
                resizeMode="contain" />
            <Input
                placeholder="israel@utez.edu.mx"
                label="Correo electrónico"
                keyboardType="email-address"
                value={email}
                onChange={({ nativeEvent: { text } }) => setEmail(text)}
                labelStyle={styles.label}
                containerStyle={styles.input}
                errorMessage={emailErrorMessage}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="email-outline"
                        color='tomato' />
                } />
            <Input
                placeholder="*********"
                label="Contraseña: *"
                value={password}
                onChange={({ nativeEvent: { text } }) => setPassword(text)}
                labelStyle={styles.label}
                containerStyle={styles.input}
                secureTextEntry={showPassword}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                        color='tomato'
                        onPress={() => setShowPassword(!showPassword)} />
                }
                errorMessage={passwordErrorMessage} />
            <Button
                title='Iniciar sesión'
                onPress={login}
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnStyle}
                titleStyle={{ color: 'black' }} />
            <Button
                title='Regístrate'
                type="clear"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnStylee}
                titleStyle={{ color: 'black' }}
                onPress={() => navigation.navigate('Login')}
            />
            <Loading
            visible={visible}
            title='Iniciando sesion'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        padding: 16
    },
    logo: {
        width: 150,
        height: 120,
        marginBottom: 8
    },
    input: {
        paddingHorizontal: 16,
        marginVertical: 8
    },
    label: {
        color: 'tomato'
    },
    btnStyle: {
        backgroundColor: '#F78341',
    },
    btnStylee: {
        backgroundColor: '#F78341',
    },
    btnContainer: {
        width: '80%',
        marginTop: 10, // Puedes ajustar este valor según tus preferencias
        marginBottom: 10,
    },
})
