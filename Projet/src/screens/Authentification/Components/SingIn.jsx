import { Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const SingIn = ({ navigation }) => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  const firebaseConfig = {
    apiKey: 'AIzaSyAlXFZVKuC0HlZg0cVey9wvD37mI4DDB4s',
    authDomain: 'authnative-86820.firebaseapp.com',
    projectId: 'authnative-86820',
    storageBucket: 'authnative-86820.appspot.com',
    messagingSenderId: '128045212382',
    appId: '1:128045212382:web:60f3bb0bdccbce1ed4184f',
  };

  // Initialize Firebase
  const auth = initializeApp(firebaseConfig);
  const app = getAuth(auth);

  // Connexion
  const loginUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(app, email, password);
      console.log('Utilisateur connecté');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput value={mail} onChangeText={setMail} placeholder="mail" />
      <TextInput value={pass} onChangeText={setPass} placeholder="pass" />
      <Button title="login" onPress={() => loginUser(mail, pass)} />
    </View>
  );
}

export default SingIn;
