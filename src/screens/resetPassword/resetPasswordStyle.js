import {StyleSheet} from 'react-native';

const resetPasswordStyles = StyleSheet.create({
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
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 40,
  },
 
  inputLabel:{
    color:'#736E80',
    fontSize:16,
    fontWeight:'500'
  },
  homeBtnHolder:{
    backgroundColor:'#017AFF',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:10,
    marginBottom:10

  },
  homeBtnText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'600',
    marginRight:10
  }
 

 
});
export default resetPasswordStyles;
