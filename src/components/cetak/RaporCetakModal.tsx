import React, { useRef } from 'react';
import { Printer, X, Download, School, Check, User } from 'lucide-react';
import { StudentReportSummary, SchoolClass, Subject } from '../../types';
import { StorageService } from '../../services/storage';

interface RaporCetakModalProps {
  summary: StudentReportSummary;
  schoolClass: SchoolClass;
  onClose: () => void;
}

export const RaporCetakModal: React.FC<RaporCetakModalProps> = ({
  summary,
  schoolClass,
  onClose,
}) => {
  const settings = StorageService.getSettings();
  const subjects = StorageService.getSubjects();
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  // Group subjects by category
  const kelA = subjects.filter(s => s.kelompok === 'Kelompok A (Umum)');
  const kelB = subjects.filter(s => s.kelompok === 'Kelompok B (Umum)');
  const mulok = subjects.filter(s => s.kelompok === 'Muatan Lokal');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 print:p-0 print:bg-white print:static print:inset-auto">
      {/* Container */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full border border-slate-200 overflow-hidden print:border-none print:shadow-none print:rounded-none">
        {/* Modal Controls (Hidden in Print) */}
        <div className="px-6 py-4 bg-slate-800 text-white flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-indigo-400" />
            <span className="font-bold text-sm">Pratinjau Cetak Rapor PTS Resmi (Format Standar Kemendikbud)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Official Document Body */}
        <div ref={printRef} className="p-8 sm:p-12 text-slate-900 bg-white font-sans text-xs selection:bg-none">
          {/* KOP RESMI SEKOLAH */}
          <div className="pb-3 mb-4 text-center relative">
            <div className="flex items-center justify-between gap-4">
              {/* Logo Pemda / Dinas (Kiri) */}
              <div className="w-32 h-32 flex items-center justify-center shrink-0">
                {settings.logoPemdaUrl ? (
                  <img
                    src={settings.logoPemdaUrl}
                    alt="Logo Pemda"
                    className="max-h-32 max-w-32 object-contain print:max-h-32 print:max-w-32 scale-110"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-xl border border-slate-300 flex items-center justify-center font-bold text-slate-400 text-[10px]">
                    <School className="w-10 h-10 text-slate-700" />
                  </div>
                )}
              </div>

              {/* Teks KOP Resmi */}
              <div className="flex-1 px-2 text-center">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  PEMERINTAH DAERAH KABUPATEN TASIKMALAYA
                </h3>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  DINAS PENDIDIKAN DAN KEBUDAYAAN
                </h3>
                <h1 className="text-lg sm:text-xl font-black uppercase tracking-tight text-slate-900 mt-0.5">
                  {settings.namaSekolah}
                </h1>
                <p className="text-[11px] text-slate-700 mt-0.5 font-medium">
                  NPSN: {settings.npsn} • {settings.alamatSekolah}, {settings.kecamatan}, {settings.kabupatenKota}
                </p>
                <p className="text-[10px] text-slate-500">
                  Telepon: {settings.telepon} • Pos-el: {settings.email} • Kode Pos: {settings.kodePos}
                </p>
              </div>

              {/* Logo Sekolah (Kanan) */}
              <div className="w-28 h-28 flex items-center justify-center shrink-0">
                {settings.logoSekolahUrl ? (
                  <img
                    src={settings.logoSekolahUrl}
                    alt="Logo Sekolah"
                    className="max-h-28 max-w-28 object-contain print:max-h-28 print:max-w-28"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-xl border border-slate-300 flex items-center justify-center font-bold text-slate-400 text-[10px]">
                    <span className="text-[10px] font-bold text-center leading-tight">LOGO<br />SEKOLAH</span>
                  </div>
                )}
              </div>
            </div>

            {/* Double Border standard KOP Dinas */}
            <div className="w-full border-t-2 border-slate-900 mt-2.5" />
            <div className="w-full border-t border-slate-900 mt-0.5" />
          </div>

          {/* Judul Dokumen */}
          <div className="text-center my-4">
            <h2 className="text-sm font-extrabold uppercase tracking-wider underline">
              LAPORAN PENILAIAN TENGAH SEMESTER (PTS)
            </h2>
            <p className="text-[11px] font-semibold text-slate-700 mt-0.5">
              TAHUN PELAJARAN {settings.tahunAjaran} — SEMESTER {settings.semesterAktif.toUpperCase()}
            </p>
          </div>

          {/* Identitas Siswa */}
          <div className="grid grid-cols-2 gap-4 mb-5 text-[11px] bg-slate-50/60 p-3 rounded-lg border border-slate-200">
            <div className="space-y-1">
              <div className="flex">
                <span className="w-32 text-slate-600">Nama Peserta Didik</span>
                <span className="w-3">:</span>
                <span className="font-bold text-slate-900 uppercase">{summary.student.nama}</span>
              </div>
              <div className="flex">
                <span className="w-32 text-slate-600">NIS / NISN</span>
                <span className="w-3">:</span>
                <span className="font-mono text-slate-800">{summary.student.nis} / {summary.student.nisn}</span>
              </div>
              <div className="flex">
                <span className="w-32 text-slate-600">Jenis Kelamin</span>
                <span className="w-3">:</span>
                <span className="text-slate-800">{summary.student.jenisKelamin === 'L' ? 'Laki-laki' : 'Perempuan'}</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex">
                <span className="w-28 text-slate-600">Kelas / Fase</span>
                <span className="w-3">:</span>
                <span className="font-bold text-slate-900">{schoolClass.nama} / Fase D</span>
              </div>
              <div className="flex">
                <span className="w-28 text-slate-600">Wali Kelas</span>
                <span className="w-3">:</span>
                <span className="text-slate-800">{schoolClass.waliKelasNama}</span>
              </div>
              <div className="flex">
                <span className="w-28 text-slate-600">Peringkat Kelas</span>
                <span className="w-3">:</span>
                <span className="font-bold text-indigo-700">Peringkat ke-{summary.ranking} dari {StorageService.getStudentsByClass(schoolClass.id).length} Siswa</span>
              </div>
            </div>
          </div>

          {/* TABEL PENILAIAN 11 MATA PELAJARAN */}
          <div className="mb-5">
            <table className="w-full text-left border-collapse border border-slate-400 text-[11px]">
              <thead>
                <tr className="bg-slate-100 text-slate-900 font-bold text-center border-b border-slate-400">
                  <th className="border border-slate-400 py-1.5 px-2 w-8">No</th>
                  <th className="border border-slate-400 py-1.5 px-3 text-left">Mata Pelajaran</th>
                  <th className="border border-slate-400 py-1.5 px-2 w-12">KKM</th>
                  <th className="border border-slate-400 py-1.5 px-2 w-14">Nilai Akhir</th>
                  <th className="border border-slate-400 py-1.5 px-2 w-12">Predikat</th>
                  <th className="border border-slate-400 py-1.5 px-3 text-left">Capaian Kompetensi / Catatan Kemajuan</th>
                </tr>
              </thead>
              <tbody>
                {/* Kelompok A */}
                <tr className="bg-slate-50 font-bold text-[10px]">
                  <td colSpan={6} className="border border-slate-400 py-1 px-2 uppercase text-slate-700">
                    A. Kelompok Mata Pelajaran Umum
                  </td>
                </tr>
                {kelA.map((subj, idx) => {
                  const rec = summary.grades[subj.id];
                  const score = rec?.nilaiAkhir ?? '-';
                  const predikat = rec?.predikat ?? '-';
                  const capaian = rec?.capaianKompetensi ?? `Mengikuti proses pembelajaran mata pelajaran ${subj.nama}.`;
                  return (
                    <tr key={subj.id} className="border-b border-slate-300">
                      <td className="border border-slate-300 py-1.5 px-2 text-center">{idx + 1}</td>
                      <td className="border border-slate-300 py-1.5 px-3 font-semibold text-slate-900">{subj.nama}</td>
                      <td className="border border-slate-300 py-1.5 px-2 text-center font-mono">{subj.kkm}</td>
                      <td className="border border-slate-300 py-1.5 px-2 text-center font-bold font-mono">{score}</td>
                      <td className="border border-slate-300 py-1.5 px-2 text-center font-bold">{predikat}</td>
                      <td className="border border-slate-300 py-1.5 px-3 text-slate-700 leading-tight text-[10px]">{capaian}</td>
                    </tr>
                  );
                })}

                {/* Kelompok B */}
                <tr className="bg-slate-50 font-bold text-[10px]">
                  <td colSpan={6} className="border border-slate-400 py-1 px-2 uppercase text-slate-700">
                    B. Kelompok Mata Pelajaran Keterampilan & Seni
                  </td>
                </tr>
                {kelB.map((subj, idx) => {
                  const rec = summary.grades[subj.id];
                  const score = rec?.nilaiAkhir ?? '-';
                  const predikat = rec?.predikat ?? '-';
                  const capaian = rec?.capaianKompetensi ?? `Mengikuti proses pembelajaran mata pelajaran ${subj.nama}.`;
                  return (
                    <tr key={subj.id} className="border-b border-slate-300">
                      <td className="border border-slate-300 py-1.5 px-2 text-center">{kelA.length + idx + 1}</td>
                      <td className="border border-slate-300 py-1.5 px-3 font-semibold text-slate-900">{subj.nama}</td>
                      <td className="border border-slate-300 py-1.5 px-2 text-center font-mono">{subj.kkm}</td>
                      <td className="border border-slate-300 py-1.5 px-2 text-center font-bold font-mono">{score}</td>
                      <td className="border border-slate-300 py-1.5 px-2 text-center font-bold">{predikat}</td>
                      <td className="border border-slate-300 py-1.5 px-3 text-slate-700 leading-tight text-[10px]">{capaian}</td>
                    </tr>
                  );
                })}

                {/* Muatan Lokal */}
                <tr className="bg-slate-50 font-bold text-[10px]">
                  <td colSpan={6} className="border border-slate-400 py-1 px-2 uppercase text-slate-700">
                    C. Muatan Lokal
                  </td>
                </tr>
                {mulok.map((subj, idx) => {
                  const rec = summary.grades[subj.id];
                  const score = rec?.nilaiAkhir ?? '-';
                  const predikat = rec?.predikat ?? '-';
                  const capaian = rec?.capaianKompetensi ?? `Mengikuti proses pembelajaran muatan lokal ${subj.nama}.`;
                  return (
                    <tr key={subj.id} className="border-b border-slate-300">
                      <td className="border border-slate-300 py-1.5 px-2 text-center">{kelA.length + kelB.length + idx + 1}</td>
                      <td className="border border-slate-300 py-1.5 px-3 font-semibold text-slate-900">{subj.nama}</td>
                      <td className="border border-slate-300 py-1.5 px-2 text-center font-mono">{subj.kkm}</td>
                      <td className="border border-slate-300 py-1.5 px-2 text-center font-bold font-mono">{score}</td>
                      <td className="border border-slate-300 py-1.5 px-2 text-center font-bold">{predikat}</td>
                      <td className="border border-slate-300 py-1.5 px-3 text-slate-700 leading-tight text-[10px]">{capaian}</td>
                    </tr>
                  );
                })}

                {/* Total & Average Row */}
                <tr className="bg-slate-100 font-bold border-t-2 border-slate-400">
                  <td colSpan={3} className="border border-slate-400 py-1.5 px-3 text-right">
                    Jumlah Nilai (11 Mata Pelajaran) :
                  </td>
                  <td className="border border-slate-400 py-1.5 px-2 text-center font-mono font-bold text-slate-900">
                    {summary.totalNilai}
                  </td>
                  <td colSpan={2} className="border border-slate-400 py-1.5 px-3 text-left">
                    Rata-rata: <strong>{summary.rataRata}</strong> • Status: <strong>{summary.jumlahMapelBelumTuntas === 0 && summary.totalNilai > 0 ? 'Tuntas Seluruh Mapel' : `${summary.jumlahMapelBelumTuntas} Mapel Perlu Bimbingan`}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Kehadiran & Catatan Wali Kelas */}
          <div className="grid grid-cols-12 gap-4 mb-6 text-[11px]">
            {/* Kehadiran */}
            <div className="col-span-5">
              <table className="w-full border border-slate-400 text-left">
                <thead>
                  <tr className="bg-slate-100 font-bold border-b border-slate-400 text-center">
                    <th colSpan={2} className="py-1 px-2">Ketidakhadiran (3 Bulan)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300">
                  <tr>
                    <td className="py-1 px-3">Sakit (S)</td>
                    <td className="py-1 px-3 text-center font-bold">{summary.kehadiran?.sakit ?? 0} hari</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-3">Izin (I)</td>
                    <td className="py-1 px-3 text-center font-bold">{summary.kehadiran?.izin ?? 0} hari</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-3">Tanpa Keterangan (A)</td>
                    <td className="py-1 px-3 text-center font-bold">{summary.kehadiran?.alpa ?? 0} hari</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Catatan Wali Kelas */}
            <div className="col-span-7 border border-slate-400 p-2.5 rounded-sm flex flex-col justify-between">
              <div>
                <span className="font-bold block mb-1 text-slate-800">Catatan Wali Kelas:</span>
                <p className="italic text-slate-700 text-[10.5px] leading-relaxed">
                  "{summary.kehadiran?.catatanWaliKelas || 'Pertahankan prestasi belajar, selalu giat dalam berdiskusi di kelas dan tingkatkan kedisiplinan beribadah serta mematuhi tata tertib sekolah.'}"
                </p>
              </div>
              <div className="text-[10px] text-slate-500 pt-2 text-right">
                Status: {summary.rataRata >= 75 ? 'Memenuhi Standar Kelulusan Tengah Semester' : 'Perlu Pendampingan Lanjutan'}
              </div>
            </div>
          </div>

          {/* KOLOM TANDA TANGAN RESMI */}
          <div className="pt-4 border-t border-slate-200">
            <div className="text-right text-[11px] mb-2">
              <span>{settings.tempatRapor}, {settings.tanggalRapor}</span>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center text-[11px]">
              <div>
                <p className="text-slate-700">Mengetahui,</p>
                <p className="font-bold text-slate-800">Orang Tua / Wali Siswa</p>
                <div className="h-16" />
                <p className="border-b border-slate-400 w-36 mx-auto" />
                <p className="text-[10px] text-slate-500 mt-0.5">( ............................................ )</p>
              </div>

              <div>
                <p className="text-slate-700">&nbsp;</p>
                <p className="font-bold text-slate-800">Wali Kelas,</p>
                <div className="h-16" />
                <p className="font-bold underline text-slate-900">{schoolClass.waliKelasNama}</p>
                <p className="text-[10px] text-slate-600 font-mono">NIP. {schoolClass.waliKelasNip}</p>
              </div>

              <div>
                <p className="text-slate-700">Mengetahui,</p>
                <p className="font-bold text-slate-800">Kepala {settings.namaSekolah}</p>
                <div className="h-16" />
                <p className="font-bold underline text-slate-900">{settings.namaKepalaSekolah}</p>
                <p className="text-[10px] text-slate-600 font-mono">NIP. {settings.nipKepalaSekolah}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between print:hidden">
          <span className="text-xs text-slate-500">
            Tips: Gunakan opsi printer "Save as PDF" di dialog cetak browser untuk menyimpan file PDF.
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-bold transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={handlePrint}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak Dokumen</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
