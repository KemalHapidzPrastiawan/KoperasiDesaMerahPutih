"use client";

import React, { useState, useMemo } from "react";
import { Plus, MoreVertical, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { cn, formatRupiah } from "@/lib/utils";

/**
 * Komponen Tabel Piutang Koperasi (Cooperative Receivables).
 * Menampilkan daftar tagihan koperasi kepada nasabah atau pihak ketiga (debitur).
 */
const TablePiutang = () => {
  // State untuk pencarian dan pagination dalam Bahasa Indonesia
  const [kataKunci, setKataKunci] = useState("");
  const [halamanSekarang, setHalamanSekarang] = useState(1);
  const jumlahPerHalaman = 5;

  // Data dummy yang diperbanyak untuk simulasi pagination
  const daftar_piutang = [
    { nama_debitur: "Ahmad Subarjo", inisial: "AS", jumlah_piutang: 12000000, jatuh_tempo: "Sep 30, 2024", status_tagihan: "Grace Period" },
    { nama_debitur: "Siti Indahwati", inisial: "SI", jumlah_piutang: 5500000, jatuh_tempo: "Oct 02, 2024", status_tagihan: "Scheduled" },
    { nama_debitur: "Bambang Pamungkas", inisial: "BP", jumlah_piutang: 45000000, jatuh_tempo: "Jul 12, 2024", status_tagihan: "Defaulted" },
    { nama_debitur: "Rina Permata", inisial: "RP", jumlah_piutang: 3000000, jatuh_tempo: "Oct 20, 2024", status_tagihan: "Scheduled" },
    { nama_debitur: "Hendra Wijaya", inisial: "HW", jumlah_piutang: 15000000, jatuh_tempo: "Nov 05, 2024", status_tagihan: "Scheduled" },
    { nama_debitur: "Maya Kartika", inisial: "MK", jumlah_piutang: 8000000, jatuh_tempo: "Oct 15, 2024", status_tagihan: "Grace Period" },
    { nama_debitur: "Dodi Kurniawan", inisial: "DK", jumlah_piutang: 20000000, jatuh_tempo: "Aug 15, 2024", status_tagihan: "Defaulted" },
  ];

  /**
   * Logika Filter:
   * Menyaring array data berdasarkan teks pencarian yang dimasukkan user.
   * Menggunakan toLowerCase() agar pencarian tidak sensitif terhadap huruf besar/kecil.
   */
  const dataTerfilter = useMemo(() => {
    return daftar_piutang.filter((item) =>
      item.nama_debitur.toLowerCase().includes(kataKunci.toLowerCase())
    );
  }, [kataKunci]);

  /**
   * Logika Pagination (potongData):
   * Membagi data menjadi potongan-potongan kecil sesuai jumlahPerHalaman.
   */
  const potongData = () => {
    const indeksAwal = (halamanSekarang - 1) * jumlahPerHalaman;
    const indeksAkhir = indeksAwal + jumlahPerHalaman;
    return dataTerfilter.slice(indeksAwal, indeksAkhir);
  };

  const totalHalaman = Math.ceil(dataTerfilter.length / jumlahPerHalaman);
  const dataTampil = potongData();

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header Tabel dengan Pencarian */}
      <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50/20">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-red-600 rounded-full"></div>
          <h2 className="text-sm font-bold text-gray-800">Cooperative Receivables (Piutang)</h2>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Input Pencarian */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" />
            <input 
              type="text"
              placeholder="Cari debitur..."
              value={kataKunci}
              onChange={(e) => { setKataKunci(e.target.value); setHalamanSekarang(1); }}
              className="pl-8 pr-4 py-1.5 bg-white border border-gray-100 rounded-lg text-[10px] outline-none focus:ring-2 focus:ring-red-100 w-full md:w-48 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-red-600 text-red-600 rounded-xl text-[10px] font-bold hover:bg-red-50 transition-all shadow-sm whitespace-nowrap">
            <Plus className="w-3 h-3 text-red-600" />
            Add New Receivable
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <th className="px-8 py-4">Debtor Name</th>
              <th className="px-8 py-4 text-right">Amount Receivable</th>
              <th className="px-8 py-4">Due Date</th>
              <th className="px-8 py-4 text-center">Status</th>
              <th className="px-8 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-xs">
            {dataTampil.length > 0 ? dataTampil.map((item, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-8 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[8px] font-black text-blue-600 border border-blue-100 uppercase">
                      {item.inisial}
                    </div>
                    <span className="font-bold text-gray-700">{item.nama_debitur}</span>
                  </div>
                </td>
                <td className="px-8 py-4 text-right font-bold text-gray-800">
                  {formatRupiah(item.jumlah_piutang)}
                </td>
                <td className={cn(
                  "px-8 py-4 font-bold",
                  item.status_tagihan === "Defaulted" ? "text-red-500" : "text-gray-400"
                )}>
                  {item.jatuh_tempo}
                </td>
                <td className="px-8 py-4">
                  <div className="flex justify-center">
                    <span className={cn(
                      "px-3 py-1 rounded-full font-bold text-[9px] min-w-[90px] text-center",
                      item.status_tagihan === "Scheduled" ? "bg-blue-50 text-blue-600" : 
                      item.status_tagihan === "Grace Period" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                    )}>
                      {item.status_tagihan}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-4">
                  <div className="flex justify-center">
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={5} className="px-8 py-10 text-center text-[10px] text-gray-400 italic">
                  Data tidak ditemukan...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer: Pagination Sederhana */}
      <div className="p-4 border-t border-gray-50 flex justify-between items-center bg-gray-50/10">
        <p className="text-[9px] font-bold text-gray-400">
          Halaman {halamanSekarang} dari {totalHalaman || 1} ({dataTerfilter.length} data)
        </p>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setHalamanSekarang(Math.max(1, halamanSekarang - 1))}
            disabled={halamanSekarang === 1}
            className="flex items-center gap-1 px-3 py-1.5 border border-gray-100 rounded-lg text-[9px] font-bold text-gray-500 hover:bg-white hover:text-red-600 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-500 transition-all"
          >
            <ChevronLeft className="w-3 h-3" /> Sebelumnya
          </button>
          <button 
            onClick={() => setHalamanSekarang(Math.min(totalHalaman, halamanSekarang + 1))}
            disabled={halamanSekarang === totalHalaman || totalHalaman === 0}
            className="flex items-center gap-1 px-3 py-1.5 border border-gray-100 rounded-lg text-[9px] font-bold text-gray-500 hover:bg-white hover:text-red-600 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-500 transition-all"
          >
            Selanjutnya <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TablePiutang;
