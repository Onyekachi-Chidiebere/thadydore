import React from 'react';
import {Pressable, ScrollView, TextInput,SafeAreaView, View, Text} from 'react-native';
import Svg, {Path, SvgXml} from 'react-native-svg';
import InputText, {InputPassword} from '../../components/Input';
import Logo from '../../components/Logo';
import resetPasswordSuccessStyles from './resetPasswordSuccessStyle';
import arrow_left from '../../images/arrow_left.svg';
const ResetPasswordSuccess = ({navigation}) => {
  return (
    <View style={{flex:1}}>
    <SafeAreaView style={{flex:1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1}}>
        
      <View style={resetPasswordSuccessStyles.nav}>
        {/* arrow left svg */}
        <Svg
          onPress={() => navigation.pop()}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M15 6L9 12L15 18"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
        <Pressable style={resetPasswordSuccessStyles.close}>
          {/* close svg */}
          <Svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M6.00093 5.99999L11.2435 11.2426M0.758301 11.2426L6.00093 5.99999L0.758301 11.2426ZM11.2435 0.757355L6.00093 5.99999L11.2435 0.757355ZM6.00093 5.99999L0.758301 0.757355L6.00093 5.99999Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </Pressable>
      </View>
      <View style={resetPasswordSuccessStyles.body}>
        <Logo />
        <Text style={resetPasswordSuccessStyles.signinText}>
        A password recovery instruction has been sent to <Text style={{color:'#017AFF'}}>[user email]</Text>
        </Text>

        <View style={resetPasswordSuccessStyles.noAccountContainer}>
          <Text
            onPress={() => navigation.navigate('setup')}
            style={resetPasswordSuccessStyles.checkmailText}>
            Check your email
          </Text>
        </View>
       
      </View>
      <Pressable onPress={()=>navigation.navigate('home')} style={resetPasswordSuccessStyles.homeBtn}>
        <SvgXml xml={arrow_left}/>
        <Text style={resetPasswordSuccessStyles.homeBtnText}>Go home</Text>
      </Pressable>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ResetPasswordSuccess;
