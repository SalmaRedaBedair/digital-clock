const he = document.getElementById('hours');
const me = document.getElementById('minutes');
const se = document.getElementById('seconds');
const ampme = document.getElementById('ampm');

let ampm = 'AM', h, m, s;

function updateDate() {
    h = new Date().getHours();
    m = new Date().getMinutes();
    s = new Date().getSeconds();
    if (h > 12) {
        h -= 12;
        ampm = 'PM';
    }
    else {
        ampm = 'AM';
    }
    if(h<10) h='0'+h;
    if(m<10) m='0'+m;
    if(s<10) s='0'+s;
    he.innerText = h;
    me.innerText = m;
    se.innerText = s;
    ampme.innerText = ampm;
    setTimeout(() => updateDate(), 1000);

}
updateDate();



