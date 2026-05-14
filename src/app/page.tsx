import { redirect } from "next/navigation";

/**
 * Halaman utama (root) yang secara otomatis mengarahkan pengguna ke Dashboard.
 */
export default function RootPage() {
  redirect("/dashboard");
}
