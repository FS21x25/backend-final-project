const mongoose = require('mongoose');
const Materi = require('./models/materi');

mongoose.connect('mongodb+srv://mfirdausnz1819:firdaus1819@cluster0.qv7lqu6.mongodb.net/mata_pembelajaran');

const materiCards = [
  {
    image: 'https://imgur.com/gdoOJfI.jpg',
    category: 'SD',
    name: 'Matematika',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Matematika untuk SD yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran Matematika di SD, memperlancar kamu mengerjakan soal-soal Matematika SD, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/XdYV5qG.jpg',
    category: 'SD',
    name: 'B. Indonesia',
    price: 'Gratis',
    description: 'Membaca dan Menulis dengan Teks: Siswa mungkin juga akan diperkenalkan dengan membaca dan menulis teks sederhana seperti surat pendek, kartu pos, atau pesan singkat.',
  },
  {
    image: 'https://imgur.com/FnJ8IGj.jpg',
    category: 'SD',
    name: 'IPA',
    price: 'Gratis',
    description: 'Mempelajari tentang ilmu pengetahuan alam untuk anak-anak SD',
  },
  {
    image: 'https://imgur.com/YQDktv5.jpg',
    category: 'SD',
    name: 'PKN',
    price: 'Gratis',
    description: 'Mempelajari tentang pendidikan kewarganegaraan untuk anak-anak SD',
  },
  {
    image: 'https://imgur.com/Q4qxtgW.jpg',
    category: 'SD',
    name: 'B. Inggris',
    price: 'Gratis',
    description: 'Belajar membaca dan menulis dengan menggunakan Bahasa Inggris untuk anak-anak SD',
  },
  {
    image: 'https://imgur.com/qA3N8By.jpg',
    category: 'SD',
    name: 'Agama Islam',
    price: 'Gratis',
    description: 'Mempelajari tentang pendidikan Agama Islam untuk anak-anak SD',
  },
  {
    image: 'https://imgur.com/NJDBuwP.jpg',
    category: 'SD',
    name: 'Seni & Budaya',
    price: 'Gratis',
    description: 'Mempelajari tentang pendidikan kewarganegaraan untuk anak-anak SD',
  },
  {
    image: 'https://imgur.com/cTHTNIM.jpg',
    category: 'SD',
    name: 'Penjaskes',
    price: 'Gratis',
    description: 'Mempelajari tentang pendidikan kewarganegaraan untuk anak-anak SD',
  },
  {
    image: 'https://imgur.com/dc2gZjC.jpg',
    category: 'SMP',
    name: 'Matematika',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Matematika untuk SMP yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran Matematika di SMP, memperlancar kamu mengerjakan soal-soal Matematika SMP, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/uWJ3r6y.jpg',
    category: 'SMP',
    name: 'Kimia',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Kimia untuk SMP yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran Kimia di SMP, memperlancar kamu mengerjakan soal-soal Kimia SMP, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/hozA58T.jpg',
    category: 'SMP',
    name: 'Fisika',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Fisika untuk SMP yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran fisika di SMP, memperlancar kamu mengerjakan soal-soal Fisika SMP, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/ACbChHL.jpg',
    category: 'SMP',
    name: 'Biologi',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Biologi untuk SMP yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran Biologi di SMP, memperlancar kamu mengerjakan soal-soal Biologi SMP, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/eKU2CsJ.jpg',
    category: 'SMP',
    name: 'B.Inggris',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Bahasa Inggris untuk SMP yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran Bahasa Inggris di SMP, memperlancar kamu mengerjakan soal-soal Bahasa Inggris SMP, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/K8Fy1XV.jpg',
    category: 'SMP',
    name: 'B.Indonesia',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Bahasa Indonesia untuk SMP yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran Bahasa Indonesia di SMP, memperlancar kamu mengerjakan soal-soal Bahasa Indonesia SMP, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/8vC4QYk.jpg',
    category: 'SMP',
    name: 'PKN',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran PKN untuk SMP yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran PKN di SMP, memperlancar kamu mengerjakan soal-soal PKN SMP, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/IeewjoT.jpg',
    category: 'SMP',
    name: 'IPS',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran IPS untuk SMP yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran IPS di SMP, memperlancar kamu mengerjakan soal-soal IPS SMP, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/TdB2rhM.jpg',
    category: 'SMA',
    name: 'B.Inggris',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran B.Inggris untuk SMA yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran B.Inggris di SMA, memperlancar kamu mengerjakan soal-soal Inggris SMA, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/7Q0bFTe.jpg',
    category: 'SMA',
    name: 'Matematika',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Matematika untuk SMA yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran Matematika di SMA, memperlancar kamu mengerjakan soal-soal Matematika SMA, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/nrPnil5.jpg',
    category: 'SMA',
    name: 'Biologi',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Biologi untuk SMA yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran Biologi di SMA, memperlancar kamu mengerjakan soal-soal Biologi SMA, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/3ATengW.jpg',
    category: 'SMA',
    name: 'B.Indonesia',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran B.Indonesia untuk SMA yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran B.Indonesia di SMA, memperlancar kamu mengerjakan soal-soal B.Indonesia SMA, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/cQTusnh.jpg',
    category: 'SMA',
    name: 'Sejarah',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Sejarah untuk SMA yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran Sejarah di SMA, memperlancar kamu mengerjakan soal-soal Sejarah SMA, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/Cuh6Id8.jpg',
    category: 'SMA',
    name: 'Ekonomi',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Ekonomi untuk SMA yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran Ekonomi di SMA, memperlancar kamu mengerjakan soal-soal Ekonomi SMA, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/W3WrMem.jpg',
    category: 'SMA',
    name: 'Geografi',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Geografi untuk SMA yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran Geografi di SMA, memperlancar kamu mengerjakan soal-soal Geografi SMA, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/s9yiVrM.jpg',
    category: 'SMA',
    name: 'Sosiologi',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Sosiologi untuk SMA yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran Sosiologi di SMA, memperlancar kamu mengerjakan soal-soal Sosiologi SMA, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/aaMUiDE.jpg',
    category: 'SMK',
    name: 'Administrasi',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Administrasi untuk SMK yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran Administrasi di SMK, memperlancar kamu mengerjakan soal-soal Administrasi SMK, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/ttzA9In.jpg',
    category: 'SMK',
    name: 'Manajemen',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Manajemen untuk SMK yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran Manajemen di SMK, memperlancar kamu mengerjakan soal-soal Manajemen SMK, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/Bq2dxhl.jpg',
    category: 'SMK',
    name: 'Akuntansi',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Akuntansi untuk SMK yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran Akuntansi di SMK, memperlancar kamu mengerjakan soal-soal Akuntansi SMK, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/ysrkaAa.jpg',
    category: 'SMK',
    name: 'Multimedia',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Multimedia untuk SMK yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran Multimedia di SMK, memperlancar kamu mengerjakan soal-soal Multimedia SMK, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/I1SQWvq.jpg',
    category: 'SMK',
    name: 'Admnistrasi Perkantoran',
    price: 'Gratis',
    description:
      'Di sini kamu bisa tonton video yang membahas pelajaran Administrasi Perkantoran untuk SMK yang sudah disesuaikan dengan kurikulum sekolah kamu. Dengan menonton video pelajaran dari Owlearn, kamu bisa mendalami pelajaran Administrasi Perkantoran di SMK, memperlancar kamu mengerjakan soal-soal Administrasi Perkantoran SMK, dan membantu kamu untuk menghadapi ulangan di sekolah.',
  },
  {
    image: 'https://imgur.com/M9LPjcz.jpg',
    category: 'Univ',
    name: 'Informatika',
    price: 'Gratis',
    description: 'Materi ini mencakup pemahaman dasar tentang bahasa pemrograman, algoritma, dan struktur data. Siswa belajar bagaimana membuat program komputer yang efisien dan efektif.',
  },
];

async function seedDataBase() {
  try {
    await Materi.deleteMany();

    await Materi.insertMany(materiCards);

    console.log('Data berhasil dimasukan ke dalam database.');
  } catch (error) {
    console.error('Gagal memasukan data:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedDataBase();
