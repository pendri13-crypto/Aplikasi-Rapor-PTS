import React, { useState } from 'react';
import {
  GraduationCap,
  Lock,
  UserCheck,
  Shield,
  BookOpen,
  ArrowRight,
  AlertCircle,
  Sparkles,
  School,
  CheckCircle2,
  KeyRound,
  Eye,
  EyeOff
} from 'lucide-react';
import { StorageService } from '../services/storage';
import { UserAccount } from '../types';

interface LoginViewProps {
  onLoginSuccess: (user: UserAccount) => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLoginSuccess }) => {
  const [nip, setNip] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const users = StorageService.getUsers();
  const settings = StorageService.getSettings();

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMsg('');

    if (!nip.trim()) {
      setErrorMsg('Silakan masukkan NIP atau NUPTK Anda.');
      return;
    }
    if (!password.trim()) {
      setErrorMsg('Silakan masukkan Password Anda.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const res = StorageService.login(nip, password);
      setIsLoading(false);
      if (res.success && res.user) {
        onLoginSuccess(res.user);
      } else {
        setErrorMsg(res.message || 'Login gagal. Periksa kembali NIP/NUPTK dan Password.');
      }
    }, 200);
  };

  const handleQuickLogin = (u: UserAccount) => {
    setNip(u.nip);
    setPassword(u.password);
    setErrorMsg('');
    const res = StorageService.login(u.nip, u.password);
    if (res.success && res.user) {
      onLoginSuccess(res.user);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-slate-100 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 selection:bg-indigo-500 selection:text-white">
      {/* Decorative background glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Header App */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-blue-500 text-white shadow-xl shadow-indigo-500/25 mb-4">
            <GraduationCap className="w-9 h-9" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            e-Rapor Penilaian Tengah Semester
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Sistem Informasi Penilaian Tengah Semester (PTS/STS) SMP • 33 Kelas (VII-A s.d. IX-K)
          </p>
          <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-indigo-300">
            <School className="w-3.5 h-3.5" />
            <span>{settings.namaSekolah} • Tahun Ajaran {settings.tahunAjaran}</span>
          </div>
        </div>

        <div className="flex justify-center items-start">
          {/* Main Login Form */}
          <div className="w-full max-w-md bg-white text-slate-900 rounded-3xl p-7 sm:p-9 shadow-2xl shadow-black/40 border border-slate-100">
            <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Autentikasi Pengguna</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Masuk dengan nomor NIP (18 digit) atau NUPTK (16 digit)
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                <KeyRound className="w-5 h-5" />
              </div>
            </div>

            {errorMsg && (
              <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Username / NIP / NUPTK
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={nip}
                    onChange={(e) => setNip(e.target.value)}
                    placeholder="Superadmin atau NIP Guru..."
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Admin: Username <strong>Superadmin</strong> • Guru: NIP / NUPTK
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Kata Sandi (Password)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-70 active:scale-[0.99]"
                >
                  {isLoading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Masuk ke Sistem e-Rapor</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Kurikulum Merdeka / K13 SMP</span>
              <span>v2.5 Official Release</span>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};
