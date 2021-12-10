
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, LayoutAnimation } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class MyApp extends Component {

  constructor() {
    super();
    this.state = {
      isVisible: true
    }
  }

  hideSplashScreen = () => {
    this.setState({ isVisible: false })
  }

  componentDidMount() {
    setTimeout(() => {
      
      this.hideSplashScreen();
    }, 3500);
  }

  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <Image style={
          styles.SplashScreen_RootView
        }
          source={require('./assets/img_splash.jpg')} />

      </View>)

    let myView = (
      
      <View style={styles.MainContainer}>
      {
        LayoutAnimation.spring()
      }
        <Text style={{ color: "red", fontWeight: 'bold', fontSize: 24 }}>
          Hi there..., Welcomes you
        </Text>
      </View>)
    return (
      (this.state.isVisible === true) ? Splash_Screen : myView
    );
  }
}

const styles = StyleSheet.create(
  {
    MainContainer:
    {
      backgroundColor: '#00BCD4',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    SplashScreen_RootView:
    {
      justifyContent: 'center',
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },

    SplashScreen_ChildView:
    {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00BCD4',
      flex: 1,
    }
  });
