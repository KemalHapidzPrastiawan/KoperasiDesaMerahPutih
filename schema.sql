-- File: schema.sql
-- Deskripsi: Skema database untuk sistem Koperasi Digital menggunakan Supabase (PostgreSQL)
-- Ketentuan: Menggunakan Bahasa Indonesia untuk penamaan tabel dan kolom, tipe data decimal untuk mata uang.

-- Tabel Nasabah (Customer Data)
-- Menyimpan informasi dasar dari setiap nasabah koperasi.
CREATE TABLE nasabah (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nama_nasabah TEXT NOT NULL,
    nomor_identitas TEXT UNIQUE NOT NULL, -- KTP/NIK
    alamat TEXT,
    nomor_telepon TEXT,
    tanggal_bergabung DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel Transaksi Tabungan (Savings)
-- Mencatat setiap aktivitas setor atau tarik tabungan.
CREATE TABLE transaksi_tabungan (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nasabah_id UUID REFERENCES nasabah(id) ON DELETE CASCADE,
    jenis_transaksi TEXT NOT NULL, -- 'setor' atau 'tarik'
    jumlah_transaksi DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
    tanggal_transaksi TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    keterangan TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel Pinjaman (Loans)
-- Mengelola data pinjaman yang diberikan kepada nasabah.
CREATE TABLE pinjaman (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nasabah_id UUID REFERENCES nasabah(id) ON DELETE CASCADE,
    total_pinjaman DECIMAL(15, 2) NOT NULL,
    bunga_pinjaman DECIMAL(5, 2) NOT NULL, -- Persentase bunga
    jangka_waktu_bulan INTEGER NOT NULL,
    tanggal_pinjaman DATE DEFAULT CURRENT_DATE,
    status_pinjaman TEXT NOT NULL DEFAULT 'aktif', -- 'aktif', 'lunas', 'macet'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel Pembayaran Pinjaman (Loan Payments)
-- Mencatat setiap cicilan yang dibayarkan oleh nasabah.
CREATE TABLE pembayaran_pinjaman (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    pinjaman_id UUID REFERENCES pinjaman(id) ON DELETE CASCADE,
    jumlah_pembayaran DECIMAL(15, 2) NOT NULL,
    tanggal_pembayaran TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    cicilan_ke INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel Hutang Piutang (Debts & Receivables)
-- Mencatat kewajiban koperasi (hutang) atau tagihan di luar pinjaman nasabah (piutang).
CREATE TABLE hutang_piutang (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    jenis TEXT NOT NULL, -- 'hutang' (kewajiban koperasi) atau 'piutang' (tagihan koperasi)
    pihak_terkait TEXT NOT NULL, -- Nama vendor atau pihak ketiga
    total_nilai DECIMAL(15, 2) NOT NULL,
    tanggal_jatuh_tempo DATE,
    status_transaksi TEXT DEFAULT 'belum_lunas', -- 'belum_lunas', 'lunas'
    keterangan TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexing untuk performa pencarian
CREATE INDEX idx_nasabah_nama ON nasabah(nama_nasabah);
CREATE INDEX idx_pinjaman_status ON pinjaman(status_pinjaman);
