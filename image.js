

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = image.module.css({
  
  pic1: {
    width: 100,
    height: 100,
  },
 
});
 
const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
    
      <Image
        style={styles.pic1}
        source={{
          uri: 'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6e5065403981315750fa9bd117365cb7.jpg',
        }}
      />
    </View>
  );
}

export default DisplayAnImage;






















