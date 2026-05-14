"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Wallet, 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownLeft,
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Komponen Sidebar untuk navigasi utama aplikasi.
 * Menampilkan logo dan daftar menu navigasi.
 */
const Sidebar = () => {
  const pathname = usePathname();

  // Daftar menu navigasi dalam Bahasa Indonesia
  const daftarMenu = [
    { 
      nama: "Dashboard", 
      href: "/dashboard", 
      ikon: LayoutDashboard 
    },
    { 
      nama: "Customer Data", 
      href: "/nasabah", 
      ikon: Users 
    },
    { 
      nama: "Savings", 
      href: "/tabungan", 
      ikon: Wallet 
    },
    { 
      nama: "Loan Payments", 
      href: "/pinjaman", 
      ikon: CreditCard 
    },
    { 
      nama: "Hutang & Piutang", 
      href: "/utang-piutang", 
      ikon: ArrowDownLeft 
    },
  ];


  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0">
      {/* Logo Koperasi */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
          <div className="text-white font-bold text-xl">M</div>
        </div>
        <div>
          <h1 className="text-red-600 font-bold text-lg leading-tight">Merah Putih</h1>
          <p className="text-gray-400 text-xs">Admin Portal</p>
        </div>
      </div>

      {/* Menu Navigasi */}
      <nav className="flex-1 px-4 py-4 space-y-1">
        {daftarMenu.map((menu) => {
          const isActive = pathname === menu.href || (menu.href.startsWith('/utang-piutang') && pathname === '/utang-piutang');
          const Icon = menu.ikon;
          return (
            <Link
              key={menu.nama}
              href={menu.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-red-600 text-white shadow-md shadow-red-200" 
                  : "text-gray-500 hover:bg-gray-50 hover:text-red-600"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "text-white" : "text-gray-400")} />
              {menu.nama}
            </Link>
          );
        })}

      </nav>

      {/* Bagian Bantuan di bawah Sidebar */}
      <div className="p-4 border-t border-gray-50">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center gap-2 text-gray-700 font-semibold text-xs mb-1">
            <HelpCircle className="w-4 h-4 text-red-500" />
            Butuh Bantuan?
          </div>
          <p className="text-[10px] text-gray-500 mb-3">
            Hubungi tim IT untuk kendala sistem.
          </p>
          <button className="w-full bg-red-600 text-white text-xs py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
            Hubungi Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
