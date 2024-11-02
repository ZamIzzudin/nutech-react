/** @format */

export function formatTimestamp(timestamp) {
  // Mengonversi timestamp ke objek Date
  const date = new Date(timestamp);

  // Mendapatkan komponen tanggal
  const day = date.getUTCDate();
  const month = date.toLocaleString("id-ID", { month: "long" });
  const year = date.getUTCFullYear();

  // Mengonversi waktu ke WIB (UTC+7)
  const options = {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
  };
  const time = date.toLocaleString("id-ID", options).replace(",", "");

  // Menggabungkan semua komponen
  return `${day} ${month} ${year} ${time} WIB`;
}
