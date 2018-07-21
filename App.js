import App from './src'
import * as firebase from 'firebase';
import {config} from './env'
import {AsyncStorage} from 'react-native'

firebase.initializeApp(config);


AsyncStorage.getItem('userId').then((value) => {

    if (value == null) {
        AsyncStorage.setItem('userId', `${Math.random()}`)
    }
    console.log(value)

}).catch((err) => {

})
// _retrieveData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('userId');
//     if (value == null) {
//       _storeData = async () => {
//         try {
//           await AsyncStorage.setItem('userId', `${Math.random()}`);
//         } catch (error) {
//           console.log(error.message)
//         }
//       }
//     }
//   } catch{
//   }
// }

export default App