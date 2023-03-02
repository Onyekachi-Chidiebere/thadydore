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
    marginTop: 30,
    flex:1,
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
  inputLabel:{
    color:'#736E80',
    fontSize:16,
    fontWeight:'500'
  },
  forgotEmail: {fontSize: 14, color: '#017AFF', marginTop: 20},
 

  policyTextHolder: {marginTop: 15, textAlign: 'justify'},
  policyText: {fontSize: 14, fontWeight: '400', color: '#7F7A8C'},
  policyLink: {
    fontSize: 14,
    fontWeight: '400',
    color: '#017AFF',
    marginHorizontal: 5,
  },

  loginBtn: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:20,
    marginBottom:15
  },
  loginBtnHolder:{
    flexDirection: 'row',
    backgroundColor: '#017AFF',
    justifyContent:'center',
    padding: 10,
    borderRadius: 10,
    width:'48%',
    alignItems:'center'
  },
  loginBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginRight:5

  },
  getHiBtn:{
    backgroundColor: 'rgba(175, 171, 186, 0.4)',
    padding: 10,
    borderRadius: 10,
    alignItems:'center',
    width:'48%'
  },
  getHiBtnText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
   
  },
});
export default signinStyles;
