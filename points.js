//  
//  このファイルのpointsに、例に倣って表示したい情報を追加していくこと
//  緯度・経度情報は、GoogleMap上で右クリックすれば取得できる 
// 
var points = [
    {
        name:"ひかりプラザ", latitude:[35.70284435233955], longitude:[139.44459287320157],
        desc:"光町の由来となった新幹線ひかり号！運転手さんごっこもできます。見学は午前9時から午後5時まで。", 
        link:"https://www.instagram.com/p/Cjh-jsYJSo1/",img:"001_hikari.jpg",
        link2:"https://www.city.kokubunji.tokyo.jp/shisetsu/shikanren/shiyakusyo/1003818.html",
        value:"blue"
    },
    {
        name:"みふじ幼稚園の横の坂道", latitude:[35.70220015618293], longitude:[139.44881023583562],
        desc:"坂の上にある光町1丁目のみふじ幼稚園横からは富士山が望めます。秋の夕暮れ時、綺麗な富士山が見ることができました。", 
        link:"https://www.instagram.com/p/CjiDbuMpEF4/",img:"002_mifuji.jpg",
        link2:"",
        value:"blue"
    },
    {
        name:"", latitude:[35.71846481784203], longitude:[139.43295224122582],
        desc:"ハケの上から西町を見下ろす。", 
        link:"https://www.instagram.com/p/CkAIT6EpK11/",img:"003_nishimachi.jpeg",
        link2:"",
        value:"green"
    },
    {
        name:"平兵衛樹林地", latitude:[35.706067707924106], longitude:[139.44503826831814],
        desc:"住宅の中にある緑のオアシス。国分寺崖線（ハケ）の上にあり、ハイキング気分を味わえます。夏の朝にはカブトムシにも出会えるかも？", 
        link:"https://www.instagram.com/p/CkAN5pZpHjx/",img:"004_heibei.jpg",
        link2:"",
        value:"green"
    },
    {
        name:"嶋寿司", latitude:[35.702170111631766], longitude:[139.44668571006522],
        desc:"昔ながらのお寿司屋さんですが、パスタもあります。熱々のお茶が湯飲みで来るのも、懐かしくてホッとしますね。", 
        link:"https://www.instagram.com/p/CkAweWIJXi_/",img:"005_shima.jpg",
        link2:"http://shimazushi.la.coocan.jp/",
        value:"yellow"
    },
    {
        name:"OCUYUKI", latitude:[35.70180559270881], longitude:[139.4506268259885],
        desc:"暮らしの奥行きを深める日用品や作り手を紹介する店。日々の生活を豊かにしてくれる商品に出会えるかも！", 
        link:"https://www.instagram.com/p/CkA2eyjp9gH/",img:"006_ocuyuki.jpg",
        link2:"https://ocuyuki.jp/",
        value:"red"
    },
    {
        name:"高木町動物公園", latitude:[35.71539353608534], longitude:[139.440338054824],
        desc:"かわいいラクダが目印の公園です。市境にあり、カーブミラーや表示は国分寺市と立川市のものが混在しています。そんなところも発見できる市境歩きは面白いですね。", 
        link:"https://www.instagram.com/p/CkCQ9RxPK3C/",img:"007_takagicho.jpg",
        link2:"",
        value:"green"
    },
    {
        name:"とんかつ　ひらよし", latitude:[35.701112790609066], longitude:[139.44661179281002],
        desc:"行列のできる人気店。季節ごとのメニューも楽しみ。夜はコースメニューもあります。冬はやっぱりカキフライ！", 
        link:"https://www.instagram.com/p/CkDd-fzJpJp/",img:"008_hirayoshi.jpg",
        link2:"https://www.facebook.com/tonkatsuhirayoshi/",
        value:"yellow"
    },
    {
        name:"国立駅から見たくにきた", latitude:[35.699508426201405], longitude:[139.44653487393],
        desc:"右の三浦屋は国立市、左の100時間カレーやモスバーガーは国分寺市なんです。三浦屋北のマンションは国立市と国分寺市が混ざってるのだとか…。市境って面白い！", 
        link:"https://www.instagram.com/p/CkEwuWNShS4/",img:"009_kunitachi.jpg",
        link2:"",
        value:"blue"
    },
    {
        name:"国分寺市西町五丁目付近", latitude:[35.71741985783116], longitude:[139.42979789094912],
        desc:"よく見るとガードパイプの形が違い、左側は国分寺市、右側は立川市です。ガードパイプで市境がわかります。2枚目は東京都のガードパイプでイチョウの形をしています。こんなふうに道路の標識やガードパイプに注目しながら、まち歩きをしてみるのも面白いかもしれません。", 
        link:"https://www.instagram.com/p/CkEzQiFvOf0/",img:"010_nishimachi.jpg",
        link2:"",
        value:"blue"
    }, 
    {
        name:"大勝工業", latitude:[35.70621516619341], longitude:[139.44154312512117],
        desc:"まちの大工さん。緑のだいかつカーが毎日忙しく街中を走ってます。駐車場の壁に、地元中学の美術部がアートウォールを描いて、完成したばかり！向かいの稲荷神社側からよく見えます。",
        link:"https://www.instagram.com/p/CkLExBlJQKe/",img:"011_daikatsu.jpg",
        link2:"",
        value:"blue"
    }, 
    {
        name:"自家製惣菜わたなべ", latitude:[35.70912349190735], longitude:[139.44655472598865],
        desc:"地元に愛されるお惣菜屋さんです。揚げ物や焼き鳥、優しい味のお惣菜まで種類も豊富で美味しい。近所の高校生も訪れます。特に、自家製焼豚は絶品でした。",
        link:"https://www.instagram.com/p/CkMW6q3y6Ce/",img:"012_watanabe.jpg",
        link2:"",
        value:"yellow"
    }, 
];

