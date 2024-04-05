import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  } from 'react-native';
import {useFonts }from'expo-font'
import { colors } from './src/theme/colors';
import * as SplashScreen from 'expo-splash-screen';
import {SafeAreaView,SafeAreaProvider,} from 'react-native-safe-area-context';
import {Home} from './src/screens/Home.Screen';
SplashScreen.preventAutoHideAsync();
export default function App() {
  
    const [fontsLoaded, fontError] = useFonts({
      'Nunito-Regular': require('./assets/fonts/NunitoSans_7pt_Condensed-Regular.ttf'),
      'Nunito-Bold': require('./assets/fonts/NunitoSans_7pt_Condensed-SemiBold.ttf'),
    });
    const onLayoutRootView= async ()=>{
      if(fontsLoaded || fontError){
        await SplashScreen.hideAsync()
      }
    }
    if(!fontsLoaded && !fontError){
        return null
      }
  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
      
      <StatusBar style="light" />
      <SafeAreaView>
      
      <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.dark,
    
  },
});
