import { createStore } from "Vuex";
export default createStore({
  state: {
    tarifler: [
      {
        slug: "korili-tavuk",
        baslik: "Körili Tavuk",
        aciklama: "Lezzetli sosuyla tadina doyum olmayan bir yemek",
        icindekiler: [
          "600 gram kuşbasi tavuk gogsu",
          "2 yemek kaşığı sıvı yağ",
          "1 yemek kaşığı un",
          "2 yemek kaşığı tereyağı",
          "2 su bardağı soğuk süt",
          "1/2 su bardağı sıcak su",
          "1 tatlı kaşığı köri",
          "1 çay kaşığı karabiber",
          "1 çay kaşığı tuz",
        ],
        yapimi: [
          "Sıvı yağını bir tavada kızdırın. Kuşbaşı doğranmış tavuk göğsünü aktarın.",
          "Renk alıp, suyunu çekene kadar orta ateşte kavurun.",
          "Köri sosu hazırlamak için; ayrı bir tavada tereyağını sos tenceresinde eritin.",
          "Unu da üzerine ekleyin ve  kokusu çıkıp, renk alana kadar karıştırarak kavurun.",
          "Kavrulan una soğuk sütü ekleyin ve unun topaklanmaması için bir çırpıcı yardımıyla hızlıca karıştırın.",
          "Sıcak su, köri, tuz ve karabiberi katın.",
          "Sosu, kısık ateşte koyu bir kıvam alana kadar sürekli karıştırarak 4- 5 dakika pişirin.",
          "Hazırladığınız sosu, kavrulan tavuklara ekleyin ve harmanladıktan sonra pişirme işlemini 5 dakika kadar sürdürün.",
          "İncecik kıyılmış bir avuç maydanozu, köri soslu tavuğa ilave ettikten sonra bekletmeden sıcak olarak servis edin.",
        ],
      },
      {
        slug: "salcali-makarna",
        baslik: "Salçalı Makarna",
        aciklama: "Öğrenci dostu salçalı makarna",
        icindekiler: [
          "1 paket spagetti",
          "4 yemek kaşığı zeytinyağı",
          "2 diş sarımsak",
          "2 yemek kaşığı biber salçası",
          "1/4 su bardağı su",
          "1/2 su bardağı sıcak su",
          "1 çay kaşığı tuz",
          "1 çay kaşığı taze çekilmiş tane karabiber",
        ],
        yapimi: [
          "Derin bir tencereye suyu ve tuzu ekleyip kaynatın. Spagetti makarnaları kaynamış suda yaklaşık 10 dakika haşlayın.",
          "Ardından ocaktan alıp suyunu süzün.",
          "Bir tavada hafifçe kızdığınız zeytinyağına önce sarımsakları, sonra da salçayı ekleyip kavurun.",
          "Haşlanan makarna suyundan birkaç yemek kşaığı salçalı sosunuza ekleyin, hafif yoğun bir kıvam elde etmelisiniz.",
          "Haşlanmış makarnalarınızı süzün ve sosunuzu üzerine ekleyip karıştırın.",
        ],
      },
    ],
  },
  mutations: {
    TARIF_EKLE(state, tarif) {
      state.tarifler.push(tarif);
    },
  },
});
