# Captive Starter

- Projeyi 3 klasöre genişlettim:
      Wizard: Bağımsız olarak yapınız içine yerleştirmeniz için.
      Client: yine aynı şekilde.
      Server: Sizin tarafınızdaki backend'e bağıl hareket etmek yerine node.js üzerinde çalışan bir backend API'si.
      Dilerseniz buradaki iletişimleri kendi backend'inize uyarlarsınız, dilerseniz de server'ı da dahil edip az bir değişiklikle
      doğrudan kullanabilirsiniz.

Akışı biraz anlatayım:
- Sayfaların hepsine JSON template dosyasının yüklenmesini şart koşan bir kural ekledim. Bu, sayfaların JSON'daki
içerikleri gelmeden render edilmesinin yanlış/ bozuk görüntülenmeye yol açtığı için gerekliydi.
- Sayfaların akışını toplantıda konuştuğumuz şekilde birbirine bağladım, şöyle ki:
index (/ adresi) sayfası boş (gibi) geliyor ve bununla aslında API'den ilk çağrı yapılıyor: json template dosyası isteniyor.
Burada aslında gateway ilk adresi /#token şeklinde redirect etmiş oluyor ve token, alınarak bundan sonraki iletişimlerde
gidecek paketlerin içinde bulunuyor.
Template dosyası geldiğinde /login-page sayfası görüntüleniyor. Kullanıcı, isim ve telefon numarasını girdiğinde
(arada SMS gönderiminin yapıldığını farz ediyorum) /pre-submit sayfasına yönlendiriliyor. Her sayfada kullanıcının
girdiği bilgilerin yanı sıra ilk aldığı gateway token ve SMS ile gelen kod, POST request ile sunucuya iletiliyor ve her
sayfada bunlardan mantıklı olanlarla kontrol yapılarak eksik/bozuk bilgi durumunda sayfa akışı kesiliyor.
Pre-submit sayfası, kodu gireceği ekran ve buradaki süre, json dosyasında timerSecs değişkeniyle ayarlanıyor. Kodu
verilen sürede giremezse tekrar /login-page sayfasına yönlendiriliyor.
Kullanıcı, SMS'le kendisine girilen kodu girip gönderdiğinde -bu yine sunucuya iletilip OK response döndüğünde-
post-submit sayfasına yönlendiriliyor. Artık burada kullanıcıya json'da belirtilmiş remainingTime değişkeni geri
sayıma başlıyor.

Akışı lokalde denemek için template dosyasına sabit bazı değerler girdim. Bunlar, hash ve testCode. İlki, gateway hashini,
ikincisi de SMS kodunu simüle etmek için. Bunların kontrolü ve üretilmesine dair bir kod benim alanımın dışında, ama sunduğum
server yapısını kullanmak isterseniz özellikle /spit controller'ında akışa dair kısımları bir araya getirdim.

Örnek akış:
- bir terminalde /server klasörüne girilir, npm install komutundan sonra nodemon komutlarıyla backend kaldırılır.
- başka bir terminalde /client klasöründe npm install dedikten sonra npm start ile client çalıştırılır. 
- json dosya da bulunan hash ile index sayfasına şu URL ile ulaşılır: http://localhost:8080/#123qwe#
- bu, bizi login-page sayfasına yönlendirir.
 - tel ve isim girildikten sonra pre-submit sayfası gelecektir. burada da json'da -şimdilik- hardcoded olarak mc68k SMS kodu
girilince post-submit sayfası gelir ve toplam süre sayacı çalışmaya başlar. 

## TODO
- Wizard editing capabilities
