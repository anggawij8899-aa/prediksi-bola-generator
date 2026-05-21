// script.js
function generate() {
  const input = document.getElementById("input").value.split("\n");
  let html = "";

  html += "<table border='1' style='width:100%;border-collapse:collapse;'>\n";
  html += "<tr><th>WAKTU</th><th>PERTANDINGAN</th><th>PREDIKSI</th><th>AKURASI</th></tr>\n";

  input.forEach(line => {
    if(line.trim() !== "") {
      const prediksi = Math.random() > 0.5 ? "Tim A Menang" : "Tim B Menang";
      const akurasi = Math.floor(Math.random() * 5) + 95; // 95–99%
      html += `<tr>
        <td>${line.split(" ")[0]} ${line.split(" ")[1]} WIB</td>
        <td>${line}</td>
        <td>${prediksi}</td>
        <td>${akurasi}%</td>
      </tr>\n`;
    }
  });

  html += "</table>";

  // ⬇️ tampilkan script HTML mentah
  document.getElementById("output").value = html;
}
