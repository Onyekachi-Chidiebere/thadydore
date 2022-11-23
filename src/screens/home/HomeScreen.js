import React from 'react';
import {View, ScrollView, Text, Pressable} from 'react-native';
import Svg, {Path, SvgXml} from 'react-native-svg';
import Logo from '../../components/Logo';
import searchIcon from '../../images/search.svg';
import homeStyle from './homeStyle';

const Home = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <View style={homeStyle.background}>
        <View style={{flex: 6}}>
          <View style={homeStyle.nav}>
            <Pressable style={{flexDirection: 'row'}}>
              <View style={homeStyle.menu} />
              <View style={homeStyle.menu} />
            </Pressable>
            <Logo />
            <View />
          </View>
          <Text style={homeStyle.welcomeText}>
            The e-health system for your vitals
          </Text>

          <Text style={homeStyle.infoText}>
            Get your account to start managing and syncing all health vitals in
            a secure vault
          </Text>
          <View style={homeStyle.searchContainer}>
            <Text style={homeStyle.searchText}>Search by location</Text>
            <View style={homeStyle.searchIconHolder}>
              <SvgXml xml={searchIcon} />
            </View>
          </View>
        </View>
        <View style={{flex: 4, justifyContent: 'flex-end'}}>
          <View style={homeStyle.buttonsHolder}>
            <View style={homeStyle.loginBtn}>
              <Pressable
                onPress={() => {
                  navigation.navigate('signin');
                }}>
                <Text style={homeStyle.loginBtnText}>Log in</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate('signup');
                }}>
                <Text style={homeStyle.getHiBtnText}>Get hi</Text>
              </Pressable>
            </View>
          </View>
          <Svg
            preserveAspectRatio="none"
            width="100%"
            height="150"
            viewBox="0 0 428 222"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M0 33.9999C0 33.9999 74 0 214 0C354 0 428 33.9999 428 33.9999V222H0V33.9999Z"
              fill="black"
            />
          </Svg>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
