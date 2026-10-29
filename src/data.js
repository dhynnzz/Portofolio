import React from 'react';

export const GithubIcon = (props) =>
  React.createElement(
    'svg',
    { viewBox: '0 0 24 24', fill: 'currentColor', width: 24, height: 24, ...props },
    React.createElement('path', {
      d: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'
    })
  );

export const LinkedinIcon = (props) =>
  React.createElement(
    'svg',
    { viewBox: '0 0 24 24', fill: 'currentColor', width: 24, height: 24, ...props },
    React.createElement('path', {
      d: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38m1.39 9.74v-8.37H5.07v8.37h2.78z'
    })
  );

export const InstagramIcon = (props) =>
  React.createElement(
    'svg',
    { viewBox: '0 0 24 24', fill: 'currentColor', width: 24, height: 24, ...props },
    React.createElement('path', {
      d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
    })
  );

export const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon
};

export const personal = {
  name: 'Mhmd Aminuddin',
  shortName: 'Aminuddin',

  roles: [
    'Front-End Developer',
    '3D Artist',
    'Machine Learning Enthusiast'
  ],

  description:
    'Mahasiswa Teknik Informatika yang berdedikasi menciptakan pengalaman digital bermakna melalui pengembangan web, 3D Artist, machine learning, dan teknologi modern.',

  email: 'dindhyn18@gmail.com',
  location: 'Nusa Tenggara Barat, Indonesia',

  heroImage: '/images/profile-hero.jpg',
  cv: '/cv/CV_Mhmd_Aminuddin.pdf',

  about: {
    description:
      'Saya Mhmd Aminuddin, Mahasiswa Teknik Informatika dari Institut Teknologi Nasional Malang dengan minat mendalam pada front-end development, desain UI/UX,Machine Learning dan 3D Artist. Saya senang mengubah ide kreatif menjadi produk digital yang fungsional, andal, dan memikat secara visual, serta terus mengeksplorasi teknologi terkini untuk memecahkan masalah nyata.',

    location: 'Dompu, Indonesia',

    role:
      'Teknik Informatika · Front-End Developer · UI/UX Designer · Machine Learning Enthusiast · 3D Artist'
  }
};

export const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/dhynnzz',
    icon: 'GitHub'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mhmd-aminuddin-a43696331/',
    icon: 'LinkedIn'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/_dhynnzz/',
    icon: 'Instagram'
  }
];
// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const skills = [
  {
    id: 'development',
    title: 'Development',
    eyebrow: '01 / BUILD',
    items: [
      {
        name: 'React.js',
        description: 'Library JavaScript untuk membangun antarmuka pengguna modern, reaktif, dan interaktif dengan arsitektur berbasis komponen.'
      },
      {
        name: 'JavaScript',
        description: 'Bahasa pemrograman inti untuk membangun logika interaktif dinamis pada front-end maupun back-end.'
      },
      {
        name: 'HTML5',
        description: 'Standar markup modern untuk menstrukturkan halaman web secara semantik dan ramah SEO.'
      },
      {
        name: 'CSS3',
        description: 'Bahasa stylesheet modern untuk styling visual, layout fleksibel, dan animasi antarmuka responsif.'
      },
      {
        name: 'Laravel',
        description: 'Framework PHP full-stack dengan arsitektur MVC, ORM Eloquent, dan ekosistem backend yang kokoh.'
      },
      {
        name: 'PHP',
        description: 'Bahasa pemrograman backend sisi server untuk pengembangan web dinamis dan integrasi database.'
      },
      {
        name: 'Tailwind CSS',
        description: 'Framework CSS utility-first untuk mempercepat pembangunan antarmuka kustom yang presisi dan responsif.'
      },
      {
        name: 'Bootstrap',
        description: 'Framework CSS dengan komponen siap pakai dan sistem grid responsif untuk prototyping cepat.'
      },
      {
        name: 'React Native',
        description: 'Framework cross-platform untuk membangun aplikasi mobile native iOS dan Android menggunakan React.'
      },
      {
        name: 'Vite',
        description: 'Build tool dan frontend bundler generasi baru dengan Hot Module Replacement (HMR) super cepat.'
      }
    ]
  },

  {
    id: 'design',
    title: 'Design',
    eyebrow: '02 / CRAFT',
    items: [
      {
        name: 'Figma',
        description: 'Alat desain kolaboratif untuk pembuatan UI/UX, wireframe, user flow, dan interactive prototype interaktif.'
      },
      {
        name: 'Blender',
        description: 'Software kreasi 3D komprehensif untuk modeling aset, texturing, rigging, animasi, dan rendering visual.'
      },
      {
        name: 'UI/UX Design',
        description: 'Metodologi perancangan antarmuka dan pengalaman pengguna yang mengutamakan kemudahan navigasi dan estetika visual.'
      },
      {
        name: '3D Modeling',
        description: 'Pembuatan objek tiga dimensi, aset lingkungan virtual, dan visualisasi spasial interaktif.'
      }
    ]
  },

  {
    id: 'machine-learning',
    title: 'Machine Learning',
    eyebrow: '03 / INTELLIGENCE',
    items: [
      {
        name: 'Python',
        description: 'Bahasa pemrograman utama untuk komputasi ilmiah, pengolahan data, machine learning, dan computer vision.'
      },
      {
        name: 'TensorFlow',
        description: 'Platform open-source untuk komputasi numerik dan pelatihan model deep learning skala besar.'
      },
      {
        name: 'Keras',
        description: 'High-level neural networks API untuk membangun dan melatih arsitektur deep learning secara intuitif.'
      },
      {
        name: 'OpenCV',
        description: 'Library computer vision untuk prapemrosesan citra digital, deteksi fitur, dan manipulasi visual.'
      },
      {
        name: 'Pandas',
        description: 'Library manipulasi dan analisis data terstruktur dengan performa tinggi pada struktur DataFrame.'
      },
      {
        name: 'NumPy',
        description: 'Library komputasi array multidimensi dan operasi matematika matriks berkecepatan tinggi.'
      }
    ]
  },

  {
    id: 'database',
    title: 'Database',
    eyebrow: '04 / STORAGE',
    items: [
      {
        name: 'MySQL',
        description: 'Sistem manajemen basis data relasional (RDBMS) berbasis SQL untuk penyimpanan data transaksi yang konsisten dan handal.'
      },
      {
        name: 'Database Management',
        description: 'Perancangan skema relasi, normalisasi data, optimasi kueri SQL, dan pemeliharaan integritas database.'
      }
    ]
  },

  {
    id: 'tools',
    title: 'Tools',
    eyebrow: '05 / SYSTEMS',
    items: [
      {
        name: 'Git',
        description: 'Sistem kontrol versi terdistribusi untuk melacak riwayat perubahan kode sumber selama proses pengembangan.'
      },
      {
        name: 'GitHub',
        description: 'Platform kolaborasi berbasis cloud untuk hosting repositori Git, code review, CI/CD, dan manajemen proyek tim.'
      },
      {
        name: 'VS Code',
        description: 'Editor kode sumber modern dengan ekosistem ekstensi yang kaya untuk efisiensi produktivitas pemrograman.'
      },
      {
        name: 'Antigravity',
        description: 'Agen coding berbasis AI generasi mutakhir untuk mendukung otomatisasi pemecahan masalah dan pair programming.'
      },
      {
        name: 'Google Colab',
        description: 'Lingkungan notebook Jupyter berbasis cloud yang menyediakan akses komputasi GPU/TPU gratis untuk machine learning.'
      },
      {
        name: 'Kaggle',
        description: 'Komunitas dan platform data science untuk mengakses dataset publik, notebook eksplorasi, dan kompetisi machine learning.'
      }
    ]
  }
];
// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: 'Prakter Kerja Nyata',
    role: 'Frontend Development',
    company: 'UMKM - Kripik Tempe Lakstari',
    location: 'Malang, Batu, Indonesia',
    period: '5 Juli 2026 - 6 September 2026',
    type: 'Prakter Kerja Nyata',
    logo: '/About/Experience/PKN/1.png',
    description:
      'Melaksanakan Praktik Kerja Nyata (PKN) di UMKM Kripik Tempe Lakstari dengan fokus pada digitalisasi bisnis melalui perancangan profil perusahaan dan sistem e-commerce.',
    responsibilities: [
      'Merancang alur dan arsitektur sistem e-commerce untuk mendukung operasional bisnis UMKM.',
      'Membuat purwarupa (prototype) dan desain UI/UX yang interaktif, termasuk penentuan pedoman desain dan tipografi.',
      'Mengembangkan antarmuka pengguna (frontend) website yang responsif dan mudah digunakan (user-friendly).'
    ],
    technologies: ['Figma', 'VsCode', 'Canva'],
    images: [
      { src: '/About/Experience/PKN/1.png', caption: 'Logo Kripik Tempe Lakstari' },
      { src: '/About/Experience/PKN/2.jpeg', caption: 'Presentasi Profil Hasil Website' },
      { src: '/About/Experience/PKN/3.jpeg', caption: 'Memperlihatkan Hasil Desain E-commerce' }
    ]
  }
];

