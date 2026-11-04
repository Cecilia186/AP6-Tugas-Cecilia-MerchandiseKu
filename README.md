# AP6 Tugas Cecilia – MerchandiseKu

## Identitas

- **Nama:** Cecilia
- **NIM:** 253303620009
- **Program Studi:** Sistem Informasi
- **Mata Kuliah:** Pemrograman Mobile

## Deskripsi Aplikasi

MerchandiseKu adalah aplikasi katalog merchandise bertema Zayne dari game Love and Deepspace. Aplikasi ini dibuat menggunakan React Native dan Expo dengan kombinasi warna lilac dan ungu.

Aplikasi menampilkan beberapa produk merchandise, yaitu Zayne Plushie, Zayne Acrylic Stand, Zayne Photocard, dan Zayne Keychain.

## Struktur Komponen

```text
MerchandiseKu/
├── App.js
├── assets/
│   ├── banner-master-of-fate.png
│   ├── plushiezayne.png
│   ├── acrylicstand.png
│   ├── photocard.png
│   └── keychain.png
├── components/
│   ├── Header.js
│   ├── KartuProduk.js
│   └── Lencana.js
├── README.md
└── package.json
```

## Komponen yang Digunakan

1. **Header.js** – Menampilkan judul dan subtitle aplikasi.
2. **KartuProduk.js** – Menampilkan informasi produk berupa nama, harga, gambar, label, dan deskripsi.
3. **Lencana.js** – Menampilkan label kategori produk.

Komponen KartuProduk menerima lima props, yaitu `nama`, `harga`, `gambar`, `label`, dan `deskripsi`. Komponen Lencana menerima props `label`.

## Fitur Aplikasi

- Menampilkan katalog empat produk merchandise.
- Menggunakan ScrollView agar halaman dapat digulir.
- Menggunakan gambar lokal dari folder assets.
- Menggunakan StyleSheet untuk mengatur tampilan.
- Menggunakan StatusBar.
- Menggunakan numberOfLines untuk membatasi deskripsi produk menjadi dua baris.
- Menggunakan nested Text untuk memberikan gaya berbeda pada teks harga.

## Cara Menjalankan Aplikasi

1. Clone repository ini.
2. Buka folder proyek melalui terminal.
3. Jalankan perintah:

```bash
npm install
```

4. Jalankan Expo:

```bash
npx expo start
```

5. Scan QR Code menggunakan aplikasi Expo Go di perangkat Android.

## Screenshot Aplikasi

Tambahkan dua screenshot aplikasi yang diambil dari perangkat fisik menggunakan Expo Go pada bagian ini.

## Refleksi Pembelajaran

Melalui tugas ini, saya belajar membuat aplikasi katalog sederhana menggunakan React Native dan Expo. Saya juga belajar membagi tampilan aplikasi menjadi beberapa komponen agar kode lebih terstruktur dan mudah digunakan kembali. Selain itu, saya memahami penggunaan props, StyleSheet, Image, Text, dan ScrollView. Tugas ini membantu saya memahami dasar pengembangan aplikasi mobile secara lebih praktis.