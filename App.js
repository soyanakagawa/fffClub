import App from './src'
import * as firebase from 'firebase';
import { config } from './env'

firebase.initializeApp(config);

export default App