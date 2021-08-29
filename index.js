import "react-native-gesture-handler";
import { registerRootComponent } from "expo";

// <<<<<<< HEAD
// import App from "./App";
// =======
import App from './src/components/App';
// >>>>>>> 76a26c9a8bcaa99231ecaf1274eec303a0f3d243

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
