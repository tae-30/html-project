function showContent(contentID) {
    const content = document.getElementById(contentID);

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block"; // 表示
        setTimeout(() => {
            content.classList.add('show');  // アニメーションを開始するためにクラスを追加
        }, 10);  // 少し遅延させてアニメーションが実行されるようにする
    } else {
        content.classList.remove('show');  // アニメーションを逆方向で終了
        setTimeout(() => {
            content.style.display = "none"; // 非表示にする
        }, 500);  // アニメーションが終わるまでの時間に合わせて非表示にする
    }
}