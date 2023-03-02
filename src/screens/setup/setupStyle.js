import {StyleSheet} from 'react-native';

const setupStyles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  menu:{color:'black',fontSize:28, fontWeight:'900'},

  body: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    flex:1
  },
  title:{
    fontSize:36,
    color:'#000',
    fontWeight:'600',
    lineHeight:50.4
  },
  subTitle:{
    fontSize:16,
    fontWeight:'500',
    lineHeight:19,
    color:'#45424D',
    marginTop:20,
    width:'85%',
    marginBottom:20
  },
  warn:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:20
  },
  warnText:{
    fontSize:16,
    color:'#017AFF',
    marginLeft:10
  },
  sessionTitle:{
    fontSize:20,
    fontWeight:'500',
    color:'#000',
    marginTop:40,
    marginBottom:20
  },
  label:{
    color:'#736E80',
    fontSize:16,
    fontWeight:'500'
  },
  inputContainer: {
    marginTop: 20,
  },
  footer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'90%',
    alignSelf:'center',
    marginTop:10,
    alignItems:'center',
  },
  footerBtn:{
    backgroundColor:'#017AFF',
    flexDirection:'row',
    padding:10,
    alignItems:'center',
    borderRadius:10
  },
  footerBtnBack:{
    backgroundColor:'rgba(175, 171, 186, 0.4)',
    flexDirection:'row',
    padding:10,
    alignItems:'center',
    borderRadius:10,
    marginRight:10
  },
  footerBtnText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'600',
    marginRight:10
  },
  bottomBar:{
    width:80,
    backgroundColor:'rgba(175, 171, 186, 0.3)',
    height:6,
    borderRadius:1,
    marginLeft:10
  },
  pageCount:{
    color:'#45424D',
    fontSize:16,
    fontWeight:'500'
  },
 
});
export default setupStyles;
