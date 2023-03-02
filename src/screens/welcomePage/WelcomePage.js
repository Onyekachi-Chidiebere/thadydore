import React from 'react';
import { Pressable, ScrollView, SafeAreaView, View, Text, TextInput } from 'react-native';
import Svg, { Path, SvgXml } from 'react-native-svg';
import Logo from '../../components/Logo';
import lightCross from '../../images/lightCross.svg';
import welcomePageStyles from './welcomePageStyle';
import search from '../../images/search.svg';

const WelcomePage = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

          <View style={welcomePageStyles.nav}>
            <Text style={welcomePageStyles.menu}>..</Text>
            <Logo />
            <View />
          </View>
          <View style={welcomePageStyles.body}>
            <Text style={welcomePageStyles.signinText}>Welcome, John</Text>
            <Text style={welcomePageStyles.welcomeText}>
              Search and select a healthcare provider. Or wait to be added by your healthcare provider.
            </Text>
            <Text style={welcomePageStyles.welcomeSubText}>
              If you still need to be added after 24 hours, please notify your healthcare provider to add you.       
            </Text>
            <View style={welcomePageStyles.searchHolder}>
              <SvgXml xml={search}/>
              <TextInput style={welcomePageStyles.searchInput} placeholder='Search'/>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', marginTop:10, marginBottom:20}}>
              <View style={{height:1,backgroundColor:'rgba(0, 0, 0, 0.2)', flex:1}}/>
              <Text style={{fontSize:14,fontWeight:'400',marginLeft:10, color:'rgba(0, 0, 0, 0.6)'}}>24 results found</Text>
            </View>
            <View style={welcomePageStyles.careHolder}>
              <SvgXml xml={lightCross} />
              <View>
                <Text style={welcomePageStyles.careName}>GlobalMed</Text>
                <Text style={welcomePageStyles.careText}>Ikeja, Lagos</Text>
                <Text style={welcomePageStyles.careText}>12 visits</Text>
              </View>
            </View>
            <View style={welcomePageStyles.careHolder}>
              <SvgXml xml={lightCross} />
              <View>
                <Text style={welcomePageStyles.careName}>Echo Health</Text>
                <Text style={welcomePageStyles.careText}>Jos, Plateau</Text>
                <Text style={welcomePageStyles.careText}>8 visits</Text>
              </View>
            </View>
            <View style={welcomePageStyles.careHolder}>
              <SvgXml xml={lightCross} />
              <View>
                <Text style={welcomePageStyles.careName}>Cresendo Bio</Text>
                <Text style={welcomePageStyles.careText}>Awka, Anambra</Text>
                <Text style={welcomePageStyles.careText}>8 visits</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default WelcomePage;
