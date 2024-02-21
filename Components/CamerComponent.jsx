import React, { useRef } from 'react';
import { View, Button, Platform } from 'react-native';
import { RNCamera } from 'react-native-camera';

export const CameraComponent = () => {
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        console.log('Picture taken:', data.uri);
      } catch (error) {
        console.error('Failed to take picture:', error);
      }
    } else {
      console.error('Camera reference is null');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        onCameraReady={() => console.log('Camera ready')}
      />
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <Button title="Take Picture" onPress={takePicture} />
      </View>
    </View>
  );
};
