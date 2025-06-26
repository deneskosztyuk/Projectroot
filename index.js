/**
 * @format
 */

// This is the entry point for a React Native application.
// It imports the necessary modules and registers the main application component.
import 'react-native-gesture-handler'; 
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
