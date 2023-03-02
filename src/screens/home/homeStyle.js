import {StyleSheet} from 'react-native';

const homeStyle = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  title:{
    color: 'black',
    fontSize:105,
    textAlign: 'center',
    fontWeight:'600'
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '500',
    color: 'black',
  },
  infoText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
    color: 'black',
  },
  searchContainer: {
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
  },
  
 
  loginBtn: {
    flexDirection: 'row',
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:20,
    marginBottom:15
  },
  loginBtnHolder:{
    backgroundColor: '#017AFF',
    padding: 10,
    borderRadius: 10,
    width:'48%',
    alignItems:'center'
  },
  loginBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',

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
  bottomText:{
    color:'#7F7A8C',
    width:'90%',
    alignSelf:'center',
    textAlign:'center',
    fontSize:14,
    fontWeight:'500',
    lineHeight:22.4,
    marginTop:10,
  },
  bottomTextLink:{
    color:'#017AFF'
  }
});

export default homeStyle;
