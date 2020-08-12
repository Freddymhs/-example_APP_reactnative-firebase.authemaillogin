import React, { useState } from 'react'
import { StyleSheet, Text, View, Image  } from 'react-native';
import cumpleimage from '../assets/cumple.jpeg';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';



export default function LogScreen() {

  const [EstadoForm, setEstadoForm] = useState(true)
const Change  = ()=>{
    setEstadoForm(!EstadoForm);
}

    return (
        <View style={styles.view}>
    <Image style={styles.logo} source={cumpleimage}></Image>
           

            <Text>welcome screen !!!!!!!!!!!</Text>

        
           

        
            {EstadoForm ? <LoginForm Change={Change}/> :  <RegisterForm Change={Change}/>} 



        </View>
    )
}

const styles = StyleSheet.create({

    view:{
         alignItems:'center'
    },
    logo:{ width:'100%' , height:240 , marginBottom:50}
   
})

