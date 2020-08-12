import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

import firebase from '../utils/firebase'


export default function LoginForm(props) {
    const {Change} = props;

    const [datosFormularioRegistro, setdatosFormularioRegistro] = useState({
        email:'',password:'',repeatPassword:''
    })

    const registarme=()=>{
    if(datosFormularioRegistro.email != '' || datosFormularioRegistro.password != '' || datosFormularioRegistro.repeatPassword != '' ){
        console.log('correcto')
        firebase.auth().createUserWithEmailAndPassword(datosFormularioRegistro.email, datosFormularioRegistro.password).then(()=>{console.log('cuenta creada')})
    }else{console.log('rellene los datos')}
    }

    const leedatosform=(e,type)=>{


     setdatosFormularioRegistro({...datosFormularioRegistro , [type]: e.nativeEvent.text})



        }
    


    return (
       <View>
        <TextInput 
        onChange={  (e)=>leedatosform(e,"email")}
        style={styles.input}
        placeholder="correo"
        placeholderTextColor='#9696969'
        / >
        <TextInput 
        onChange={  (e)=>leedatosform(e,"password")}
         style={styles.input}
        placeholder="Password"
        placeholderTextColor='#9696969'
        secureTextEntry={true}
        / >
        <TextInput 
        onChange={  (e)=>leedatosform(e,"repassword")}
         style={styles.input}
        placeholder="Repetir password"
        placeholderTextColor='#9696969'
        secureTextEntry={true}
        / >
        





        <Button
        onPress={()=>registarme()}
          title="REGISTRARME"  />

            <View style={styles.abajo}>
<Button   title="quiero INICIAR SESION"   onPress={Change}/>

          </View>






        </View>

    )
}


const styles = StyleSheet.create({

    input:{
        height:40, color:'red' , width:'80%' , marginBottom:25, backgroundColor:'#fafafa', paddingHorizontal:20, borderRadius:44 , borderColor:'red' , borderWidth:1, minWidth:'80%'
        }
        , abajo:{
            marginTop:"40%"
           }


})