// ─── EDUCATION ────────────────────────────────────────────────────────────────
export const education = [
  {
    id: 'edu-itn',
    degree: 'Mahasiswa Teknik Informatika',
    institution: 'Institut Teknologi Nasional Malang',
    location: 'Malang, Indonesia',
    period: '2023 — 2027',
    logo: '/images/logos/itn.png',
    description:
      ' Teknik Informatika dengan minat mendalam pada Machine Learning ,Front-end Development, & 3D Artist.',
    details: [
      'Mempelajari dasar-dasar Teknik Informatika yang mencakup pemrograman, kecerdasan buatan, machine learning, jaringan komputer, Dan IoT.',
      'Memiliki minat mendalam pada Front-end Development, dengan fokus membangun antarmuka website yang modern, responsif, interaktif, dan berpusat pada pengalaman pengguna (user experience).',
      'Mengeksplorasi dunia 3D Artist melalui pemodelan 3D, texturing, lighting, dan pengembangan aset visual untuk menciptakan pengalaman digital yang lebih menarik.',
      'Terus mengembangkan kemampuan dalam riset teknologi, analisis data, pengembangan model machine learning, serta eksplorasi teknologi baru untuk menghasilkan karya digital yang inovatif.'
    ],
    images: [
      { src: '/About/Education/ITN/1.jpg', caption: 'Kampus Institut Teknologi Nasional Malang' },
      { src: '/About/Education/ITN/2.jpg', caption: 'Momen Momen Saat Kuliah' },
      { src: '/About/Education/ITN/3.jpg', caption: 'Momen PKKMB' }
    ]
  },
  {
    id: 'edu-sma',
    degree: 'Ilmu Pengetahuan Sosial ',
    institution: 'SMA Negeri 2 Dompu',
    location: 'Dompu, Indonesia',
    period: '2020 — 2023',
    logo: '/images/logos/sman2.png',
    description:
      'Menyelesaikan pendidikan menengah atas pada peminatan Ilmu Pengetahuan Sosial sembari aktif mengembangkan minat pada teknologi digital, komunikasi visual, dan kreativitas multimedia.',
    details: [
      'Mengkurasi dan merancang konten visual informatif untuk proyek publikasi sekolah, menghasilkan peningkatan keterlibatan pengikut secara signifikan.',
      'Memimpin konseptualisasi dan pembuatan desain grafis untuk berbagai acara sekolah, mendorong peningkatan partisipasi siswa.',
      'Mengembangkan format konten kreatif seperti video tutorial, pamflet digital, dan infografis edukatif.',
      'Memproduksi materi grafis serta tata letak terbitan sekolah yang rapi, komunikatif, dan menarik pembaca.'
    ],
    images: [
      { src: '/About/Education/SMA/2.jpg', caption: 'SMA Negeri 2 Dompu' },
      { src: '/About/Education/SMA/1.jpg', caption: 'Foto Bersama Guru' },
      { src: '/About/Education/SMA/3.jpg', caption: 'Momen Kebersamaan' }
    ]
  },
];

