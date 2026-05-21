// script.js
function generate() {
  const input = document.getElementById("input").value.split("\n");
  let html = "<table><tr><th>Pertandingan</th><th>Prediksi</th></tr>";
  input.forEach(line => {
    if(line.trim() !== "") {
      html += `<tr><td>${line}</td><td>${Math.random() > 0.5 ? "Tim A Menang" : "Tim B Menang"}</td></tr>`;
    }
  });
  html += "</table>";
  document.getElementById("output").innerHTML = html;
}
