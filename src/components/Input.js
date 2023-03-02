import React from 'react';
import { View, Text,TextInput } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const InputText = ({placeholder}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(175, 171, 186, 0.3)',
        borderColor: '#9690A6',
        borderRadius: 13,
        paddingHorizontal: 10,
      }}>
      <TextInput style={{flexGrow: 1, height:54}} placeholder={placeholder} />
      <Svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M14.5 17.794C13.1327 18.5861 11.5802 19.0026 10 19.001M14 10C14 8.93913 13.5786 7.92171 12.8284 7.17157C12.0783 6.42142 11.0609 6 10 6C8.93914 6 7.92172 6.42142 7.17158 7.17157C6.42143 7.92171 6 8.93913 6 10C6 11.0609 6.42143 12.0783 7.17158 12.8284C7.92172 13.5786 8.93914 14 10 14C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10ZM14 10V11.5C14 12.163 14.2634 12.7989 14.7322 13.2678C15.2011 13.7366 15.837 14 16.5 14C17.163 14 17.7989 13.7366 18.2678 13.2678C18.7366 12.7989 19 12.163 19 11.5V10C19 8.21996 18.4722 6.47991 17.4832 4.99986C16.4943 3.51982 15.0887 2.36627 13.4442 1.68508C11.7996 1.00389 9.99002 0.825662 8.24419 1.17293C6.49836 1.5202 4.89472 2.37736 3.63604 3.63604C2.37737 4.89471 1.5202 6.49836 1.17294 8.24418C0.82567 9.99001 1.0039 11.7996 1.68509 13.4441C2.36628 15.0887 3.51983 16.4943 4.99987 17.4832C6.47991 18.4722 8.21997 19 10 19L14 10Z"
          stroke="#9690A6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};
export const InputPassword = ({placeholder}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(175, 171, 186, 0.3)',
        borderColor: '#9690A6',
        borderRadius: 13,
        paddingHorizontal: 10,
      }}>
      <TextInput style={{flexGrow: 1, height:54}} placeholder={placeholder} />
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12V12Z"
          stroke="#9690A6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M2.45801 12C3.73201 7.943 7.52301 5 12 5C16.478 5 20.268 7.943 21.542 12C20.268 16.057 16.478 19 12 19C7.52301 19 3.73201 16.057 2.45801 12V12Z"
          stroke="#9690A6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};
export default InputText;
