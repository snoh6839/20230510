const url = "https://picsum.photos/v2/list?page=1&limit=5";

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