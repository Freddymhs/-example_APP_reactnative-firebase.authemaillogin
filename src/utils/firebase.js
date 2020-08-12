//  este archivo exporta una conexion a firebase configurada 

import firebase from "firebase/app";   // este es el que yo instale por YARN





 const configuracion92 = {
    apiKey: "AIzaSyA49sLxpgzoyYhmW0UZ96fqRcoEd2IzYOc",
    authDomain: "rnconfirebasefireauthemail.firebaseapp.com",
    databaseURL: "https://rnconfirebasefireauthemail.firebaseio.com",
    projectId: "rnconfirebasefireauthemail",
    storageBucket: "rnconfirebasefireauthemail.appspot.com",
    messagingSenderId: "366417163174",
    appId: "1:366417163174:web:480fedcbad759076701567"
  };



  export default firebase.initializeApp(configuracion92);   // exportar el firebase inicilizado , configurado y listo para llamar a firestore,auth y otros :)

  

