   function checkFortune() {
            var food = document.getElementById('food-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (food === "チョコレートアイス" && number === 1) {
                result = "チンチラ";
            } else if (food === "チョコレートアイス" && number === 2) {
                result = "ムササビ";
            } else if (food === "チョコレートアイス" && number === 3) {
                result = "カワウソ";
            } else if (food === "バニラアイス" && number === 1) {
                result = "ポメラニアン";
            } else if (food === "バニラアイス" && number === 2) {
                result = "サル";
            } else if (food === "バニラアイス" && number === 3) {
                result = "ハリネズミ";
            } else if (food === "抹茶アイス" && number === 1) {
                result = "ハムスター";
            } else if (food === "抹茶アイス" && number === 2) {
                result = "ヘビ";
            } else if (food === "抹茶アイス" && number === 3) {
                result = "インコ";
            }

            document.getElementById('result-output').innerText = "今日のあなたにおすすめの動物の動画は【" + result + "】です";
        }
