"use client";

import React, { useState } from "react";
import { 
  FileText, 
  Plus, 
  Users, 
  Wallet, 
  ArrowDownLeft, 
  ArrowUpRight, 
  Eye, 
  Edit2, 
  Search, 
  ChevronLeft, 
  ChevronRight,
  Clock,
  PieChart,
  ArrowDownCircle,
  ArrowUpCircle,
  RefreshCw
} from "lucide-react";
import { cn, formatRupiah } from "@/lib/utils";

/**
 * Halaman Manajemen Tabungan.
 * Menampilkan ringkasan saldo, nasabah aktif, transaksi cepat, 
 * daftar rekening, aktivitas terkini, dan distribusi simpanan.
 */
export default function TabunganPage() {
  // Data dummy untuk tabel rekening
  const [daftarRekening] = useState([
    { nama: "Bambang Susilo", inisial: "BS", warna: "bg-gray-200", nomor: "1022.094.001", status: "Aktif", saldo: 25400000, terakhir: "Setoran Tunai", tgl: "Hari ini, 09:45" },
    { nama: "Siti Wahyuni", inisial: "SW", warna: "bg-red-100", nomor: "1022.094.112", status: "Aktif", saldo: 8750000, terakhir: "Penarikan", tgl: "Kemarin, 14:20" },
    { nama: "Agus Dermawan", inisial: "AD", warna: "bg-blue-100", nomor: "1022.094.045", status: "Ditinjau", saldo: 120000, terakhir: "Bunga Bulanan", tgl: "31 Des 2023" },
    { nama: "Rina Permata", inisial: "RP", warna: "bg-purple-100", nomor: "1022.094.089", status: "Aktif", saldo: 45200000, terakhir: "Setoran Tunai", tgl: "2 Jan 2024" },
    { nama: "Hendri Saputra", inisial: "HS", warna: "bg-orange-100", nomor: "1022.094.201", status: "Terblokir", saldo: 0, terakhir: "-", tgl: "15 Des 2023" },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header Halaman */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Tabungan</h1>
          <p className="text-sm text-gray-400">Kelola saldo, deposit, dan penarikan nasabah secara real-time.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
            <FileText className="w-4 h-4" />
            Export PDF
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-700 transition-all shadow-md shadow-red-100">
            <Plus className="w-4 h-4" />
            Tambah Nasabah
          </button>
        </div>
      </div>

      {/* Grid Summary Atas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card: Total Simpanan */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-50 rounded-lg text-red-600">
              <Wallet className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Simpanan</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{formatRupiah(4280550000)}</h3>
          <p className="text-xs font-bold text-red-500 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" /> +12.5% bln ini
          </p>
        </div>

        {/* Card: Nasabah Aktif */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gray-50 rounded-lg text-gray-400">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nasabah Aktif</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">1,452</h3>
          <p className="text-xs text-gray-400">Tumbuh 48 nasabah baru</p>
        </div>

        {/* Card: Transaksi Cepat */}
        <div className="bg-[#1f2937] p-4 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4 px-2">
            <div>
              <h4 className="text-white text-xs font-bold">Transaksi Cepat</h4>
              <p className="text-gray-400 text-[10px]">Proses mutasi saldo instan</p>
            </div>
            <div className="p-1.5 bg-red-600 rounded-full text-white">
              <RefreshCw className="w-3 h-3" />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-red-600 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition-all">
              <ArrowDownLeft className="w-4 h-4" />
              Setoran
            </button>
            <button className="flex-1 bg-gray-200 text-gray-800 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-gray-300 transition-all">
              <ArrowUpRight className="w-4 h-4" />
              Penarikan
            </button>
          </div>
        </div>
      </div>

      {/* Section: Daftar Rekening Nasabah */}
      <section className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-sm font-bold text-gray-800">Daftar Rekening Nasabah</h2>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Filter nama..." 
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs outline-none focus:ring-2 focus:ring-red-100 transition-all"
              />
            </div>
            <select className="text-xs font-bold text-gray-500 border border-gray-200 rounded-xl px-3 py-2 outline-none bg-white">
              <option>Semua Status</option>
              <option>Aktif</option>
              <option>Ditinjau</option>
              <option>Terblokir</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px]">
            <thead>
              <tr className="bg-gray-50/50 text-gray-400 font-bold uppercase tracking-wider">
                <th className="px-6 py-3">Nama Nasabah</th>
                <th className="px-6 py-3">Nomor Rekening</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Saldo</th>
                <th className="px-6 py-3">Transaksi Terakhir</th>
                <th className="px-6 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {daftarRekening.map((rek, i) => (
                <tr key={i} className="hover:bg-gray-50/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-gray-600", rek.warna)}>
                        {rek.inisial}
                      </div>
                      <span className="font-bold text-gray-700">{rek.nama}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500 font-medium">{rek.nomor}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2 py-0.5 rounded-full font-bold text-[9px]",
                      rek.status === "Aktif" ? "bg-green-50 text-green-600" : 
                      rek.status === "Ditinjau" ? "bg-yellow-50 text-yellow-600" : "bg-red-50 text-red-500"
                    )}>
                      {rek.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-gray-800">{formatRupiah(rek.saldo)}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-bold text-gray-700">{rek.terakhir}</p>
                      <p className="text-[9px] text-gray-400">{rek.tgl}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer: Pagination */}
        <div className="p-4 border-t border-gray-50 flex justify-between items-center bg-gray-50/10">
          <p className="text-[10px] text-gray-400 font-medium">
            Menampilkan <span className="text-gray-700">1-5</span> dari <span className="text-gray-700">1,452</span> nasabah
          </p>
          <div className="flex items-center gap-1">
            <button className="p-1 text-gray-300 hover:text-gray-600 transition-all"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-7 h-7 bg-red-600 text-white rounded-lg text-xs font-bold">1</button>
            <button className="w-7 h-7 bg-white text-gray-500 rounded-lg text-xs font-bold hover:bg-gray-50 border border-gray-100 transition-all">2</button>
            <button className="w-7 h-7 bg-white text-gray-500 rounded-lg text-xs font-bold hover:bg-gray-50 border border-gray-100 transition-all">3</button>
            <span className="text-gray-300 px-1 text-xs">...</span>
            <button className="w-7 h-7 bg-white text-gray-500 rounded-lg text-xs font-bold hover:bg-gray-50 border border-gray-100 transition-all">29</button>
            <button className="p-1 text-gray-300 hover:text-gray-600 transition-all"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </section>

      {/* Row Bawah: Aktivitas Terkini & Distribusi */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Aktivitas Terkini */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <h2 className="text-sm font-bold text-gray-800">Aktivitas Terkini</h2>
            <button className="text-xs font-bold text-red-600 hover:underline">Lihat Semua</button>
          </div>
          <div className="p-4 space-y-3">
            {[
              { label: "Setoran Tunai - Bambang Susilo", sub: "Oleh Admin 02 • 09:45 WIB", val: 1500000, type: "plus" },
              { label: "Penarikan - Siti Wahyuni", sub: "Oleh Admin 01 • Kemarin, 14:20 WIB", val: 500000, type: "minus" },
              { label: "Buka Rekening Baru - Ahmad Fauzi", sub: "Oleh Admin 02 • Kemarin, 11:15 WIB", val: "Rekening Aktif", type: "info" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-all">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-2.5 rounded-xl",
                    item.type === "plus" ? "bg-red-50 text-red-600" : 
                    item.type === "minus" ? "bg-gray-100 text-gray-600" : "bg-red-50 text-red-600"
                  )}>
                    {item.type === "plus" ? <ArrowDownCircle className="w-4 h-4" /> : 
                     item.type === "minus" ? <ArrowUpCircle className="w-4 h-4" /> : <RefreshCw className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-700">{item.label}</h4>
                    <p className="text-[10px] text-gray-400">{item.sub}</p>
                  </div>
                </div>
                <span className={cn(
                  "text-xs font-bold",
                  item.type === "plus" ? "text-red-600" : 
                  item.type === "minus" ? "text-gray-500" : "text-gray-600"
                )}>
                  {typeof item.val === "number" ? (item.type === "plus" ? "+" : "-") + formatRupiah(item.val) : item.val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Distribusi Simpanan (Chart) */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-sm font-bold text-gray-800 mb-8">Distribusi Simpanan</h2>
          <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
            {/* Visual Donut Chart Sederhana dengan CSS */}
            <div className="absolute inset-0 rounded-full border-[16px] border-gray-100"></div>
            <div className="absolute inset-0 rounded-full border-[16px] border-red-600 border-l-transparent border-b-transparent rotate-45"></div>
            <div className="absolute inset-0 rounded-full border-[16px] border-gray-400 border-t-transparent border-r-transparent border-b-transparent -rotate-12"></div>
            <div className="text-center z-10">
              <span className="text-2xl font-bold text-gray-800">1.4K</span>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { label: "Simpanan Pokok", color: "bg-red-600", val: "65%" },
              { label: "Simpanan Wajib", color: "bg-gray-400", val: "25%" },
              { label: "Sukarela", color: "bg-red-200", val: "10%" },
            ].map((d, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn("w-2 h-2 rounded-full", d.color)}></div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase">{d.label}</span>
                </div>
                <span className="text-[10px] font-bold text-gray-800">{d.val}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
