import {StyleSheet} from 'react-native';

const selectHcpStyles = StyleSheet.create({
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
    marginTop: 20,
  },
  signinText: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 20,
  },
  careHolder: {
    marginTop:10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#AFABBA',
    padding:10,
    borderRadius:10
  },
  careName:{
    fontSize:18,
    fontWeight:'600',
    color:'black',
    marginLeft:10,
  },
  careText:{
    fontSize:14,
    color:'black',
    marginLeft:10,
  }
});
export default selectHcpStyles;
