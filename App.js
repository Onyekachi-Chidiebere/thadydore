/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Pressable,
  Text,
  useColorScheme,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import Svg, {Path, SvgXml} from 'react-native-svg';
// import lightLogo from './images/lightLogo.svg';
// import darkLogo from './images/darkLogo.svg';
// import searchIcon from './images/search.svg';
import Logo from './src/components/Logo';
import AppNavigator from './AppNavigator';
const Home = () => {
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 6}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
              marginVertical: 30,
            }}>
            <Pressable style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: 'black',
                  borderRadius: 10,
                  margin: 2,
                }}
              />
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: 'black',
                  borderRadius: 10,
                  margin: 2,
                }}
              />
              <View />
            </Pressable>
            <SvgXml xml={darkLogo} />
            <View />
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 48,
              fontWeight: '600',
              marginTop: 50,
              color: 'black',
            }}>
            The e-health system for your vitals
          </Text>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '600',
              marginTop: 30,
              color: 'black',
            }}>
            Get your account to start managing and syncing all health vitals in
            a secure vault
          </Text>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              paddingHorizontal: 15,
              justifyContent: 'space-between',
              alignSelf: 'center',
              alignItems: 'center',
              width: '90%',
              backgroundColor: '#2E2C33',
              borderRadius: 10,
              marginTop: 30,
              marginBottom: 50,
              shadowColor: 'black',
              shadowOffset: {
                width: 5,
                height: -5,
              },
              elevation: 20,
              shadowOpacity: 0.1,
              shadowRadius: 0,
            }}>
            <Text style={{fontSize: 20, color: '#FFFFFF'}}>
              Search by location
            </Text>
            <View
              style={{
                backgroundColor: '#625f69',
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 5,
              }}>
              <SvgXml xml={searchIcon} />
            </View>
          </View>
        </View>
        <View style={{flex: 4, justifyContent: 'flex-end'}}>
          <Svg
            preserveAspectRatio="none"
            width="100%"
            height="222"
            style={{marginBottom: -20}}
            viewBox="0 0 428 222"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M0 33.9999C0 33.9999 74 0 214 0C354 0 428 33.9999 428 33.9999V222H0V33.9999Z"
              fill="black"
            />
            <View
              style={{height: '100%', width: '100%', justifyContent: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '60%',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Pressable>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 18,
                      fontWeight: '600',
                      borderBottomColor: 'white',
                      borderBottomWidth: 1.5,
                    }}>
                    Log in
                  </Text>
                </Pressable>
                <Pressable>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 18,
                      fontWeight: '600',
                      backgroundColor: '#D81920',
                      padding: 10,
                      borderRadius: 5,
                    }}>
                    Get hi
                  </Text>
                </Pressable>
              </View>
            </View>
          </Svg>
        </View>
      </View>
    </ScrollView>
  );
};
const SignIn = () => {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        {/* arrow left svg */}
        <Svg
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
        <Pressable
          style={{
            backgroundColor: '#E6E4E9',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
          }}>
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
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: 50,
        }}>
        <Logo />
        <Text
          style={{
            fontSize: 72,
            color: 'black',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Sign in
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            borderColor: '#9690A6',
            borderWidth: 1,
            borderRadius: 13,
            paddingHorizontal: 10,
            marginTop: 40,
          }}>
          <TextInput style={{flexGrow: 1}} placeholder="Enter email" />
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            borderColor: '#9690A6',
            borderWidth: 1,
            borderRadius: 13,
            paddingHorizontal: 10,
            marginTop: 10,
          }}>
          <TextInput style={{flexGrow: 1}} placeholder="Enter password" />
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
        <Text style={{fontSize: 14, color: '#7F7A8C', marginTop: 15}}>
          Forgot email?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 14, color: '#7F7A8C', marginRight: 5}}>
              No Account?
            </Text>
            <Pressable>
              <Text style={{fontSize: 14, color: '#017AFF', marginRight: 5}}>
                Sign up
              </Text>
            </Pressable>
          </View>
          <Pressable
            style={{
              fontSize: 14,
              backgroundColor: '#017AFF',
              padding: 10,
              borderRadius: 8,
            }}>
            <Text style={{fontSize: 14, color: 'white', marginRight: 5}}>
              Sign up
            </Text>
          </Pressable>
        </View>
        <Text style={{marginTop: 15,textAlign:'justify'}}>
          <Text style={{fontSize: 14, fontWeight: '400', color: '#7F7A8C'}}>
            By using Hi-Medic, you agree to the
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#017AFF',
              marginHorizontal: 5,
            }}>
            &nbsp;Terms of Use.&nbsp;
          </Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: '#7F7A8C',display:'flex'}}>
            For more information about our privacy practices, see the Hi-Medic Care
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#017AFF',
              marginHorizontal: 5,
            }}>
             &nbsp;Privacy Statement&nbsp; 
          </Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: '#7F7A8C'}}>
            We'll occasionally send you account-related emails.
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <Home /> */}
      <AppNavigator />
    </View>
  );
};

export default App;
