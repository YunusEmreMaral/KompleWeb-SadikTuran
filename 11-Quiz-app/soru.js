function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Türk bayrağındaki yıldız kaç köşelidir?", { a: "4", b: "5", c: "6", d: "8" }, "b"),
    new Soru("2-Dünya'nın en yüksek dağı hangisidir?", { a: "K2", b: "Kilimanjaro", c: "Everest", d: "Mont Blanc" }, "c"),
    new Soru("3-Roma İmparatorluğu'nun başkenti hangi şehirdi?", { a: "Atina", b: "İstanbul", c: "Roma", d: "Paris" }, "c"),
    new Soru("4-Einstein'ın görelilik teorisi hangi fiziksel kavramı ele alır?", { a: "Kütleçekim", b: "Elektromanyetizma", c: "Termodinamik", d: "Işık Hızı" }, "d"),
    new Soru("5-Hangi hayvan en hızlı koşabilir?", { a: "Aslan", b: "Tazı", c: "Çita", d: "Ceylan" }, "c"),
    new Soru("6-ABD'nin en büyük eyaleti hangisidir?", { a: "Teksas", b: "Alaska", c: "Kaliforniya", d: "Montana" }, "b"),
    new Soru("7-Hangisi dünya üzerindeki en büyük okyanustur?", { a: "Atlas Okyanusu", b: "Hint Okyanusu", c: "Pasifik Okyanusu", d: "Kuzey Buz Denizi" }, "c"),
    new Soru("8-İstanbul Boğazı hangi iki denizi birbirine bağlar?", { a: "Ege ve Akdeniz", b: "Karadeniz ve Akdeniz", c: "Karadeniz ve Marmara", d: "Marmara ve Ege" }, "c"),
    new Soru("9-Michelangelo'nun ünlü heykeli Davut (David) hangi şehirde sergilenmektedir?", { a: "Roma", b: "Floransa", c: "Venedik", d: "Milano" }, "b"),
    new Soru("10-Hangi elementin sembolü 'O' harfi ile gösterilir?", { a: "Altın", b: "Gümüş", c: "Oksijen", d: "Bakır" }, "c")
];
