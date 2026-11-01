import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Switch,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const handleEnviar = () => {
    if (!nombre.trim() || !carrera.trim() || !semestre.trim()) {
      Alert.alert('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    if (isNaN(semestre)) {
      Alert.alert('Error', 'El semestre debe ser un número.');
      return;
    }

    const tallerTexto = taller ? 'Sí' : 'No';
    const constanciaTexto = constancia ? 'Sí' : 'No';
    const deportesTexto = deportes ? 'Sí' : 'No';

    Alert.alert(
      'Registro enviado',
      `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\nTaller: ${tallerTexto}\nConstancia: ${constanciaTexto}\nDeportes: ${deportesTexto}`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.titulo}>Registro de Evento Universitario</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Carrera"
          value={carrera}
          onChangeText={setCarrera}
        />

        <TextInput
          style={styles.input}
          placeholder="Semestre"
          keyboardType="numeric"
          value={semestre}
          onChangeText={setSemestre}
        />

        <Text style={styles.subtitulo}>Opciones</Text>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>¿Asistirá al taller?</Text>
          <Switch value={taller} onValueChange={setTaller} />
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>¿Requiere constancia?</Text>
          <Switch value={constancia} onValueChange={setConstancia} />
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>¿Participará en deportes?</Text>
          <Switch value={deportes} onValueChange={setDeportes} />
        </View>

        <TouchableOpacity style={styles.botonEnviar} onPress={handleEnviar}>
          <Text style={styles.textoBoton}>Enviar Registro</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#111',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
  },
  botonEnviar: {
    backgroundColor: '#007AFF',
    marginTop: 25,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});