import React from 'react';
import { MessageCircle, Mail, Instagram, Facebook, MapPin, Clock, Phone } from 'lucide-react';
import { sendWhatsAppMessage } from '../utils/whatsapp';

const Contact: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = `Halo GacorSolution, saya ingin bertanya tentang layanan Anda:

* Nama: [Isi Nama Anda]
* Email: [Isi Email Anda]
* Pertanyaan: [Isi pertanyaan Anda]`;

    sendWhatsAppMessage(message);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siap membantu mewujudkan project digital Anda. Tim kami tersedia 24/7 untuk konsultasi dan support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp (Utama)</h4>
                    <p className="text-gray-600">+6289505366193</p>
                    <p className="text-sm text-gray-500">Response time: &lt; 1 jam</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@mdhyaulatha@gmail.com</p>
                    <p className="text-sm text-gray-500">Response time: &lt; 4 jam</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Jam Operasional</h4>
                    <p className="text-gray-600">Senin - Jumat: 08.00 - 22.00 WIB</p>
                    <p className="text-gray-600">Sabtu - Minggu: 09.00 - 18.00 WIB</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lokasi</h4>
                    <p className="text-gray-600">Indonesia</p>
                    <p className="text-sm text-gray-500">Melayani seluruh Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/mdhiyaulatha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-lg text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Instagram className="h-6 w-6" />
                </a>
            
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Mulai Project Anda</h3>
            
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Klik tombol di bawah untuk langsung chat dengan tim kami via WhatsApp. 
                  Dapatkan konsultasi gratis untuk project Anda!
                </p>
                
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-3"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>Chat via WhatsApp</span>
                </button>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Mengapa Chat WhatsApp?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Response cepat dalam hitungan menit
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Konsultasi gratis tanpa biaya
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Proses order yang mudah dan cepat
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Support 24/7 untuk pelanggan
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h5 className="font-semibold text-blue-900 mb-2">💡 Tips Order:</h5>
                <p className="text-sm text-blue-800">
                  Siapkan brief project Anda (tujuan website, fitur yang diinginkan, referensi desain, dan timeline) 
                  agar kami bisa memberikan solusi terbaik dan estimasi harga yang akurat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Pertanyaan Umum</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">Berapa lama pengerjaan website?</h4>
              <p className="text-gray-600 text-sm">
                Tergantung kompleksitas project. Landing page: 3-5 hari, Website bisnis: 7-10 hari, 
                Custom system: 14-21 hari kerja.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">Apakah ada garansi?</h4>
              <p className="text-gray-600 text-sm">
                Ya! Kami berikan garansi bug-fix gratis selama 30 hari setelah website selesai, 
                plus support teknis sesuai paket yang dipilih.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">Sistem pembayaran bagaimana?</h4>
              <p className="text-gray-600 text-sm">
                DP 50% di awal untuk memulai project, pelunasan 50% setelah website selesai 100%. 
                Transfer via bank atau e-wallet.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">Apakah source code diberikan?</h4>
              <p className="text-gray-600 text-sm">
                Ya! Semua source code menjadi milik Anda sepenuhnya setelah pembayaran lunas. 
                Termasuk file, database, dan dokumentasi lengkap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;