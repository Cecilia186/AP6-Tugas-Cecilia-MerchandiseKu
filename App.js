
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';

import Header from './components/Header';
import KartuProduk from './components/KartuProduk';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />

        <Image
          source={require('./assets/banner-master-of-fate.png')}
          style={styles.banner}
        />

        <Text style={styles.sectionTitle}>
          Zayne Merchandise
        </Text>

        <KartuProduk
          nama="Zayne Plushie"
          harga="Rp85.000"
          gambar={require('./assets/plushiezayne.png')}
          label="Plushie"
          deskripsi="Boneka Zayne yang lucu untuk melengkapi koleksi."
        />

        <KartuProduk
          nama="Zayne Acrylic Stand"
          harga="Rp65.000"
          gambar={require('./assets/acrylicstand.png')}
          label="Acrylic"
          deskripsi="Acrylic stand Zayne untuk dekorasi meja."
        />

        <KartuProduk
          nama="Zayne Photocard"
          harga="Rp25.000"
          gambar={require('./assets/photocard.png')}
          label="Photocard"
          deskripsi="Photocard Zayne untuk koleksi pribadi."
        />

        <KartuProduk
          nama="Zayne Keychain"
          harga="Rp35.000"
          gambar={require('./assets/keychain.png')}
          label="Keychain"
          deskripsi="Gantungan kunci Zayne yang praktis dan menarik."
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F3FC',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#49365F',
    marginBottom: 15,
  },
});
