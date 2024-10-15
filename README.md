# Documentation du Langage de Programmation

## Introduction

Ce document fournit une vue d'ensemble d'un langage de programmation basé sur des mots-clés en français. Il inclut des traductions des mots-clés, des structures de contrôle et des méthodes courantes, ainsi que des exemples de code pour tester chaque fonctionnalité.

## Traductions des Mots-Clés

Voici un dictionnaire de traduction des mots-clés utilisés dans le langage :

| Français         | Anglais          |
|-------------------|------------------|
| fonction          | function         |
| retour            | return           |
| si                | if               |
| sinon             | else             |
| pour              | for              |
| tantque          | while            |
| faire             | do               |
| var               | var              |
| laisser           | let              |
| const             | const            |
| importer          | import           |
| exporter          | export           |
| essayer           | try              |
| attraper          | catch            |
| lancer            | throw            |
| vrai              | true             |
| faux              | false            |
| nul               | null             |
| indéfini         | undefined        |
| console.log       | console.log      |
| parseInt          | parseInt         |
| parseFloat        | parseFloat       |
| Math.random       | Math.random      |
| Math.floor        | Math.floor       |
| Math.ceil         | Math.ceil        |
| interrupteur      | switch           |
| cas               | case             |
| parDéfaut        | default          |
| map               | map              |
| filtrer           | filter           |
| réduit            | reduce           |
| pourChaque        | forEach          |
| objet             | Object           |
| tableau           | Array            |
| chaine            | String           |
| nombre            | Number           |
| boolean           | Boolean          |
| fonction fléchée  | () =>            |
| attendre          | await            |
| asynchrone        | async            |
| classe            | class            |
| étend             | extends          |
| super             | super            |
| ceci              | this             |
| nouveau           | new              |
| instancede        | instanceof       |

## Exemples de Tests

Voici des exemples de code en utilisant les mots-clés traduits, incluant tous les exemples de tests rassemblés.


### 1. Définition d'une fonction et retour d'une valeur
```
fonction ajouter(a, b) {
    retour a + b;
}
console.log(ajouter(2, 3)); 

// Résultat attendu en JS: function ajouter(a, b) { return a + b; } console.log(ajouter(2, 3));
```


### 2. Utilisation de la condition
```
laisser a = 10;
laisser b = 5;

si (a > b) {
    console.log("a est plus grand");
} sinon {
    console.log("b est plus grand");
}; 

// Résultat attendu en JS: if (a > b) { console.log("a est plus grand"); } else { console.log("b est plus grand"); }
```

### 3. Boucle for
```
pour (laisser i = 0; i < 5; i++) {
    console.log(i);
} 

// Résultat attendu en JS: for (let i = 0; i < 5; i++) { console.log(i); }
```

### 4. Boucle while
```
laisser i = 0;
tantque (i < 5) {
    console.log(i);
    i++;
} 

// Résultat attendu en JS: let i = 0; while (i < 5) { console.log(i); i++; }
```

### 5. Utilisation de try-catch
```
essayer {
    console.log(undeclaredVariable);
} attraper (erreur) {
    console.log("Erreur: " + erreur);
} 

// Résultat attendu en JS: try { console.log(undeclaredVariable); } catch (error) { console.log("Erreur: " + error); }
```

### 6. Déclaration de variables
```
var nom = "Alice";
const age = 30;
laisser pays = "France"; 

// Résultat attendu en JS: var nom = "Alice"; const age = 30; let pays = "France";
```

### 7. Définition d'une classe
```
classe Animal {
    constructor(nom) {
        ceci.nom = nom;
    }
}

laisser chien = nouveau Animal("Rex");
console.log(chien.nom);

// Résultat attendu en JS: class Animal { constructor(nom) { this.nom = nom; } }
```

### 9. Utilisation de l'opérateur logique
```
si (a > 0 et b > 0) {
    console.log("a et b sont positifs");
} 

// Résultat attendu en JS: if (a > 0 && b > 0) { console.log("a et b sont positifs"); }
```

### 10. Utilisation d'un tableau et de ses méthodes
```
laisser nombres = [1, 2, 3];
laisser carrés = nombres.map(n => n * n);
console.log(carrés);

// Résultat attendu en JS: let nombres = [1, 2, 3]; let carrés = nombres.map(n => n * n); console.log(carrés);
```

### 11. Définition d'un objet
```
laisser utilisateur = {
    nom: "Alice",
    age: 30
};
console.log(utilisateur);

// Résultat attendu en JS: let utilisateur = { nom: "Alice", age: 30 }; console.log(utilisateur);
```

### 12. Utilisation de l'opérateur d'instance
```
si (chien instancede Animal) {
    console.log("C'est un animal");
} 

// Résultat attendu en JS: if (chien instanceof Animal) { console.log("C'est un animal"); }
```