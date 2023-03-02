import React from 'react';
import { Pressable, ScrollView, TextInput, SafeAreaView, View, Text } from 'react-native';
import Svg, { Path, SvgXml } from 'react-native-svg';
import InputText from '../../components/Input';
import Logo from '../../components/Logo';
import setupStyles from './setupStyle';
import info_empty from '../../images/info_empty.svg'
import arrow_forward from '../../images/ArrowForward.svg'
const Name = ({ setStage }) => {
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
            <Text style={setupStyles.title}>
              Hi, we’d love to get to know you better and have some basics for medical services.
            </Text>
            <Text style={setupStyles.subTitle}>
              Let's start with the basics. But, first, tell us about you.
            </Text>
            <View style={{ height: .5, backgroundColor: 'rgba(175, 171, 186, 0.5)' }} />
            <View style={setupStyles.warn}>
              <SvgXml xml={info_empty} />
              <Text style={setupStyles.warnText}> All fields are required</Text>
            </View>

            <Text style={setupStyles.sessionTitle}>What’s your name?</Text>
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

          </View>
          <View style={setupStyles.footer}>
            
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={setupStyles.pageCount}>1 step of 4</Text>
              <View style={setupStyles.bottomBar}>
                <View style={{width:'25%',height:'100%', backgroundColor:'#017AFF'}}/>
              </View>
            </View>
            <Pressable onPress={()=>setStage(1)} style={setupStyles.footerBtn}>
              <Text style={setupStyles.footerBtnText}>Next</Text>
              <SvgXml xml={arrow_forward} />
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Name;
