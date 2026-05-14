"use client";

import React, { useState } from "react";
import {
  FileText,
  Plus,
  CreditCard,
  Calendar,
  AlertCircle,
  Target,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  CheckCircle,
  MessageSquare,
  Clock,
  TrendingUp,
  BarChart3
} from "lucide-react";
import { cn, formatRupiah } from "@/lib/utils";

/**
 * Halaman Manajemen Pembayaran Pinjaman.
 * Menampilkan ringkasan pinjaman aktif, penagihan harian, 
 * jumlah tunggakan, target penagihan, serta buku besar pembayaran.
 */
export default function PinjamanPage() {
  // Data dummy untuk tabel pembayaran
  const [dataPembayaran] = useState([
    { nama: "Agus Salim", id: "KP-2024-001", inisial: "AS", warna: "bg-blue-100", total: 10000000, sisa: 0, tgl: "15 Oct 2024", status: "Lunas" },
    { nama: "Siti Rahayu", id: "KP-2024-042", inisial: "SR", warna: "bg-gray-100", total: 5000000, sisa: 2500000, tgl: "28 Oct 2024", status: "Pending" },
    { nama: "Bambang Pamungkas", id: "KP-2024-089", inisial: "BP", warna: "bg-red-100", total: 15000000, sisa: 15000000, tgl: "12 Oct 2024", status: "Terlambat" },
    { nama: "Dewi Erika", id: "KP-2024-115", inisial: "DE", warna: "bg-orange-100", total: 7500000, sisa: 3750000, tgl: "30 Oct 2024", status: "Pending" },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">

      {/* Header Halaman - Revisi Label ke Bahasa Indonesia */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Pembayaran Pinjaman</h1>
          <p className="text-sm text-gray-400">Pantau, kelola, dan catat penyaluran serta angsuran pinjaman.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
            <FileText className="w-4 h-4" />
            Export Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-700 transition-all shadow-md shadow-red-100">
            <Plus className="w-4 h-4" />
            Pinjaman Baru
          </button>
        </div>
      </div>

      {/* Grid Statistik Ringkasan - Revisi Label ke Bahasa Indonesia */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Pinjaman Aktif */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-red-50 rounded-lg text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <CreditCard className="w-5 h-5" />
            </div>
            <span className="text-[9px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+12% vs last mo</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Pinjaman Aktif</p>
          <h3 className="text-xl font-bold text-gray-800">{formatRupiah(124500000)}</h3>
        </div>

        {/* Tagihan Hari Ini */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-gray-50 rounded-lg text-gray-400 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-[9px] font-bold text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full">88% Completion</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Tagihan Hari Ini</p>
          <h3 className="text-xl font-bold text-gray-800">{formatRupiah(5250000)}</h3>
        </div>

        {/* Total Menunggak */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-red-50 rounded-lg text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <AlertCircle className="w-5 h-5" />
            </div>
            <span className="text-[9px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">4 Accounts</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Menunggak</p>
          <h3 className="text-xl font-bold text-gray-800">{formatRupiah(2100000)}</h3>
        </div>

        {/* Target Penagihan Card (Red Accent) */}
        <div className="bg-red-600 p-6 rounded-2xl shadow-xl shadow-red-100 relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4 text-red-100/80">
              <Target className="w-4 h-4" />
              <span className="text-[9px] font-bold uppercase tracking-widest">Target Penagihan</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{formatRupiah(150000000)}</h3>
          </div>
          <div className="relative z-10">
            <div className="flex justify-between items-end mb-1">
              <span className="text-[9px] font-bold text-red-100">Target reached: 70%</span>
            </div>
            <div className="w-full h-1 bg-red-800 rounded-full overflow-hidden">
              <div className="h-full bg-white" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        </div>
      </div>

      {/* Section: Buku Besar Pembayaran (Table) - Revisi Label ke Bahasa Indonesia */}
      <section className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <h2 className="text-sm font-bold text-gray-800">Buku Besar Pembayaran</h2>
            <div className="flex bg-gray-50 p-1 rounded-xl">
              {['Semua', 'Pending', 'Menunggak'].map((tab) => (
                <button
                  key={tab}
                  className={cn(
                    "px-4 py-1.5 rounded-lg text-[10px] font-bold transition-all",
                    tab === 'Semua' ? "bg-white text-gray-800 shadow-sm" : "text-gray-400 hover:text-gray-600"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50 transition-all">
            <TrendingUp className="w-3.5 h-3.5" /> Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="px-6 py-4">Nama Nasabah</th>
                <th className="px-6 py-4">Jumlah Pinjaman</th>
                <th className="px-6 py-4">Sisa Tagihan</th>
                <th className="px-6 py-4">Jatuh Tempo</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-xs">
              {dataPembayaran.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-9 h-9 rounded-full flex items-center justify-center font-bold text-gray-600 text-[10px]", item.warna)}>
                        {item.inisial}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{item.nama}</p>
                        <p className="text-[9px] text-gray-400 uppercase font-medium">ID: {item.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-700">{formatRupiah(item.total)}</td>
                  <td className="px-6 py-4 font-bold text-red-600">{formatRupiah(item.sisa)}</td>
                  <td className="px-6 py-4 font-medium text-gray-500">{item.tgl}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2 py-0.5 rounded-full font-bold text-[9px] flex items-center gap-1 w-fit",
                      item.status === "Lunas" ? "bg-green-50 text-green-600" :
                        item.status === "Pending" ? "bg-yellow-50 text-yellow-600" : "bg-red-50 text-red-600"
                    )}>
                      <div className={cn("w-1 h-1 rounded-full",
                        item.status === "Lunas" ? "bg-green-600" :
                          item.status === "Pending" ? "bg-yellow-600" : "bg-red-600"
                      )}></div>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      {item.status !== "Lunas" ? (
                        <button className="bg-red-600 text-white px-4 py-1.5 rounded-lg text-[10px] font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-100">
                          Catat Bayar
                        </button>
                      ) : (
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-all">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer: Pagination */}
        <div className="p-6 border-t border-gray-50 flex justify-between items-center bg-gray-50/10">
          <p className="text-[10px] text-gray-400 font-bold">
            Showing <span className="text-gray-800 font-black">1 to 4</span> of 120 entries
          </p>
          <div className="flex items-center gap-1">
            <button className="p-1 text-gray-300"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-7 h-7 bg-red-600 text-white rounded-lg text-xs font-bold">1</button>
            <button className="w-7 h-7 bg-white text-gray-400 rounded-lg text-xs font-bold border border-gray-100">2</button>
            <button className="w-7 h-7 bg-white text-gray-400 rounded-lg text-xs font-bold border border-gray-100">3</button>
            <button className="p-1 text-gray-300"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </section>

      {/* Row Bawah: Analytics & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Quick Payment Analytics */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-sm font-bold text-gray-800">Quick Payment Analytics</h2>
            <div className="p-2 bg-gray-50 rounded-lg text-gray-400">
              <BarChart3 className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-end justify-between h-48 gap-8 px-4">
            {[45, 55, 65, 50].map((h, i) => (
              <div key={i} className="flex-1 group relative">
                <div
                  className={cn(
                    "w-full rounded-xl transition-all duration-500",
                    i === 2 ? "bg-red-600 shadow-lg shadow-red-100" : "bg-red-50 hover:bg-red-100"
                  )}
                  style={{ height: `${h}%` }}
                >
                  {i === 2 && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white border border-gray-100 px-3 py-1 rounded-lg shadow-xl animate-bounce">
                      <p className="text-[10px] font-black text-gray-800 whitespace-nowrap">Rp 213.000</p>
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Monthly Repayment Trend</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-50">
            <h2 className="text-sm font-bold text-gray-800">Aktivitas Terbaru</h2>
          </div>
          <div className="flex-1 p-6 space-y-6">
            <div className="relative pl-8 space-y-8">
              {/* Vertical line decor */}
              <div className="absolute left-[11px] top-1 bottom-1 w-0.5 bg-gray-50"></div>

              {[
                { label: "Agus Salim Paid", sub: "Rp 1.250.000 partial payment", time: "2 hours ago", icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
                { label: "Reminder Sent", sub: "Sent to Siti Rahayu via WhatsApp", time: "5 hours ago", icon: MessageSquare, color: "text-blue-600", bg: "bg-blue-50" },
                { label: "Loan Overdue", sub: "Bambang P. missed Oct 12 deadline", time: "1 day ago", icon: Clock, color: "text-red-600", bg: "bg-red-50" },
              ].map((act, i) => (
                <div key={i} className="relative">
                  <div className={cn("absolute -left-10 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm", act.bg, act.color)}>
                    <act.icon className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">{act.label}</h4>
                    <p className="text-[10px] text-gray-500 mb-1">{act.sub}</p>
                    <span className="text-[9px] font-medium text-gray-400">{act.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 border-t border-gray-50">
            <button className="w-full py-2 border border-gray-100 rounded-xl text-[10px] font-bold text-gray-500 hover:bg-gray-50 transition-all uppercase tracking-widest">
              View All Logs
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
