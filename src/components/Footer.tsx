import React from 'react';
import { Code2, MessageCircle, Mail, Instagram, Facebook, Heart } from 'lucide-react';
import { sendWhatsAppMessage } from '../utils/whatsapp';

const Footer: React.FC = () => {
  const handleQuickOrder = () => {
    const message = `Halo GacorSolution, saya tertarik dengan layanan Anda. Bisa diskusi lebih lanjut?

* Nama: [Isi Nama Anda]
* Email: [Isi Email Anda]
* Layanan yang diminati: [Source Code / Jasa Website]
* Kebutuhan: [Jelaskan singkat kebutuhan Anda]`;

    sendWhatsAppMessage(message);
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                GacorSolution
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Solusi teknologi terpercaya untuk kebutuhan digital Anda. Menyediakan source code berkualitas 
              dan jasa pembuatan website profesional dengan harga terjangkau.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/mdhiyaulatha"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              
              <a
                href="mailto:mdhyaulatha@gmail.com"
                className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan Kami</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Source Code Premium
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Jasa Pembuatan Website
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Custom Development
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Website Maintenance
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Konsultasi IT
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-green-500" />
                <span>+62 895-0536-6193</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-500" />
                <span>mdhyaulatha@gmail.com</span>
              </div>
            </div>
            
            <button
              onClick={handleQuickOrder}
              className="mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat Sekarang</span>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm text-center md:text-left">
              © 2025 GacorSolution. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <span>Made with</span>
              <span>by GacorSolution Team</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-800 text-center text-gray-400 text-xs">
            <p>
              Disclaimer: Semua source code dan website yang kami buat adalah untuk tujuan edukasi dan komersial yang sah. 
              Kami tidak bertanggung jawab atas penyalahgunaan produk oleh pihak ketiga.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;