import {StyleSheet} from 'react-native';

const homeStyle = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 30,
  },
  menu: {
    width: 8,
    height: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 2,
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 48,
    fontWeight: '600',
    marginTop: 50,
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
  searchText: {fontSize: 20, color: '#FFFFFF'},
  searchIconHolder: {
    backgroundColor: '#625f69',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonsHolder: {
    top: 111,
    width: '100%',
    justifyContent: 'center',
    zIndex: 3,
  },
  loginBtn: {
    flexDirection: 'row',
    width: '60%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginBtnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    borderBottomColor: 'white',
    borderBottomWidth: 1.5,
  },
  getHiBtnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#D81920',
    padding: 10,
    borderRadius: 5,
  },
});

export default homeStyle;
