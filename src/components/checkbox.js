import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';

const Checkbox = ({ checked, onCheck }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => onCheck(!checked)}
      style={styles.container}
    >
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require('../assets/icons/icon_check.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
    container: {
      borderColor: '#B9B5B5',
      borderWidth: 1,
      borderRadius: 4,
      width: 22,
      height: 22,
    },
    innerContainer: {
      backgroundColor: '#B9B5B5',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkIcon: {
      width: 12,
      height: 9,
    },
  });
  

export default React.memo(Checkbox);
