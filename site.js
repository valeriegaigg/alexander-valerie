const g = document.getElementById('gaigg');
const gl = document.getElementById('gaigg-list');
const fl = document.getElementById('forrest-list');
const ml = document.getElementById('martin-list');
const rl = document.getElementById('rodeghier-list');
const tl = document.getElementById('tabbert-list');
const sl = document.getElementById('saldanha-list');
const mal = document.getElementById('marsh-list');
const bl = document.getElementById('berry-list');
const dl = document.getElementById('dorn-list');
const vl = document.getElementById('van-ekeren-list');
const nl = document.getElementById('nieto-list');
const del = document.getElementById('denu-list');
const hl = document.getElementById('hawley-list');

window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

gl.hidden = true;
fl.hidden = true;
ml.hidden = true;
rl.hidden = true;
tl.hidden = true;
sl.hidden = true;
mal.hidden = true;
bl.hidden = true;
dl.hidden = true;
vl.hidden = true;
nl.hidden = true;
del.hidden = true;
hl.hidden = true;

function showG(){
    gl.hidden = !gl.hidden;
};
function showF(){
    fl.hidden = !fl.hidden;
};
function showM(){
    ml.hidden = !ml.hidden;
};
function showR(){
    rl.hidden = !rl.hidden;
};
function showT(){
    tl.hidden = !tl.hidden;
};
function showS(){
    sl.hidden = !sl.hidden;
};
function showMa(){
    mal.hidden = !mal.hidden;
};
function showB(){
    bl.hidden = !bl.hidden;
};
function showD(){
    dl.hidden = !dl.hidden;
};
function showV(){
    vl.hidden = !vl.hidden;
};
function showN(){
    nl.hidden = !nl.hidden;
};
function showDe(){
    del.hidden = !del.hidden;
};
function showH(){
    hl.hidden = !hl.hidden;
};

