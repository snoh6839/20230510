// 1. 현재 적용된 고정값 대신 input으로 url 받아오기
// 2. 처음에는 아무것도 안뜨다가 API 실행 버튼을 누르면 해당 url이 실행됨.
// 3. 이미지는 form 위에 정렬
// const url = "https://picsum.photos/v2/list?page=1&limit=5";
let url = " ";

fetch(url)
.then(res => {return res.json()})
.then(data => makeList(data))
.catch(console.log);

function makeList(data) {
    data.forEach(item => {
        console.log(item);
        const imgTagCreate = document.createElement('img');
        imgTagCreate.setAttribute('src', item.download_url );
        // imgTagCreate.setAttribute('height', 200 + 'px');
        // imgTagCreate.style.height = 200 + 'px';
        imgTagCreate.classList.add("resizePic");
        document.body.appendChild(imgTagCreate);
    });
}