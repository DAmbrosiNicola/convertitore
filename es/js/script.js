function cambioValuta(){
    let valuta= document.getElementById("valuta").value;
    valuta = parseFloat(valuta);
    let p;
    p=document.getElementById("sterline");
    p.innerHTML=(valuta*0.87).toFixed(2);
    p=document.getElementById("dollari");
    p.innerHTML=(valuta*1.16).toFixed(2);
    p=document.getElementById("yen");
    p.innerHTML=(valuta*178.16).toFixed(2);
}
function toggleDarkMode() {
    let body = document.body;
    let icon = document.getElementById('darkModeIcon');
    let text = document.getElementById('darkModeText');
    body.classList.toggle('dark-mode');
    icon.classList.toggle('bi-toggle2-off');
    icon.classList.toggle('bi-toggle2-on');
}
