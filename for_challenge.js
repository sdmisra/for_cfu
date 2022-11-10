// only print to console words with exactly 3 characters
var words = ["car", "bike", "bus", "van", "scooter", "truck", "rv"]
for (var i = 0; i < words.length; i++) {
    if (words[i].length === 3) {
        console.log(words[i])
    }
}