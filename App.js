import { SafeAreaView, StyleSheet, Text, View, Dimensions, FlatList, Button } from 'react-native';
import { MapView, Marker } from 'react-native-maps';
import * as React from 'react';

export default class App extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <MapView 
            style={styles.map}
            initialRegion={{
              latitude: 19.5426,
              longitude: -96.9137,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            minZoomLevel={12}
          />
          <View style={styles.containerFooter}>
            <View style={styles.viewFotterContainer}>
              <Button style={styles.buttoms} title='One'></Button>
            </View>
            <View style={styles.viewFotterContainer}>
              <Button style={styles.buttoms} title='Two'></Button>
            </View>
            <View style={styles.viewFotterContainer}>
              <Button style={styles.buttoms} title='Tre'></Button>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },

  containerHeader: {
    flex: 0.5,
  },

  containerBody: {
    flex: 5,
  },

  containerFooter: {
    flex: 0.5,
    flexDirection: 'row',
  },

  map: {
    flex: 5,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  buttoms: {
    width: 100,
    height: 100
  },

  viewFotterContainer: {
    flex: 2,
    width: 100,
    height: 100,
  }
});
