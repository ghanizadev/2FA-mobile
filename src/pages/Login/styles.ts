import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '75%',
    padding: 20,
  },
  button: {
    backgroundColor: 'rgba(152,12,156,1)',
    marginTop: 8,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    color: '#fff',
  },
  titleWrapper: {
    height: 80,
  },
  input: {
    backgroundColor: '#ddd',
    marginVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  small: {
    fontSize: 10,
    color: '#fff',
    textAlign: 'center',
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
  },
});
