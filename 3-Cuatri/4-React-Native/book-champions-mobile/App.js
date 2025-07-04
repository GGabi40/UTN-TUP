import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewBase,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [readings, setReadings] = useState([]);

  const handleReadingInput = (enteredInput) => {
    setText(enteredInput);
  };

  const handleAddReadLine = () => {
    if(text.trim() === '') { // trim() saca espacios extras
      alert('El texto debe contener un valor.')
    }

    setReadings((prev) => [...prev, text.trim()]);
    setText("");
  };

  return (
    <View style={styles.appContainer}>
      <View>
        {/* View es una caja - como div */}
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese el nombre del libro"
          onChangeText={handleReadingInput}
          value={text}
        ></TextInput>
        {/* Inputs de HTML */}
        <View style={styles.buttonInput}>
          <Button title="Agregar lectura" onPress={handleAddReadLine} />
          {/* onClick es onPress (Al presionar) */}
        </View>
      </View>

      <View>
        <Text>Lista de lecturas:</Text>
      </View>

      <ScrollView> {/* Algo que viene con el scroll */}
        {readings.map((reading, idx) => (
          <View style={styles.readingItem} key={idx}>
            <Text style={{color: 'white'}}>
              {reading}
            </Text>
          </View>
        ))}
      </ScrollView>

      <StatusBar style="auto" /> {/* Barra de navegación del celular */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    justifyContent: "center",
  },
  textInput: {
    width: "100%",
    marginRight: 8,
    marginVertical: 15,
    padding: 8,
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  buttonInput: {
    width: "50%",
    alignSelf: "flex-end",
  },
  readingItem: {
    margin: 12,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#206B21FF",
  },
});
