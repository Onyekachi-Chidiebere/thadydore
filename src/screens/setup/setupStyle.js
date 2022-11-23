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
  inputContainer: {
    marginTop: 20,
  },
  dateContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genderContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: '#9690A6',
    borderWidth: 1,
    borderRadius: 13,
    paddingHorizontal: 10,
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  genderText: {
    color: '#9690A6',
    fontSize:18
  },
  genderSelected: {
    color: '#017AFF',
    fontSize:18
  },
  done:{
    backgroundColor:'#dedbe3',
    paddingVertical:5,
    paddingHorizontal:15,
    borderRadius:5
  },
  doneText:{
    color:'black',
    fontSize:14
  }
});
export default setupStyles;
