import React from 'react';
import { Pressable, ScrollView, TextInput, SafeAreaView, View, Text } from 'react-native';
import Svg, { Path, SvgXml } from 'react-native-svg';
import InputText from '../../components/Input';
import Logo from '../../components/Logo';
import setupStyles from './setupStyle';
import arrow_forward from '../../images/ArrowForward.svg'
import arrow_left from '../../images/arrow_left_dark.svg'
const NextOfKin = ({ setStage,navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

          <View style={setupStyles.nav}>
            {/* arrow left svg */}
            <Text style={setupStyles.menu}>..</Text>
            <Logo />
            <View />
          </View>
          <View style={setupStyles.body}>
            <Text style={setupStyles.subTitle}>
            Anyone you’d like to add for emergency contact? Optional            </Text>
            <View>
              <Text style={setupStyles.label}>First name</Text>
              <InputText placeholder="" />
            </View>
            <View style={setupStyles.inputContainer}>
              <Text style={setupStyles.label}>Middle name</Text>
              <InputText placeholder="" />
            </View>
            <View style={setupStyles.inputContainer}>
              <Text style={setupStyles.label}>Last name</Text>
              <InputText placeholder="" />
            </View>
            <View style={setupStyles.inputContainer}>
              <Text style={setupStyles.label}>Role</Text>
              <InputText placeholder="" />
            </View>
            <View style={setupStyles.inputContainer}>
              <Text style={setupStyles.label}>Phone number</Text>
              <InputText placeholder="" />
            </View>
          </View>
          <View style={setupStyles.footer}>
            
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={setupStyles.pageCount}>4 step of 4</Text>
              <View style={setupStyles.bottomBar}>
                <View style={{width:'100%',height:'100%', backgroundColor:'#017AFF'}}/>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Pressable onPress={() => setStage(2)} style={setupStyles.footerBtnBack}>
                <SvgXml xml={arrow_left} />

              </Pressable>
              <Pressable onPress={() => navigation.navigate('welcome')} style={setupStyles.footerBtn}>
                <Text style={setupStyles.footerBtnText}>Next</Text>
                <SvgXml xml={arrow_forward} />
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default NextOfKin;
