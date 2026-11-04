
import { View, Text, Image, StyleSheet } from 'react-native';
import Lencana from './Lencana';

export default function KartuProduk({ nama, harga, gambar, label, deskripsi }) {
  return (
    <View style={styles.card}>
      <Image source={gambar} style={styles.gambar} />

      <Text style={styles.nama}>{nama}</Text>

      <Text style={styles.harga}>
        Harga: <Text style={styles.nilaiHarga}>{harga}</Text>
      </Text>

      <Text style={styles.deskripsi} numberOfLines={2}>
        {deskripsi}
      </Text>

      <Lencana label={label} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F8F3FC',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E6D6F5',
  },
  gambar: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  nama: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#49365F',
    marginTop: 10,
  },
  harga: {
    fontSize: 13,
    color: '#6F617D',
    marginTop: 5,
  },
  nilaiHarga: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#8D72AD',
  },
  deskripsi: {
    fontSize: 13,
    color: '#6F617D',
    marginTop: 5,
  },
});
