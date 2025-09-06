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
                    <li>Python (TensorFlow, PyTorch)</li>
                    <li>R</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>Julia</li>
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
// USER_VID_INPUT SECTION