// ─── ORGANIZATIONS ────────────────────────────────────────────────────────────
export const organizations = [
  {
    id: 'org-HIMPUNAN MAHASISWA TEKNIK INFORMATIKA',
    role: 'Divisi Kesejahteraan Mahasiswa (KESMA)',
    organization: 'HIMPUNAN MAHASISWA TEKNIK INFORMATIKA ITN MALANG',
    location: 'Institut Teknologi Nasional Malang',
    period: 'Nov 2023 — Juli 2024',
    logo: '/images/logos/hati.png',
    description:
      'Aktif berkontribusi dalam kepengurusan Himpunan Mahasiswa Teknik Informatika (HATI) ITN Malang pada Divisi Kesejahteraan Mahasiswa (KESMA). Berperan dalam mendukung kebutuhan mahasiswa serta terlibat aktif sebagai panitia penyelenggara agenda besar seperti Study Excursie 2024.',
    responsibilities: [
      'Menjadi bagian dari tim panitia Study Excursie 2024, mengoordinasikan logistik, konsumsi, dan kebutuhan esensial peserta selama kegiatan kunjungan Solo - Jogja.',
      'Mengakomodasi dan menyalurkan aspirasi mahasiswa serta memastikan pemenuhan kebutuhan kesejahteraan anggota himpunan.',
      'Berkolaborasi lintas divisi dalam perencanaan, persiapan operasional, dan pelaksanaan berbagai program kerja HATI ITN Malang.'
    ],
    images: [
      { src: '/About/Organization/HATI/1.jpeg', caption: 'Momen Kebersamaan Anggota HATI' },
      { src: '/About/Organization/HATI/2.jpeg', caption: 'Foto Bersama Pengurus HATI ITN Malang' },
      { src: '/About/Organization/HATI/3.jpeg', caption: 'Dokumentasi Kepengurusan dan Kegiatan Himpunan' }
    ]
  },
  {
    id: 'org-METASPACE',
    role: 'Divisi 3D - Immersive',
    organization: 'METASPACE',
    location: 'Institut Teknologi Nasional Malang',
    period: 'Juni 2025 — September 2026',
    logo: '/images/logos/meta.png',
    description:
      'Aktif dalam riset dan pengembangan teknologi immersive di METASPACE ITN Malang, berfokus pada pembuatan model aset 3D serta perancangan pengalaman game interaktif di platform Roblox.',
    responsibilities: [
      'Merancang dan memodelkan aset 3D untuk kebutuhan lingkungan serta objek di dalam game.',
      'Mengembangkan mekanisme game di platform Roblox dan melakukan optimasi performa agar gameplay berjalan lancar.',
      'Melakukan riset teknologi imersif dan berkolaborasi dalam presentasi proyek pengembangan virtual kampus.'
    ],
    images: [
      { src: '/About/Organization/METASPACE/1.jpeg', caption: 'Foto sebelum selesai masa jabatan' },
      { src: '/About/Organization/METASPACE/2.jpeg', caption: 'Foto bersama rektor setelah membahas project' },
      { src: '/certificates/metaspace.png', caption: 'Sertifikat Penghargaan Tim Immersive Engineering' }
    ]
  }
];

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────
export const certifications = [
  {
    id: 'cert-ai-career-readiness-asean-2026',
    name: 'AI Career Readiness Training',
    issuer: 'ASEAN Foundation & LinkedIn (ASEAN Ahead)',
    date: '2026',
    credentialId: 'ada.aseanfoundation.org',
    credentialUrl: 'https://ada.aseanfoundation.org',
    description:
      'Program pelatihan kesiapan karir berbasis kecerdasan buatan (AI Career Readiness Training) yang diselenggarakan oleh ASEAN Foundation melalui inisiatif ASEAN Ahead dengan dukungan resmi dari LinkedIn.',
    details: [
      'Menyelesaikan modul pelatihan AI Career Readiness Training di platform resmi ada.aseanfoundation.org.',
      'Mempelajari fundamental kecerdasan buatan, pemanfaatan AI generatif untuk produktivitas, dan etika AI profesional.',
      'Sertifikat kelulusan resmi yang disahkan oleh Dr. Piti Srisangnam, Direktur Eksekutif ASEAN Foundation.'
    ],
    images: [
      {
        src: '/certificates/ai-readiness.png',
        caption: 'Certificate of Completion AI Career Readiness Training - ASEAN Ahead & LinkedIn'
      }
    ]
  },
  {
    id: 'cert-metaspace-immersive-engineering-2026',
    name: 'Sertifikat Penghargaan: Tim Immersive Engineering',
    issuer: 'Prodi Teknik Informatika S-1 ITN Malang & MIT METASPACE',
    date: '2026',
    credentialId: 'NIP.P 1031000432',
    credentialUrl: '',
    description:
      'Sertifikat penghargaan atas dedikasi dan kontribusi luar biasa sebagai bagian dari tim Immersive Engineering di Metaspace ITN Malang dalam riset teknologi imersif dan perancangan lingkungan virtual.',
    details: [
      'Penghargaan dedikasi dan kontribusi sebagai bagian dari divisi riset dan pengembangan Immersive Engineering.',
      'Perancangan dan pemodelan aset 3D serta implementasi interaksi game di platform Roblox.',
      'Disahkan secara resmi oleh Ketua Program Studi Teknik Informatika S-1 ITN Malang, Yosep Agus Pranoto S.T, M.T.'
    ],
    images: [
      {
        src: '/certificates/metaspace.png',
        caption: 'Sertifikat Penghargaan Tim Immersive Engineering - Metaspace ITN Malang'
      }
    ]
  },
  {
    id: 'cert-ekraf-digital-talent-2026',
    name: 'Badan Ekraf Digital Talent 2026',
    issuer: 'Kementerian Ekonomi Kreatif / Badan Ekonomi Kreatif RI & Dicoding',
    date: '2026',
    credentialId: 'BDT-EKRAF-2026',
    credentialUrl: '',
    description:
      'Program akselerasi talenta digital nasional yang diselenggarakan oleh Kementerian Ekonomi Kreatif / Badan Ekonomi Kreatif Republik Indonesia bersama Dicoding Indonesia.',
    images: [
      {
        src: '/certificates/ekraf.jpg',
        caption: 'Sertifikat Partisipasi Badan Ekraf Digital Talent 2026 - KemenEkraf & Dicoding'
      }
    ]
  },
  {
    id: 'cert-docker-dot-2026',
    name: 'Seminar Docker: Build Your Own Application That Can Run Anywhere',
    issuer: 'DOT Indonesia & HATI ITN Malang',
    date: '2026',
    credentialId: '198/PRODI.T.INF/SERTIFIKAT/2026',
    credentialUrl: '',
    description:
      'Pemahaman arsitektur containerization Docker, pembuatan container image efisien, deployment lingkungan terisolasi, serta penerapan workflow modern untuk aplikasi portabel.',
    images: [
      {
        src: '/certificates/docker.jpg',
        caption: 'Sertifikat Partisipasi Seminar Docker - DOT Indonesia & ITN Malang'
      }
    ]
  },
  {
    id: 'cert-ai-data-analytics-2026',
    name: 'Kuliah Tamu: The Use of AI and Data Analytics in a Business Context',
    issuer: 'FTI ITN Malang & RMIT University',
    date: '2026',
    credentialId: 'ITN.01.0119/I.FTI/2026',
    credentialUrl: '',
    description:
      'Penerapan kecerdasan buatan (AI) dan analitik data dalam transformasi bisnis modern bersama pemateri Dr. Chinthake Wijesooriya dari RMIT University.',
    images: [
      {
        src: '/certificates/ai-data-analytics.jpg',
        caption: 'Sertifikat Kuliah Tamu AI & Data Analytics - RMIT University & FTI ITN Malang'
      }
    ]
  },
  {
    id: 'cert-cloud-blockchain-2024',
    name: 'Webinar Nasional: Mengoptimalkan Sistem Informasi dengan Cloud Computing dan Blockchain',
    issuer: 'Universitas STEKOM & Konsorsium Perguruan Tinggi',
    date: '2024',
    credentialId: '316/061058/WB/JTS/12/2024',
    credentialUrl: '',
    description:
      'Eksplorasi infrastruktur komputasi awan (Cloud Computing), desentralisasi data dengan Blockchain, serta optimasi efisiensi sistem informasi terdistribusi skala besar.',
    images: [
      {
        src: '/certificates/cloud-blockchain.jpg',
        caption: 'Sertifikat Webinar Nasional Cloud Computing & Blockchain'
      }
    ]
  },
  {
    id: 'cert-study-excursie-2024',
    name: 'Study Excursie 2024: Build and Broaden to Prepare Students to Face Industry 4.0',
    issuer: 'Prodi Teknik Informatika S-1 ITN Malang & HATI',
    date: '2024',
    credentialId: 'ITN-NO.167/PRODI.T.INF/SERTIFIKAT/2024',
    credentialUrl: '',
    description:
      'Kunjungan dan studi industri teknologi di Solo & Yogyakarta dalam rangka memperluas wawasan praktis, adopsi teknologi Industri 4.0, dan kesiapan karir industri.',
    images: [
      {
        src: '/certificates/study-excursie.png',
        caption: 'Sertifikat Kegiatan Study Excursie 2024 Goes To Solo-Jogjakarta'
      }
    ]
  },
  {
    id: 'cert-workshop-ui-design-2023',
    name: 'Workshop UI Design',
    issuer: 'Prodi Teknik Informatika & Lab Multimedia Citra ITN Malang',
    date: '2023',
    credentialId: 'ITN_158/PRODI.T.INF/SERTIFIKAT/2023',
    credentialUrl: '',
    description:
      'Pelatihan perancangan antarmuka pengguna (UI Design), visual hierarchy, wireframing, color theory, prototyping interaktif, dan standar desain produk digital.',
    images: [
      {
        src: '/certificates/ui-design.jpg',
        caption: 'Sertifikat Workshop UI Design - Laboratorium Multimedia ITN Malang'
      }
    ]
  }
];

