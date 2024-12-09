   function checkFortune() {
            var food = document.getElementById('ice-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (food === "チョコレートアイス" && number === 1) {
                result = "チンチラ";
               
            } else if (food === "チョコレートアイス" && number === 2) {
                result = "ムササビ";
               
            } else if (food === "チョコレートアイス" && number === 3) {
                result = "カワウソ";
               
            } else if (food === "チョコレートアイス" && number === 4) {
                result = "ポメラニアン";
               
            } else if (food === "バニラアイス" && number === 1) {
                result = "サル";
               
            } else if (food === "バニラアイス" && number === 2) {
                result = "ハリネズミ";
               
            } else if (food === "バニラアイス" && number === 3) {
                result = "ハムスター";
               
            } else if (food === "バニラアイス" && number === 4) {
                result = "ヘビ";
               
            } else if (food === "ストロベリーアイス" && number === 1) {
                result = "インコ";
               
      　　　} else if (food=== "ストロベリーアイス" && number === 2) {
                result = "トラ";
               
      　　　} else if (food === "ストロベリーアイス" && number === 3) {
                result = "カバ";
               
      　　　} else if (food === "ストロベリーアイス" && number === 4) {
                result = "ペンギン";
               
      　　　} else if (food === "ブルーベリーアイス" && number === 1) {
                result = "シロクマ";
               
      　　　} else if (food === "ブルーベリーアイス" && number === 2) {
                result = "アザラシ";

      　　　} else if (food === "ブルーベリーアイス" && number === 3) {
                result = "キツネ";

      　　　} else if (food === "ブルーベリーアイス" && number === 4) {
                result = "パンダ";
      
            document.getElementById('result-output').innerText = "今日のあなたにおすすめの動物の動画は【" + result + "】です";
        }
