alert("Some of the Links may not work as this project is still in works. The website is responsive and tested with different devices; if you still see some issue viewing please reload the page once. Thanks for your time and visit.")

function showit() {
    let output1 = `<div class="show">
    <div class="showitcontent">
                <ul class="Listtt">
                    <h2>Web Development</h2>
                    <li><a href="/Web dev/webdev.html">Html & CSS</a></li>
                    <li><a href="/Web dev/webdev.html">Javascript</a></li>
                    <li><a href="/Web dev/webdev.html">ReactJS</a></li>
                    <li><a href="/Web dev/webdev.html">Jquery</a></li>
                    <li><a href="/Web dev/webdev.html">MongoDB</a></li>
                </ul>
                <ul class="Listtt">
                    <h2>Artificial Intelligence (AI)</h2>
                    <li><a href="/Web dev/webdev.html">Python (TensorFlow, PyTorch)</a></li>
                    <li><a href="/Web dev/webdev.html">R</a></li>
                    <li><a href="/Web dev/webdev.html">Java</a></li>
                    <li><a href="/Web dev/webdev.html">C++</a></li>
                    <li><a href="/Web dev/webdev.html">Julia</a></li>
                </ul>
                <ul class="Listtt">
                    <h2>Machine Learning (ML)</h2>
                    <li>Python (scikit-learn, Keras)</li>
                    <li>R</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>MATLAB</li>
                </ul>
                <ul class="Listtt">
                    <h2>Data Science</h2>
                    <li>Python (pandas, NumPy, Matplotlib)</li>
                    <li>R</li>
                    <li>SQL</li>
                    <li>Scala</li>
                    <li>Julia</li>
                </ul>
                <ul class="Listtt">
                    <h2>Mobile App Development</h2>
                    <li>Java (Android)</li>
                    <li>Kotlin (Android)</li>
                    <li>Swift (iOS)</li>
                    <li>Dart (Flutter)</li>
                    <li>JavaScript (React Native)</li>
                </ul>
            </div>
    </div>`;
    document.getElementById('showitog').innerHTML = output1;
}
function donedone() {
    document.getElementById('showitog').innerHTML = '';
}
function closeit() {
    let h = window.event.clientY;
    if (h < 20) {
        document.getElementById('showitog').innerHTML = '';
    }
}

//FAQ SECTION
const faq = document.querySelectorAll(".faqline");
faq.forEach(faqitem => {
    const faqtit = faqitem.querySelector(".faq-ques");
    const faqans = faqitem.querySelector(".faq-answer");
    const icono = faqitem.querySelector(".icono", ".iconi")

    faqtit.addEventListener('click', () => {

        faqitem.classList.toggle('active');

    })
})

// nav hamburger
const navburger = document.querySelectorAll("#nav");
navburger.forEach(navitem => {
    const hamburger = navitem.querySelector(".navicon");
    const hammenu = navitem.querySelector("#nav-toggle-menu");
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle("active");
        hammenu.classList.toggle("active");
    })
})


// fetch video link data from json
let thumbnailList = [];
let thumbnailListHTML= document.getElementById("thumbnail-grid")

const addDataToHTML = ()=>{
    if(thumbnailList.length>0){
        thumbnailList.forEach(video=>{
            let thumbnail = document.createElement("div")
            thumbnail.classList.add('video-thumbnail')
            thumbnail.innerHTML = `<img src="${video.thumbnail}" alt="${video.title}">
                                   <h3>${video.title}</h3>`;
            thumbnail.onclick = ()=>window.open(video.link, '_blank')  
            thumbnailListHTML.appendChild(thumbnail);                             
    })
    }
}

const videoFetch = ()=>{
    fetch("links.json")
.then(response=>response.json())
.then(data=>{
    thumbnailList = data;
    addDataToHTML();
})
}
videoFetch();