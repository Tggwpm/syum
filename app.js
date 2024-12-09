 function checkFortune() {
            var food = document.getElementById('food-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "いろんなのをみよう"; // デフォルトの値

            if (food === "チョコレートアイス" && number === 1) {
                result = "チンチラ";
            } else if (food === "チョコレートアイス" && number === 2) {
                result = "ポメラニアン";
            } else if (food === "チョコレートアイス" && number === 3) {
                result = "ハリネズミ";
            } else if (food === "バニラアイス" && number === 1) {
                result = "アザラシ";
            } else if (food === "バニラアイス" && number === 2) {
                result = "パンダ";
            } else if (food === "バニラアイス" && number === 3) {
                result = "トラ";
            } else if (food === "ブルーベリーアイス" && number === 1) {
                result = "インコ";
            } else if (food === "ブルーベリーアイス" && number === 2) {
                result = "ヘビ";
            } else if (food === "ブルーベリーアイス" && number === 3) {
                result = "カワウソ";
            }

            document.getElementById('result-output').innerText = "あなたの今週の運勢は【" + result + "】です";
        }
