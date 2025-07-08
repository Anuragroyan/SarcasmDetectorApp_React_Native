import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, SafeAreaView, Image, Alert } from 'react-native';
import { predictSarcasm } from './sarcasmdetector'; // Make sure your model logic is inside src/sarcasmDetector.js

export default function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const handlePredict = () => {
    if (!text.trim()) {
      Alert.alert('Input Required', 'Please enter a sentence before predicting.');
      return;
    }

    const prediction = predictSarcasm(text);

    if (!prediction || !prediction.label) {
      Alert.alert('Prediction Failed', 'Prediction failed or returned empty.');
      return;
    }

    setResult(prediction);
  };

  const clearPredict = () => {
     setText('');        // Clear input text
     setResult(null);    // Clear prediction result
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require('./assets/logo.png')}
          style={{
            width: 200,
            height: 200,
            marginTop: 100,
            marginLeft: 80,
            marginBottom: -60,
            alignItems: 'stretch',
            borderColor: '#f0f4f8',
          }}
          resizeMode="center"
        />
      </View>
      <Text style={styles.header}>Sarcasm Detector</Text>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Enter a sentence"
        style={styles.input}
      />
      <View style={styles.buttonRow}>
        <View style={styles.buttonWrapper}>
          <Button title="Detect Sarcasm" onPress={handlePredict} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Clear" onPress={clearPredict} />
        </View>
      </View>
      {result && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>
            Prediction: <Text style={styles.bold}>{result.label}</Text>
          </Text>
          <Text style={styles.resultText}>
            Confidence: <Text style={styles.bold}>{(result.confidence * 100).toFixed(2)}%</Text>
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#f0f4f8',
  },
  header: {
    marginTop: 70,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  resultBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#6082B6',
    borderRadius: 8,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight:'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
    buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // or 'center' / 'space-around'
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  }
});
