import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { Card } from 'react-native-elements';
import appColors from '../colors';
import Checklist from '../models/checklist';
import ChecklistDisplay from './checklist-display';


const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Checklists</Text>
      </View>
      <ChecklistDisplay />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: appColors.background,
    flex: 1
  },
  headerContainer: {
    backgroundColor: appColors.accent,
    paddingVertical: 16
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    marginLeft: 12
  }
});

export default App;
