"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowDownLeft, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Halaman Manajemen Hutang & Piutang.
 * Mencatat kewajiban koperasi dan tagihan kepada pihak luar.
 */
export default function UtangPiutangPage() {
  const [tabAktif, setTabAktif] = useState<"hutang" | "piutang">("hutang");

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Hutang & Piutang</h1>
          <p className="text-sm text-gray-500">Kelola kewajiban dan tagihan koperasi dengan pihak luar.</p>
        </div>
        <button className="bg-red-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-red-700 transition-colors shadow-lg shadow-red-100">
          <Plus className="w-4 h-4" />
          Tambah Catatan
        </button>
      </div>

      <div className="flex bg-white p-1 rounded-2xl border border-gray-100 w-fit">
        <button 
          onClick={() => setTabAktif("hutang")}
          className={cn(
            "px-6 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2",
            tabAktif === "hutang" ? "bg-red-600 text-white shadow-md shadow-red-100" : "text-gray-400 hover:text-gray-600"
          )}
        >
          <ArrowUpRight className="w-4 h-4" />
          Hutang (Debts)
        </button>
        <button 
          onClick={() => setTabAktif("piutang")}
          className={cn(
            "px-6 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2",
            tabAktif === "piutang" ? "bg-red-600 text-white shadow-md shadow-red-100" : "text-gray-400 hover:text-gray-600"
          )}
        >
          <ArrowDownLeft className="w-4 h-4" />
          Piutang (Receivables)
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-12 text-center">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
            {tabAktif === "hutang" ? (
              <ArrowUpRight className="w-10 h-10 text-gray-200" />
            ) : (
              <ArrowDownLeft className="w-10 h-10 text-gray-200" />
            )}
          </div>
          <h3 className="text-gray-800 font-bold mb-1">
            Belum ada catatan {tabAktif === "hutang" ? "hutang" : "piutang"}
          </h3>
          <p className="text-sm text-gray-400 max-w-xs mx-auto">
            Semua catatan {tabAktif === "hutang" ? "kewajiban" : "tagihan"} koperasi akan tampil di daftar ini.
          </p>
        </div>
      </div>
    </div>
  );
}
