// import React from 'react';
// import Navigation from './src/navigation';
import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   const styles = StyleSheet.create({
//     container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6200EE' },
//     text: { fontSize: 24, color: '#FFF' },
//   });
  
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>My Awesome App</Text>
//     </View>
//   );
// }

import React from 'react';
import Navigation from './src/navigation';
import 'react-native-gesture-handler';
// import { enableScreens } from 'react-native-screens';



export default function App() {
  // enableScreens();
  const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6200EE' },
    text: { fontSize: 24, color: '#FFF' }})

    return (
    <View style={styles.container}>
      <Text style={styles.text}>My Awesome App</Text>
    </View>
  );
}
