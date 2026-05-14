import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utilitas untuk menggabungkan class Tailwind CSS dengan benar,
 * menangani konflik class dan penggabungan kondisional.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Memformat angka menjadi format mata uang Rupiah (IDR).
 * @param nilai - Angka yang akan diformat.
 * @returns String terformat Rp 1.000.000
 */
export function formatRupiah(nilai: number | string): string {
  const angka = typeof nilai === "string" ? parseFloat(nilai) : nilai;
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka);
}
