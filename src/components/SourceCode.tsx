import React from 'react';
import { Code2, Star, MessageCircle } from 'lucide-react';
import { sendWhatsAppMessage } from '../utils/whatsapp';
import SEO from './SEO';

// Import gambar dari folder lokal
import muslimLifeImg from '../assets/images/muslim-life.png';
import absensiKaryawanImg from '../assets/images/absensi-karyawan.png';
import gudangTugasImg from '../assets/images/gudang-tugas.png';
import akademikKampusImg from '../assets/images/akademik-kampus.png';
import portfolioImg from '../assets/images/portfolio.png';

interface SourceCodeProject {
  id: number;
  name: string;
  description: string;
  price: string;
  features: string[];
  technology: string;
  rating: number;
  imageUrl: string;
  liveUrl?: string;
}

const SourceCode: React.FC = () => {
  const projects: SourceCodeProject[] = [
    {
      id: 1,
      name: 'Muslim Life',
      description: 'Aplikasi Islami modern: jadwal sholat, Al-Qur’an digital, doa harian, dan arah kiblat.',
      price: 'Rp 150.000',
      features: ['Al-Qur’an & terjemahan', 'Jadwal sholat otomatis', 'Arah kiblat', 'Artikel & doa harian', 'Dark Mode'],
      technology: 'React.js, Tailwind CSS, API eksternal',
      rating: 4.9,
      imageUrl: muslimLifeImg,
      liveUrl: 'https://muslim-life.vercel.app'
    },
    {
      id: 2,
      name: 'Absensi Karyawan (QR Code)',
      description: 'Sistem absensi karyawan dengan QRcode / manual, laporan & export mudah.',
      price: 'Rp 300.000',
      features: ['QR Code & manual', 'Manajemen user & jabatan', 'Export laporan', 'Peran pengguna'],
      technology: 'Laravel 10, PHP, MySQL, Blade',
      rating: 4.8,
      imageUrl: absensiKaryawanImg
    },
    {
      id: 3,
      name: 'Gudang Tugas / Manajemen Tugas Mahasiswa',
      description: 'Platform tugas & catatan kuliah dengan opsi premium verifikasi.',
      price: 'Rp 200.000',
      features: ['Upload tugas', 'To-do list', 'Verifikasi premium', 'User & Admin'],
      technology: 'PHP, HTML, CSS',
      rating: 4.7,
      imageUrl: gudangTugasImg,
    },
    {
      id: 4,
      name: 'Sistem Akademik Kampus',
      description: 'CRUD akademik: mahasiswa, dosen, jurusan, kelas, dan statistik kampus.',
      price: 'Rp 250.000',
      features: ['CRUD lengkap', 'Statistik', 'Relasi database', 'UI sederhana'],
      technology: 'PHP (PDO), MySQL, HTML + CSS',
      rating: 4.6,
      imageUrl: akademikKampusImg
    },
    {
      id: 5,
      name: 'Portfolio Pribadi',
      description: 'Website portofolio profesional: menampilkan proyek, resume & sertifikat.',
      price: 'Rp 100.000',
      features: ['Proyek & galeri', 'Resume & sertifikat', 'Desain responsif', 'Hosting live'],
      technology: 'React.js, Bootstrap, CSS',
      rating: 4.8,
      imageUrl: portfolioImg,
      liveUrl: 'https://portfolio-bangkahs-projects.vercel.app'
    }
  ];

  const handleOrderClick = (project: SourceCodeProject) => {
    const message = `Halo GacorSolution, saya ingin order:

* Produk: ${project.name}
* Nama: [Isi Nama Anda]
* Email: [Isi Email Anda]
* Kebutuhan Tambahan: [Opsional]`;

    sendWhatsAppMessage(message);
  };

  return (
    <>
      <SEO
        title="Katalog Source Code Premium - PHP, MySQL, JavaScript, React"
        description="Koleksi source code berkualitas tinggi siap pakai untuk berbagai kebutuhan development. Sistem login, CRUD, e-commerce, inventory, dan portfolio website dengan dokumentasi lengkap."
        keywords="source code PHP, sistem login MySQL, CRUD mahasiswa, template portfolio, inventory system, toko online, source code premium, download source code"
        url="https://gacorsolution.com/source-code"
      />
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul & intro */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih project siap pakai / bisa dikustom sesuai kebutuhan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {project.imageUrl && (
                <img src={project.imageUrl} alt={`Preview ${project.name}`} className="w-full h-48 object-cover" />
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Code2 className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" aria-hidden="true" />
                    <span className="text-sm font-medium text-gray-700">{project.rating}</span>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h2>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Fitur Utama:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Teknologi:</span> {project.technology}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">{project.price}</span>
                  </div>
                  <button
                    onClick={() => handleOrderClick(project)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                    aria-label={`Order ${project.name} via WhatsApp`}
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Order</span>
                  </button>
                </div>

                {project.liveUrl && (
                  <div className="mt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Lihat Demo
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Tidak menemukan yang Anda cari? Kirim request custom source code sesuai repo Anda.
          </p>
          <button
            onClick={() => sendWhatsAppMessage('Halo GacorSolution, saya ingin request custom source code dari GitHub Anda. Bisa diskusi lebih lanjut?')}
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            Request Custom Source Code
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default SourceCode;
