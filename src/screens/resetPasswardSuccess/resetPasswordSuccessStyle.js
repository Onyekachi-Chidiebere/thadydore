import {StyleSheet} from 'react-native';

const resetPasswordSuccessStyles = StyleSheet.create({
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
    flex:1,
  },
  signinText: {
    fontSize: 32,
    textAlign: 'left',
    color: 'black',
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 40,
  },

  noAccountContainer: {
    marginTop: 10,
  },
  checkmailText: {
    color: '#43BC49',
    fontSize: 16,
    fontWeight: '600',
  },
  homeBtn:{
    backgroundColor:'#017AFF',
    width:'90%',
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    padding:10,
    borderRadius:10,
    marginBottom:10,
    alignItems:'center',
   
  },
  homeBtnText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'600',
    marginLeft:10
  }
 
});
export default resetPasswordSuccessStyles;
