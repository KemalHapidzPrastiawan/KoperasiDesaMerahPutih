import React from "react";
import { LucideIcon } from "lucide-react";
import { cn, formatRupiah } from "@/lib/utils";

interface StatCardProps {
  judul: string;
  nilai: number;
  ikon: LucideIcon;
  persentase?: string;
  isNaik?: boolean;
}

/**
 * Komponen kartu statistik untuk menampilkan ringkasan data finansial.
 * Menampilkan judul, nilai uang terformat, ikon, dan indikator tren.
 */
const StatCard = ({ judul, nilai, ikon: Ikon, persentase, isNaik }: StatCardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-red-50 rounded-xl text-red-600">
          <Ikon className="w-6 h-6" />
        </div>
        {persentase && (
          <span className={cn(
            "text-[10px] font-bold px-2 py-1 rounded-full",
            isNaik ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
          )}>
            {persentase}
          </span>
        )}
      </div>
      <div>
        <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">
          {judul}
        </p>
        <h3 className="text-xl font-bold text-gray-800">
          {formatRupiah(nilai)}
        </h3>
      </div>
    </div>
  );
};

export default StatCard;