// ─── PROJECT CATEGORIES ───────────────────────────────────────────────────────
export const projectCategories = [
  'All',
  'Game Development',
  'Web',
  'Mobile App',
  'Machine Learning'
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    slug: 'morveil-the-veil-of-truth',
    title: 'Morveil: The Veil Of Truth',
    category: 'Game Development',
    year: '2026',

    description:
      'Pengalaman game horor psikologis misteri 3D kooperatif (4 pemain) berbasis Roblox dengan setting sekolah Indonesia terbengkalai (SMAN Niskala), menampilkan eksplorasi atmosferik, teka-teki interaktif, mekanik pencarian petunjuk tersembunyi, dan jumpscare dinamis.',

    overview:
      'Morveil: The Veil of Truth adalah game horor naratif atmosferik yang dikembangkan di platform Roblox Studio oleh Metaspace Studio. Berlatar di sebuah gedung sekolah menengah atas Indonesia yang ditinggalkan (SMAN Niskala), game ini menuntut 4 pemain untuk bekerja sama menjelajahi lorong-lorong gelap berkabut, memecahkan teka-teki lingkungan, mengumpulkan petunjuk rahasia, serta mengungkap kebenaran kelam yang tersembunyi di balik tabir misteri sekolah.',

    problem:
      'Menciptakan pengalaman horor kooperatif multi-pemain yang imersif dan konsisten di Roblox memerlukan sinkronisasi state jaringan antar 4 pemain, pencahayaan atmosferik realistis tanpa menurunkan performa perangkat mobile/low-end, serta desain teka-teki kooperatif yang mendorong kerja sama tim.',

    solution:
      'Mengembangkan sistem gameplay berbasis Luau di Roblox Studio dengan arsitektur modular Client-Server: modul teka-teki interaktif, sistem inventory item, dynamic soundscape 3D spatial audio, volumetrik fog & lighting effects, serta sistem trigger jumpscare adaptif berbasis pergerakan kelompok pemain.',

    features: [
      'Story-Driven Psychological Horror: Alur narasi investigasi misteri bertahap yang mendalam di lingkungan sekolah SMAN Niskala',
      '4-Player Co-Op Required: Mekanik kerja sama wajib antar 4 pemain untuk membuka pintu terkunci dan memecahkan teka-teki kompleks',
      'Atmospheric 3D Environment: Desain level realistis dengan arsitektur sekolah Indonesia, lumut, tanaman merambat, dan koridor remang-remang',
      'Interactive Puzzle & Clues System: Mekanik investigasi interaktif untuk mencari dokumen, kunci, kode brankas, dan item khusus',
      'Dynamic Lighting & Spatial Audio: Efek senter dinamis, pencahayaan volumetrik dramatis, dan tata suara 3D yang menegangkan',
      'Cross-Platform Gameplay: Dioptimalkan untuk pengalaman lancar di PC, Mac, Mobile (iOS/Android), dan Console'
    ],

    role: 'Lead Game Developer & 3D Environment Designer',

    image: '/projects/roblox-morveil/1.jpeg',
    images: [
      {
        src: '/projects/roblox-morveil/1.jpeg',
        caption: 'Tampilan Utama Gedung SMAN Niskala - Morveil: The Veil Of Truth'
      }
    ],

    technologies: [
      'Roblox Studio',
      'Luau / Lua Scripting',
      '3D Level Design',
      'Atmospheric Lighting',
      'Spatial 3D Audio',
      'Co-Op Multiplayer Logic',
      'Game UI/UX'
    ],

    links: {
      github: '',
      demo: 'https://www.roblox.com/id/games/89247142893508/Morveil-The-Veil-Of-Truth'
    },

    featured: true
  },
  {
    id: 2,
    slug: 'jasa-pengiriman-barang-nabila-trans',
    title: 'Nabila Trans - Sistem Jasa Pengiriman & Ekspedisi',
    category: 'Web',
    year: '2024',

    description:
      'Platform web layanan pengiriman logistik & ekspedisi kargo terpadu dengan fitur pelacakan nomor resi real-time, kalkulator estimasi ongkos kirim antarkota, portal manajemen kurir, dan dashboard analitik dispatch.',

    overview:
      'Nabila Trans adalah aplikasi web ekspedisi dan logistik kargo yang mendigitalisasi seluruh rantai pengiriman barang. Mengintegrasikan portal publik bagi pelanggan untuk memantau perjalanan paket melalui nomor resi serta simulasi biaya ongkos kirim berdasarkan berat dan tujuan rute, sekaligus menyediakan dashboard terpadu bagi tim operasional dan kurir untuk memperbarui status pengiriman secara berkala.',

    problem:
      'Kurangnya transparansi dalam proses pengiriman barang membuat pelanggan harus menghubungi customer service berulang kali hanya untuk menanyakan posisi paket, serta perhitungan ongkos kirim manual yang rawan keliru.',

    solution:
      'Mengembangkan sistem web terintegrasi dengan modul pelacakan resi instan lengkap dengan linimasa status (Order Dibuat, Sedang Transit, Proses Pengiriman, Terkirim), kalkulator ongkir dinamis berdasarkan bobot kilogram dan rute kota, serta dashboard dispatch terpusat.',

    features: [
      'Pelacakan Resi Real-Time (Track Shipment): Pencarian status barang instan via Tracking ID/No. Resi dengan visualisasi linimasa status pengiriman',
      'Kalkulator Estimasi Ongkir (Rate Calculator): Simulasi biaya kirim otomatis berdasarkan kota asal, kota tujuan, berat (kg), dan opsi layanan pengiriman',
      'Dashboard Logistik Terpadu: Pemantauan daftar kiriman aktif, statistik status pengiriman (Delivered, Dalam Transit, Dikemas), dan log riwayat pengiriman',
      'Peta Rute Distribusi Pengiriman: Integrasi visual rute logistik untuk memantau konektivitas distribusi barang antarkota',
      'Multi-Role System: Manajemen akses untuk Pelanggan (tracking & cek tarif), Kurir/Driver (update lokasi & status delivery), dan Admin Logistik',
      'User Interface Modern & Cepat: Desain antarmuka responsif dengan skema warna profesional, akses data instan, dan performa tinggi'
    ],

    role: 'Full-Stack Web Developer',

    image: '/projects/jasa-pengiriman/tampilan-awal.png',
    images: [
      {
        src: '/projects/jasa-pengiriman/tampilan-awal.png',
        caption: 'Tampilan Awal / Beranda - CV Nabila Trans'
      },
      {
        src: '/projects/jasa-pengiriman/admin-dashboard.png',
        caption: 'Tampilan Admin Dashboard - Nabila Trans'
      }
    ],

    technologies: [
      'JavaScript (ES6+)',
      'Node.js',
      'Express',
      'HTML5',
      'CSS3 / Tailwind CSS',
      'REST API',
      'Leaflet / Maps'
    ],

    links: {
      github: 'https://github.com/dhynnzz/Jasa_Pengiriman_Barang',
      demo: ''
    },

    featured: true
  },
  {
    id: 3,
    slug: 'mobilku-aplikasi-pemesanan-rental-mobil',
    title: 'MobilKu - Aplikasi Pemesanan Rental Mobil',
    category: 'Mobile App',
    year: '2024',

    description:
      'Aplikasi mobile pemesanan dan manajemen rental mobil berbasis React Native & Expo, dilengkapi katalog armada kendaraan interaktif, filter spesifikasi, kalkulasi tarif sewa otomatis, dan manajemen riwayat booking.',

    overview:
      'MobilKu adalah aplikasi mobile cross-platform yang dirancang untuk memberikan kemudahan dan kenyamanan dalam menyewa kendaraan. Dibangun menggunakan React Native dan Expo v54, aplikasi ini menghadirkan antarmuka pengguna modern yang intuitif untuk menelusuri armada mobil (SUV, Sedan, MPV), memeriksa ketersediaan tanggal, membandingkan spesifikasi (transmisi, kapasitas kursi, bahan bakar, AC), serta mengelola riwayat pemesanan secara instan.',

    problem:
      'Penyewaan mobil secara konvensional seringkali tidak efisien, membutuhkan chat manual tanpa kejelasan unit yang tersedia, tidak ada perbandingan spesifikasi yang transparan, dan rentan terhadap jadwal tumpang tindih.',

    solution:
      'Mengembangkan aplikasi mobile responsif dengan arsitektur modular React Native & Expo, sistem navigasi mulus menggunakan React Navigation, kartu armada interaktif, kalkulator tarif dinamis berdasarkan tanggal sewa, dan dasbor pelacakan status booking.',

    features: [
      'Katalog Armada Kendaraan Interaktif: Menampilkan foto mobil, tipe kendaraan, badge rating, status ketersediaan, dan tarif sewa per hari',
      'Rincian Spesifikasi Lengkap: Informasi mendalam tentang transmisi (Manual/Matic), kapasitas penumpang, volume bagasi, dan efisiensi bahan bakar',
      'Pemilihan Tanggal Sewa Dinamis: Date picker pick-up & drop-off dengan validasi ketersediaan jadwal kendaraan',
      'Kalkulator Tarif Sewa Otomatis: Perhitungan total biaya sewa secara instan sesuai durasi hari dan opsi tambahan',
      'Manajemen Booking (My Bookings): Tab khusus untuk memantau status sewa aktif, riwayat pemesanan masa lalu, dan rincian transaksi',
      'Cross-Platform Mobile Performance: Dioptimalkan dengan React Native & Expo untuk rendering lancar dan responsif pada perangkat mobile'
    ],

    role: 'Mobile Application Developer',

    image: '/projects/mobilku/cover.jpg',
    images: [
      {
        src: '/projects/mobilku/cover.jpg',
        caption: 'Antarmuka Aplikasi MobilKu: Katalog Armada, Detail Kendaraan & Manajemen Booking'
      }
    ],

    technologies: [
      'React Native',
      'Expo (v54)',
      'JavaScript (ES6+)',
      'React Navigation',
      'Mobile UI/UX',
      'State Management'
    ],

    links: {
      github: 'https://github.com/dhynnzz/MobilKu-Aplikasi-Pemesanan-Rental-Mobil',
      demo: ''
    },

    featured: true
  },
  {
    id: 4,
    slug: 'booking-lapangan-futsal',
    title: 'Sistem Pemesanan Lapangan Futsal Online',
    category: 'Web',
    year: '2024',

    description:
      'Aplikasi web pemesanan lapangan futsal berbasis Laravel & MySQL, menampilkan jadwal ketersediaan lapangan real-time, manajemen slot waktu per jam, kalkulasi tarif sewa, dan dashboard administrasi.',

    overview:
      'Sistem pemesanan lapangan futsal berbasis web yang dikembangkan menggunakan framework Laravel, PHP, dan database MySQL. Aplikasi ini memungkinkan para pegiat futsal untuk memeriksa ketersediaan lapangan secara online, memilih jenis lapangan (Vinyl / Rumput Sintetis), memilih slot waktu bermain, mengisi data pemesan, serta mengonfirmasi reservasi tanpa harus datang langsung ke lokasi.',

    problem:
      'Pengelolaan reservasi lapangan olahraga yang masih menggunakan pencatatan buku fisik rawan memicu double booking antar tim, menyulitkan pelanggan mengecek slot jam kosong, serta memperlambat rekapitulasi transaksi harian.',

    solution:
      'Membangun sistem informasi web terpusat dengan validasi jadwal database anti-bentrok, representasi visual slot waktu berbasis status warna (Available, Booked, Pending), kalkulator tarif otomatis, dan sistem rekap laporan pemesanan.',

    features: [
      'Katalog Lapangan & Fasilitas: Menampilkan jenis lapangan indoor, rumput sintetis/vinyl, fasilitas ruang ganti, dan tarif per jam',
      'Grid Jadwal Real-Time: Visualisasi slot waktu (10:00 - 22:00) yang interaktif dengan indikator status Available, Booked, dan Pending',
      'Formulir Pemesanan Cepat: Form booking ringkas dengan validasi nama pemesan, kontak WhatsApp, tanggal, dan durasi bermain',
      'Kalkulasi Biaya Otomatis: Perhitungan total tagihan sewa secara otomatis berdasarkan durasi waktu yang dipilih',
      'Panel Admin Operasional: Dashboard pengelola untuk memvalidasi pembayaran, mengatur jadwal turnamen, dan mengelola master data lapangan',
      'Desain Responsif: Menggunakan Tailwind CSS dan Blade templating yang cepat diakses dari smartphone maupun desktop'
    ],

    role: 'Full-Stack Web Developer',

    image: '/projects/booking-futsal/halaman-awal.png',
    images: [
      {
        src: '/projects/booking-futsal/halaman-awal.png',
        caption: 'Halaman Awal / Beranda - FutsalHub Pro'
      },
      {
        src: '/projects/booking-futsal/jadwal.png',
        caption: 'Pilih Jadwal & Lapangan Real-Time Live - FutsalHub Pro'
      },
      {
        src: '/projects/booking-futsal/cek-pesanan.png',
        caption: 'Cek Status Pesanan & E-Ticket - FutsalHub Pro'
      }
    ],

    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
      'Tailwind CSS',
      'Blade Templating',
      'Vite',
      'JavaScript'
    ],

    links: {
      github: 'https://github.com/dhynnzz/booking_lapangan_futsal',
      demo: ''
    },

    featured: true
  },
  {
    id: 5,
    slug: 'virtual-kampus-itn-malang-kampus-2',
    title: 'Virtual Kampus ITN Malang - Kampus 2',
    category: 'Game Development',
    year: '2025',

    description:
      'Pengalaman metaverse dan simulasi virtual 3D interaktif Institut Teknologi Nasional (ITN) Malang Kampus 2 berbasis Roblox, merekonstruksi lanskap kampus secara realistis dengan avatar berjas almamater, navigasi fasilitas akademik, dan interaksi multipemain.',

    overview:
      'Virtual Kampus ITN Malang Kampus 2 adalah proyek simulasi kampus 3D dan eksplorasi metaverse interaktif yang dikembangkan di platform Roblox Studio. Proyek ini menghadirkan rekonstruksi virtual gedung perkuliahan, laboratorium teknik, sarana olahraga, dan lanskap arsitektur khas ITN Kampus 2 Malang secara detail. Pengguna dapat menjelajahi seluruh area kampus menggunakan avatar berkostum almamater resmi ITN Malang, berinteraksi dengan sesama mahasiswa, serta mengenal lingkungan fasilitas akademik secara imersif dan menyenangkan.',

    problem:
      'Calon mahasiswa baru dan masyarakat luas seringkali kesulitan mengenal tata letak serta fasilitas fisik ITN Kampus 2 Malang secara menyeluruh tanpa harus berkunjung langsung ke lokasi fisik kampus.',

    solution:
      'Mengembangkan lingkungan 3D virtual terpadu di Roblox yang merepresentasikan ITN Kampus 2 secara presisi dan interaktif. Proyek ini memungkinkan tur virtual kampus yang mudah diakses dari perangkat PC maupun smartphone secara gratis dan real-time.',

    features: [
      'Rekonstruksi Gedung & Lanskap 3D: Pemodelan 3D akurat untuk gedung perkuliahan, laboratorium, lapangan olahraga, dan area terbuka hijau ITN Kampus 2',
      'Kustomisasi Avatar Almamater ITN: Karakter avatar dilengkapi jaket almamater biru khas Institut Teknologi Nasional Malang',
      'Tur & Navigasi Kampus Interaktif: Sistem penunjuk arah dan waypoint untuk memandu eksplorasi berbagai fasilitas akademik',
      'Optimasi Kinerja Multi-Platform: Pencahayaan atmosferik dinamis dan rendering level of detail (LOD) yang optimal di mobile maupun desktop',
      'Fitur Interaksi Multi-Pemain (Multiplayer): Ruang berkumpul virtual untuk interaksi sosial, diskusi komunitas, dan simulasi kehidupan kampus'
    ],

    role: 'Lead 3D World Builder & Roblox Developer',

    image: '/projects/itn-kampus-2/cover.png',
    images: [
      {
        src: '/projects/itn-kampus-2/cover.png',
        caption: 'Tampilan Utama Virtual Kampus ITN Malang Kampus 2 di Roblox - Explore, Learn, Achieve'
      }
    ],

    technologies: [
      'Roblox Studio',
      'Luau / Lua Scripting',
      '3D Environment Design',
      'Architectural Modeling',
      'Atmospheric Lighting',
      'Multiplayer Networking',
      'Game UI/UX'
    ],

    links: {
      github: '',
      demo: 'https://www.roblox.com/id/games/112483850864478/ITN-Kampus-2'
    },

    featured: true
  },
  {
    id: 6,
    slug: 'klasifikasi-citra-tumor-otak-knn',
    title: 'Klasifikasi Citra Tumor Otak Menggunakan Metode KNN',
    category: 'Machine Learning',
    year: '2024',

    description:
      'Sistem klasifikasi citra medis Magnetic Resonance Imaging (MRI) otak untuk mendeteksi keberadaan tumor secara otomatis menggunakan algoritma K-Nearest Neighbors (KNN), ekstraksi fitur citra digital, dan evaluasi performa model komprehensif.',

    overview:
      'Proyek riset Machine Learning dan Pengolahan Citra Medis untuk mendeteksi dan mengklasifikasikan tumor otak dari hasil pemindaian MRI. Pipeline riset mencakup tahapan akuisisi dataset citra, prapemrosesan citra digital (konversi grayscale, noise filtering, reduksi noise, perataan kontras, dan resizing), ekstraksi fitur bentuk dan tekstur berbasis piksel, normalisasi vektor fitur, serta pelatihan model K-Nearest Neighbors (KNN) dengan optimasi hyperparameter (nilai K terbaik dan metrik jarak Euclidean).',

    problem:
      'Proses identifikasi tumor otak melalui pemeriksaan manual citra MRI membutuhkan ketelitian radiologis yang sangat tinggi, memakan waktu lama, serta rentan terhadap kelelahan pemeriksa dan bias interpretasi visual subjektif.',

    solution:
      'Membangun pipeline klasifikasi citra terotomasi berbasis Python, Scikit-Learn, dan OpenCV dengan algoritma K-Nearest Neighbors (KNN). Sistem melakukan ekstraksi fitur matematis dari citra MRI dan mengklasifikasikan citra ke dalam kelas diagnostik dengan akurasi terukur dan konsisten.',

    features: [
      'Prapemrosesan Citra Medis MRI: Grayscale conversion, adaptive filtering, noise suppression, dan normalisasi dimensi citra',
      'Ekstraksi Fitur Tekstur & Bentuk: Analisis kuantitatif intensitas piksel, kontur, dan distribusi visual area lesi otak',
      'Pemodelan K-Nearest Neighbors (KNN): Eksplorasi nilai K optimal (odd K values) dan jarak Euclidean untuk memaksimalkan presisi klasifikasi',
      'Evaluasi Diagnostik Komprehensif: Pengujian model menggunakan Confusion Matrix, Akurasi, Presisi, Recall, dan F1-Score',
      'Visualisasi & Eksplorasi Interaktif: Dokumentasi riset end-to-end terstruktur di Jupyter Notebook dari eksplorasi data hingga visualisasi prediksi'
    ],

    role: 'Machine Learning Developer',

    image: '/projects/brain-tumor/confusion-matrix.png',
    images: [
      {
        src: '/projects/brain-tumor/confusion-matrix.png',
        caption: 'Evaluasi Model KNN: Confusion Matrix Prediksi vs Aktual'
      },
      {
        src: '/projects/brain-tumor/split-data.png',
        caption: 'Pembagian Dataset Citra MRI: Data Training vs Testing'
      },
      {
        src: '/projects/brain-tumor/distribusi-kelas.png',
        caption: 'Visualisasi Proporsi Dataset: Distribusi Kelas Tumor vs No Tumor'
      }
    ],

    technologies: [
      'Python',
      'Jupyter Notebook',
      'K-Nearest Neighbors (KNN)',
      'Scikit-Learn',
      'OpenCV',
      'NumPy',
      'Pandas',
      'Matplotlib'
    ],

    links: {
      github: 'https://github.com/dhynnzz/Klasifikasi-Citra-Tumor-Otak-Menggunakan-Metode-K-Nearest-Neighbors-KNN-',
      demo: ''
    },

    featured: true
  },
  {
    id: 7,
    slug: 'klasifikasi-citra-penyakit-kulit-knn',
    title: 'Klasifikasi Citra Penyakit Kulit dengan Metode KNN',
    category: 'Machine Learning',
    year: '2024',

    description:
      'Sistem klasifikasi penyakit kulit (Melanoma, Eczema, Psoriasis) berbasis citra dermatologi menggunakan ekstraksi fitur warna (HSV & RGB) dan algoritma K-Nearest Neighbor (KNN) untuk identifikasi lesi kulit secara objektif.',

    overview:
      'Proyek Computer Vision dan Machine Learning untuk membantu klasifikasi penyakit dan lesi kulit melalui analisis citra klinis. Dengan memanfaatkan dataset citra dermatologis, sistem mengekstrak karakteristik warna pada ruang warna RGB serta Hue-Saturation-Value (HSV), menghitung distribusi histogram warna, lalu menerapkan algoritma K-Nearest Neighbors (KNN) dengan pembobotan jarak untuk mengidentifikasi jenis penyakit kulit.',

    problem:
      'Manifestasi visual penyakit kulit seperti eksim, melanoma, dan psoriasis memiliki variasi warna dan tekstur yang sangat mirip, sehingga diagnosis visual awal tanpa analisis kuantitatif seringkali memiliki ambiguitas tinggi.',

    solution:
      'Menerapkan ekstraksi fitur warna komprehensif pada ruang warna RGB dan HSV untuk menangkap perbedaan saturasi, tingkat kegelapan, dan sebaran hue lesi, lalu mengklasifikasikan vektor fitur menggunakan algoritma KNN dengan jarak Euclidean optimal.',

    features: [
      'Ekstraksi Fitur Ruang Warna RGB & HSV: Menghitung histogram warna dan nilai statistik piksel untuk menangkap pigmentasi lesi kulit',
      'Multi-Class Skin Disease Detection: Mampu mengklasifikasikan berbagai kondisi kulit (Melanoma, Eczema, Psoriasis, Seborrheic Keratosis)',
      'Algoritma K-Nearest Neighbor (KNN): Pencarian tetangga terdekat dengan pembobotan jarak Euclidean pada ruang fitur multi-dimensi',
      'Evaluasi Kinerja Model: Visualisasi feature space scatter plot, confusion matrix, dan metrik akurasi per kelas',
      'Pipeline Riset Terstruktur: Notebook interaktif untuk analisis eksplorasi data, pengujian hyperparameter, dan validasi silang (cross-validation)'
    ],

    role: 'Computer Vision & ML Developer',

    image: '/projects/skin-disease/cover.jpg',
    images: [
      {
        src: '/projects/skin-disease/cover.jpg',
        caption: 'Google Colab Research Notebook: Ekstraksi Fitur Warna HSV/RGB & Klasifikasi KNN Penyakit Kulit'
      }
    ],

    technologies: [
      'Google Colab',
      'Python',
      'Jupyter Notebook',
      'K-Nearest Neighbor (KNN)',
      'Color Feature Extraction (HSV/RGB)',
      'Scikit-Learn',
      'OpenCV',
      'NumPy',
      'Matplotlib'
    ],

    links: {
      github: 'https://github.com/dhynnzz/Klasifikasi-Citra-Penyakit-Kulit-denganMetode-K-Nearest-Neighbor-KNN-',
      demo: ''
    },

    featured: true
  }
];
