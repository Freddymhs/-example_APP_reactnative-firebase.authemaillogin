import React, { useEffect, useState } from 'react'; import { StyleSheet, Text, View, SafeAreaView, StatusBar, Button } from 'react-native';

import firebase from "./src/utils/firebase"  ;  import 'firebase/auth';




import Welcome from './src/components/Welcome';



export default function App() {
const [LogUser, setLogUser] = useState(null)
        

useEffect(() => { // revisando el estaod de logeado  o no
firebase.auth().onAuthStateChanged((response)=> 
setLogUser(response) // FIREBASE MVA A LOGEAR DEPEDIENDO  de mi firebase.AUTH
)
}, [])


const Salirme =()=>{
  const deslogear = ()=>{
firebase.auth().signOut();
  }
  return (
    <>
    <Text>estas logeado</Text>
    <Button onPress={()=>deslogear()} title="cerrar sesion"></Button>
    </>


  )

 
  
}

// if (LogUser === undefined) {return null}; // si es undefined se deja en null


  return (

    <>
    <StatusBar  barStyle="light-content"/>
 
     
      <SafeAreaView >
      {/* si esta logeado muestra la app , sino lo manda a welcome */}
      {LogUser ? <Salirme/> : <Welcome/> }
      </SafeAreaView>



    </>

  )
}

const styles = StyleSheet.create({})
