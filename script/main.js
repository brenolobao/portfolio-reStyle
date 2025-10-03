const links = document.querySelectorAll(".navButton");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

const content = document.querySelector('body');
const track = document.querySelector('.custom-scrollbar');
const thumb = document.querySelector('.thumb');

function updateScrollbar() {
    const ratio = content.scrollTop / (content.scrollHeight - content.clientHeight);
    const thumbHeight = track.clientHeight * (content.clientHeight / content.scrollHeight);

    thumb.style.height = thumbHeight + 'px';
    thumb.style.transform = `translateY(${ratio * (track.clientHeight - thumbHeight)}px)`;
}
const video = document.getElementById("profile-video");

function playVideo() {

    setTimeout(() => {
        video.style.display = "initial"
        video.play();
    }, 1250);

    video.addEventListener("ended", () => {
        video.style.display = "none";
    });
}
document.getElementById('home-img').addEventListener("click", () => {
    playVideo()
})
content.addEventListener('scroll', updateScrollbar);
window.addEventListener('resize', updateScrollbar);
updateScrollbar();
playVideo();
