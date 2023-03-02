import React from 'react';
import { Pressable, ScrollView, TextInput, SafeAreaView, View, Text } from 'react-native';
import Svg, { Path, SvgXml } from 'react-native-svg';
import InputText from '../../components/Input';
import Logo from '../../components/Logo';
import setupStyles from './setupStyle';
import info_empty from '../../images/info_empty.svg'
import arrow_forward from '../../images/ArrowForward.svg'
import arrow_left from '../../images/arrow_left_dark.svg'
const Address = ({ setStage }) => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

          <View style={setupStyles.nav}>
            <Text style={setupStyles.menu}>..</Text>
            <Logo />
            <View />
          </View>
          <View style={setupStyles.body}>
            <View style={setupStyles.warn}>
              <SvgXml xml={info_empty} />
              <Text style={setupStyles.warnText}> All fields are required</Text>
            </View>

            <Text style={setupStyles.sessionTitle}>Where do you live?</Text>
            <View>
              <Text style={setupStyles.label}>State</Text>
              <InputText placeholder="" />
            </View>
            <View style={setupStyles.inputContainer}>
              <Text style={setupStyles.label}>Local government</Text>
              <InputText placeholder="" />
            </View>
            <Text style={setupStyles.sessionTitle}>What’s your phone number?</Text>
            <View style={setupStyles.inputContainer}>
              <Text style={setupStyles.label}>Phone number</Text>
              <InputText placeholder="" />
            </View>

          </View>
          <View style={setupStyles.footer}>
            
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={setupStyles.pageCount}>2 step of 4</Text>
              <View style={setupStyles.bottomBar}>
                <View style={{width:'50%',height:'100%', backgroundColor:'#017AFF'}}/>
              </View>
            </View>
          <View style={{flexDirection:'row'}}>
          <Pressable  onPress={()=>setStage(0)} style={setupStyles.footerBtnBack}>
            <SvgXml xml={arrow_left} />

            </Pressable>
            <Pressable onPress={()=>setStage(2)} style={setupStyles.footerBtn}>
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

export default Address;
