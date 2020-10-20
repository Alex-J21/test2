let n = document.getElementById('button');
n.onclick = function yourName() {

    let name = document.getElementById('name').value;
    alert(name);
};



let butNum = document.getElementById('buttonNum');
butNum.onclick = function num() {
    let showNum = document.getElementById('pushNumber').value;
    let showNum1 = document.getElementById('pushNumber1').value;
    let num = document.getElementById('output');
    if (+showNum > +showNum1) {
        num.innerHTML += 'Число ' + showNum + ' больше чем ' + showNum1 + '<br/>';
    } else {
        num.innerHTML += 'Число ' + showNum1 + ' больше чем ' + showNum + '<br/>';
    }
}

let but = document.getElementById('but');
let minn = document.getElementById('numMin');
let maxx = document.getElementById('numMax');

but.onclick = function num() {
    let mMin = +minn.value;
    let mMax = +maxx.value;
    let rand = mMin + Math.random() * (mMax  - mMin);
    console.log(rand);
}

