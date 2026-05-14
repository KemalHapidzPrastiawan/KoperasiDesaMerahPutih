"use client";

import React from "react";
import { 
  TrendingUp, 
  ArrowUpCircle, 
  ArrowDownCircle, 
  Download,
  Info,
  Layers,
  Activity,
  Clock
} from "lucide-react";

import { cn, formatRupiah } from "@/lib/utils";
import TableHutang from "@/components/TableHutang";
import TablePiutang from "@/components/TablePiutang";

/**
 * Halaman Manajemen Hutang & Piutang (Terpadu).
 * Mencakup Financial Health Index, Tabel Hutang, Tabel Piutang, 
 * dan Quarterly Reconciliation.
 */
export default function UtangPiutangPage() {
  
  // Data Ringkasan (Financial Health Index)
  const total_aset_terkelola = 4250000000;
  const total_hutang = 842100000;
  const total_piutang = 1120450000;
  
  /**
   * Logika Debt-to-Receivable Ratio:
   * Rasio ini mengukur perbandingan antara total hutang (kewajiban) 
   * terhadap total piutang (tagihan). 
   * Rumus: Total Hutang / Total Piutang.
   * Rasio di bawah 1.0 dianggap sehat karena tagihan koperasi 
   * lebih besar daripada kewajibannya.
   */
  const debt_to_receivable_ratio = (total_hutang / total_piutang).toFixed(2);

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      
      {/* Section: Financial Health Index */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Total Managed Assets */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between group">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              FINANCIAL HEALTH INDEX
            </p>
            <h2 className="text-2xl font-black text-gray-800 mb-6">Active Tracking</h2>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[9px] font-bold text-gray-400 uppercase mb-1">Total Managed Assets</p>
              <h3 className="text-2xl font-black text-red-600">{formatRupiah(total_aset_terkelola)}</h3>
            </div>
            <div className="p-3 bg-red-50 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Total Debts Card */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between group">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-red-50 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
              <ArrowUpCircle className="w-5 h-5" />
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Debts</p>
              <h3 className="text-xl font-black text-gray-800">{formatRupiah(total_hutang)}</h3>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-red-600 bg-red-50 w-fit px-3 py-1 rounded-full">
            <Activity className="w-3 h-3" />
            12 Overdue
          </div>
        </div>

        {/* Total Receivables Card */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between group">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <ArrowDownCircle className="w-5 h-5" />
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Receivables</p>
              <h3 className="text-xl font-black text-gray-800">{formatRupiah(total_piutang)}</h3>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 bg-gray-50 w-fit px-3 py-1 rounded-full">
            <Clock className="w-3 h-3" />
            5 Pending
          </div>
        </div>
      </section>

      {/* Tables Section */}
      <div className="space-y-8">
        <TableHutang />
        <TablePiutang />
      </div>

      {/* Section: Quarterly Reconciliation */}
      <section className="bg-red-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl shadow-red-200">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-xl font-bold mb-4">Quarterly Reconciliation</h2>
          <p className="text-red-100/70 text-xs leading-relaxed mb-8">
            The cooperative's debt-to-receivable ratio is currently at <span className="text-white font-black">{debt_to_receivable_ratio}</span>. 
            This is within the healthy threshold for regional village cooperatives. 
            Next audit is scheduled for November 1st.
          </p>
          <button className="bg-white text-red-900 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase flex items-center gap-2 hover:bg-red-50 transition-all">
            <Download className="w-3.5 h-3.5" />
            Download Full Report
          </button>
        </div>
        {/* Background icon decor */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-10">
          <Layers className="w-32 h-32" />
        </div>
      </section>

    </div>
  );
}
