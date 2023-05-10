function runAPI() {
const url = document.getElementById("urlInputName").value;
    if (!url) {
    console.log("url을 입력해주세요.");
    return;
    }
fetch(url)
    .then(res => res.json())
    .then(data => {
    makeList(data);
    document.getElementById("imageContainer").style.display = "block"; // 이미지 컨테이너 보이기
    })
    .catch(console.log);
    const imageContainer = document.getElementById("imageContainer");
    if (imageContainer.innerHTML) { // 이미지가 존재할 경우
      imageContainer.innerHTML = ""; // 이미지 삭제
      imageContainer.style.display = "none"; // 이미지 컨테이너 숨기기
    }
}

function resetAPI() {
    const imageContainer = document.getElementById("imageContainer");
    if (imageContainer.innerHTML) { // 이미지가 존재할 경우
      imageContainer.innerHTML = ""; // 이미지 삭제
      imageContainer.style.display = "none"; // 이미지 컨테이너 숨기기
    }
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
