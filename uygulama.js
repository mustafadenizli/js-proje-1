

let name = prompt("Adınızı giriniz?")

let name1 = document.getElementById("name").innerHTML = "Merhaba, " + name + " Hoşgeldin!"
function tarihSaat(){
    var date = new Date().toLocaleString(); // tarih saati al
    document.getElementById("datehour").innerHTML = date ;
}

setInterval(tarihSaat, 1000);


