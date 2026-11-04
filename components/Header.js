
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>ZAYNE COLLECTION</Text>
      <Text style={styles.subtitle}>
        Love and Deepspace Merchandise
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E6D6F5',
    borderRadius: 15,
    marginBottom: 20,
  },
  judul: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#49365F',
  },
  subtitle: {
    fontSize: 13,
    color: '#8D72AD',
    marginTop: 5,
  },
});
