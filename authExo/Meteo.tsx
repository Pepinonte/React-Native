/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import axios from 'axios';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
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

  useEffect(() => {
    if (app.currentUser) {
      console.log('Aucun utilisateur connecté.');
      return;
    }

    const API_KEY = 'b6f835737e640888bac7ec358f44b672';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Tarbes&appid=${API_KEY}&units=metric`;

    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, []);

  if (!weatherData) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Météo à Tarbes</Text>
      <Text>Température: {weatherData.main.temp}°C</Text>
      <Text>Humidité: {weatherData.main.humidity}%</Text>
      <Text>Description: {weatherData.weather[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default WeatherScreen;
