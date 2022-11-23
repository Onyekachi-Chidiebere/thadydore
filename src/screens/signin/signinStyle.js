import {StyleSheet} from 'react-native';

const signinStyles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  close: {
    backgroundColor: '#E6E4E9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  body: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 50,
  },
  signinText: {
    fontSize: 72,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 40,
  },
  passwordContainer: {
    marginTop: 10,
  },
  forgotEmail: {fontSize: 14, color: '#7F7A8C', marginTop: 15},
  noAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpContainer: {fontSize: 14, color: '#7F7A8C', marginRight: 5},
  signUpText: {fontSize: 14, color: '#017AFF', marginRight: 5},
  signinBtn: {
    fontSize: 14,
    backgroundColor: '#017AFF',
    padding: 10,
    borderRadius: 8,
  },
  signinBtnText: {fontSize: 14, color: 'white', marginRight: 5},
  policyTextHolder: {marginTop: 15, textAlign: 'justify'},
  policyText: {fontSize: 14, fontWeight: '400', color: '#7F7A8C'},
  policyLink: {
    fontSize: 14,
    fontWeight: '400',
    color: '#017AFF',
    marginHorizontal: 5,
  },
});
export default signinStyles;
