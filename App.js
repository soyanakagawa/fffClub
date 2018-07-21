import App from './src'
import * as firebase from 'firebase';
import { config } from './env'
import {AsyncStorage} from 'react-native'

firebase.initializeApp(config);



_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('userId');
    if (value == null) {

      _storeData = async () => {
        try {
          await AsyncStorage.setItem('userId', `${Math.random()}`);
        } catch (error) {
          console.log(error.message)
        }
      }
    }
  } catch{
    // We have useId
  }
}

export default App