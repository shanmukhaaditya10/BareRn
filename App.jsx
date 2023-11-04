import { StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { RNCamera ,} from 'react-native-camera';

const App = () => {
 const [faces, setFaces] = useState([]);

 return (
   <View style={styles.container}>
     <RNCamera
       style={styles.camera}
       captureAudio={false}
       onFacesDetected={(faces) => {
         setFaces(faces.faces);
       }}
       type={RNCamera.Constants.Type.front}
       flashMode={RNCamera.Constants.FlashMode.on}
     />
     {faces.map((face, index) => (
       <View
         key={index}
         style={{
          position: 'absolute',
          left: face.bounds.origin.x,
          top: face.bounds.origin.y,
          width: face.bounds.size.width,
          height: face.bounds.size.height,
          borderWidth: 2,
          borderColor: 'red',
        }}
       />
     ))}
   </View>
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
 },
 camera: {
   flex: 1,
 },
});

export default App;
