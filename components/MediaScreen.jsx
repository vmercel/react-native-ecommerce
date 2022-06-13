import React, { useState, useEffect } from "react";
import { Text, Alert, Button, TextInput, View, StyleSheet,SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Constants from 'expo-constants';
import { Searchbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import './MovieCard.css';

const API_URL = "https://www.omdbapi.com?apikey=db447031";

export default function MediaScreen () {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchTerm(query);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <View >
        <View >
        <Searchbar
      placeholder="Search"
      onChange={(e) => searchMovies(setSearchTerm(e.target.value))}
      onClick={() => searchMovies(searchTerm)}
        />
            
        </View>

      {movies?.length > 0 ? (
          
        <ScrollView>
            <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))} </View>
        </ScrollView>
      ) : (
        <View>
          <Text>No movies found</Text>
        </View>
      )}
    </View>
  );
};


