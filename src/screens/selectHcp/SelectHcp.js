import React from 'react';
import {Pressable, ScrollView, View, Text} from 'react-native';
import Svg, {Path, SvgXml} from 'react-native-svg';
import Logo from '../../components/Logo';
import lightCross from '../../images/lightCross.svg';
import selectHcpStyles from './selectHcpStyle';

const SelectHcp = ({navigation}) => {
  return (
    <ScrollView>
      <View style={selectHcpStyles.nav}>
        <View />
        <Pressable style={selectHcpStyles.close}>
          {/* more svg */}
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z"
              fill="black"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M12 18.5C12.2761 18.5 12.5 18.2761 12.5 18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18C11.5 18.2761 11.7239 18.5 12 18.5Z"
              fill="black"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M12 6.5C12.2761 6.5 12.5 6.27614 12.5 6C12.5 5.72386 12.2761 5.5 12 5.5C11.7239 5.5 11.5 5.72386 11.5 6C11.5 6.27614 11.7239 6.5 12 6.5Z"
              fill="black"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </Pressable>
      </View>
      <View style={selectHcpStyles.body}>
        <Logo />
        <Text style={selectHcpStyles.signinText}>Hello, John</Text>
        <Text style={selectHcpStyles.welcomeText}>
          Welcome back! Choose your health care provider
        </Text>
        <View style={selectHcpStyles.careHolder}>
          <SvgXml xml={lightCross} />
          <View>
            <Text style={selectHcpStyles.careName}>GlobalMed</Text>
            <Text style={selectHcpStyles.careText}>Ikeja, Lagos</Text>
            <Text style={selectHcpStyles.careText}>12 visits</Text>
          </View>
        </View>
        <View style={selectHcpStyles.careHolder}>
          <SvgXml xml={lightCross} />
          <View>
            <Text style={selectHcpStyles.careName}>Echo Health</Text>
            <Text style={selectHcpStyles.careText}>Jos, Plateau</Text>
            <Text style={selectHcpStyles.careText}>8 visits</Text>
          </View>
        </View>
        <View style={selectHcpStyles.careHolder}>
          <SvgXml xml={lightCross} />
          <View>
            <Text style={selectHcpStyles.careName}>Cresendo Bio</Text>
            <Text style={selectHcpStyles.careText}>Awka, Anambra</Text>
            <Text style={selectHcpStyles.careText}>8 visits</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SelectHcp;
