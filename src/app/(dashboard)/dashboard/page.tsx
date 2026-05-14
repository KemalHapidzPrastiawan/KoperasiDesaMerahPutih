"use client";

import React from "react";
import { 
  Plus, 
  FileText, 
  TrendingUp, 
  ArrowDownCircle, 
  ArrowUpCircle,
  Clock,
  ChevronRight,
  UserPlus,
  BookOpen,
  PieChart
} from "lucide-react";
import StatCard from "@/components/StatCard";
import { cn, formatRupiah } from "@/lib/utils";


/**
 * Halaman Dashboard Utama.
 * Menampilkan ringkasan finansial, grafik tren, aktivitas terakhir, dan aksi cepat.
 */
export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Banner Selamat Datang */}
      <section className="relative overflow-hidden bg-red-600 rounded-3xl p-8 text-white shadow-xl shadow-red-100">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-2">Selamat Datang, Admin</h2>
          <p className="text-red-100 mb-6 opacity-90">
            Koperasi Desa Merah Putih: Mengabdi untuk Kesejahteraan Ekonomi Desa.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-red-600 px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-red-50 transition-colors">
              <Plus className="w-4 h-4" />
              Tambah Nasabah
            </button>
            <button className="bg-red-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-red-400 transition-colors border border-red-400">
              Laporan Bulanan
            </button>
          </div>
        </div>
        {/* Dekorasi Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-500/50 to-transparent"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* Grid Statistik Utama */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          judul="Total Tabungan" 
          nilai={1245000000} 
          ikon={TrendingUp} 
          persentase="+12%" 
          isNaik={true} 
        />
        <StatCard 
          judul="Total Pinjaman" 
          nilai={842350000} 
          ikon={BookOpen} 
          persentase="+5.4%" 
          isNaik={true} 
        />
        <StatCard 
          judul="Total Hutang" 
          nilai={156000000} 
          ikon={ArrowUpCircle} 
          persentase="-2.1%" 
          isNaik={false} 
        />
        <StatCard 
          judul="Total Piutang" 
          nilai={210450000} 
          ikon={ArrowDownCircle} 
          persentase="+8.3%" 
          isNaik={true} 
        />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Grafik Tren (Placeholder Visual) */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-gray-800 text-lg">Tren Finansial Bulanan</h3>
            <select className="bg-gray-50 border-none text-xs font-bold text-gray-500 rounded-lg px-3 py-1.5 outline-none">
              <option>Tahun 2023</option>
            </select>
          </div>
          {/* Visualisasi Bar Chart Sederhana */}
          <div className="flex items-end justify-between h-48 gap-4 px-2">
            {[35, 45, 30, 55, 65, 40].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3">
                <div 
                  className="w-full bg-red-50 rounded-t-lg transition-all duration-1000 hover:bg-red-100" 
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-[10px] font-bold text-gray-400">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Aksi Cepat */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              Aksi Cepat
            </h3>
            <div className="space-y-3">
              {[
                { label: "Tambah Nasabah Baru", icon: UserPlus },
                { label: "Catat Tabungan", icon: Plus },
                { label: "Catat Pembayaran Pinjaman", icon: FileText }
              ].map((item, i) => (
                <button key={i} className="w-full flex items-center justify-between p-3 rounded-xl border border-gray-50 hover:bg-gray-50 hover:border-red-100 transition-all group text-left">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-50 rounded-lg text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-gray-600 group-hover:text-red-600">{item.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Rasio Pinjaman */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-800 text-sm mb-4">Rasio Pinjaman vs Kembali</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-end mb-1">
                <span className="text-[10px] font-bold text-white bg-red-600 px-2 py-0.5 rounded uppercase">Target Tercapai</span>
                <span className="text-xs font-bold text-gray-800">79%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-red-600 rounded-full" style={{ width: '79%' }}></div>
              </div>
              <p className="text-[10px] text-gray-400 italic">
                Sebanyak 79% pinjaman jatuh tempo telah berhasil ditagih kembali bulan ini.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Aktivitas Terakhir */}
      <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
            Aktivitas Terakhir
          </h3>
          <button className="text-xs font-bold text-red-600 hover:underline flex items-center gap-1">
            Lihat Semua <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="space-y-4">
          {[
            { tipe: 'setor', nama: 'Setoran Tabungan - Ahmad Dahlan', waktu: 'Hari ini, 10:45 WIB', nilai: 500000, warna: 'text-green-600', ikon: ArrowDownCircle },
            { tipe: 'pinjam', nama: 'Pencairan Pinjaman - Siti Aminah', waktu: 'Hari ini, 09:20 WIB', nilai: 5000000, warna: 'text-red-600', ikon: ArrowUpCircle },
            { tipe: 'bayar', nama: 'Angsuran Pinjaman - Budi Santoso', waktu: 'Kemarin, 16:30 WIB', nilai: 1250000, warna: 'text-green-600', ikon: ArrowDownCircle },
          ].map((act, i) => {
            const Icon = act.ikon;
            return (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div className="flex items-center gap-4">
                  <div className={cn("p-3 rounded-xl", act.tipe === 'pinjam' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600')}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">{act.nama}</h4>
                    <p className="text-[10px] text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {act.waktu}
                    </p>
                  </div>
                </div>
                <span className={cn("font-bold text-sm", act.warna)}>
                  {act.tipe === 'pinjam' ? '-' : '+'}{formatRupiah(act.nilai)}
                </span>
              </div>
            );
          })}

        </div>
      </section>

    </div>
  );
}
