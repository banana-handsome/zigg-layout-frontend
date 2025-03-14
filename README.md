# Frontend Template: Svelte + Vite + TailwindCSS + DaisyUI

![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-FF69B4?style=for-the-badge)

## 🚀 Pengenalan

Template ini merupakan boilerplate untuk proyek frontend menggunakan Svelte dengan Vite sebagai bundler, serta TailwindCSS yang dikombinasikan dengan DaisyUI sebagai UI framework. Dengan template ini, kamu bisa langsung mulai membangun aplikasi web dengan performa tinggi dan tampilan modern.

## 🛠️ Fitur Utama

⚡️ Super Cepat dengan Vite sebagai bundler.

🎨 TailwindCSS untuk styling yang fleksibel.

🌸 DaisyUI sebagai UI components berbasis Tailwind.

🧩 Svelte untuk framework frontend yang reaktif dan ringan.

📦 Modular dan Mudah Digunakan.

📌 Instalasi

Pastikan kamu sudah menginstal Node.js di sistem kamu.

## Clone repository ini
`npx degit username/template-svelte my-project`

## Masuk ke direktori proyek
`cd my-project`

## Instal dependensi
`npm install`

## 🚀 Menjalankan Proyek

Untuk menjalankan proyek dalam mode development:

`npm run dev`

Lalu buka http://localhost:5173/ di browser.

Jika ingin menjalankan dengan host jaringan lokal:

`npm run dev -- --host`

## 📦 Build untuk Produksi

Gunakan perintah berikut untuk membundle proyek:

`npm run build`

Hasil build akan berada di dalam folder dist/.

Untuk melihat hasil build secara lokal:

`npm run preview`

## 🎨 Konfigurasi TailwindCSS dan DaisyUI

Konfigurasi TailwindCSS dan DaisyUI ada di file tailwind.config.js:

`module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};`

Kamu bisa mengganti tema default dengan mengedit bagian daisyui.themes.

## 🔧 Struktur Proyek

`my-project/
├── src/
│   ├── routes/
│   ├── components/
│   ├── App.svelte
│   ├── main.js
│   └── assets/
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md`

## 📚 Dokumentasi Tambahan

Svelte: https://svelte.dev/docs

Vite: https://vitejs.dev/guide/

TailwindCSS: https://tailwindcss.com/docs

DaisyUI: https://daisyui.com/docs/

## 🎯 Lisensi

Proyek ini menggunakan lisensi MIT.

## 💡 Siap membangun proyek dengan template ini? Happy coding! 🚀

