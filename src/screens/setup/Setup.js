import React from 'react';
import {Pressable, ScrollView, TextInput, View, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import InputText from '../../components/Input';
import Logo from '../../components/Logo';
import setupStyles from './setupStyle';

const Setup = ({navigation}) => {
  return (
    <ScrollView>
      <View style={setupStyles.nav}>
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
        <Pressable style={setupStyles.close}>
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
      <View style={setupStyles.body}>
        <Logo />
        <Text style={setupStyles.signinText}>Setup</Text>
        <View>
          <InputText placeholder="First name *" />
        </View>
        <View style={setupStyles.inputContainer}>
          <InputText placeholder="Middle name *" />
        </View>
        <View style={setupStyles.inputContainer}>
          <InputText placeholder="Last name *" />
        </View>
        <View style={setupStyles.inputContainer}>
          <InputText placeholder="State of origin *" />
        </View>
        <View style={setupStyles.inputContainer}>
          <InputText placeholder="Current address *" />
        </View>
        <View style={setupStyles.dateContainer}>
          <View style={{width: '30%'}}>
            <InputText placeholder="Day" />
          </View>
          <View style={{width: '30%'}}>
            <InputText placeholder="Month" />
          </View>
          <View style={{width: '30%'}}>
            <InputText placeholder="Year" />
          </View>
        </View>
        <View style={setupStyles.genderContainer}>
          <Text style={setupStyles.genderText}>
            Sex: <Text style={setupStyles.genderSelected}>male</Text> /{' '}
            <Text>female</Text>
          </Text>
          <Pressable
            onPress={() => navigation.navigate('select-hcp')}
            style={setupStyles.done}>
            <Text style={setupStyles.doneText}>Done</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Setup;
