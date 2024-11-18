// Đoạn mã JavaScript để điều khiển sự mở và đóng thư
const envelopeWrapper = document.querySelector('.envelope-wrapper');
const heart = document.querySelector('.flower-button');

heart.addEventListener('click', (e) => {
    e.stopPropagation();
    envelopeWrapper.classList.toggle('flap');
});


//Modal
function openContent(){
    const open = document.getElementById("customModal");
    open.classList.add("show");
}

function closeContent() {
    const close = document.getElementById("customModal");
    close.classList.remove("show");
}
//Dong khi click ra ngoai
window.onclick = function (event) {
    const modal = document.getElementById("customModal");
    if(event.target === modal){
        closeContent();
    }
}

// onload = () => {
//     const c = setTimeout(() => {
//         document.querySelector('.container-flower').classList.remove("not-loaded");
//         clearTimeout(c);
//     }, 1000);
// };