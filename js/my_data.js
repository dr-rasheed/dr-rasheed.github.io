window.articlesDatabase = [
  { 
    id: Date.now(), 
    title: "قصة داوود: الجزء الأول", 
    link: "/posts/story_of_david_1.html", 
    category: "قصص الأنبياء", 
    date: "10 نيسان 2023", 
    icon: `<svg xmlns="http://www.w3.org/2005/svg" class="w-full h-full text-academic-primary" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="#fdfbf7"/><path d="M50 20 L80 40 L80 80 L20 80 L20 40 Z" stroke="#0c4128" stroke-width="2" fill="#eaddcf"/><circle cx="50" cy="55" r="10" stroke="#0c4128" stroke-width="2" fill="#fbbf24"/><path d="M50 20 L50 45" stroke="#0c4128" stroke-width="2"/></svg>` 
  },
  { id: 1, title: "مقدمة في فلسفة العلوم المعاصرة", link: "/posts/template.html?id=1", category: "الفلسفة", date: "15 أكتوبر 2026", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=600" },
  { id: 2, title: "تطور الأدب العربي الحديث والشعر الحر", link: "/posts/template.html?id=2", category: "الأدب", date: "20 سبتمبر 2026", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600" },
  { id: 3, title: "الفيزياء الكمية وتطبيقاتها المستقبلية", link: "/posts/template.html?id=3", category: "الفيزياء", date: "11 أغسطس 2026", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600" },
  { id: 4, title: "قراءة في تاريخ الحضارة الإسلامية الممتد", link: "/posts/template.html?id=4", category: "التاريخ", date: "5 يوليو 2026", image: "https://images.unsplash.com/photo-1584285499996-5e0f77bfdf39?auto=format&fit=crop&q=80&w=600" },
  { id: 5, title: "الذكاء الاصطناعي: الفرص والتحديات الأخلاقية", link: "/posts/template.html?id=5", category: "علوم الحاسوب", date: "30 يونيو 2026", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600" }
];

window.categoriesDatabase = [
  { 
    name: "العلوم الإنسانية", 
    sub: [ { name: "الفلسفة", count: 12 }, { name: "التاريخ", count: 20 }, { name: "الأدب", count: 8 } ] 
  },
  { 
    name: "العلوم التطبيقية", 
    sub: [ { name: "علوم الحاسوب", count: 15 }, { name: "الفيزياء", count: 5 } ] 
  },
  { 
    name: "الدراسات الإسلامية", 
    sub: [ { name: "التفسير", count: 42 }, { name: "الحديث", count: 30 }, { name: "العقيدة", count: 18 } ] 
  }
];

window.recitersDatabase = [
  { id: 7, name: "مشاري راشد العفاسي" },
  { id: 1, name: "عبدالباسط عبدالصمد" },
  { id: 2, name: "عبدالرحمن السديس" },
  { id: 3, name: "سعود الشريم" },
  { id: 4, name: "أبو بكر الشاطري" },
  { id: 5, name: "هاني الرفاعي" },
  { id: 8, name: "محمد صديق المنشاوي" },
  { id: 9, name: "محمود خليل الحصري" },
  { id: 10, name: "سعد الغامدي" },
  { id: 11, name: "ماهر المعيقلي" },
  { id: 12, name: "ياسر الدوسري" },
  { id: 13, name: "علي جابر" }
];



const academicBooks = [
    {
        "title": "من قصة نبي الله نوح",
        "category": "قصص الأنبياء",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiysZI58bHZIrPEoA8beEg2fqHRI5UDBKs6mqEf68621IQmBujTDJ-Gw0aVgGYHgg6fNf-W5ZThy4osXDVTUoqL_Fa8_f_yxfP9hcqQusB0EHlfqaY8hO7RSRGd3Lt2QIKw1BhS0s1FbU0JT8cjG7xe7S-RzghyTlkZmDcbHsc5BFRJIurY-K6KHZBwfHM/s320-rw/photo_2025-10-25_00-44-42.webp",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_prophet_noah.pdf",
            "tele": "https://t.me/rasheed_books/46",
            "fs": "https://www.4shared.com/office/_YUCGGiGku/____.html",
            "noor": "https://www.noor-book.com/pijkdx9",
            "doi": "https://doi.org/10.5281/zenodo.18419287",
            "archive": "https://archive.org/download/Qisat_Nabi_Allah_Nuh_AlJarrah/%D9%85%D9%86%20%D9%82%D8%B5%D8%A9%20%D9%86%D8%A8%D9%8A%20%D8%A7%D9%84%D9%84%D9%87%20%D9%86%D9%88%D8%AD.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_prophet_noah.pdf"
    },
    {
        "title": "قصة نبي الله لوط",
        "category": "قصص الأنبياء",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyqfvDROf-EAJxSGungf6LOmViZTaBn5w0i3FlngzTplmd7DGZsc3y1JTHXWIXEBh1948x5_fDo-dj5EY91Qfq15h5xQ1mVWEPcGXlR19kfgllhLQbohBnQOfLbZxT-IjUkrkwCLThTwot0C3uO2m0fsSl5I_rLevDudyuWhVssqRxy6HT7p48Vy65FAQ/s1280/photo_2025-12-07_22-20-25.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_prophet_lot.pdf",
            "tele": "https://t.me/rasheed_books/50",
            "fs": "https://www.4shared.com/office/QIh4yAp-ku/___.html",
            "noor": "https://www.noor-book.com/j1swqyb",
            "doi": "https://doi.org/10.5281/zenodo.18430673",
            "archive": "https://archive.org/download/qissat-nabi-allah-lut-dr-rasheed-aljarrah/%D9%82%D8%B5%D8%A9%20%D9%86%D8%A8%D9%8A%20%D8%A7%D9%84%D9%84%D9%87%20%D9%84%D9%88%D8%B7.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_prophet_lot.pdf"
    },
    {
        "title": "قصة يوسف الصديق",
        "category": "قصص الأنبياء",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-o2vvecrc6WvYuoft-X0CaaAsCg3hQElFIMZYoGbnRARd4brAg5pOZS2Wlj2dg3LRgSGKjUsh-W4cBQT2S3kvZ2D_pe0H25-b25fiCalmAjUX4z1IKUp2mSE42p372fIGHAR0GIPggOiqX96JttLYNgByINBMFIJRs48hgrykT_80UZrkFcueDiA42Xs/s1280/photo_2025-12-07_22-20-35.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_prophet_joseph.pdf",
            "tele": "https://t.me/rasheed_books/42",
            "fs": "https://www.4shared.com/office/xhcf_OYNku/__online.html",
            "noor": "https://www.noor-book.com/py8uokr",
            "doi": "https://doi.org/10.5281/zenodo.18430857",
            "archive": "https://archive.org/download/qissat-yusuf-dr-rasheed-aljarrah/%D9%82%D8%B5%D8%A9%20%D9%8A%D9%88%D8%B3%D9%81.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_prophet_joseph.pdf"
    },
    {
        "title": "قصة نبي الله موسى",
        "category": "قصص الأنبياء",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTFu0HP9ZdqXRe6NRV0_PFOtQF83Zeiq-vbU5p88waZIdeHltBAV9vyjidFPUDs6VEcRnUV5KSuIiRJv7HBUkMX0t6ILQFCzo3VloF-eMJK49UJ4bMzVcx3l975hh9TVNq75O0yIaqwelc_zLNjZKK2T0OZ7Iq3umlRDalSy0BYLVcou2LmuET2587rus/s1280/photo_2025-12-07_22-20-28.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_prophet_moses.pdf",
            "tele": "https://t.me/rasheed_books/48",
            "fs": "https://www.4shared.com/office/QZHY7a-Mge/___.html",
            "noor": "https://www.noor-book.com/jkfdgp0",
            "doi": "https://doi.org/10.5281/zenodo.18430751",
            "archive": "https://archive.org/download/qissat-nabi-allah-musa-dr-rasheed-aljarrah/%D9%82%D8%B5%D8%A9%20%D9%86%D8%A8%D9%8A%20%D8%A7%D9%84%D9%84%D9%87%20%D9%85%D9%88%D8%B3%D9%89.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_prophet_moses.pdf"
    },
    {
        "title": "قصة نبي الله داوود",
        "category": "قصص الأنبياء",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDGGXvPcGqpjAG7k3NNVAcBy8OEK2H1FbPqBvY72l2DPoH8ahxT8A4jETcQt1sj8jKLZpRhRvkugFMYanPJESIwYU2wo_0vFOdB9oTRon6b7nfSdou24HHGkS4W345j5M3j1-aIoCd6o2gLLJouhFoHdMGB18sp0ljkvA7OZHxHfRgq5prYO9MhJK4_ls/s1280/photo_2025-12-07_22-20-09.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_prophet_david.pdf",
            "tele": "https://t.me/rasheed_books/54",
            "fs": "https://www.4shared.com/office/LOqqTCvJge/___.html",
            "noor": "https://www.noor-book.com/iutps4c",
            "doi": "https://doi.org/10.5281/zenodo.18430341",
            "archive": "https://archive.org/download/qissat-nabi-allah-dawud-dr-rasheed-aljarrah/%D9%82%D8%B5%D8%A9%20%D9%86%D8%A8%D9%8A%20%D8%A7%D9%84%D9%84%D9%87%20%D8%AF%D8%A7%D9%88%D9%88%D8%AF.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_prophet_david.pdf"
    },
    {
        "title": "قصة نبي الله سليمان",
        "category": "قصص الأنبياء",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVfzHboYpsY4X03GDRNDZFevkQhRV_uREpR06jRdGuHHMRVTEOUWUXDfedMm1YBr3-pN0YwkG-v0AcmdAhM0ySNqwl61i9g1-2cOTvsYv451q7SGdDP12Fv6fPwp-ZJrEsjftpcvOQnLWMw74zG4pggv5W_YuCERSEZHjHwHoPIlc5CsLAUQQ62VImp_E/s1280/photo_2025-12-07_22-20-15.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_prophet_solomon.pdf",
            "tele": "https://t.me/rasheed_books/56",
            "fs": "https://www.4shared.com/office/UbQtctMiku/___.html",
            "noor": "https://www.noor-book.com/disyp7q",
            "doi": "https://doi.org/10.5281/zenodo.18430516",
            "archive": "https://archive.org/download/qissat-nabi-allah-sulaiman-dr-rasheed-aljarrah/%D9%82%D8%B5%D8%A9%20%D9%86%D8%A8%D9%8A%20%D8%A7%D9%84%D9%84%D9%87%20%D8%B3%D9%84%D9%8A%D9%85%D8%A7%D9%86.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_prophet_solomon.pdf"
    },
    {
        "title": "قصة نبي الله يونس",
        "category": "قصص الأنبياء",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCE26wvHEDweUibdzCeTqeEr1clSBHijLM0oeFPvQQoe6jSJoJfN04zyvBIh9AllQH9-KPHhRvf3kQyd_e8PpJF8CEEBFQwt8FMUAMTyaZRHpOaWxBjXmnqvW4vy1eJpsfpnyZlWmWW4wF7zguDqCBcpN2F7ZxGiZhNvSlInBSVn-gqQpSKgeP7T7NbsQ/s1280/photo_2025-12-07_22-20-40.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_prophet_jonah.pdf",
            "tele": "https://t.me/rasheed_books/44",
            "fs": "https://www.4shared.com/office/IWHA5ayMku/__online.html",
            "noor": "https://www.noor-book.com/3qytxzh",
            "doi": "https://doi.org/10.5281/zenodo.18430936",
            "archive": "https://archive.org/download/qissat-yunus-dr-rasheed-aljarrah/%D9%82%D8%B5%D8%A9%20%D9%8A%D9%88%D9%86%D8%B3.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_prophet_jonah.pdf"
    },
    {
        "title": "قصة عيسى بن مريم",
        "category": "قصص الأنبياء",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyn1BTxqztZNDUJgerIuitiYL8hkNjT4CyNupxki2UFJ47DaNB2kU_vm24rc0s83p7ra26mchlfthi84ui4ofs9cATaow3BnuJSqP9LlCo4R5mQRNcjsc0Zo4buy0uT2h_vwTEP8Mqbr2x-TVhlhLoWQGOhQWrOFCKQ5ynQav9CK9LfWFT5pllwEWnZO4/s1280/photo_2025-12-07_22-20-20.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_prophet_jesus.pdf",
            "tele": "https://t.me/rasheed_books/52",
            "fs": "https://www.4shared.com/office/RIcwm5gRku/___online.html",
            "noor": "https://www.noor-book.com/coupwm0",
            "doi": "https://doi.org/10.5281/zenodo.18424022",
            "archive": "https://archive.org/download/qissat-isa-bin-maryam-dr-rasheed-aljarrah/%D9%82%D8%B5%D8%A9%20%D8%B9%D9%8A%D8%B3%D9%89%20.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_prophet_jesus.pdf"
    },
    {
        "title": "قصة ذي القرنين",
        "category": "قصص الأنبياء",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjqGhpWU21NOx_Hh1toGtqEdxn5KfOoOz6rVoPWppn7RudsoZ-znygTiBIqgU1b0FUTbXZw1_SNWDczJeuUlFKJAGFiE3rJLFspaVheQt4w62m3Ys0f_RrdJrO8NiM5UL1f39NttYiFdJpAfX8kxHDS0V0lfQ5KFLoZccFhOPvRZrZkJUtX6WpL9i0tI0/s1280/photo_2025-12-07_22-21-27.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_dhul_qarnayn.pdf",
            "tele": "https://t.me/rasheed_books/14",
            "fs": "https://www.4shared.com/office/6k78CNapge/_______.html",
            "noor": "https://www.noor-book.com/e4ncyps",
            "doi": "https://doi.org/10.5281/zenodo.18422949",
            "archive": "https://archive.org/download/qissat-dhul-qarnayn-gog-magog-dr-rasheed-aljarrah/%D9%83%D8%AA%D8%A7%D8%A8_%D9%82%D8%B5%D8%A9_%D8%B0%D9%88_%D8%A7%D9%84%D9%82%D8%B1%D9%86%D9%8A%D9%86_%D9%88_%D9%8A%D8%A3%D8%AC%D9%88%D8%AC_%D9%88_%D9%85%D8%A3%D8%AC%D9%88%D8%AC.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/story_dhul_qarnayn.pdf"
    },
    {
        "title": "فقه الصلاة",
        "category": "الفقه والعبادات",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXs27cjmiBlSagUHeDFInsd-gseRG-TzNMMwyrEtc4uhtVBnCdtJI7oPB24SIkfVDcZ8Rzrqk7spNLnlx1wY3xF5MHOwS3Fe20NScNuzDn38HfAoo2pq7AXTRguD_o1Zr-YnPeSzqlbC7Ox51yLPC6KC31kjZHaYKxgtiCqmYApiytOu1_4viP3gkKgK8/s1280/photo_2025-12-07_22-21-10.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/fiqh_salah.pdf",
            "tele": "https://t.me/rasheed_books/26",
            "fs": "https://www.4shared.com/office/BCoDAOOEfa/___online.html",
            "noor": "https://www.noor-book.com/ydjbw6m",
            "doi": "https://doi.org/10.5281/zenodo.18422032",
            "archive": "https://archive.org/download/fiqh-as-salah-dr-rasheed-aljarrah/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%81%D9%82%D9%87%20%D8%A7%D9%84%D8%B5%D9%84%D8%A7%D8%A9.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/fiqh_salah.pdf"
    },
    {
        "title": "فقه الزكاة",
        "category": "الفقه والعبادات",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEik9QhkcbzIGH2ntira3CVI92d7YFc_F8m8IZoO0lGlwBfx70izXK5D7t-IsOwV7GNum2fWhnQMUWDPQA3hPFH2RLpxL_L2Vh8frd0BQ0zH_vzU0tt-6XwRCm0SCNFALvIhsKXQWhPw4gTwT46SqvhT4ew0CYQxeU02eEq24Qy8KyXlSvy6TvX4pwtIXvQ/s1280/photo_2025-12-07_22-21-13.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/fiqh_zakah.pdf",
            "tele": "https://t.me/rasheed_books/22",
            "fs": "https://www.4shared.com/office/wi4WNM9bku/__online.html",
            "noor": "https://www.noor-book.com/vntwj0y",
            "doi": "https://doi.org/10.5281/zenodo.18423951",
            "archive": "https://archive.org/download/fiqh-az-zakat-dr-rasheed-aljarrah/%D9%81%D9%82%D9%87%20%D8%A7%D9%84%D8%B2%D9%83%D8%A7%D8%A9.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/fiqh_zakah.pdf"
    },
    {
        "title": "فقه الصيام",
        "category": "الفقه والعبادات",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0tXYKTvcVt3VyPIGZpxuTZBGZeHJrL2oCmH8-EFTUyebFn3agv7D_5b2I4_phdd4xCytRc9c9qo1DLYqhyFg_ATxEyzJREpNFQoHEqfWOmHo9QR1mWxzK8AS5FPoE74eMMP_e4la8JDAe7ndZGsu_cNntQkdTZMPDQ13OHCeF7O-u5lEwBHcy_Zzku-U/s1280/photo_2025-12-07_22-21-33.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/fiqh_fasting.pdf",
            "tele": "https://t.me/rasheed_books/10",
            "fs": "https://www.4shared.com/office/TC4y4Mhgku/___online.html",
            "noor": "https://www.noor-book.com/tkjflz2",
            "doi": "https://doi.org/10.5281/zenodo.18421787",
            "archive": "https://archive.org/download/fiqh-as-siyam-dr-rasheed-aljarrah/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%81%D9%82%D9%87%20%D8%A7%D9%84%D8%B5%D9%84%D8%A7%D8%A9.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/fiqh_fasting.pdf"
    },
    {
        "title": "فقه الحج",
        "category": "الفقه والعبادات",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHBPaCHtzUCyf1vRiMMW-qNneDfoee8Q8kNATx1pMbx3CqdoEqKn5zopyxMKOIUlx9ypxacU6HR6MJ8l0yloKAwlbmkfiv7ymum2Hmg-0Lp0EKzOQW3Q0YDpHFqrB18wcj3qoTKnTD06eLj1lt_20vesJHs2GLm_ljbWtSPrKJIoSBbF-Yw7ZAh2_5daQ/s1280/photo_2025-12-07_22-20-52.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/fiqh_hajj.pdf",
            "tele": "https://t.me/rasheed_books/34",
            "fs": "https://www.4shared.com/office/pGB0rFEmfa/___online.html",
            "noor": "https://www.noor-book.com/t8vihan",
            "doi": "https://doi.org/10.5281/zenodo.18433322",
            "archive": "https://archive.org/download/fiqh-al-hajj-dr-rasheed-aljarrah/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%81%D9%82%D9%87%20%D8%A7%D9%84%D8%AD%D8%AC.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/fiqh_hajj.pdf"
    },
    {
        "title": "فقه الدعاء",
        "category": "الفقه والعبادات",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWciktj4xCtl5vnMUDw6CK675wkKlqw-sW3xnqDkNEzd_wSFOW2AgPhwRB2Uu0zfHKLNEoQKQRqHbW60Wm9gqS64qu36UsGbem5JvltgJDnXudOsc5TT4v6cAjzgzc-YrlKGpBW71NGPmICnF7a4KoSKBg-Ip-isKvwuivJASHihfsyHvCFiRiG_7aC3Q/s1280/photo_2025-12-07_22-21-06.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/fiqh_duaa.pdf",
            "tele": "https://t.me/rasheed_books/28",
            "fs": "https://www.4shared.com/office/j7CcN_Xrfa/___online.html",
            "noor": "https://www.noor-book.com/vcb9pfw",
            "doi": "https://doi.org/10.5281/zenodo.18434151",
            "archive": "https://archive.org/download/fiqh-ad-dua-dr-rasheed-aljarrah/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%81%D9%82%D9%87%20%D8%A7%D9%84%D8%AF%D8%B9%D8%A7%D8%A1.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/fiqh_duaa.pdf"
    },
    {
        "title": "هل لعلم الله حدود",
        "category": "دراسات فكرية",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiX0cETAotLiFKeFRmXQHZTx_5KdlDHk2DOMyz0EHgZzWE5t_93yKw1rtebLxzKAbbDu4SA-XiohDysZNhwehvD1k-058jWIugA6pweoG9GtULUNuGrsLnFkD3qrJaW1cCzzTpByJ50i3q-Ckkg2AZarkc-wakqQCF_uJniMwKL7ZUsBab6lMBFNuHAiTg/s320-rw/photo_2025-10-25_00-44-37.webp",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/limits_of_allah_knowledge.pdf",
            "tele": "https://t.me/rasheed_books/30",
            "fs": "https://www.4shared.com/office/QzW46KVMge/___.html",
            "noor": "https://www.noor-book.com/l1rxvwi",
            "doi": "https://doi.org/10.5281/zenodo.18419766",
            "archive": "https://archive.org/download/Hal_Li_Ilm_Allah_Hudood/%D9%87%D9%84%20%D9%84%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D9%84%D9%87%20%D8%AD%D8%AF%D9%88%D8%AF.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/limits_of_allah_knowledge.pdf"
    },
    {
        "title": "النظرية العالمية الإسلامية",
        "category": "دراسات فكرية",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgB0CDhadQsiu07jUVQzrieyeyLGIA1PSihEpfHirqP3s0i3F6QwfurOLFlOPeynhpaBWhJTt_-10OcmVpeLReVs8gAgkF3ks2bG8MQoTI3ROVMVksjN3sgD2Nmnu6FR8-QWdhzhOhW4sUfb5WGKU83VlwEmSrDqNC1H-V6X3Ssp70jtCY25x1A26n3Hzg/s320-rw/photo_2025-10-25_00-44-33.webp",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/islamic_theory_secrets_universe.pdf",
            "tele": "https://t.me/rasheed_books/6",
            "fs": "https://www.4shared.com/office/ngzyfFxjge/_____.html",
            "noor": "https://www.noor-book.com/uae5cjy",
            "doi": "https://doi.org/10.5281/zenodo.18417605",
            "archive": "https://archive.org/download/AlNatharia_Alislamia_Asrar_AlKawn/%D8%A7%D9%84%D9%86%D8%B8%D8%B1%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9%20%D9%84%D9%83%D8%B4%D9%81%20%D8%A3%D8%B3%D8%B1%D8%A7%D8%B1%20%D8%A7%D9%84%D9%83%D9%88%D9%86.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/islamic_theory_secrets_universe.pdf"
    },
    {
        "title": "والعلماء هم الظالمون",
        "category": "دراسات فكرية",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAQ4STkj4wvXwjL5iubHr-QLVbaXo7qfBxFhLalQGRx7LKDWUT9E6nWIVSYVJmSjdfd4SHhGXjuXHSWXnyA6a4hpkf1YKXAvaOCv_vxRM6ZjOnFVXrsKaB9GbfbsBQRZ09Z2OaHT3MWE8V4y-xBSM7-Au1jhEebOFhDx5euGALW5hlYoYNLGdsBr-C73c/s320-rw/photo_2025-10-25_00-44-45.webp",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/scholars_are_unjust.pdf",
            "tele": "https://t.me/rasheed_books/38",
            "fs": "https://www.4shared.com/office/6nLUhc95fa/___online.html",
            "noor": "https://www.noor-book.com/tzkh7oy",
            "doi": "https://doi.org/10.5281/zenodo.18421680",
            "archive": "https://archive.org/download/AlUlama_Hum_AlDhalimun/%D9%88%D8%A7%D9%84%D8%B9%D9%84%D9%85%D8%A7%D8%A1%20%D9%87%D9%85%20%D8%A7%D9%84%D8%B8%D8%A7%D9%84%D9%85%D9%88%D9%86.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/scholars_are_unjust.pdf"
    },
    {
        "title": "بداية الخلق ونهاية العالم",
        "category": "دراسات فكرية",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOQ-uxApZs0e_F5fSVAVuzC0qIyOyQBguzLrGZXnMwCJeWBYozEyLluAC4JSfzlP6qoCn9TRvqdBXReN7VdhRMIefAvfEy3scWdSEHV4REQxMAwhNOBnx0qa9QAYzPiX8cS2lh0j0iLQy2PmrSZKbZDtNDU8PTlbM89IZIJjxv8xCvMKuRs4X2x0CaxSY/s1280/photo_2025-12-07_22-21-41.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/beginning_of_creation.pdf",
            "tele": "https://t.me/rasheed_books/8",
            "fs": "https://www.4shared.com/office/ZIGwFa3Fge/___online.html",
            "noor": "https://www.noor-book.com/uka7dqe",
            "doi": "https://doi.org/10.5281/zenodo.18434386",
            "archive": "https://archive.org/download/bidaya-alkhalq-dr-rasheed-aljarrah/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AE%D9%84%D9%82.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/beginning_of_creation.pdf"
    },
    {
        "title": "نظرية الأمانة",
        "category": "دراسات فكرية",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLRlPkn4pryZ7qiaUXsnaOnxI6VGicTd7_roz7eDax06rv2hs9iUgzsf5zPOufD14txGag4XRMfIPztzd5Z1up9YzjCRxykp51eb-tZaA_k7l3hzkrGygI0RGinasfVt6Z-ihQm6b1PtA50E1yH2b1cUsQYE3mMNXxc4diD2dLdvuj94P8IH7qNoAH_X8/s1280/photo_2025-12-07_22-20-59.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/theory_of_trust.pdf",
            "tele": "https://t.me/rasheed_books/32",
            "fs": "https://www.4shared.com/office/6CfAd634ge/___online.html",
            "noor": "https://www.noor-book.com/ln0tjko",
            "doi": "https://doi.org/10.5281/zenodo.18422829",
            "archive": "https://archive.org/download/nathariyat-al-amanah-dr-rasheed-aljarrah/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%86%D8%B8%D8%B1%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%86%D8%A9.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/theory_of_trust.pdf"
    },
    {
        "title": "نظرية التطور - نشوء وليس ترقي",
        "category": "دراسات فكرية",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpJOxFYDrKC07y_qzFOJVwFowLWJluEYEkBLiHYGCAOCT3Hp2aWZVRJ1_W_a4QDSyEwhCL1gPMxXk5tPMhfXtjcundE_TzIUXHi2fIyVan8m9R-vXU1PPLHJhD8chlwis_zea9LBEK-FO7IKejgP026Zup_xmijLBXM0zgnsglXqpeopl26AfzBfMTGKk/s1280/photo_2025-12-07_22-21-45.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/theory_of_evolution.pdf",
            "tele": "https://t.me/rasheed_books/58",
            "fs": "https://www.4shared.com/office/aAyjTUtdge/___online.html",
            "noor": "https://www.noor-book.com/xmgnhf5",
            "doi": "https://doi.org/10.5281/zenodo.18423161",
            "archive": "https://archive.org/download/nathariyat-altatawwur-dr-rasheed-aljarrah/%D9%86%D8%B8%D8%B1%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B7%D9%88%D8%B1%20.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/theory_of_evolution.pdf"
    },
    {
        "title": "جدلية الذكر والأنثى",
        "category": "دراسات فكرية",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9NI2NXWpz6xu2P7BvLwKRCDBGrFQKUolFHhv5CtRy_93l1KM7ac8sbXdjM_VQuvD7Ha3SqAJbSaWQtrRCmT3J0ye3Av5A9FQIR0Doy9kkKecvzHhHSJq8hgkO1rwE1WpUuwIjnjO0AT7QJNAreroVyYptDBZzTLlRw1IOY4j_0uZ3HCB_Fz-WlcXWbxQ/s1280/photo_2025-12-07_22-21-37.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/dialectic_male_female.pdf",
            "tele": "https://t.me/rasheed_books/12",
            "fs": "https://www.4shared.com/office/AeJ0hH-Pjq/___.html",
            "noor": "https://www.noor-book.com/wte0iuy",
            "doi": "https://doi.org/10.5281/zenodo.18434429",
            "archive": "https://archive.org/download/jadaliyyat-athakar-wal-untha-dr-rasheed-aljarrah/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AC%D8%AF%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B0%D9%83%D8%B1%20%D9%88%D8%A7%D9%84%D8%A3%D9%86%D8%AB%D9%89.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/dialectic_male_female.pdf"
    },
    {
        "title": "كتاب الجدليات",
        "category": "دراسات فكرية",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJqWGpIZLoBKFz4DDqC-lFrXFTbWbWWq4OgIdD9Zvbok3-H6p6iDBxWxIE3BOyq9Ad1XJTbeOjEGE7dUr4mIIplsoAP-Iwg1EftN3hboCZ9QvJtrWmQC-O3btk4_RJVwzoiiihR5_caR2Z1K4u-Olh7ZWzosZyrrF7qWN7CS8ZmOywwMWOqUCfsbSY1kI/s1280/photo_2025-12-07_22-20-44.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/book_of_dialectics.pdf",
            "tele": "https://t.me/rasheed_books/40",
            "fs": "https://www.4shared.com/office/BzM7-rG3ku/__online.html",
            "noor": "https://www.noor-book.com/tcogbz6",
            "doi": "https://doi.org/10.5281/zenodo.18434272",
            "archive": "https://archive.org/download/kitab-al-jadaliyyat-dr-rasheed-aljarrah/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AC%D8%AF%D9%84%D9%8A%D8%A7%D8%AA.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/book_of_dialectics.pdf"
    },
    {
        "title": "ربنا باعد بين أسفارنا",
        "category": "دراسات فكرية",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0kp8k_G1tfoUwwzXJqkO3AKP2ouGCLnfD-5ZxzgsYdPJYkQ83FLDdkY7Sk_61DidlUqwFUf0nO6zAQELOynNGw5yCyfPXmQlL7ParEWi2zMlOCzODrHY-PtuEUFpp6sQ5qqphaQOHv5UpWwm5gQHVyo7FHYzjksC02TbXdJsbzVWzM0fR7UrtWVQK218/s1280/photo_2025-12-07_22-21-20.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/lord_distance_our_journeys.pdf",
            "tele": "https://t.me/rasheed_books/18",
            "fs": "https://www.4shared.com/office/lMz31oFfge/____.html",
            "noor": "https://www.noor-book.com/mfldo7y",
            "doi": "https://doi.org/10.5281/zenodo.18431023",
            "archive": "https://archive.org/download/rabbana-baid-bayna-asfarina-dr-rasheed-aljarrah/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%B1%D8%A8%D9%86%D8%A7%20%D8%A8%D8%A7%D8%B9%D8%AF%20%D8%A8%D9%8A%D9%86%20%D8%A3%D8%B3%D9%81%D8%A7%D8%B1%D9%86%D8%A7.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/lord_distance_our_journeys.pdf"
    },
    {
        "title": "ماذا ستفعل النساء في الجنة&#1567;",
        "category": "دراسات فكرية",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4hWICnku_h6METfFyzUu5U4UR4scwtkqMHTRzbZkK5qMnFTdbH2AhG6L8_oyJbeUa90QgdOJJGpOYAy8-wJQoBjdiQStsURwN0r3SZgdJQK-XHo341e1F5q303QRBFq7-csrDNPB3VP5Sz6LK-pqjc0Uwk7M8Nz5jb-h2XST_B1IUuuXsN7YtoXUQn-g/s1280/photo_2025-12-07_22-21-17.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/women_in_jannah.pdf",
            "tele": "https://t.me/rasheed_books/24",
            "fs": "https://www.4shared.com/office/kep2A4UEku/____.html",
            "noor": "https://www.noor-book.com/ibqcnw8",
            "doi": "https://doi.org/10.5281/zenodo.18423013",
            "archive": "https://archive.org/download/matha-safatfal-alnisa-fil-jannah-dr-rasheed-aljarrah/%D9%85%D8%A7%D8%B0%D8%A7%20%D8%B3%D8%AA%D9%81%D8%B9%D9%84%20%D8%A7%D9%84%D9%86%D8%B3%D8%A7%D8%A1%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AC%D9%86%D8%A9.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/women_in_jannah.pdf"
    },
    {
        "title": "اللغة أم اللسان - الجزء الأول",
        "category": "دراسات متخصصة",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJAyapmXRnSO7Ff1qabwQRYTB_vjjCeW2rqe-kSloLxzOPBA8XOQnilxw2h78HjVwXfk-s3NfrgEkT2VnBZxu02cZlbIHbml78pI8AeTjaa1U8q-sMRAl6X9rSBHrBfxfspu3rJ2GfqCOXlCdiO3H41TSpWviLWS0hMbxy3ak0FZi1thTL_64g_-an0Qs/s1280/photo_2025-12-07_22-19-40.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/language_or_tongue_part1.pdf",
            "tele": "https://t.me/rasheed_books/16",
            "fs": "https://www.4shared.com/office/2dRIEdQpfa/_____.html",
            "noor": "https://www.noor-book.com/u2lxqoj",
            "doi": "https://doi.org/10.5281/zenodo.18422280",
            "archive": "https://archive.org/download/lugha-am-lisan-vol1-rasheed-aljarrah/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%84%D8%BA%D8%A9%20%D8%A3%D9%85%20%D9%84%D8%B3%D8%A7%D9%86%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%A3%D9%88%D9%84.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/language_or_tongue_part1.pdf"
    },
    {
        "title": "حديث الإفك",
        "category": "دراسات متخصصة",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiHDAPXUDXlmjk2wOPHYpMxUBueKVMkDrPUQxMSu-Gai1TBgcwwLBCwtiXwMCl1Nwqujjk_wlADzEl5mxog632vPiH-SK9eNdC_rh5EAfr6gklVNfjTkzGkgutQlERsuiy9XXblZBfjOYoues6vT0RQCUWF4DtQwb7g-HC181QzpTASGy6ftJzBJoJ0Lc/s1280/photo_2025-12-07_22-21-23.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/hadith_al_ifk.pdf",
            "tele": "https://t.me/rasheed_books/20",
            "fs": "https://www.4shared.com/office/YO1hbwt4fa/__online.html",
            "noor": "https://www.noor-book.com/bca4pwk",
            "doi": "https://doi.org/10.5281/zenodo.18423834",
            "archive": "https://archive.org/download/hadith-al-ifk-dr-rasheed-aljarrah/%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%A5%D9%81%D9%83.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/hadith_al_ifk.pdf"
    },
    {
        "title": "ماذا كتب في الزبور&#1567;",
        "category": "دراسات متخصصة",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUcwQwqHbo4xbqHd005GFCHp2HUrH5eRO4dCG45v4EsKKrHonkJYDy-wpNL3M1JYT-6dZ9zDIrZNazDoxV28-xgjepRa7dQ4JGgn8mszaV1n3NUpvVj6f79x4DyX2Z8zrkIYvxR2Yh4ce8TaGCQTPZHR8qCrqiJmhoYdSAkYEG8wolt7_vjwEBA-WpIDw/s1280/photo_2025-12-07_22-20-55.jpg",
        "links": {
            "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/what_is_written_in_zabur.pdf",
            "tele": "https://t.me/rasheed_books/36",
            "fs": "https://www.4shared.com/office/bA_QFe8Ffa/___.html",
            "noor": "https://www.noor-book.com/ixrfl7k",
            "doi": "https://doi.org/10.5281/zenodo.18423103",
            "archive": "https://archive.org/download/matha-kutiba-fi-azzabur-dr-rasheed-aljarrah/%D9%85%D8%A7%D8%B0%D8%A7%20%D9%83%D8%AA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B2%D8%A8%D9%88%D8%B1%D8%9F.pdf"
        },
        "pdf": "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/what_is_written_in_zabur.pdf"
    }
];
