import React from 'react';
import {Pressable, ScrollView, TextInput, View, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import InputText, {InputPassword} from '../../components/Input';
import Logo from '../../components/Logo';
import signupSuccessStyles from './signupSuccessStyle';

const SignupSuccess = ({navigation}) => {
  return (
    <ScrollView>
      <View style={signupSuccessStyles.nav}>
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
        <Pressable style={signupSuccessStyles.close}>
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
      <View style={signupSuccessStyles.body}>
        <Logo />
        <Text style={signupSuccessStyles.signinText}>
          Thanks for registering, now check your email to complete the process.
        </Text>

        <View style={signupSuccessStyles.noAccountContainer}>
          <Text
            onPress={() => navigation.navigate('setup')}
            style={signupSuccessStyles.checkmailText}>
            Check your email
          </Text>
        </View>
        <Text style={signupSuccessStyles.policyTextHolder}>
          <Text style={signupSuccessStyles.policyText}>
            By using Hi-Medic, you agree to the
          </Text>
          <Text style={signupSuccessStyles.policyLink}>
            &nbsp;Terms of Use.&nbsp;
          </Text>
          <Text style={signupSuccessStyles.policyText}>
            For more information about our privacy practices, see the Hi-Medic
            Care
          </Text>
          <Text style={signupSuccessStyles.policyLink}>
            &nbsp;Privacy Statement&nbsp;
          </Text>
          <Text style={signupSuccessStyles.policyText}>
            We'll occasionally send you account-related emails.
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignupSuccess;
