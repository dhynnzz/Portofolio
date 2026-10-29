#  Portofolio Interaktif — Mhmd Aminuddin

Portofolio web modern, interaktif, dan responsif milik **Mhmd Aminuddin** (Mahasiswa S1 Teknik Informatika ITN Malang). Proyek ini dibangun dengan memadukan estetika **Neo-Brutalism**, elemen petualangan tematik **One Piece**, serta kartu identitas 3D interaktif (**Interactive 3D Lanyard**) menggunakan Three.js dan React Three Fiber.

---

## 🚀 Cara Menggunakan Setelah di-Clone

Ikuti langkah-langkah mudah berikut untuk menjalankan proyek ini di komputer lokal Anda:

### 1. Prasyarat
Pastikan komputer Anda sudah terinstal:
- **Node.js** (versi 18 ke atas disarankan) — [Download Node.js](https://nodejs.org/)
- **Git** — [Download Git](https://git-scm.com/)

---

### 2. Clone Repository
Buka terminal (Command Prompt, PowerShell, atau Terminal VS Code), lalu jalankan:

```bash
git clone https://github.com/dhynnzz/Portofolio.git
```

Masuk ke dalam direktori proyek:
```bash
cd Portofolio
```

---

### 3. Install Dependensi
Unduh semua library dan paket dependensi yang dibutuhkan proyek:

```bash
npm install
```

---

### 4. Konfigurasi Environment Variables (Opsional)
Proyek ini menggunakan **EmailJS** untuk fitur formulir kontak langsung ke email:

1. Duplikasi file `.env.example` dan ubah namanya menjadi `.env`:
   ```bash
   cp .env.example .env
   ```
2. Buka file `.env` dan masukkan kredensial akun [EmailJS](https://www.emailjs.com/) Anda:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
*(Jika tidak diisi, fitur kontak tetap tampil namun pengiriman pesan email dinonaktifkan).*

---

### 5. Jalankan Server Development
Jalankan local development server:

```bash
npm run dev
```

Buka URL yang muncul di terminal (biasanya `http://localhost:5173`) di browser Anda.

---

### 6. Build untuk Produksi
Jika ingin mengompilasi proyek menjadi file statis siap hosting (Vercel, Netlify, GitHub Pages):

```bash
npm run build
```

Hasil build akan tersimpan di dalam folder `dist/`. Untuk menguji hasil build secara lokal:
```bash
npm run preview
```

---

## 📁 Tata Letak & Struktur Folder

Berikut adalah peta struktur folder dan file proyek untuk mempermudah navigasi dan pengembangan:

```text
Ami-portfolio/
├── public/                       # Aset publik statis (dapat diakses langsung via URL)
│   ├── About/                    # Foto dokumentasi tentang saya
│   │   ├── Education/            # Dokumentasi pendidikan (SMA & ITN Malang)
│   │   ├── Experience/           # Dokumentasi magang & PKN
│   │   └── Organization/         # Dokumentasi organisasi (HATI & METASPACE)
│   ├── certificates/             # Gambar sertifikat keahlian & kompetensi
│   ├── cv/                       # Berkas PDF Resume / CV (CV_Mhmd_Aminuddin.pdf)
│   ├── images/                   # Asset gambar global, logo, dan background
│   └── projects/                 # Tangkapan layar & cover dokumentasi proyek
│
├── src/                          # Source code utama aplikasi
│   ├── assets/                   # Asset internal yang diolah bundler
│   │   └── lanyard/              # Model 3D kartu identitas (.glb) dan tekstur tali
│   │
│   ├── components/               # Komponen UI modular
│   │   ├── Navbar.jsx            # Navigasi sticky dengan fitur auto-hide saat scroll
│   │   ├── LanguageToggle.jsx    # Sakelar toggle bahasa (ID / EN) bergaya Neo-Brutalism
│   │   ├── HeroSection.jsx       # Bagian utama perkenalan & bounty card
│   │   ├── Lanyard.jsx           # Komponen 3D Lanyard interaktif (Physics & Three.js)
│   │   ├── ScrollingTicker.jsx   # Teks berjalan animasi marquee status profil
│   │   ├── AboutSection.jsx      # Bagian biografi, pengalaman, organisasi, & pendidikan
│   │   ├── ExperienceSection.jsx # Riwayat magang & organisasi tematik
│   │   ├── SkillsSection.jsx     # Bagian daftar Tech Stack & keahlian dengan filter kategori
│   │   ├── ProjectsSection.jsx   # Galeri proyek portofolio dengan kategori filter
│   │   ├── CertificatesSection.jsx # Galeri sertifikat interaktif
│   │   ├── ContactSection.jsx    # Formulir pengiriman pesan langsung via EmailJS
│   │   ├── DetailModal.jsx       # Modal popup detail proyek (fitur, tech stack, demo)
│   │   ├── CvModal.jsx           # Modal popup pratinjau & download CV PDF
│   │   ├── ScrollToTop.jsx       # Tombol kembali ke atas dengan ikon Log Pose One Piece
│   │   └── Footer.jsx            # Bagian kaki halaman dan hak cipta
│   │
│   ├── context/                  # State management global React Context
│   │   ├── LanguageContext.jsx   # Penyedia bahasa aktif (ID / EN) & helper terjemahan
│   │   └── ThemeContext.jsx      # Penyedia tema aplikasi
│   │
│   ├── hooks/                    # Custom React Hooks
│   │   ├── useSmoothScroll.js    # Inisialisasi Lenis smooth momentum scrolling
│   │   └── useScrollReveal.js    # Animasi reveal elemen saat di-scroll
│   │
│   ├── data.js                   # Pusat data statis (proyek, sertifikat, biodata)
│   ├── translations.js           # Kamus teks dwibahasa (Indonesia & Inggris)
│   ├── App.jsx                   # Komponen induk perakit seluruh halaman & lazy loading
│   ├── main.jsx                  # Titik masuk utama React DOM
│   └── index.css                 # Styling Tailwind CSS, font One Piece, & custom animasi
│
├── .env.example                  # Template variabel lingkungan EmailJS
├── .gitignore                    # Daftar berkas/folder yang diabaikan oleh Git
├── index.html                    # Halaman HTML utama & konfigurasi metadata / favicon
├── package.json                  # Konfigurasi dependensi dan script npm
├── postcss.config.js             # Konfigurasi PostCSS untuk Tailwind
├── tailwind.config.js            # Konfigurasi warna, font, & styling kustom Tailwind
└── vite.config.js                # Konfigurasi bundler Vite
```

---

## 🛠️ Panduan Kustomisasi Konten

| Ingin Mengubah | Lokasi File | Keterangan |
| :--- | :--- | :--- |
| **Data Proyek & Sertifikat** | [`src/data.js`](src/data.js) | Tambah, ubah judul, deskripsi, teknologi, link demo, atau gambar proyek. |
| **Teks & Terjemahan (ID/EN)** | [`src/translations.js`](src/translations.js) | Seluruh teks tombol, judul, hero bio, dan label multi-bahasa. |
| **Foto Profil & Dokumen CV** | `public/images/` & `public/cv/` | Ganti foto avatar, background, atau perbarui file `CV_Mhmd_Aminuddin.pdf`. |
| **Warna & Tema Desain** | [`tailwind.config.js`](tailwind.config.js) | Variabel warna One Piece (`onepiece-gold`, `onepiece-red`, `onepiece-dark`, dll). |

---

## 🧰 Teknologi yang Digunakan

- **Frontend Core**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling & UI**: [Tailwind CSS](https://tailwindcss.com/), Custom Neo-Brutalist CSS
- **3D Interactive**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/rapier](https://github.com/pmndrs/react-three-rapier)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

---

## 📬 Kontak

**Mhmd Aminuddin**
- **Email**: [dindhyn18@gmail.com](mailto:dindhyn18@gmail.com)
- **GitHub**: [@dhynnzz](https://github.com/dhynnzz)
- **LinkedIn**: [Mhmd Aminuddin](https://linkedin.com)
