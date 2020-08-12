import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

import firebase from '../utils/firebase'; // necestamos nuestro acceso al firebase





export default function LoginForm(props) {
    const {Change} = props;  //destructuring






    const logear =()=>{
      if(datosFormularioIngreso.email != "" || datosFormularioIngreso.password != ''  ){
          firebase.auth().signInWithEmailAndPassword(datosFormularioIngreso.email , datosFormularioIngreso.password)


    } else{
        console.log('formulario mal')
    }
    }

    const [datosFormularioIngreso, setdatosFormularioIngreso] = useState({
        email:'' , password :''
    })
  
    const leedatosform = (e,type)=>{

    setdatosFormularioIngreso({...datosFormularioIngreso , [type]: e.nativeEvent.text})



}
    

    return (
        <>

            <TextInput 
            onChange={(e)=>leedatosform(e,'email')}
            style={styles.input} placeholder="correo eelctornico"/> 
            <TextInput 
             onChange={(e)=>leedatosform(e,'password')}
            style={styles.input} placeholder="password "/> 

        <Button
        onPress={()=>(logear())}
          style={styles.btnnn}
          title="LOGEARME"  />





          <View style={styles.abajo}>
          <Button          title="quiero registrarme"   onPress={Change}/>
          </View>

</>
  

    )
}

const styles = StyleSheet.create({


    
    input:{
        height:40, color:'red' , width:'80%' , marginBottom:25, backgroundColor:'#fafafa', paddingHorizontal:20, borderRadius:44 , borderColor:'red' , borderWidth:1, minWidth:'80%'
        }
    , abajo:{
     marginTop:"60%"
    }


})
