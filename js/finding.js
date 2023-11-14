var seed = window.location.search.replace("?", "").split("=")[0];
var dt = seed.split("-");

var symbols = ['.', ',', ' ', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
//var symbols = ['.', ',', ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'd', 'x', 'y', 'z'];

function findingf() {
    var textf = document.getElementById('search').value;
    console.log(textf);
    var text = "";
    var i5 = -1;

    while (true)
    {
    i5++;
    for (var i4 = 0; i4 < 2; i4++) {

        for (var i3 = 0; i3 < 401; i3++) {

            for (var i2 = 0; i2 < 401; i2++) {

                Math.seedrandom(i5+"-"+i4+"-"+i3+"-"+i2);

                for (let i = 0; i < 41; i++) {
                    for (let i = 0; i < 81; i++) {
                        text = text + symbols[Math.floor(Math.random() * symbols.length)];
                    }
                    text = text + "\n";
                }

                if (text.indexOf(textf) >= 0)
                {
                        if (i4 == 0) {
                            var i42 = "нижней";
                        }
                        else {
                            var i42 = "верхней";
                        }
                    document.getElementById('url_page').href = "./page.html?"+i5+"-"+i4+"-"+i3+"-"+i2+"-"+textf;
                    return document.getElementById('url_page').textContent = "Ваш текст найден на "+"ряду "+i5+", полке "+i42+", номере книги "+i3+", странице "+i2;
                }
                else
                {
                    var text = "";
                }

            }

        }

    }
    }

}
