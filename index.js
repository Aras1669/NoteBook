window.addEventListener('load', () => {
    const YuklemeEkrani = document.createElement('div');
    YuklemeEkrani.id = 'YuklemeEkrani';
    YuklemeEkrani.innerHTML = `<div class="daire"></div>`;
    document.body.appendChild(YuklemeEkrani);

    const baslangicZamani = Date.now();
    const minSure = 2500;

    const gizlePreloader = () => {
        YuklemeEkrani.style.opacity = '0';
        setTimeout(() => {
            YuklemeEkrani.remove();
        }, 250);
    };

    const gecikme = Math.max(minSure - (Date.now() - baslangicZamani), 0);
    setTimeout(gecikme ? () => { setTimeout(gizlePreloader, 0); } : gizlePreloader, gecikme);
});

window.onload = function() {
    const kayitliNot = localStorage.getItem("notum");
    if (kayitliNot) {
        document.querySelector("textarea").value = kayitliNot;
    }
}

function NotuSil() {
    document.getElementById("EminMisinBas").style.display = "flex";
}

function EminMisinKapat() {
    document.getElementById("EminMisinBas").style.display = "none";
}

function NotuKaydet() {
    const notIcerik = document.querySelector("textarea").value;
    localStorage.setItem("notum", notIcerik);
    alert("✅ Not kaydedildi!");
}

function NotuSilEmin() {
    localStorage.removeItem("notum");
    document.querySelector("textarea").value = "";
    alert("🗑️ Not silindi!");
}
