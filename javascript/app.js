var checkbox = document.querySelector('input[id=switch]');
var moon_icon = document.getElementById("moon")
var sun_icon = document.getElementById("sun");
checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        moon_icon.style.display = "";
        sun_icon.style.display = "none";
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        moon_icon.style.display = "none";
        sun_icon.style.display = "";
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}