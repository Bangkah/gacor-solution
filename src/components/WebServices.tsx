import React from 'react';
import { Globe, Check, MessageCircle, Star } from 'lucide-react';
import { sendWhatsAppMessage } from '../utils/whatsapp';

interface WebServicePackage {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  deliveryTime: string;
  popular?: boolean;
}

const WebServices: React.FC = () => {
  const packages: WebServicePackage[] = [
    {
      id: 1,
      name: 'Paket Basic',
      price: 'Rp 500.000',
      originalPrice: 'Rp 750.000',
      description: 'Landing Page / Website Profil Usaha',
      deliveryTime: '3-5 hari kerja',
      features: [
        'Desain modern dan responsive',
        'Maksimal 5 halaman',
        'Contact form',
        'SEO basic optimization',
        'SSL certificate gratis',
        'Hosting 1 tahun gratis',
        'Revisi 2x',
        'Source code'
      ]
    },
    {
      id: 2,
      name: 'Paket Bisnis',
      price: 'Rp 1.500.000',
      originalPrice: 'Rp 2.000.000',
      description: 'Website UMKM / Toko Online Sederhana',
      deliveryTime: '7-10 hari kerja',
      popular: true,
      features: [
        'Semua fitur Paket Basic',
        'Maksimal 10 halaman',
        'Katalog produk/layanan',
        'WhatsApp integration',
        'Google Maps integration',
        'Social media integration',
        'Admin panel sederhana',
        'Revisi 3x',
        'Training penggunaan',
        'Support 3 bulan'
      ]
    },
    {
      id: 3,
      name: 'Paket Premium',
      price: 'Rp 3.000.000',
      originalPrice: 'Rp 4.500.000',
      description: 'Website Instansi / Custom System',
      deliveryTime: '14-21 hari kerja',
      features: [
        'Semua fitur Paket Bisnis',
        'Unlimited halaman',
        'Custom functionality',
        'Database integration',
        'User management system',
        'Advanced admin panel',
        'Email automation',
        'Payment gateway integration',
        'Revisi unlimited',
        'Support 6 bulan',
        'Maintenance 1 tahun'
      ]
    }
  ];

  const handleOrderClick = (packageItem: WebServicePackage) => {
    const message = `Halo GacorSolution, saya ingin order:

* Produk: ${packageItem.name} - ${packageItem.description}
* Nama: [Isi Nama Anda]
* Email: [Isi Email Anda]
* Kebutuhan Tambahan: [Opsional]`;

    sendWhatsAppMessage(message);
  };

  const handleConsultationClick = () => {
    const message = `Halo GacorSolution, saya ingin konsultasi untuk kebutuhan website:

* Nama: [Isi Nama Anda]
* Email: [Isi Email Anda]
* Jenis Website: [Isi kebutuhan Anda]
* Budget: [Isi budget Anda]
* Timeline: [Isi timeline yang diharapkan]
* Kebutuhan Tambahan: [Opsional]`;

    sendWhatsAppMessage(message);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jasa Pembuatan Website Profesional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wujudkan website impian Anda dengan layanan pembuatan website profesional yang disesuaikan dengan kebutuhan dan budget Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((packageItem) => (
            <div key={packageItem.id} className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${packageItem.popular ? 'ring-2 ring-blue-600' : ''}`}>
              {packageItem.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-bl-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span className="text-sm font-medium">Populer</span>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${packageItem.popular ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    <Globe className={`h-8 w-8 ${packageItem.popular ? 'text-blue-600' : 'text-gray-600'}`} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{packageItem.name}</h3>
                <p className="text-gray-600 mb-6">{packageItem.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-gray-900">{packageItem.price}</span>
                    {packageItem.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{packageItem.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Estimasi: {packageItem.deliveryTime}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {packageItem.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleOrderClick(packageItem)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2 ${
                    packageItem.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Order Paket Ini</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Butuh Solusi Custom?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Setiap bisnis memiliki kebutuhan yang unik. Konsultasikan kebutuhan website Anda dengan tim ahli kami untuk mendapatkan solusi yang tepat dan sesuai budget.
          </p>
          <button
            onClick={handleConsultationClick}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center mx-auto space-x-2"
          >
            <MessageCircle className="h-6 w-6" />
            <span>Konsultasi Gratis</span>
          </button>
        </div>

        {/* Portfolio Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Mengapa Memilih GacorSolution?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-600">Website Selesai</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9</div>
              <p className="text-gray-600">Rating Pelanggan</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Support</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3 Tahun</div>
              <p className="text-gray-600">Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebServices;