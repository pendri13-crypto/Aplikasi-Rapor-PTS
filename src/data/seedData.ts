import { SchoolClass, Subject, UserAccount, Student, GradeRecord, SchoolSettings, AttendanceRecord } from '../types';

export const DEFAULT_LOGO_PEMDA = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="%231e3a8a" stroke="%23f59e0b" stroke-width="4"/><polygon points="50,15 62,38 88,40 68,58 74,84 50,70 26,84 32,58 12,40 38,38" fill="%23f59e0b"/><circle cx="50" cy="50" r="16" fill="%23ffffff"/><path d="M42,56 C42,48 58,48 58,56 Z M50,38 L50,47" stroke="%231e3a8a" stroke-width="3" fill="%23f59e0b"/></svg>`;

export const DEFAULT_LOGO_SEKOLAH = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50,8 L85,25 L85,60 C85,78 50,92 50,92 C50,92 15,78 15,60 L15,25 Z" fill="%230f766e" stroke="%23fbbf24" stroke-width="3"/><path d="M50,30 L70,42 L50,54 L30,42 Z" fill="%23ffffff"/><path d="M30,48 L50,60 L70,48 L70,55 L50,67 L30,55 Z" fill="%23fbbf24"/><circle cx="50" cy="24" r="5" fill="%23fbbf24"/></svg>`;

export const INITIAL_SCHOOL_SETTINGS: SchoolSettings = {
  namaSekolah: 'SMP NEGERI 1 CEMERLANG',
  npsn: '20234567',
  alamatSekolah: 'Jl. Ki Hajar Dewantara No. 45',
  kelurahan: 'Sukamaju',
  kecamatan: 'Cemerlang',
  kabupatenKota: 'Kota Cemerlang',
  provinsi: 'Jawa Barat',
  kodePos: '40123',
  telepon: '(022) 7654321',
  email: 'smpn1cemerlang@sch.id',
  namaKepalaSekolah: 'Dr. H. Mulyadi Saputra, M.Pd.',
  nipKepalaSekolah: '196803121992031004',
  tahunAjaran: '2024/2025',
  semesterAktif: 'Ganjil',
  namaPeriodePTS: 'Penilaian Tengah Semester (PTS) Ganjil',
  tanggalRapor: '4 Oktober 2024',
  tempatRapor: 'Cemerlang',
  logoPemdaUrl: DEFAULT_LOGO_PEMDA,
  logoSekolahUrl: DEFAULT_LOGO_SEKOLAH,
  bobotFormatif: 30,
  bobotUH: 30,
  bobotPTS: 40,
  kkmDefault: 75,
};

// 11 Mata Pelajaran Resmi SMP
export const INITIAL_SUBJECTS: Subject[] = [
  { id: 'PAIBP', kode: 'PAI', nama: 'PAIBP', kkm: 75, kelompok: 'Kelompok A (Umum)', urutan: 1 },
  { id: 'PPKN', kode: 'PPKN', nama: 'PPKN', kkm: 75, kelompok: 'Kelompok A (Umum)', urutan: 2 },
  { id: 'BINDO', kode: 'BIND', nama: 'Bahasa Indonesia', kkm: 75, kelompok: 'Kelompok A (Umum)', urutan: 3 },
  { id: 'MTK', kode: 'MTK', nama: 'Matematika', kkm: 75, kelompok: 'Kelompok A (Umum)', urutan: 4 },
  { id: 'IPA', kode: 'IPA', nama: 'IPA', kkm: 75, kelompok: 'Kelompok A (Umum)', urutan: 5 },
  { id: 'IPS', kode: 'IPS', nama: 'IPS', kkm: 75, kelompok: 'Kelompok A (Umum)', urutan: 6 },
  { id: 'BING', kode: 'BING', nama: 'Bahasa Inggris', kkm: 75, kelompok: 'Kelompok A (Umum)', urutan: 7 },
  { id: 'INFOR', kode: 'INF', nama: 'Informatika', kkm: 75, kelompok: 'Kelompok A (Umum)', urutan: 8 },
  { id: 'PJOK', kode: 'PJOK', nama: 'PJOK', kkm: 75, kelompok: 'Kelompok B (Umum)', urutan: 9 },
  { id: 'SENI', kode: 'SBD', nama: 'Seni Budaya', kkm: 75, kelompok: 'Kelompok B (Umum)', urutan: 10 },
  { id: 'MULOK', kode: 'MLK', nama: 'Mulok Bahasa Daerah', kkm: 75, kelompok: 'Muatan Lokal', urutan: 11 },
];

const KELAS_LETTERS: ('A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K')[] = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'
];

// Generator 33 Kelas (VII-A s.d IX-K)
export const INITIAL_CLASSES: SchoolClass[] = (() => {
  const classes: SchoolClass[] = [];
  const tingkatList: ('VII' | 'VIII' | 'IX')[] = ['VII', 'VIII', 'IX'];

  const waliKelasSampleNames = [
    'Dra. Siti Aminah', 'Budi Santoso, S.Pd.', 'Ahmad Fauzi, M.Pd.', 'Dewi Lestari, S.Pd.',
    'Eko Prasetyo, S.Pd.', 'Fitri Handayani, M.Pd.', 'Gunawan Wibisono, S.Pd.', 'Hani Rahmawati, S.Pd.',
    'Iskandar Muda, M.Pd.', 'Joko Susilo, S.Pd.', 'Kartika Sari, S.Pd.',
    'Lukman Hakim, S.Pd.', 'Mira Damayanti, M.Pd.', 'Nanang Suryana, S.Pd.', 'Nurul Aini, S.Pd.',
    'Oki Setiawan, S.Pd.', 'Pratiwi Kusuma, M.Pd.', 'Qori Anugerah, S.Pd.', 'Rian Hidayat, S.Pd.',
    'Sinta Maulida, S.Pd.', 'Taufik Hidayat, M.Pd.', 'Ujang Suherman, S.Pd.',
    'Vina Agustina, S.Pd.', 'Wahyu Widodo, M.Pd.', 'Yeni Marlina, S.Pd.', 'Zainal Abidin, S.Pd.',
    'Andi Pratama, M.Pd.', 'Bella Safitri, S.Pd.', 'Cahyo Utomo, S.Pd.', 'Dina Maharani, S.Pd.',
    'Erwin Syahputra, M.Pd.', 'Fajar Nugraha, S.Pd.', 'Gita Gutawa, S.Pd.'
  ];

  let nameIndex = 0;
  for (const tingkat of tingkatList) {
    for (const kode of KELAS_LETTERS) {
      const classId = `${tingkat}-${kode}`;
      const waliName = waliKelasSampleNames[nameIndex % waliKelasSampleNames.length];
      const waliNip = `198${(70 + (nameIndex % 15)).toString()}0${(1 + (nameIndex % 9)).toString()}15201001${(1000 + nameIndex).toString().slice(1)}`;
      
      classes.push({
        id: classId,
        tingkat,
        kode,
        nama: `Kelas ${tingkat}-${kode}`,
        waliKelasNama: waliName,
        waliKelasNip: waliNip,
        tahunAjaran: '2024/2025',
        semester: 'Ganjil',
        fase: 'D'
      });
      nameIndex++;
    }
  }
  return classes;
})();

// Daftar Akun Pengguna (Super Admin & Guru Mapel)
export const INITIAL_USERS: UserAccount[] = [
  {
    id: 'user-admin',
    nip: 'Superadmin',
    username: 'Superadmin',
    nama: 'Super Administrator',
    role: 'SUPER_ADMIN',
    assignedClassIds: INITIAL_CLASSES.map(c => c.id), // Seluruh 33 kelas
    password: 'Superadmin',
    email: 'superadmin@smpn1cemerlang.sch.id',
    noHp: '081234567890'
  },
  {
    id: 'user-guru-mtk',
    nip: '198205142008012015',
    nama: 'Dra. Siti Nurhaliza',
    role: 'GURU_MAPEL',
    mapelId: 'MTK',
    mapelName: 'Matematika',
    assignedClassIds: ['VII-A', 'VII-B', 'VII-C', 'VII-D', 'VII-E', 'VII-F', 'VII-G', 'VII-H', 'VII-I', 'VII-J', 'VII-K'],
    password: 'guru123',
    email: 'siti.nurhaliza@smpn1cemerlang.sch.id',
    isWaliKelas: true,
    waliKelasId: 'VII-A'
  },
  {
    id: 'user-guru-bindo',
    nip: '198603202011011003',
    nama: 'Budi Santoso, S.Pd.',
    role: 'GURU_MAPEL',
    mapelId: 'BINDO',
    mapelName: 'Bahasa Indonesia',
    assignedClassIds: ['VII-A', 'VII-B', 'VII-C', 'VII-D', 'VII-E', 'VIII-A', 'VIII-B', 'VIII-C', 'IX-A', 'IX-B'],
    password: 'guru123',
    email: 'budi.santoso@smpn1cemerlang.sch.id',
    isWaliKelas: true,
    waliKelasId: 'VII-B'
  },
  {
    id: 'user-guru-ipa',
    nip: '198911082014022004',
    nama: 'Rina Marlina, M.Pd.',
    role: 'GURU_MAPEL',
    mapelId: 'IPA',
    mapelName: 'IPA',
    assignedClassIds: ['VIII-A', 'VIII-B', 'VIII-C', 'VIII-D', 'VIII-E', 'VIII-F', 'VIII-G', 'VIII-H', 'VIII-I', 'VIII-J', 'VIII-K'],
    password: 'guru123',
    email: 'rina.marlina@smpn1cemerlang.sch.id',
    isWaliKelas: true,
    waliKelasId: 'VIII-A'
  },
  {
    id: 'user-guru-infor',
    nip: '199204122019031008',
    nama: 'Hendra Wijaya, S.Kom.',
    role: 'GURU_MAPEL',
    mapelId: 'INFOR',
    mapelName: 'Informatika',
    assignedClassIds: ['VII-A', 'VII-B', 'VIII-A', 'VIII-B', 'IX-A', 'IX-B', 'IX-C', 'IX-D', 'IX-E', 'IX-F', 'IX-G', 'IX-H', 'IX-I', 'IX-J', 'IX-K'],
    password: 'guru123',
    email: 'hendra.wijaya@smpn1cemerlang.sch.id'
  },
  {
    id: 'user-guru-paibp',
    nip: '198407222009021005',
    nama: 'Ust. Ahmad Dahlan, S.Ag.',
    role: 'GURU_MAPEL',
    mapelId: 'PAIBP',
    mapelName: 'PAIBP',
    assignedClassIds: ['VII-A', 'VII-B', 'VII-C', 'VII-D', 'VII-E', 'VII-F', 'VII-G', 'VII-H', 'VII-I', 'VII-J', 'VII-K'],
    password: 'guru123',
    email: 'ahmad.dahlan@smpn1cemerlang.sch.id'
  },
  {
    id: 'user-guru-ppkn',
    nip: '198708172010012009',
    nama: 'Tri Wahyuni, S.Pd.',
    role: 'GURU_MAPEL',
    mapelId: 'PPKN',
    mapelName: 'PPKN',
    assignedClassIds: ['VII-A', 'VII-B', 'VII-C', 'VII-D', 'VII-E', 'VII-F'],
    password: 'guru123',
    email: 'tri.wahyuni@smpn1cemerlang.sch.id'
  },
  {
    id: 'user-guru-bing',
    nip: '199002152015032006',
    nama: 'Dewi Anggraini, S.Pd.',
    role: 'GURU_MAPEL',
    mapelId: 'BING',
    mapelName: 'Bahasa Inggris',
    assignedClassIds: ['VII-A', 'VII-B', 'VII-C', 'VII-D', 'VII-E', 'VIII-A', 'VIII-B'],
    password: 'guru123',
    email: 'dewi.anggraini@smpn1cemerlang.sch.id'
  },
  {
    id: 'user-guru-ips',
    nip: '198306102008011012',
    nama: 'Drs. Joko Prasetyo',
    role: 'GURU_MAPEL',
    mapelId: 'IPS',
    mapelName: 'IPS',
    assignedClassIds: ['VII-A', 'VII-B', 'VII-C', 'VII-D', 'VII-E'],
    password: 'guru123',
    email: 'joko.prasetyo@smpn1cemerlang.sch.id'
  },
  {
    id: 'user-guru-pjok',
    nip: '198810282012011007',
    nama: 'Agus Setiawan, S.Pd. Jas.',
    role: 'GURU_MAPEL',
    mapelId: 'PJOK',
    mapelName: 'PJOK',
    assignedClassIds: ['VII-A', 'VII-B', 'VII-C', 'VII-D', 'VII-E'],
    password: 'guru123',
    email: 'agus.setiawan@smpn1cemerlang.sch.id'
  },
  {
    id: 'user-guru-seni',
    nip: '199105022018022003',
    nama: 'Maya Indah Sari, S.Sn.',
    role: 'GURU_MAPEL',
    mapelId: 'SENI',
    mapelName: 'Seni Budaya',
    assignedClassIds: ['VII-A', 'VII-B', 'VII-C', 'VII-D', 'VII-E'],
    password: 'guru123',
    email: 'maya.indah@smpn1cemerlang.sch.id'
  },
  {
    id: 'user-guru-mulok',
    nip: '198509192011022008',
    nama: 'Neneng Solihat, S.Pd.',
    role: 'GURU_MAPEL',
    mapelId: 'MULOK',
    mapelName: 'Mulok Bahasa Daerah',
    assignedClassIds: ['VII-A', 'VII-B', 'VII-C', 'VII-D', 'VII-E'],
    password: 'guru123',
    email: 'neneng.solihat@smpn1cemerlang.sch.id'
  }
];

// Template nama siswa Indonesia yang realistis
const SAMPLE_STUDENT_NAMES = [
  { nama: 'Achmad Rizky Pratama', jk: 'L' },
  { nama: 'Adinda Putri Maharani', jk: 'P' },
  { nama: 'Aisyah Nur Ramadhani', jk: 'P' },
  { nama: 'Aldi Bagus Wicaksono', jk: 'L' },
  { nama: 'Alif Kurniawan Santoso', jk: 'L' },
  { nama: 'Annisa Fitriani', jk: 'P' },
  { nama: 'Bagas Aditya Nugraha', jk: 'L' },
  { nama: 'Cantika Dewi Lestari', jk: 'P' },
  { nama: 'Dimas Arya Pamungkas', jk: 'L' },
  { nama: 'Dinda Ayu Safitri', jk: 'P' },
  { nama: 'Fajar Maulana Malik', jk: 'L' },
  { nama: 'Farhan Nur Hidayat', jk: 'L' },
  { nama: 'Ghina Salsabila', jk: 'P' },
  { nama: 'Haikal Zaidan Akbar', jk: 'L' },
  { nama: 'Intan Permata Sari', jk: 'P' },
  { nama: 'Kevin Jonathan Siregar', jk: 'L' },
  { nama: 'Larasati Prameswari', jk: 'P' },
  { nama: 'Muhammad Bilal Ramadhan', jk: 'L' },
  { nama: 'Nabila Azzahra Putri', jk: 'P' },
  { nama: 'Rafi Al Ghifari', jk: 'L' },
  { nama: 'Salma Khairunnisa', jk: 'P' },
  { nama: 'Taufiqurrahman', jk: 'L' },
  { nama: 'Vania Aurelia Wijaya', jk: 'P' },
  { nama: 'Zahra Amelia Cahyani', jk: 'P' },
  { nama: 'Zidan Maulana Yusuf', jk: 'L' },
];

// Generator Data Siswa untuk 33 Kelas
export const INITIAL_STUDENTS: Student[] = (() => {
  const students: Student[] = [];
  let globalStudentCount = 1;

  for (const c of INITIAL_CLASSES) {
    // Generate 15-20 siswa per kelas untuk kenyamanan performa browser dan kelengkapan data
    const studentCount = 16;
    for (let i = 0; i < studentCount; i++) {
      const sample = SAMPLE_STUDENT_NAMES[i % SAMPLE_STUDENT_NAMES.length];
      const paddedId = globalStudentCount.toString().padStart(4, '0');
      const nis = `24${c.tingkat === 'VII' ? '25' : c.tingkat === 'VIII' ? '24' : '23'}${paddedId}`;
      const nisn = `00${7 + (globalStudentCount % 3)}${paddedId.padStart(7, '0')}`;
      
      students.push({
        id: `std-${c.id}-${i + 1}`,
        nis,
        nisn,
        nama: `${sample.nama} ${c.kode}`,
        jenisKelamin: sample.jk as 'L' | 'P',
        classId: c.id,
        tempatLahir: 'Cemerlang',
        tanggalLahir: '2011-05-15',
        namaWali: `Wali ${sample.nama.split(' ')[0]}`,
        alamat: `Jl. Melati No. ${i + 1}, Cemerlang`
      });
      globalStudentCount++;
    }
  }

  return students;
})();

// Generator Attendance Initial
export const INITIAL_ATTENDANCE: AttendanceRecord[] = INITIAL_STUDENTS.map(s => {
  const hash = s.id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return {
    studentId: s.id,
    classId: s.classId,
    sakit: (hash % 7 === 0) ? 1 : (hash % 13 === 0) ? 2 : 0,
    izin: (hash % 11 === 0) ? 1 : 0,
    alpa: (hash % 19 === 0) ? 1 : 0,
    catatanWaliKelas: 'Tingkatkan terus keaktifan belajar dan pertahankan prestasi yang sudah diraih.'
  };
});

// Helper hitung predikat & capaian kompetensi
export function calculateGradeDerived(
  formatif: number,
  uh: number,
  pts: number,
  kkm: number = 75,
  bobotFormatif: number = 30,
  bobotUH: number = 30,
  bobotPTS: number = 40,
  mapelName: string = 'Mata Pelajaran'
) {
  const nilaiAkhir = Math.round(
    (formatif * (bobotFormatif / 100)) +
    (uh * (bobotUH / 100)) +
    (pts * (bobotPTS / 100))
  );

  let predikat: 'A' | 'B' | 'C' | 'D' = 'C';
  if (nilaiAkhir >= 90) predikat = 'A';
  else if (nilaiAkhir >= 80) predikat = 'B';
  else if (nilaiAkhir >= 70) predikat = 'C';
  else predikat = 'D';

  const keterangan = nilaiAkhir >= kkm ? 'Tuntas' : 'Perlu Bimbingan';

  let capaianKompetensi = '';
  if (predikat === 'A') {
    capaianKompetensi = `Sangat istimewa dalam menguasai seluruh capaian pembelajaran ${mapelName} pada penilaian tengah semester dan mampu bernalar kritis secara konsisten.`;
  } else if (predikat === 'B') {
    capaianKompetensi = `Menunjukkan pemahaman yang baik dan tuntas dalam menguasai materi pokok ${mapelName} tengah semester, dengan sedikit bimbingan lanjutan.`;
  } else if (predikat === 'C') {
    capaianKompetensi = `Cukup menguasai materi ${mapelName} namun perlu meningkatkan latihan soal terstruktur dan penyelesaian tugas formatif.`;
  } else {
    capaianKompetensi = `Perlu pendampingan khusus dan bimbingan remedial intensif pada pemahaman konsep dasar ${mapelName}.`;
  }

  return { nilaiAkhir, predikat, keterangan, capaianKompetensi };
}

// Generate Realistic Seed Grades untuk kelas awal (VII-A, VII-B, VIII-A, IX-A) agar rekap langsung hidup
export const INITIAL_GRADES: GradeRecord[] = (() => {
  const records: GradeRecord[] = [];
  const focusClasses = ['VII-A', 'VII-B', 'VIII-A', 'IX-A'];

  for (const classId of focusClasses) {
    const classStudents = INITIAL_STUDENTS.filter(s => s.classId === classId);
    
    for (const student of classStudents) {
      for (const subject of INITIAL_SUBJECTS) {
        // Base seed from student ID + subject ID
        const hash = (student.id + subject.id).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        // Base score between 68 and 96
        const baseScore = 72 + (hash % 24);
        const t1 = Math.min(100, Math.max(60, baseScore + ((hash % 7) - 3)));
        const t2 = Math.min(100, Math.max(60, baseScore + ((hash % 9) - 4)));
        const t3 = Math.min(100, Math.max(60, baseScore + ((hash % 5) - 2)));
        const formatifAvg = Math.round((t1 + t2 + t3) / 3);

        const uh1 = Math.min(100, Math.max(55, baseScore + ((hash % 11) - 5)));
        const uh2 = Math.min(100, Math.max(55, baseScore + ((hash % 6) - 3)));
        const sumatifMateriAvg = Math.round((uh1 + uh2) / 2);

        const pts = Math.min(100, Math.max(50, baseScore + ((hash % 13) - 6)));

        const derived = calculateGradeDerived(
          formatifAvg,
          sumatifMateriAvg,
          pts,
          subject.kkm,
          INITIAL_SCHOOL_SETTINGS.bobotFormatif,
          INITIAL_SCHOOL_SETTINGS.bobotUH,
          INITIAL_SCHOOL_SETTINGS.bobotPTS,
          subject.nama
        );

        records.push({
          id: `grd-${student.id}-${subject.id}`,
          studentId: student.id,
          classId: student.classId,
          mapelId: subject.id,
          semester: 'Ganjil',
          tahunAjaran: '2024/2025',
          triwulan: 1, // PTS 3 Bulanan
          nilaiTugas1: t1,
          nilaiTugas2: t2,
          nilaiTugas3: t3,
          nilaiFormatifAvg: formatifAvg,
          nilaiUH1: uh1,
          nilaiUH2: uh2,
          nilaiSumatifMateriAvg: sumatifMateriAvg,
          nilaiPTS: pts,
          nilaiAkhir: derived.nilaiAkhir,
          predikat: derived.predikat,
          keterangan: derived.keterangan as 'Tuntas' | 'Perlu Bimbingan',
          capaianKompetensi: derived.capaianKompetensi,
          updatedAt: new Date().toISOString(),
          updatedBy: 'Sistem'
        });
      }
    }
  }

  return records;
})();
