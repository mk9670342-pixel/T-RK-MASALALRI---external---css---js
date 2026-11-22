
// Masal İçerikleri Veri Tabanı
const masallar = {
    1: {
        baslik: "İbikli Horoz",
        metin: "Evvel zaman içinde, kalbur saman içinde... Küçük bir köyde parlak ibikli, kırmızı tüylü güzel bir horoz yaşarmış. Bu horoz her sabah köylüleri neşeyle uyandırır, bahçede rızkını ararmış.\n\nBir gün kurnaz bir tilki köye gelmiş ve horozu tatlı sözlerle kandırmak istemiş. 'İbikli dostum, sesin ne güzel! Aşağı in de birlikte şarkı söyleyelim' demiş. Ancak İbikli Horoz kurnaz tilkinin niyetini hemen anlamış ve 'Köpekler de bize katılmak için geliyor!' diyerek tilkiyi korkutup kaçırmış. Zekası sayesinde tilkiye dersini vermiş."
    },
    2: {
        baslik: "Tembel Kız",
        metin: "Bir varmış bir yokmuş, eski zamanlarda bir köyde gün boyu oturan, elini hiçbir işe sürmeyen tembel bir kız yaşarmış. Annesi ne kadar dil dökse de kız çalışma isteği duymazmış.\n\nBir gün kuyu başında rastladığı nur yüzlü bir yaşlı kadın ona sihirli bir ayna vermiş. Kız aynaya baktığında emek vermeden hiçbir güzelliğin yeşermeyeceğini görmüş. O günden sonra tembelliği bırakıp çalışkan, çevresine faydalı bir insana dönüşmüş."
    },
    3: {
        baslik: "Keloğlan ile Yılan",
        metin: "Keloğlan keleş oğlan, kel kafası neşeli oğlan... Keloğlan bir gün ormanda odun toplarken kayaların arasına sıkışmış ve yardım isteyen altın renkli bir yılan görmüş. Merhametli Keloğlan hiç tereddüt etmeden yılanı kurtarmış.\n\nMeğer bu yılan Periler Ülkesi Padişahı'nın oğluymuş! Yılan, Keloğlan'ı sarayına götürmüş ve ona darda kaldığında dileğini gerçekleştiren sihirli bir yüzük hediye etmiş. Keloğlan bu sihirle iyilik yapmaya devam etmiş."
    },
    4: {
        baslik: "Kabak Gelin",
        metin: "Anadolu'nun şirin bir köyünde yalnız yaşayan yaşlı bir teyze varmış. Bahçesine ektiği kabaklardan biri zamanla büyümüş ve devasa, pırıl pırıl altın rengi bir kabağa dönüşmüş.\n\nGece yarısı olduğunda kabağın içinden iyilik meleği gibi güzel bir kız çıkıp evin tüm işlerini halleder, sabah olunca kabağa geri dönermiş. Teyze durumu fark edip kızın kalbini kazanmış ve onu kızı belleyerek mutlu mesut yaşamışlar."
    },
    5: {
        baslik: "Üç Haylaz Masalı",
        metin: "Bir köyde her gün bir haylazlık peşinde koşan üç kafadar yaşarmış. Ne köylünün öğütlerini dinler ne de iş güç yaparlarmış.\n\nBir gün köyün bilge ihtiyarı onlara içi kapalı bir kutu verip 'Bunu açmanın sırrı çalışmaktadır' demiş. Üç haylaz tarlada sürüp ter döktükten sonra kutunun içindeki gerçek hazinenin 'emek ve helal kazanç' olduğunu anlayarak doğru yolu bulmuşlar."
    },
    6: {
        baslik: "Kerem ile Aslı",
        metin: "Zamanın birinde İsfahan Şahı'nın oğlu Kerem, keşiş kızı Aslı'yı görüp sevdalanmış. Ancak aşıkların kavuşması kolay olmamış, diyarlar arası uzun bir yolculuk başlamış.\n\nKerem eline sazını alıp dağ taş demeden Aslı'nın peşinden türküler söyleyerek gezmiş. Bu büyük sevdadan geriye halk edebiyatımızın en samimi ve unutulmaz aşık geleneği hikayeleri kalmış."
    },
    7: {
        baslik: "Kalyanam Kara Papam Kara",
        metin: "Eski bozkır masallarında geçen bu destansı anlatıda, iki kardeş olan iyi kalpli Kalyanam ile kötü niyetli Kara Papam'ın maceraları aktarılır.\n\nKalyanam deniz aşırı ülkelere gidip halkı için şifalı inciler toplarken, kardeşi ona engel olmak istemiş. Ancak dürüstlük ve iyilik her zaman olduğu gibi galip gelmiş, Kalyanam ülkesine huzur ve adalet getirmiş."
    },
    8: {
        baslik: "Gökten Düşen Üç Elma",
        metin: "Evvel zamanı bitirdik, masalın sonuna geldik... Eskiler der ki masal bitince gökten üç elma düşermiş.\n\nBiri bu güzel anlatıyı kaleme alıp aktarana, biri gecesini sabırla dinlemeye ayıran siz değerli okuyuculara, diğeri ise dünyadaki tüm dürüst, iyi kalpli insanlara... Onlar ermiş muradına, biz çıkalım kerevetine."
    }
};

// Masal Açma Fonksiyonu
function masalAc(id) {
    const masal = masallar[id];

    if (masal) {
        document.getElementById('modalBaslik').innerText = masal.baslik;
        document.getElementById('modalMetin').innerText = masal.metin;
        document.getElementById('masalModal').classList.add('aktif');
    }
}

// Masal Kapatma Fonksiyonu
function masalKapat() {
    document.getElementById('masalModal').classList.remove('aktif');
}

// Dışarı Tıklandığında Kapatma
function disariTiklandi(event) {
    if (event.target.id === 'masalModal') {
        masalKapat();
    }
}
