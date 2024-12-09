   function checkFortune() {
            var ice = document.getElementById('ice-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (ice === "チョコレートアイス" && number === 1) {
                result = "チンチラ";
               
            } else if (ice === "チョコレートアイス" && number === 2) {
                result = "ムササビ";
               
            } else if (ice === "チョコレートアイス" && number === 3) {
                result = "カワウソ";
               
            } else if (ice === "チョコレートアイス" && number === 4) {
                result = "ポメラニアン";
               
            } else if (ice === "バニラアイス" && number === 1) {
                result = "サル";
               
            } else if (ice === "バニラアイス" && number === 2) {
                result = "ハリネズミ";
               
            } else if (ice === "バニラアイス" && number === 3) {
                result = "ハムスター";
               
            } else if (ice === "バニラアイス" && number === 4) {
                result = "ヘビ";
               
            } else if (ice === "ストロベリーアイス" && number === 1) {
                result = "インコ";
               
      　　　} else if (ice === "ストロベリーアイス" && number === 2) {
                result = "トラ";
               
      　　　} else if (ice === "ストロベリーアイス" && number === 3) {
                result = "カバ";
               
      　　　} else if (ice === "ストロベリーアイス" && number === 4) {
                result = "ペンギン";
               
      　　　} else if (ice === "ブルーベリーアイス" && number === 1) {
                result = "シロクマ";
               
      　　　} else if (ice === "ブルーベリーアイス" && number === 2) {
                result = "アザラシ";

      　　　} else if (ice === "ブルーベリーアイス" && number === 3) {
                result = "キツネ";

      　　　} else if (ice === "ブルーベリーアイス" && number === 4) {
                result = "パンダ";
      
            document.getElementById('result-output').innerText = "今日のあなたにおすすめの動物の動画は【" + result + "】です";
        }
