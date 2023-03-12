import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import menuOptions from "../assets/menuOptions"
import MenuOption from "./components/MenuOption"
import {FontAwesome} from '@expo/vector-icons';
import Controls from './components/Controls';
import car from '../assets/images/car.png';

export default function Page() {
  //console.log(menuOptions)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome name="user-circle" size={30} color="gray" />        
      </View>
      <Image source={car} style={styles.image} resizeMode="contain" />
      {/* <Controls /> */}
      <FlatList
        data={menuOptions}
        keyExtractor={(item, index) => index}
        //renderItem = {({item}) => ( <MenuOption item={item} /> )}   
        renderItem = {MenuOption}    
        ListHeaderComponent = {Controls} 
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#161818',
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#eee',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 300,
  },
  subtitle: {
    fontWeight: '500',
    color: 'gray',
  },
});