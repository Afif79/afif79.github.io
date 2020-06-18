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


function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
// console.log('age: ' + getAge("2000/01/08"));
var y = getAge("2000/01/08");
document.getElementById("myAge").innerHTML = y; 
var today = new Date();
document.getElementById("thisYear").innerHTML = today.getFullYear(); 


function feedbackSent()
{
    var elem = document.getElementById("button");
    elem.value = "Sent!"; 
    elem.style.color="red"
    console.log(elem.value);
}