function sayHello(name) {
    // si la condition est remplie, on garde la valeur de 'name', sinon on prend ''
    // on notera que "undefined" est falsy, donc on prendra bien '' si l'utilisateur n'entre pas de paramètre
    name=name || '';
    return `Hello ${name}`;
    // équivalent à 'Hello '+name;
}

console.log(sayHello('Bernard').toUpperCase());
document.write(sayHello('Peter'));
sayHello();

let f=function() {
    return 'test';
};
// on met ; car on déclare une variable f=####

f();

let name='bernard';

// déclarer une fonction "globale"
(function () {
    let name='aston';

    // window. permet de créer des variables globales
    window.toto=name;
}());
// semble n'avoir que peu d'intérêt, mais utile pour isoler sa propre bibliothèque des autres existantes (ex: si on utilise les mêmes noms de fonctions que jQuery, on risque des conflits)
// on a un "main" dans un "main" d'une certaine manière
// le () apres } permet d'exécuter immédiatement la fonction

console.log(toto);

(function () {
    let name='Chuck Norris';
    // si on utilise 'let' (ou 'var') devant le nom, la variable reste locale, donc on retire "let" si on veut afficher "Chuck Norris" à la place de "Bernard" plus tard
}());

console.log(name);

// fonctions flechées (arrow functions)

// les parenthèses sont facultatives si on a qu'un seul paramètre
// les {} sont facultatives si on a qu'une commande, mais dans ce cas, on doit supprimer "return" (il est considéré par défaut)
// exemple : [let funky = () => 'Arrow'] est équivalent à :
let funky = () => {
    return 'Arrow';
}

console.log(funky());

// fonctions "callback"

function callMe(callback) {
    console.log('Connexion à la DB');
    console.log('Initialize...');
    callback();
}

callMe(function() {
    console.log('SELECT * FROM table');
});
// on lance la >fonction< "callback" seulement après le traitement du contexte (ici une connexion/initialisation de db factice)