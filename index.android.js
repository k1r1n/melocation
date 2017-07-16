import React, { Component } from 'react'
import MapView from 'react-native-maps'
import SplashScreen from 'react-native-smart-splash-screen'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  Dimensions,
  Picker
} from 'react-native'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFF',
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: width - 20,
  },
  txt: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 24,
  }
})
export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      station: '',
      feeder: '',
      faultcat: '',
    }
  }
  componentDidMount () {
    //SplashScreen.close(SplashScreen.animationType.scale, 850, 500) 
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500,
    })
  }
  goTo(){
    Alert.alert('go to google map')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>สถานี</Text>
        <Picker
          selectedValue={this.state.station}
          onValueChange={(itemValue, itemIndex) => this.setState({station: itemValue})}>
          <Picker.Item label="-- โปรดเลือก --" value="" />
          <Picker.Item label="ศรีมหาโพธิ์" value="srimahaphot" />
          <Picker.Item label="ศรีมหาโพธิ์ 2" value="srimahaphot2" />
          <Picker.Item label="ปราจีนบุรี 2" value="prachin2" />
        </Picker>

        <Text style={styles.txt}>ฟีดเดอร์</Text>
        <Picker
          selectedValue={this.state.feeder}
          onValueChange={(itemValue, itemIndex) => this.setState({feeder: itemValue})}>
          <Picker.Item label="-- โปรดเลือก --" value="" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
        </Picker>

        <Text style={styles.txt}>ประเภทของ Fault</Text>
        <Picker
          selectedValue={this.state.faultcat}
          onValueChange={(itemValue, itemIndex) => this.setState({faultcat: itemValue})}>
          <Picker.Item label="-- โปรดเลือก --" value="" />
          <Picker.Item label="AG" value="AG" />
          <Picker.Item label="BG" value="BG" />
          <Picker.Item label="CG" value="CG" />
          <Picker.Item label="AB" value="AB" />
          <Picker.Item label="BC" value="BC" />
          <Picker.Item label="AC" value="AC" />
          <Picker.Item label="ABC" value="ABC" />
        </Picker>

        <Text style={styles.txt}>กระแส Fault</Text>
        <TextInput placeholder='โปรดใส่กระแส Fault'></TextInput>

        <Button title='Go to Location' onPress={this.goTo}></Button>
      </View>
    )
  }
}



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject)
