function runAPI() {
    const url = document.getElementById("urlInputName").value;
    if (!url) {
        console.log("url을 입력해주세요.");
        return;
    }
    fetch(url)
        .then(res => res.json())
        .then(data => makeList(data))
        .catch(console.log);
}
function makeList(data) {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = ""; // 이미지 컨테이너 초기화
    data.forEach(item => {
        console.log(item);
        const imgTagCreate = document.createElement('img');
        imgTagCreate.setAttribute('src', item.download_url);
        imgTagCreate.classList.add("resizePic");
        imageContainer.appendChild(imgTagCreate);
    });
}