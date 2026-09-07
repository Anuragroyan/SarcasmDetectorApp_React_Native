🤖 Sarcasm Detector

Sarcasm Detector is a React Native application that uses a TensorFlow Lite (TFLite) machine learning model to analyze user-provided text and determine whether it contains sarcastic content. The application performs inference directly on the device, providing real-time predictions without requiring a backend or external API.

✨ Key Features

* 🤖 Sarcasm detection using a TFLite model
* 📝 User-provided text analysis
* 🧠 On-device machine learning inference
* 📊 Text classification and prediction
* ⚡ Real-time prediction results
* 🔒 Offline processing without a backend
* 🧹 Text preprocessing for model inference
* 📱 Cross-platform React Native implementation

🏗️ Architecture & Workflow

The React Native UI collects text input from the user and prepares it for model inference. The TensorFlow Lite model processes the text directly on the device and returns a classification result indicating whether the content is sarcastic. The prediction is then displayed through the React Native interface.

🛠️ Tech Stack

React Native • JavaScript • Expo • TensorFlow Lite • Machine Learning • Text Classification • On-Device AI

▶️ Run the App

1. Install dependencies

npm install

2. Start the Expo development server

npx expo start

3. Run on Android

npx expo start --android

4. Run on iOS

npx expo start --ios

5. Run on Web

npx expo start --web

Note: If the TFLite integration uses native modules, you may need an Expo development build rather than Expo Go.

🎯 Project Purpose

This project demonstrates how TensorFlow Lite machine learning models can be integrated into React Native applications for offline text classification. It provides practical experience with mobile ML inference, text preprocessing, model integration, Expo development, and real-time AI predictions without relying on a backend.
