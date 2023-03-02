import {StyleSheet} from 'react-native';

const welcomePageStyles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  menu:{color:'black',fontSize:28, fontWeight:'900'},
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
    fontSize: 40,
    color: 'black',
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 17,
    color: 'black',
    fontWeight: '400',
    marginBottom: 10,
  },
  welcomeSubText:{
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '400',
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
  },
  searchHolder:{
    backgroundColor:'rgba(175, 171, 186, 0.3)',
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    borderRadius:12
  },
  searchInput:{
    fontSize:16,
    fontWeight:'500',
    marginLeft:10,
    height:30,
    flex:1
  }
});
export default welcomePageStyles;
