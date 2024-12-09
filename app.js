   function checkFortune() {
            var food = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (food === "チョコレートアイス" && colour === 赤) {
                result = "チンチラ";
            } else if (food === "チョコレートアイス" && colour === 青) {
                result = "ムササビ";
            } else if (food === "チョコレートアイス" && colour === 黄色) {
                result = "カワウソ";
            } else if (food === "バニラアイス" && colour === 赤) {
                result = "ポメラニアン";
            } else if (food === "バニラアイス" && colour === 青) {
                result = "サル";
            } else if (food === "バニラアイス" && colour === 黄色) {
                result = "ハリネズミ";
            } else if (food === "抹茶アイス" && colour === 赤) {
                result = "ハムスター";
            } else if (food === "抹茶アイス" && colour === 青) {
                result = "ヘビ";
            } else if (food === "抹茶アイス" && colour === 黄色) {
                result = "インコ";
            }

            document.getElementById('result-output').innerText = "今日のあなたにおすすめの動物の動画は【" + result + "】です";
        }
