var seed = decodeURI(window.location.search.replace("?", "").split("=")[0]);
var dt = seed.split("-");

dt[0] = Math.round(dt[0])
dt[1] = Math.round(dt[1])
dt[2] = Math.round(dt[2])
dt[3] = Math.round(dt[3])

var can_gen = true;

if (dt[1] < 0 || dt[1] > 1) {
    console.log("Есть только 2 полки!");
    document.getElementById('data').textContent = "Есть только 2 полки!";
    can_gen = false;
}
if (dt[2] < 0 || dt[2] > 400 && can_gen) {
    console.log("Есть только 400 книг на полке!");
    document.getElementById('data').textContent = "Есть только 400 книг на полке!";
    can_gen = false;
}
if (dt[3] < 0 || dt[3] > 400 && can_gen) {
    console.log("Есть только 400 страниц в книге!");
    document.getElementById('data').textContent = "Есть только 400 страниц в книге!";
    can_gen = false;
}

var symbols = ['.', ',', ' ', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

Math.seedrandom(dt[0]+"-"+dt[1]+"-"+dt[2]+"-"+dt[3]);

var text = "";

for (let i = 0; i < 41; i++) {
    for (let i = 0; i < 81; i++) {
      text = text + symbols[Math.floor(Math.random() * symbols.length)];
    }
    text = text + "\n";
}

console.log(seed);
console.log(text);

if (can_gen)
{
    if (dt[1] == 0) {
        dt[1] = "нижняя";
    }
    else {
        dt[1] = "верхняя";
    }

    console.log(dt[4]);
    document.getElementById('text').innerHTML = text.replaceAll(dt[4], "<span style=\"background-color: #FFB4C2\">"+dt[4]+"</span>");
    document.getElementById('data').textContent = "Ряд "+dt[0]+", полка "+dt[1]+", номер книги "+dt[2]+", страница "+dt[3];
}
