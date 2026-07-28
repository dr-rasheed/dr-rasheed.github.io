const fs = require('fs');
let myData = fs.readFileSync('js/my_data.js', 'utf8');
let json = fs.readFileSync('books_final_all_links.json', 'utf8');

// Replace the academicBooks array
// Find "const academicBooks = [" and replace it and its contents until "];"
const startStr = "const academicBooks = ";
const startIndex = myData.indexOf(startStr);
if (startIndex !== -1) {
    let before = myData.substring(0, startIndex);
    
    // Find the end of the array
    // We can just use the fact that it's the last variable in the file, but to be safe let's find "];"
    const endStr = "];\n";
    const endIndex = myData.indexOf(endStr, startIndex);
    let after = "";
    if(endIndex !== -1) {
        after = myData.substring(endIndex + endStr.length);
    }
    
    fs.writeFileSync('js/my_data.js', before + startStr + json + ";\n" + after);
    console.log("Successfully updated my_data.js");
}
