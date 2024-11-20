import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { colors } from '../constants';

const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onChange}>
      <View style={[styles.checkbox, checked && styles.checked]}>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: colors.main,
  },
  innerCheckbox: {
    width: 12,
    height: 12,
    backgroundColor: '#fff'
  },

});

export default CustomCheckbox;
