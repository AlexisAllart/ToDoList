
function onReady() {
    let title=document.querySelector('h1');
    title.style.color='red';

    let name='toto';
    // alert(name);
    name='Wilfried';
    // alert(name);

    const t=['a','b','c'];
    t[0]='e';
    // "t" ne peut être modifié, mais "t[0]" si
    // console.log(t);

    console.log('hello'.toUpperCase());

    // Attention, cette utilisation ne fonctionne qu'avec les BACKTICKS ``
    console.log(`${name} a fait du sport`);
    console.log(name.length);

    let a='test';
    let b=new String('yeoman');
    let c=new String('yeoman');

    console.log(typeof a, typeof b);
    // a est un "string", b est un "object" (ou autrement appelé une "instance")
}

// Les 2 lignes suivantes ont le même effet :
// window.onload=onReady;
window.addEventListener('load', onReady);
// attention : 1 seul "onload" par page

