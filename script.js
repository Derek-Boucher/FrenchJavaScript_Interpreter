// Dictionnaire de traduction
const translate = {
    // Mots-clés
    'fonction': 'function',
    'retour': 'return',
    'si': 'if',
    'sinon': 'else',
    'pour': 'for',
    'tantque': 'while',
    'faire': 'do',
    'var': 'var',
    'laisser': 'let',
    'const': 'const',
    'importer': 'import',
    'exporter': 'export',
    'essayer': 'try',
    'attraper': 'catch',
    'lancer': 'throw',
    'vrai': 'true',
    'faux': 'false',
    'nul': 'null',
    'indéfini': 'undefined',

    // Méthodes natives
    'console.log': 'console.log',
    'parseInt': 'parseInt',
    'parseFloat': 'parseFloat',
    'Math.random': 'Math.random',
    'Math.plancher': 'Math.floor',
    'Math.plafond': 'Math.ceil',

    // Opérateurs logiques
    'et': '&&',
    'ou': '||',
    'non': '!',  // Le symbole "!" est souvent laissé inchangé en code

    // Structures de contrôle
    'interrupteur': 'switch',  // Peut-être mieux de garder "switch"
    'cas': 'case',
    'parDéfaut': 'default',

    // Fonctions d'ordre supérieur (souvent en anglais)
    'map': 'map',
    'filtrer': 'filter',
    'réduit': 'reduce',
    'pourChaque': 'forEach',

    // Autres
    'objet': 'Object',
    'tableau': 'Array',
    'chaine': 'String',
    'nombre': 'Number',
    'boolean': 'Boolean',
    'attendre': 'await',
    'asynchrone': 'async',
    'classe': 'class',
    'étend': 'extends',
    'super': 'super',
    'ceci': 'this',
    'nouveau': 'new',
    'instancede': 'instanceof'
};


// Fonction pour traduire chaque mot-clé individuellement
function traduireMot(mot) {
    return translate[mot] || mot;
}

// Fonction pour traduire le code français en JavaScript
function traduire(codeFr) {
    const regex = /\b(Math.plafond|Math.plancher|fonction|retour|si|sinon|pour|classe|tantque|faire|var|laisser|const|importer|exporter|essayer|attraper|lancer|vrai|faux|nul|indéfini|attendre|asynchrone|nouveau|interrupteur|cas|parDéfaut|ceci|et|instancede)\b/g;
    return codeFr.replace(regex, (mot) => traduireMot(mot));
}

// Redéfinir console.log pour capturer les résultats
const originalConsoleLog = console.log;
console.log = function(message) {
    document.getElementById('result').innerText += message + '\n'; // Affiche le message
};

// Fonction d'exécution du code traduit
function executerCode() {
    const codeFr = document.getElementById('codeFr').value; // Code en français saisi par l'utilisateur
    const codeJs = traduire(codeFr); // Traduction du code

    // Affichage du code traduit (pour debug)
    console.log(codeJs); 

    try {
        // Créer une nouvelle fonction et exécuter le code JavaScript traduit
        const fonctionGenerée = new Function(codeJs);
        const resultat = fonctionGenerée(); // Exécuter la fonction générée

        // Afficher le résultat final, s'il existe
        if (resultat !== undefined) {
            console.log(resultat);
        }
    } catch (error) {
        document.getElementById('result').innerText += 'Erreur: ' + error.message + '\n';
    }
}