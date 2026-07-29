const fs = require('fs');

const fileContent = fs.readFileSync('js/my_data.js', 'utf8');

const mapping = {
  "من قصة نبي الله نوح": "story_prophet_noah.pdf",
  "قصة نبي الله لوط": "story_prophet_lot.pdf",
  "قصة يوسف الصديق": "story_prophet_joseph.pdf",
  "قصة نبي الله موسى": "story_prophet_moses.pdf",
  "قصة نبي الله داوود": "story_prophet_david.pdf",
  "قصة نبي الله سليمان": "story_prophet_solomon.pdf",
  "قصة نبي الله يونس": "story_prophet_jonah.pdf",
  "قصة عيسى بن مريم": "story_prophet_jesus.pdf",
  "قصة ذي القرنين": "story_dhul_qarnayn.pdf",
  "فقه الصلاة": "fiqh_salah.pdf",
  "فقه الزكاة": "fiqh_zakah.pdf",
  "فقه الصيام": "fiqh_fasting.pdf",
  "فقه الحج": "fiqh_hajj.pdf",
  "فقه الدعاء": "fiqh_duaa.pdf",
  "هل لعلم الله حدود": "limits_of_allah_knowledge.pdf",
  "النظرية العالمية الإسلامية": "islamic_theory_secrets_universe.pdf",
  "والعلماء هم الظالمون": "scholars_are_unjust.pdf",
  "بداية الخلق ونهاية العالم": "beginning_of_creation.pdf",
  "نظرية الأمانة": "theory_of_trust.pdf",
  "نظرية التطور - نشوء وليس ترقي": "theory_of_evolution.pdf",
  "جدلية الذكر والأنثى": "dialectic_male_female.pdf",
  "كتاب الجدليات": "book_of_dialectics.pdf",
  "ربنا باعد بين أسفارنا": "lord_distance_our_journeys.pdf",
  "ماذا ستفعل النساء في الجنة&#1567;": "women_in_jannah.pdf",
  "اللغة أم اللسان - الجزء الأول": "language_or_tongue_part1.pdf",
  "حديث الإفك": "hadith_al_ifk.pdf",
  "ماذا كتب في الزبور&#1567;": "what_is_written_in_zabur.pdf"
};

const baseUrl = "https://github.com/dr-rasheed/dr-rasheed.github.io/releases/download/v1.0/";

const match = fileContent.match(/const academicBooks = (\[[\s\S]*?\]);/);
if (match) {
    let academicBooks = JSON.parse(match[1]);
    academicBooks = academicBooks.map(book => {
        const fileName = mapping[book.title];
        if (fileName) {
            const newUrl = baseUrl + fileName;
            book.pdf = newUrl;
            if (book.links) {
                book.links.pdf = newUrl;
            }
        } else {
            console.warn("No mapping found for:", book.title);
        }
        return book;
    });
    
    const newContent = fileContent.replace(match[1], JSON.stringify(academicBooks, null, 4));
    fs.writeFileSync('js/my_data.js', newContent, 'utf8');
    console.log("Updated js/my_data.js");
} else {
    console.log("Could not find academicBooks array");
}
