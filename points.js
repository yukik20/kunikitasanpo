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
        name:"自家製惣菜わたなべ", latitude:[35.70910484964237], longitude:[139.44654109120737],
        desc:"地元に愛されるお惣菜屋さんです。揚げ物や焼き鳥、優しい味のお惣菜まで種類も豊富で美味しい。近所の高校生も訪れます。特に、自家製焼豚は絶品でした。",
        link:"https://www.instagram.com/p/CkMW6q3y6Ce/",img:"012_watanabe.jpg",
        link2:"",
        value:"yellow"
    },
    {
        name:"くにきたべーす", latitude:[35.701397975582246], longitude:[139.44734030106702],
        desc:"100円玉を握りしめて、何を買うか悩む。そんな楽しさが懐かしいですね。おもちゃ等もあり、中で食べながら遊んだりもできます。",
        link:"https://www.instagram.com/p/CkZVPijSQvC/",img:"013_base.jpg",
        link2:"https://kunikitabase.jimdofree.com/",
        value:"blue"
    },
    {
        name:"くにきたに「トトロ」現る！？", latitude:[35.7077287190073], longitude:[139.44565228912384],
        desc:"この大きなトトロは、国分寺第二小学校前にある株式会社すざきという外構や造園のお店が作られたトトロです。可愛らしい姿に、なんだかほっこりしますね。",
        link:"https://www.instagram.com/p/CkiaEsdvN2O/",img:"014_totoro.jpg",
        link2:"",
        value:"green"
    },
    {
        name:"ワインバル　うららか　くにたち", latitude:[35.70165866657247], longitude:[139.446593279707],
        desc:"ワインだけでなく、食事もスイーツも美味しい！おススメはタパス（小皿料理）がたくさん乗ったパワーサラダ。野菜もりもり食べられます。テイクアウトも充実しています。",
        link:"https://www.instagram.com/p/CkpSlrGPHmh/",img:"015_uraraka.jpg",
        link2:"https://www.ulalaca.net/",
        value:"yellow"
    },
    {
        name:"総研横の紅葉スポット", latitude:[35.703187700887305], longitude:[139.4442112367648],
        desc:"赤い葉と実、これハナミズキです。春は淡いピンクや白い花を咲かせますが、この時期紅葉でも楽しめます。鉄道総研横の道路から見えますよ！",
        link:"https://www.instagram.com/p/CkrXZ-HyyUo/",img:"016_sokenkouyou.jpg",
        link2:"",
        value:"green"
    },
    {
        name:"八重垣", latitude:[35.702285609380304], longitude:[139.44665723231068],
        desc:"和菓子屋さん。お昼時にはお稲荷さんや巻き寿司がある事も。日持ちのするお菓子もあり、お土産にも良いですよ。おススメはみたらし団子。ほんのり焦げた感じがまた良いのです。",
        link:"https://www.instagram.com/p/CksmljPPExH/",img:"017_yaegaki.jpg",
        link2:"https://tabelog.com/tokyo/A1325/A132503/13145647/",
        value:"yellow"
    },
    {
        name:"峡通り樹林地", latitude:[35.70110583945928], longitude:[139.44857822240849],
        desc:"くにきたエリアの数少ない広場です。遊具はなく、ベンチがいくつかあります。見えそうで見えない富士山。鬼ごっこするのは楽しい、かも？",
        link:"https://www.instagram.com/p/Ckt8Cx1yUfZ/",img:"018_hakedori.jpg",
        link2:"",
        value:"green"
    },
    {
        name:"坂の上のひとつ", latitude:[35.712801767962816], longitude:[139.43671953020748],
        desc:"西町にできた誰もが使える一軒家（シェアスペース）「坂の上のひとつ」のオープニングイベント「ひとつ市」にいってきました！坂の上のひとつは毎週水曜日と金曜日の9:00~16:30に開いていて、一軒家の中で自由に過ごすことができます。",
        link:"https://www.instagram.com/p/Ck8GfboJziR/",img:"019_hitotsu.jpg",
        link2:"",
        value:"blue"
    },
    {
        name:"とりいづか", latitude:[35.70220406127731], longitude:[139.44654356188903],
        desc:"光町の魚が美味しい定食屋さん。コロナ禍でしばらく行けてないのですが、ボリュームのある刺身や大根の天ぷらが恋しくなります…。メニューの張り紙、どれも気になりますね。",
        link:"https://www.instagram.com/p/ClCh6rkSCJ4/",img:"020_toriiduka.jpg",
        link2:"https://tabelog.com/tokyo/A1325/A132503/13054142/",
        value:"yellow"
    },
    {
        name:"キッチン ゆいっと", latitude:[35.709215157865096], longitude:[139.44832484117782],
        desc:"綺麗に巻かれたオムライス、こだわりのデミグラスソースが美味しいハンバーグ、固めのほろ苦カラメルのプリンなど、本格洋食がお家でも食べられます。テイクアウトの際は、事前に電話注文しておくと良いですよ！",
        link:"https://www.instagram.com/p/ClJCP0dPcUb/",img:"021_yuitto.jpg",
        link2:"https://kitchenhuit.com/",
        value:"yellow"
    },
    {
        name:"Allemande Hiro", latitude:[35.710600437966654], longitude:[139.44060278181252],
        desc:"高木町のパン屋さん。食パンから菓子パンまで色々揃っています。土日はマルシェでお野菜も買えちゃいます。ギャラリー展示する事もあるそうなので、たまに覗いてみるのも良さそうですね。",
        link:"https://www.instagram.com/p/ClN-2zFvCTS/",img:"022_Allemande.jpg",
        link2:"https://www.allemandehiro.tokyo/",
        value:"yellow"
    },
    {
        name:"ord", latitude:[35.701867503571854], longitude:[139.4507199882921],
        desc:"こだわりのコーヒーと美味しいケーキが食べられるカフェです。季節によって変わるタルトや、スイーツに合うコーヒー、イートイン限定メニューも気になります",
        link:"https://www.instagram.com/p/ClQqwv7PTCs/",img:"023_ord.jpg",
        link2:"https://www.facebook.com/ord-2230503847203644/",
        value:"yellow"
    },
    {
        name:"日吉小町/日吉フードセンター", latitude:[35.70180226768138], longitude:[139.45584485482374],
        desc:"昭和レトロなフードセンターには、野菜（こくベジあり！）、日用品、食料品など一通り揃っています。この中にある日吉小町では、手打ちうどんを始め、惣菜など格安で飲み食いできます。内装から何から懐かしくてワクワクしますね。",
        link:"https://www.instagram.com/p/ClceY7RPYes/",img:"024_komachi.jpg",
        link2:"https://www.facebook.com/profile.php?id=100068040035095",
        value:"yellow"
    },
    {
        name:"22Bakery（ニーニーベーカリー）", latitude:[35.70187236768898], longitude:[139.45033849722088],
        desc:"日吉町に9月オープンしたパン屋さん。ハード系が多い印象。写真にはないですが、リュスティックを使ったカレーサンドや、ベーグルも美味しかったです。店名の由来は、ご主人が22日生まれとか、22番街商店街にちなんだとか諸説ありますが…真相は？",
        link:"https://www.instagram.com/p/CldqcvbvMp6/",img:"025_22.jpg",
        link2:"https://www.instagram.com/22ba_kery/",
        value:"yellow"
    },
    {
        name:"味わいのある階段", latitude:[35.699666016021496], longitude:[139.4503560033772],
        desc:"国分寺市の日吉町への入り口。知らない道を歩くのはドキドキとワクワクが入り混じります。",
        link:"https://www.instagram.com/p/ClfzgsXvBDE/",img:"026_kaidan.jpg",
        link2:"",
        value:"blue"
    },
    {
        name:"maika / kb's bake", latitude:[35.70153902919986], longitude:[139.45026793953502],
        desc:"雑貨屋のmaikaさんと、焼き菓子のkb's bakeさんが併設されています。奥にイートインスペースもあって、のんびりお茶もできますよ。",
        link:"https://www.instagram.com/p/ClntxixPKan/",img:"027_maika.jpg",
        link2:"https://shop.maika-life.com/shopdetail/000000000158/",
        value:"yellow"
    },
    {
        name:"芳樹園裏手の富士見スポット", latitude:[35.703416818962594], longitude:[139.44750680111704],
        desc:"国立駅北口のダバクニタチと交番のある交差点を右（東）に曲がって、そのまま道なりに坂を登ると、芳樹園の裏手に出るのですが、ここが富士見スポットになっています。（この日は見られず。残念…）12月と1月初旬にダイヤモンド富士が見られるという情報もあるので、夕方ぜひ歩いてみてください！",
        link:"https://www.instagram.com/p/ClpK0-6SRv1/",img:"028_hojuen.jpg",
        link2:"",
        value:"green"
    },
];