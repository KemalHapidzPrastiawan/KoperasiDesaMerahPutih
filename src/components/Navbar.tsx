"use client";

import React from "react";
import { Search, Bell, User } from "lucide-react";

/**
 * Komponen Navbar yang terletak di bagian atas halaman.
 * Berisi pencarian global, notifikasi, dan profil pengguna.
 */
const Navbar = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
      {/* Kolom Pencarian */}
      <div className="relative w-96">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          <Search className="w-4 h-4" />
        </span>
        <input
          type="text"
          placeholder="Cari data nasabah atau transaksi..."
          className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full text-sm focus:ring-2 focus:ring-red-100 transition-all outline-none"
        />
      </div>

      {/* Bagian Kanan Navbar */}
      <div className="flex items-center gap-6">
        {/* Notifikasi */}
        <button className="relative text-gray-500 hover:text-red-600 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Profil Pengguna */}
        <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800">Koperasi Desa</p>
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Administrator</p>
          </div>
          <div className="w-9 h-9 bg-red-50 rounded-full flex items-center justify-center border border-red-100">
            <User className="w-5 h-5 text-red-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
