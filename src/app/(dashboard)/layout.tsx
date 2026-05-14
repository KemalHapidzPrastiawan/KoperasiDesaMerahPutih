import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

/**
 * Layout khusus untuk halaman-halaman dashboard.
 * Menyediakan kerangka dasar dengan Sidebar di kiri dan Navbar di atas.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Sidebar tetap di kiri */}
      <Sidebar />

      {/* Konten Utama di sebelah kanan Sidebar */}
      <div className="pl-64 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
