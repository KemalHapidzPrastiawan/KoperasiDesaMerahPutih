"use client";

import React, { useState } from "react";
import { 
  Download, 
  UserPlus, 
  Search, 
  Edit2, 
  Trash2, 
  ChevronLeft, 
  ChevronRight,
  Hash,
  User,
  CreditCard,
  Wallet,
  Database
} from "lucide-react";
import { cn, formatRupiah } from "@/lib/utils";

/**
 * Halaman Manajemen Data Nasabah.
 * Sesuai desain: Input Form di atas dan Tabel Data di bawah.
 */
export default function NasabahPage() {
  // State untuk data dummy (nanti dihubungkan ke Supabase)
  const [daftarNasabah] = useState([
    { id: "KP-2023-0001", nama: "Ahmad Subarjo", hutang: 2500000, tabungan: 500000, status: "Active" },
    { id: "KP-2023-0012", nama: "Siti Aminah", hutang: 0, tabungan: 12750000, status: "Active" },
    { id: "KP-2023-0045", nama: "Eko Prasetyo", hutang: 5000000, tabungan: 100000, status: "Inactive" },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto">
      
      {/* Header Halaman */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Customer Data Management</h1>
          <p className="text-sm text-gray-400">Register new members and manage financial records</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      {/* Section: Input Data Nasabah */}
      <section className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 bg-gray-50/30">
          <h2 className="text-sm font-bold text-gray-800 flex items-center gap-2">
            <UserPlus className="w-4 h-4 text-red-600" />
            Input Data Nasabah
          </h2>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input No Anggota */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <Hash className="w-3 h-3" /> No Anggota
              </label>
              <input 
                type="text" 
                placeholder="e.g. KP-2023-0042" 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-red-100 outline-none transition-all"
              />
            </div>
            {/* Input Nama Nasabah */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <User className="w-3 h-3" /> Nama Nasabah
              </label>
              <input 
                type="text" 
                placeholder="Enter full name" 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-red-100 outline-none transition-all"
              />
            </div>
            {/* Input Jumlah Hutang */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <CreditCard className="w-3 h-3" /> Jumlah Hutang
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-600">Rp</span>
                <input 
                  type="number" 
                  defaultValue={0}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-red-100 outline-none transition-all font-semibold"
                />
              </div>
            </div>
            {/* Input Jumlah Tabungan */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <Wallet className="w-3 h-3" /> Jumlah Tabungan
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-600">Rp</span>
                <input 
                  type="number" 
                  defaultValue={0}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-red-100 outline-none transition-all font-semibold"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <button className="px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50 transition-all">
              Reset Form
            </button>
            <button className="px-8 py-2.5 bg-red-600 text-white rounded-xl text-xs font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-100">
              Save Data
            </button>
          </div>
        </div>
      </section>

      {/* Section: Data Nasabah Terdaftar */}
      <section className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
          <h2 className="text-sm font-bold text-gray-800 flex items-center gap-2">
            <Database className="w-4 h-4 text-red-600" />
            Data Nasabah Terdaftar
          </h2>
          <div className="flex items-center gap-3">
            <label className="text-[10px] font-bold text-gray-400 uppercase">Filter by:</label>
            <select className="text-xs font-bold text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 outline-none bg-white">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">No Anggota</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Nama Nasabah</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total Hutang</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total Tabungan</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {daftarNasabah.map((nasabah, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4 text-xs font-bold text-gray-700">{nasabah.id}</td>
                  <td className="px-6 py-4 text-xs font-semibold text-gray-600">{nasabah.nama}</td>
                  <td className="px-6 py-4 text-xs font-bold text-red-600">{formatRupiah(nasabah.hutang)}</td>
                  <td className="px-6 py-4 text-xs font-bold text-gray-700">{formatRupiah(nasabah.tabungan)}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter",
                      nasabah.status === "Active" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"
                    )}>
                      {nasabah.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer: Pagination */}
        <div className="p-6 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50/10">
          <p className="text-[10px] font-bold text-gray-400">
            Showing <span className="text-gray-700">3</span> of <span className="text-gray-700">128</span> members
          </p>
          <div className="flex items-center gap-1">
            <button className="p-1 border border-gray-200 rounded-lg text-gray-400 hover:bg-white hover:text-red-600 transition-all">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-red-600 text-white text-xs font-bold rounded-lg shadow-md shadow-red-100">1</button>
            <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-100 text-gray-500 text-xs font-bold rounded-lg hover:border-red-200 hover:text-red-600 transition-all">2</button>
            <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-100 text-gray-500 text-xs font-bold rounded-lg hover:border-red-200 hover:text-red-600 transition-all">3</button>
            <button className="p-1 border border-gray-200 rounded-lg text-gray-400 hover:bg-white hover:text-red-600 transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
