import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Menu extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.paragraph}>
          This is header
        </Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    position: 'absolute',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'red'
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    flex: 1
  }
});
