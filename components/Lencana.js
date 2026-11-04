
import { View, Text, StyleSheet } from 'react-native';

export default function Lencana({ label }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6D6F5',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  text: {
    color: '#49365F',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
