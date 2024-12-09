   function checkFortune() {
            var ice = document.getElementById('ice-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (ice === "キャラメルリボン" && number === 1) {
                result = "チンチラ";
               
            } else if (ice === "キャラメルリボン" && number === 2) {
                result = "ムササビ";
               
            } else if (ice === "キャラメルリボン" && number === 3) {
                result = "カワウソ";
               
            } else if (ice === "キャラメルリボン" && number === 4) {
                result = "ポメラニアン";
               
            } else if (ice === "コットンキャンディ" && number === 1) {
                result = "サル";
               
            } else if (ice === "コットンキャンディ" && number === 2) {
                result = "ハリネズミ";
               
            } else if (ice === "コットンキャンディ" && number === 3) {
                result = "ハムスター";
               
            } else if (ice === "コットンキャンディ" && number === 4) {
                result = "ヘビ";
               
            } else if (ice === "いちごみるく" && number === 1) {
                result = "インコ";
               
      　　　} else if (ice === "いちごみるく" && number === 2) {
                result = "トラ";
               
      　　　} else if (ice === "いちごみるく" && number === 3) {
                result = "カバ";
               
      　　　} else if (ice === "いちごみるく" && number === 4) {
                result = "ペンギン";
               
      　　　} else if (ice === "ポッピングシャワー" && number === 1) {
                result = "シロクマ";
               
      　　　} else if (ice === "ポッピングシャワー" && number === 2) {
                result = "アザラシ";

      　　　} else if (ice === "ポッピングシャワー" && number === 3) {
                result = "キツネ";

      　　　} else if (ice === "ポッピングシャワー" && number === 4) {
                result = "パンダ";
      
            document.getElementById('result-output').innerText = "今日のあなたにおすすめの動物の動画は【" + result + "】です";
        }
