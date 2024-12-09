   function checkFortune() {
            var ice = document.getElementById('ice-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (food === "キャラメルリボン" && number === 1) {
                result = "チンチラ";
               
            } else if (food === "キャラメルリボン" && number === 2) {
                result = "ムササビ";
               
            } else if (food === "キャラメルリボン" && number === 3) {
                result = "カワウソ";
               
            } else if (food === "キャラメルリボン" && number === 4) {
                result = "ポメラニアン";
               
            } else if (food === "コットンキャンディ" && number === 1) {
                result = "サル";
               
            } else if (food === "コットンキャンディ" && number === 2) {
                result = "ハリネズミ";
               
            } else if (food === "コットンキャンディ" && number === 3) {
                result = "ハムスター";
               
            } else if (food === "コットンキャンディ" && number === 4) {
                result = "ヘビ";
               
            } else if (food === "いちごみるく" && number === 1) {
                result = "インコ";
               
      　　　} else if (food === "いちごみるく" && number === 2) {
                result = "トラ";
               
      　　　} else if (food === "いちごみるく" && number === 3) {
                result = "カバ";
               
      　　　} else if (food === "いちごみるく" && number === 4) {
                result = "ペンギン";
               
      　　　} else if (food === "ポッピングシャワー" && number === 1) {
                result = "シロクマ";
               
      　　　} else if (food === "ポッピングシャワー" && number === 2) {
                result = "アザラシ";

      　　　} else if (food === "ポッピングシャワー" && number === 3) {
                result = "キツネ";

      　　　} else if (food === "ポッピングシャワー" && number === 4) {
                result = "パンダ";
      
            document.getElementById('result-output').innerText = "今日のあなたにおすすめの動物の動画は【" + result + "】です";
        }
