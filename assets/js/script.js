let yemekTarifleri = JSON.parse(localStorage.getItem("Yemek Tarifleri")) || [];
function saveTarifler(){
    localStorage.setItem("Yemek Tarifleri", JSON.stringify(yemekTarifleri));
}
function tarifEkle(){
    const yemekAdi = prompt("Yemek adını gir:");
    if (!yemekAdi){
        alert("Geçerli yemek adı girmedin.");
        return nextAction();
    }
    const tarif = prompt("Yemek tarifini yaz:");
    if (!tarif){
        alert("Geçerli bir tarif girmedin.");
        return nextAction();
    }
    yemekTarifleri.push({ yemekAdi, tarif });
    saveTarifler();
    alert("Yemek tarifi Eklendi.");
    return nextAction();
}
function tarifleriListele(){
    if (yemekTarifleri.length === 0){
        alert("Henüz bir tarif eklemedin.");
    }
    else{
        const liste = yemekTarifleri.map((tarif, i) => `${i + 1}. Yemek: ${tarif.yemekAdi}\n   Tarif: ${tarif.tarif}`).join("\n");
        alert(`Yemek Tariflerin:\n\n${liste}`);
    }
    return nextAction();
}
function nextAction(){
    const value = prompt("Başka bir işlem yapmak ister misin? (e/h)").toLowerCase();
    if (value === "e"){
        return mainMenu();
    }
    else if (value === "h"){
        alert("Güle güle...");
    }
    else{
        alert("Geçersiz seçim yaptınız.");
        return nextAction();
    }
}
function mainMenu(){
    const value = prompt(`Bir işlem seç:\n1- Tarifleri listele\n2- Yeni tarif ekle\n3- Çıkış yap`);
    if (value === "1"){
        return tarifleriListele();
    }
    else if (value === "2"){
        return tarifEkle();
    }
    else if (value === "3"){
        alert("Güle güle...");
    }
    else{
        alert("Geçersiz seçim yaptınız.");
        return mainMenu();
    }
}
mainMenu();