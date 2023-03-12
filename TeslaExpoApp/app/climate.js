import { View, Text, Image, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import climateImage from '../assets/images/climate.png';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const ClimateScreen = () => {
  const router = useRouter();
  const [tempurature, setTempurature] = useState(50);
  const [carState, setCarState] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={climateImage} style={styles.image} resizeMode="cover" />

      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.label}>Interior 74°F - Exterior 66°F</Text>

        <View style={styles.controlsRow}>
          <Pressable style={styles.iconButtonContainer} onPress={() => setCarState(!carState)}>
            <MaterialCommunityIcons name="power" size={42} color={ carState? "white": "gray"} />
            <Text style={styles.iconButtonText}>
              {
                carState? "On":"Off"
              }
            </Text>
          </Pressable>

          <View style={styles.temperatureContainer}>
            <Entypo onPress={() => setTempurature(tempurature -1)} name="chevron-left" size={30} color="gray" />
            <Text style={styles.temperatureText}>{tempurature}°</Text>
            <Entypo onPress={() => setTempurature(tempurature +1)} name="chevron-right" size={30} color="gray" />
          </View>

          <View style={styles.iconButtonContainer}>
            <MaterialCommunityIcons name="car-door" size={42} color="gray" />
            <Text style={styles.iconButtonText}>Vent</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161818',
  },
  back: {
    position: 'absolute',
    top: 50,
    left: 25,
    backgroundColor: '#2f3030',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: '65%',
  },
  footer: {
    alignItems: 'center',
    padding: 12,
    marginBottom: 20,
    marginTop: 'auto',
  },
  label: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 20,
  },
  controlsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: '300',
    color: 'white',
    marginHorizontal: 20,
  },
  iconButtonContainer: {
    alignItems: 'center',
  },
  iconButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
});

export default ClimateScreen;