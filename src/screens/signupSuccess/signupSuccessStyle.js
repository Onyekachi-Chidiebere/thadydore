import {StyleSheet} from 'react-native';

const signupSuccessStyles = StyleSheet.create({
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
    fontSize: 30,
    textAlign: 'justify',
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 40,
  },

  noAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
  checkmailText: {
    color: '#43BC49',
    fontSize: 16,
    fontWeight: '600',
  },
  policyTextHolder: {marginTop: 15, textAlign: 'justify'},
  policyText: {fontSize: 14, fontWeight: '400', color: '#7F7A8C'},
  policyLink: {
    fontSize: 14,
    fontWeight: '400',
    color: '#017AFF',
    marginHorizontal: 5,
  },
});
export default signupSuccessStyles;
