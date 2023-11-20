import { StyleSheet, Text, View } from 'react-native';
import ManHinh from './components/ManHinh';
import store from './redux/store';

// import { Provider } from 'react-redux';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <ManHinh/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',

  }
});
