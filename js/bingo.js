// 抽選済番号を格納する空のリスト
var selected_numbers = [];

function start_stop(value) {
    // 全ての番号が抽選済みの場合
    if (selected_numbers.length == 74) {
        document.getElementById("end").innerHTML = "全ての番号が抽選されました！";
        return; // 抽選を停止
    }
    // startの場合
    if (value == 1) {

        document.getElementById("button").value = "STOP"
        document.getElementById("button").onclick = function () { start_stop(0) };
        start_displaying_numbers();

        // BGMを再生
        var bgm = document.getElementById("background-music");
        bgm.currentTime = 0; // 音楽を最初から再生
        bgm.play(); // 再生

    }


    // stopの場合
    if (value == 0) {
        // 全てのli要素を取得し、配列に変換
        var nums = Array.from(document.querySelectorAll('.hit:not(.free)'));

        // ランダムなインデックスを生成
        do {
            var randomIndex = Math.floor(Math.random() * nums.length);
            // ランダムに選ばれた要素
            var selectedItem = nums[randomIndex];
            // whileの処理がTrueなら(抽選済みなら)doに戻る
        } while (selected_numbers.includes(selectedItem.textContent));
        // 抽選済みでなければ抽選結果を表示
        if (parseInt(selectedItem.textContent) <= 15) {
            document.getElementById("heading").innerHTML = "B" + selectedItem.textContent;
        }
        else if (parseInt(selectedItem.textContent) >= 16 && parseInt(selectedItem.textContent) <= 30) {
            document.getElementById("heading").innerHTML = "I" + selectedItem.textContent;
        }
        else if (parseInt(selectedItem.textContent) >= 31 && parseInt(selectedItem.textContent) <= 45) {
            document.getElementById("heading").innerHTML = "N" + selectedItem.textContent;
        }
        else if (parseInt(selectedItem.textContent) >= 46 && parseInt(selectedItem.textContent) <= 60) {
            document.getElementById("heading").innerHTML = "G" + selectedItem.textContent;
        }
        else if (parseInt(selectedItem.textContent) >= 61 && parseInt(selectedItem.textContent) <= 75) {
            document.getElementById("heading").innerHTML = "O" + selectedItem.textContent;
        }
        // 抽選した番号を除外
        selected_numbers.push(selectedItem.textContent);
        // 新しい背景色を反映させるためにclassを追加
        selectedItem.classList.add("selected");
        // ボタンをstartに戻し引数も1に戻す
        document.getElementById("button").value = "START"
        document.getElementById("button").onclick = function () { start_stop(1) };
        stop_displaying_numbers();
    }
}


function start_displaying_numbers() {
    // setIntervalに渡す無名関数を作成
    intervalId = setInterval(function () {
        var nums = document.querySelectorAll('.hit:not(.free)');
        var randomIndex = Math.floor(Math.random() * nums.length);
        var selectedItem = nums[randomIndex];
        // 50ミリ秒間隔で切り替わる処理
        if (parseInt(selectedItem.textContent) <= 15) {
            document.getElementById("heading").innerHTML = "B" + selectedItem.textContent;
        }
        else if (parseInt(selectedItem.textContent) >= 16 && parseInt(selectedItem.textContent) <= 30) {
            document.getElementById("heading").innerHTML = "I" + selectedItem.textContent;
        }
        else if (parseInt(selectedItem.textContent) >= 31 && parseInt(selectedItem.textContent) <= 45) {
            document.getElementById("heading").innerHTML = "N" + selectedItem.textContent;
        }
        else if (parseInt(selectedItem.textContent) >= 46 && parseInt(selectedItem.textContent) <= 60) {
            document.getElementById("heading").innerHTML = "G" + selectedItem.textContent;
        }
        else if (parseInt(selectedItem.textContent) >= 61 && parseInt(selectedItem.textContent) <= 75) {
            document.getElementById("heading").innerHTML = "O" + selectedItem.textContent;
        }
        // document.getElementById("heading").innerHTML = selectedItem.textContent;
    }, 50);
}
// intervalを停止する関数
function stop_displaying_numbers() {
    clearInterval(intervalId)
}