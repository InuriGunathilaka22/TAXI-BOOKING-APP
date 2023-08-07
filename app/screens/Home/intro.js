import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  title: {fontSize: 32, fontWeight: 'bold', marginTop: 20,color:"black"},
  image: {},
  text: {fontSize: 18, marginTop: 20,color: "#3E4958", textAlign:'center'},
});

const slides = [
  {
    key: 1,
    title: 'Request Ride',
    text: 'Request a ride get picked up by a nearby community driver',
    image: require('../../assets/imgbin_taxi-mobile-app-development-smartphone-png.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Confirm Your Driver',
    text: 'Huge drivers network helps you find comfortable,safe and cheap ride',
    image: require('../../assets/PngItem_2573129.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Track Your Ride',
    text: 'Know your driver in advance and be able to view current location in real time on the map',
    image: require('../../assets/pngaaa.com-845066.png'),
    backgroundColor: '#22bcb5',
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }
  _renderItem = ({item}) => {
    console.log('item =>', item);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{height: 300, width: 300, borderRadius: 200}}
          source={item.image}
        />
        <Text style={styles.title}> {item.title} </Text>
        <View style={{ width:300, justifyContent: 'center' }}>
        <Text style={styles.text}> {item.text} </Text>
        </View>
        {item.key == 3 && (
          <TouchableOpacity
            style={{
              zIndex: 10,
              // marginTop: 50,
              position:'absolute',
              bottom: 70,
              alignSelf: 'center',
              borderRadius: 10,
              padding: 10,
              width: 200,
              height: 50,
              justifyContent: "center",
              alignItems:"center",
              backgroundColor: '#4BE5B1',
            }}>
            <Text style={{ fontSize:18, color:"white", fontWeight: '700'}}>{'GET STARTED'}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({showRealApp: true});
  };
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return (
        <AppIntroSlider
          activeDotStyle={{width: 30, backgroundColor: '#3DDEAB'}}
          dotStyle={{marginLeft: -1, width: 30, backgroundColor: '#F2F1F6'}}
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
        />
      );
    }
  }
}
