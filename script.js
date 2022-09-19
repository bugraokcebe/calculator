'use strict'
const yedi = document.getElementById('yedi');
const dort = document.getElementById('dort');
const bir = document.getElementById('bir');
const sekiz = document.getElementById('sekiz');
const bes = document.getElementById('bes');
const iki = document.getElementById('iki');
const sifir = document.getElementById('sifir');
const c = document.getElementById('c');
const dokuz = document.getElementById('dokuz');
const alti = document.getElementById('alti');
const uc = document.getElementById('uc');
const virgul = document.getElementById('virgul');
const silme = document.getElementById('silme');
const bolü = document.getElementById('bolü');
const carpi = document.getElementById('carpi');
const eksi = document.getElementById('eksi');
const arti = document.getElementById('arti');
const esittir = document.getElementById('esittir');

var ekran = document.querySelector('.screen');

var sonuc = '' ;

yedi.addEventListener('click' , function(){
    sonuc = sonuc + "7" ;
    ekran.innerHTML = sonuc;
})

dort.addEventListener('click' , function(){
    sonuc = sonuc + "4" ;
    ekran.innerHTML = sonuc;
})

bir.addEventListener('click' , function(){
    sonuc = sonuc + "1" ;
    ekran.innerHTML = sonuc;
})

sekiz.addEventListener('click' , function(){
    sonuc = sonuc + "8" ;
    ekran.innerHTML = sonuc;
})

bes.addEventListener('click' ,function(){
    sonuc = sonuc + "5" ;
    ekran.innerHTML = sonuc;
})

iki.addEventListener('click' , function(){
    sonuc = sonuc + "2" ;
    ekran.innerHTML = sonuc;
})

sifir.addEventListener('click' , function(){
    sonuc = sonuc + "0" ;
    ekran.innerHTML = sonuc;
})

c.addEventListener('click' ,  function(){
    sonuc = "" ;
    ekran.innerHTML = sonuc;
})

dokuz.addEventListener('click' , function(){
    sonuc = sonuc + "9" ;
    ekran.innerHTML = sonuc;
})

alti.addEventListener('click' , function(){
    sonuc = sonuc + "6" ;
    ekran.innerHTML = sonuc;
})

uc.addEventListener('click' , function(){
    sonuc = sonuc + "3" ;
    ekran.innerHTML = sonuc;
})
virgul.addEventListener('click' , function(){
    sonuc = sonuc + "." ;
    ekran.innerHTML = sonuc;
})

silme.addEventListener('click' , function(){
    sonuc = sonuc.slice(0,-1)
    ekran.innerHTML = sonuc
})

bolü.addEventListener('click' , function(){
    sonuc = sonuc + "/" ;
    ekran.innerHTML = sonuc;
})

carpi.addEventListener('click' , function(){
    sonuc = sonuc + "*" ;
    ekran.innerHTML = sonuc;
})

eksi.addEventListener('click' , function(){
    sonuc = sonuc + "-" ;
    ekran.innerHTML = sonuc;
})

arti.addEventListener('click' , function(){
    sonuc = sonuc + "+" ;
    ekran.innerHTML = sonuc;
})

esittir.addEventListener('click' , function(){
    sonuc = eval(sonuc);
    ekran.innerHTML = sonuc;
})

