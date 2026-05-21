// script.js
function generate() {
  const input = document.getElementById("input").value.split("\n");
  let html = "<table border='1' style='width:100%;border-collapse:collapse;'>\n";
  html += "<tr><th>Pertandingan</th><th>Prediksi</th></tr>\n";
  
  input.forEach(line => {
    if(line.trim() !== "") {
      html += `<tr><td>${line}</td><td>${Math.random() > 0.5 ? "Tim A Menang" : "Tim B Menang"}</td></tr>\n`;
    }
  });
  
  html += "</table>";
  
  // ⬇️ Perubahan penting: pakai textContent biar keluar script HTML mentah
  document.getElementById("output").textContent = html;
}
