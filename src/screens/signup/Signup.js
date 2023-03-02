import React from 'react';
import {Pressable, ScrollView, TextInput, View, Text,SafeAreaView} from 'react-native';
import Svg, {Path,SvgXml} from 'react-native-svg';
import InputText, {InputPassword} from '../../components/Input';
import Logo from '../../components/Logo';
import signupStyles from './signupStyle';
import arrow from '../../images/ArrowForward.svg'

const Signup = ({navigation}) => {
  return (
    <View style={{flex:1}}>
    <SafeAreaView style={{flex:1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1}}>
       
      <View style={signupStyles.nav}>
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
        <Pressable style={signupStyles.close}>
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
      <View style={signupStyles.body}>
            <Logo />
            <Text style={signupStyles.signinText}>Sign in</Text>
           <View style={{flex:1}}>
          <View style={{flex:1}}>
          <View >
            <Text style={signupStyles.inputLabel}>Email</Text>
              <InputText placeholder="" />
            </View>
            <View style={signupStyles.passwordContainer}>
            <Text style={signupStyles.inputLabel}>Password</Text>
              <InputPassword placeholder="" />
            </View>
            <View style={signupStyles.passwordContainer}>
            <Text style={signupStyles.inputLabel}>Confirm Password</Text>
              <InputPassword placeholder="" />
            </View>
           
          </View>
            <View style={{height:.5, backgroundColor:'#7F7A8C', width:'100%', alignSelf:'center'}}/>
            <Text style={signupStyles.policyTextHolder}>
              <Text style={signupStyles.policyText}>
                By using Hi-Medic, you agree to the
              </Text>
              <Text style={signupStyles.policyLink}>&nbsp;Terms of Use.&nbsp;</Text>
              <Text style={signupStyles.policyText}>
                For more information about our privacy practices, see the Hi-Medic
                Care
              </Text>
              <Text style={signupStyles.policyLink}>
                &nbsp;Privacy Statement&nbsp;
              </Text>
              <Text style={signupStyles.policyText}>
                We'll occasionally send you account-related emails.
              </Text>
            </Text>
            <View style={signupStyles.loginBtn}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('signin');
                    }} style={signupStyles.getHiBtn}>
                    <Text style={signupStyles.getHiBtnText}>Sign in</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('signup-success');
                    }}  style={signupStyles.loginBtnHolder}>
                    <Text style={signupStyles.loginBtnText}>Create account</Text>
                    <SvgXml xml ={arrow}/>
                  </Pressable>
              </View>
           </View>
          </View>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Signup;
