import React from 'react';
import { MessageCircle, Code2, Globe, Zap } from 'lucide-react';
import { sendWhatsAppMessage } from '../utils/whatsapp';
import SEO from './SEO'; 

const Hero: React.FC = () => {
  const handleOrderClick = () => {
    const message = `Halo GacorSolution, saya ingin mengetahui lebih lanjut tentang layanan Anda:

* Produk: [Konsultasi Umum]
* Nama: [Isi Nama Anda]
* Email: [Isi Email Anda]
* Kebutuhan Tambahan: [Opsional]`;

    sendWhatsAppMessage(message);
  };

  return (
    <>
      <SEO
        title="GacorSolution - Source Code & Web Development Services"
        description="Selamat datang di GacorSolution! Penyedia source code premium dan jasa pembuatan website profesional untuk siswa, mahasiswa, UMKM, hingga lembaga pemerintah."
        url="https://gacorsolution.vercel.app"
        image="/src/assets/images/muslim-life.png"
      />

      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Selamat Datang di{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GacorSolution
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Penyedia source code berkualitas dan jasa pembuatan website profesional. 
              Solusi teknologi terpercaya untuk kebutuhan digital Anda dengan harga terjangkau.
            </p>
            <button
              onClick={handleOrderClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center mx-auto space-x-2"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Order via WhatsApp</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <Code2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Source Code Premium</h3>
              <p className="text-gray-600">
                Koleksi source code siap pakai dengan kualitas tinggi, dokumentasi lengkap, 
                dan support penuh untuk berbagai kebutuhan project Anda.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Jasa Website Profesional</h3>
              <p className="text-gray-600">
                Layanan pembuatan website custom dari landing page hingga sistem kompleks, 
                disesuaikan dengan kebutuhan dan budget Anda.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pelayanan Cepat</h3>
              <p className="text-gray-600">
                Proses order mudah via WhatsApp, pengerjaan cepat, dan support after-sales 
                yang responsif untuk kepuasan pelanggan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
