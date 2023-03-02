import React from 'react';
import { View, ScrollView, Text, Pressable, SafeAreaView } from 'react-native';
import Svg, { Path, SvgXml } from 'react-native-svg';
import Logo from '../../components/Logo';
import searchIcon from '../../images/search.svg';
import homeStyle from './homeStyle';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }} >
      <SafeAreaView style={{ flex: 1 }} >
        <ScrollView  contentContainerStyle={{ flexGrow: 1}}>
          <View style={homeStyle.background}>
            <View style={{ flex: 1, justifyContent:'center' }}>
              <View style={homeStyle.nav}>
                <Logo />
              </View>
              <Text style={homeStyle.title}>Patient</Text>
              <Text style={homeStyle.welcomeText}>
                The e-health system for your vitals
              </Text>

             
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
              <View style={{height:.5, backgroundColor:'#7F7A8C', width:'85%', alignSelf:'center'}}/>
              <Text style={homeStyle.bottomText}>
              By using Hi-Medic, you agree to the <Text style={homeStyle.bottomTextLink}>Terms of Use</Text>. For more information about our privacy practices, see the Hi-Medic Care <Text style={homeStyle.bottomTextLink}>Privacy Statement</Text>. We'll occasionally send you account-related emails.
              </Text>
                <View style={homeStyle.loginBtn}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('signup');
                    }} style={homeStyle.getHiBtn}>
                    <Text style={homeStyle.getHiBtnText}>Create an account</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('signin');
                    }}  style={homeStyle.loginBtnHolder}>
                    <Text style={homeStyle.loginBtnText}>Login</Text>
                  </Pressable>
              </View>
             
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>

  );
};

export default Home;
