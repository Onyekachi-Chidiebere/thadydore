import React from 'react';
import {Pressable, ScrollView, TextInput, View, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import InputText, {InputPassword} from '../../components/Input';
import Logo from '../../components/Logo';
import signupStyles from './signupStyle';

const Signup = ({navigation}) => {
  return (
    <ScrollView>
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
        <Text style={signupStyles.signinText}>Sign up</Text>
        <View>
          <InputText placeholder="Enter email" />
        </View>
        <View style={signupStyles.passwordContainer}>
          <InputPassword placeholder="Enter password" />
        </View>
        <Text style={signupStyles.forgotEmail}>Forgot email?</Text>
        <View style={signupStyles.noAccountContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={signupStyles.signUpContainer}>
              Already have an Account?
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate('signin');
              }}>
              <Text style={signupStyles.signUpText}>Sign in</Text>
            </Pressable>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate('signup-success');
            }}
            style={signupStyles.signinBtn}>
            <Text style={signupStyles.signinBtnText}>Sign up</Text>
          </Pressable>
        </View>
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
      </View>
    </ScrollView>
  );
};

export default Signup;
