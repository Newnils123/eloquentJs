# Table des matières

- [Histoire](#histoire)
- [Quelques exemples](#quelques-exemples)
  - [Exemple de boucle while](#exemple-de-boucle-while)
  - [Exemple de boucle for](#exemple-de-boucle-for)
  - [Exemple de boucle for...of](#exemple-de-boucle-forof)
  - [Exemple de fonction factorielle](#exemple-de-fonction-factorielle)
- [Les valeurs](#les-valeurs)
  - [Comment déclarer une variable ?](#comment-déclarer-une-variable)
- [Les fonctions et conditions](#les-fonctions-et-conditions)
  - [Les fonctions](#les-fonctions)
  - [Les conditions](#les-conditions)
- [Les boucles](#les-boucles)
  - [Introduction aux boucles](#introduction-aux-boucles)
  - [La boucle while](#la-boucle-while)
  - [La boucle for](#la-boucle-for)
  - [La boucle for...of](#la-boucle-forof)
  - [La boucle do...while](#la-boucle-dowhile)
  - [Comparaison des boucles](#comparaison-des-boucles)
  - [Erreurs courantes avec les boucles](#erreurs-courantes-avec-les-boucles)

---

## Histoire

> Javascript a été introduit en 1995 pour ajouter des programmes sur les pages web dans le Netscape Navigator. <br>
> Il a maintenant été adopté par tous les navigateurs web graphiques majeurs. <br>
> Il est important de noter que JavaScript n'a aucun lien avec le langage de programmation Java. Son nom est un élément marketing. <br>
> Le langage est aussi utilisé par des bases de données telles que MongoDB et CouchDB qui l'emploient en tant que langage de requêtes. <br>

## Quelques exemples :

### Exemple de boucle while

```javascript
let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
// → 55
```

> Explications : <br>
> On définit `total` contenant 0 et `count` qui "commence" à 1, <br>
> tant que `count` <= 10, on ajoute `count` à `total` puis on augmente `count` de 1 <br>
> lorsque `count = 11`, on stop la boucle puis on affiche la variable `total` dans la console via `console.log(total)`. <br>

### Exemple de boucle for

```javascript
let result = 1;
for (let i = 1; i <= 5; i++) {
  result *= i;
}
console.log(result);
// → 120
```

> Explications : <br>
> On initialise `result` à 1. <br>
> La boucle commence avec `i = 1` et continue tant que `i <= 5`. <br>
> À chaque itération, on multiplie `result` par `i` et on incrémente `i`. <br>
> À la fin, on affiche `result` qui contient la valeur de `1 * 2 * 3 * 4 * 5` soit `120`. <br>

### Exemple de boucle for...of

```javascript
let array = ["apple", "banana", "cherry"];
for (let fruit of array) {
  console.log(fruit);
}
// → apple
// → banana
// → cherry
```

> Explications : <br>
> On utilise une boucle `for...of` pour parcourir chaque élément d'un tableau. <br>
> À chaque itération, la variable `fruit` contient un élément du tableau `array`. <br>
> On affiche chaque élément dans la console. <br>

### Exemple de fonction factorielle

```javascript
function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}
```

> Explications : <br>
> On fait une fonction `factorial` qui ne prend qu'une seule valeur `n` <br>
> On teste si `n` est égal à `0`, <br>
> si c'est le cas, on renvoie `1` <br>
> sinon, on renvoie `n * factorial(n - 1)` donc on calcule la factorielle d'un nombre. <br>
> Pour `n = 8` par exemple, on renvoie donc le résultat de `8 * 7 * 6 * 5 * 4 * 3 * 2 * 1` soit `40320`.

## Les valeurs :

Dans le monde des ordinateurs, il n'y a que des données, des 0 et des 1. <br>
Toutes ces données sont stockées sous forme de `bits`. <br>
_13 par exemple :_ <br>
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-----|----|----|----|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 |

`13 = 8 + 4 + 1`

Il existe 3 valeurs spéciales en Javascript qui sont considérées comme des nombres mais <br>
ne se comportent pas tel quel.

Les 2 premiers sont <br>`Infinity` <br>ainsi que <br>`- Infinity` <br>qui représentent les `infinités` positives et négatives.<br>
La troisième est `NaN` qui signifie `Not a Number`. <br>

> On obtient ce résultat quand on essaye de faire <br>`0 / 0` <br>ou aussi <br>`Infinity - Infinity`.

Il est aussi possible d'écrire des nombres sous forme de notation scientifique. <br>

> Prenons pour exemple le nombre `299'800'000`. <br>
> En notation scientifique cela donne `2.998 × 10⁸` <br>
> Mais on peut aussi l'écrire `2.998e8`. Ce qui sera la forme utilisée en Javascript.

### Comment déclarer une variable ? :

```javascript
let a = 64;
const b = 3.1415926;
const c = a * b;
```

> Une variable déclarée avec `let` peut être modifiée <br>
> Une variable déclarée avec `const` ne peut être réassignée car il s'agit d'une constante <br>
> Une variable peut tout autant contenir une opération qui se conforme bien entendu à la priorité des opérations.

## Les strings (chaînes de caractères) :

Les strings sont un autre type de données basiques. On les utilise pour représenter du texte. <br>
Elles sont placées entre des `quotes` <br>

### Concaténation de strings

```javascript
const a = "Hello";
const b = "World";
const c = ` !`;

console.log(a + b + c);
// Hello World !
```

> Les `simple quotes` sont utilisées pour stocker une chaîne de caractères simple.<br>
> Les `double quotes` ont exactement les mêmes propriétés que les `simple quotes`. <br>
> Notez qu'il faut utiliser un caractère d'échappement si un autre de ces caractères est employé.<br>

```javascript
const a = "Il fait beau aujourd'hui !";
const b = 'Il faut sélectionner "register".';
```

> Bien qu'il soit préférable d'inverser les types de guillemets <br>

```javascript
const a = "Il fait beau aujourd'hui !";
const b = 'Il faut sélectionner "register".';
```

### Templates literals

> Et dans la syntaxe moderne, on peut aussi utiliser les `back ticks` : <br>

```javascript
const a = `Il fait beau aujourd'hui !`;
const b = `Il faut sélectionner "register".`;
```

Les `single quotes` et `double quotes` peuvent être concaténées.

```javascript
const prenom = "Alice";
const message = "Bonjour " + prenom + " !";
console.log(message);
```

> En JavaScript, les chaînes définies avec ' ou " sont équivalentes et <br>
> peuvent être mélangées lors d’une concaténation.

Les `back ticks` permettent de créer des **templates literals**.

```javascript
const nom = "Alice";
const message = `Bonjour ${nom} !`;

console.log(message); // Bonjour Alice !
```

> ici, `${nom}` est interpolé dans la chaîne. Et ceci n'est possible que grâce au backticks.

Avec ceci on peut aussi faire du multilignes :

```javascript
const texte = `Ligne 1
Ligne 2
Ligne 3`;
```

> Alors, qu'avec des `quotes`, il faudrait faire comme ceci :

```javascript
const texte = "Ligne 1 \nLigne 2 \nLigne 3";
```

> On remarque que c'est beaucoup moins lisible qu'avec les `backticks`.

### Comparaison de chaînes

En JavaScript, les chaînes sont comparées lettre par lettre, en utilisant les valeurs Unicode des caractères.

```javascript
console.log("Abracadabra" < "Zoro"); // true
```

> Ici, `"A"` est avant `"Z"` dans l'alphabet, donc `"Abracadabra"` est considérée comme plus petite que `"Zoro"`.

### Subtilités à connaître

- Les **majuscules** sont considérées comme plus petites que les minuscules : <br>

```javascript
console.log("Z" < "a"); // true
```

- Les **caractères non-alphabétiques** entrent aussi dans cette comparaison selon leur code Unicode : <br>

```javascript
console.log("!" < "A"); // true
```

> Résumé : la comparaison suit l'ordre Unicode, pas forcément l'ordre alphabétique "humain".

### Les opérateurs de comparaison

Les **opérateurs de comparaison** permettent de comparer deux valeurs.
Ils renvoient toujours un booléen : `true` ou `false`.

###### `>` : Strictement plus grand que

Cet opérateur vérifie si la valeur de gauche est **strictement supérieure** à celle de droite.

```javascript
console.log(9 > 4); // true
console.log(4 > 9); // false
```

###### `<` : Strictement plus petit que

Cet opérateur vérifie si la valeur de gauche est **strictement inférieure** à celle de droite.

```javascript
console.log(4 < 9); // true
console.log(9 < 4); // false
```

###### `>=` : Plus grand ou égal

Cet opérateur renvoie `true` si la valeur de gauche est **supérieure ou égale** à celle de droite.

```javascript
console.log(10 >= 10); // true
console.log(12 >= 10); // true
console.log(8 >= 10); // false
```

###### `<=` : Plus petit ou égal

Cet opérateur renvoie `true` si la valeur de gauche est **inférieure ou égale** à celle de droite.

```javascript
console.log(5 <= 5); // true
console.log(3 <= 5); // true
console.log(7 <= 5); // false
```

###### `==` : égalité (comparaison non stricte)

L’opérateur `==` compare deux valeurs **après conversion automatique de type** (ce qu’on appelle la coercition de type).

```javascript
console.log(5 == "5"); // true
```

Ici, JavaScript convertit la chaîne `"5"` en nombre avant de comparer.

> Cela peut parfois produire des résultats inattendus.

###### `===` : égalité stricte

L’opérateur `===` compare la **valeur et le type**, sans conversion automatique.

```javascript
console.log(5 === "5"); // false
console.log(5 === 5); // true
```

En pratique, on privilégie `===` plutôt que `==` pour éviter les comportements imprévisibles.

> Il existe une seule valeur en JavaScript qui n'est pas égal à elle même, et c'est `NaN` ("Not a Number") <br>

```javascript
console.log(NaN == NaN); // false
```

### Les opérateurs de logique

Il y a aussi des opérations qui peuvent être appliquées aux valeurs booléennes elles-mêmes. <br>
JavaScript en supporte 3 : `&&` (and), `||` (or) et `!` (not).

###### `&&` : AND (et)

L’opérateur `&&` est l'opérateur qui effectue un `"et logique"` binaire.
Le résultat est `true` seulement si **toutes les valeurs** sont `true`.

```javascript
console.log(true && false); // false
console.log(true && true); // true
```

###### `||` : OR (ou)

L’opérateur `||` est l'opérateur qui effectue un `"ou logique"` binaire.
Le résultat est `true` si **au moins une** des valeurs est `true`.

```javascript
console.log(true || false); // true
console.log(false || false); // false
```

###### `!` : NOT

L’opérateur `!` est l'opérateur qui effectue un `"not logique"` unaire.
Il retourne l'inverse de la valeur booléenne donnée.

```javascript
console.log(!true); // false
console.log(!false); // true
```

##### Remarque

En JavaScript, `&&` et `||` ne retournent pas forcément `true` ou `false`.
Ils retournent **une des valeurs de l'expression**.

- `&&` retourne la **première valeur falsy**, sinon la dernière valeur.
- `||` retourne la **première valeur truthy**.

```javascript
const username = input || "Guest";

isLoggedIn && showDashboard();

console.log(true && "bonjour"); // "bonjour"
console.log(0 || 42); // 42
console.log(null || "valeur par défaut"); // "valeur par défaut"
```

Voici la liste des valeurs `falsy` en javascript

```javascript
false;
0 - 0;
0n;
("");
null;
undefined;
NaN;
```

Pour ce qui est des valeurs `truthy`, tout ce qui n'est pas `falsy` est `truthy`

```javascript
"hello"
42
[]
{}
"false"
"0"
```

### `?` L'opérateur conditionnel (ternaire)

L’opérateur `?` est un `"opérateur conditionnel"` ternaire.
Il évalue une condition et retourne une valeur en fonction du résultat

```javascript
const number = 47;

console.log(number % 2 === 0 ? "le nombre est pair" : "le nombre est impair"); // le nombre est impair
```

## Les valeurs vides

Il existe 2 valeurs spéciales, dites vides.

> `null` -> absence intentionnelle de valeur
> `undefined` -> variable non initialisée ou propriété inexistante

```javascript
let a;
console.log(a); // undefined
console.log(typeof a); // "undefined"

let b = null;

console.log(b); // null
console.log(typeof b); // "object" (c'est un bug historique du JS)
```

### Comparaison entre `null` et `undefined`

```javascript
console.log(null == undefined); // true
console.log(null === undefined); // false
```

### Les cas d'utilisation

- `undefined` est souvent géré automatiquement par JS (variables, fonctions sans `return`, propriétés manquantes).
- `null` est utilisé quand tu veux explicitement dire "il n'y a pas de valeurs ici".

## Conversion de type automatique

le JavaScript fait de son mieux pour accepter presque tous les programmes que l'on lui donne.
Comme démontré par les expressions suivantes :

```javascript
console.log(8 * null);
// → 0
console.log("5" - 1);
// → 4
console.log("5" + 1);
// → 51
console.log("five" * 2);
// → NaN
console.log(false == 0);
// → true
```

Quand un operateur est appliqué au "mauvais" type de valeur, JavaScript va le convertir dans le type demandé.

```javascript
console.log(null == undefined); // true
console.log(null == 0); // false
```

> Ce procédé est souvent utile quand on veut tester si une variable a une vrai valeur au lieu d'être `null` ou `undefined`.

## Circulation courte des opérateurs logiques

Les opérateurs logiques `&&` et `||` ne retournent pas forcément `true` ou `false`, mais peuvent retourner une des valeurs de l'expression.

```javascript
console.log(null || "bonjour"); // "bonjour"
console.log("hello" || "world"); // "hello"
console.log(0 && "hello"); // 0
console.log("hello" && "world"); // "world"
```

L'opérateur `??` (nullish coalescing) est similaire à `||`, mais il ne considère que `null` et `undefined` comme valeurs "falsy".

```javascript
console.log(0 || 100); // 100
console.log(0 ?? 100); // 0
console.log(null ?? 100); // 100
```

L'opérateur `&&` fonctionne de manière similaire, mais il retourne la première valeur "falsy" ou la dernière valeur si toutes sont "truthy".

Une autre propriété importante de ces opérateurs est qu'ils évaluent les expressions de gauche à droite et s'arrêtent dès que le résultat est déterminé (c'est ce qu'on appelle la "une évaluation à circulation courte").

## Les fonctions et conditions

### Les fonctions

```javascript
// Déclaration d'une fonction classique
function direBonjour(nom) {
  return `Bonjour, ${nom} !`;
}

console.log(direBonjour("Alice"));
// → Bonjour, Alice !

// Fonction anonyme assignée à une variable
const addition = function (a, b) {
  return a + b;
};

console.log(addition(5, 3));
// → 8

// Fonction fléchée
const multiplier = (a, b) => a * b;

console.log(multiplier(4, 7));
// → 28
```

> Les fonctions permettent de regrouper du code réutilisable. <br>
> Elles peuvent être déclarées de différentes manières : classique, anonyme ou fléchée. <br>
> Les fonctions fléchées sont particulièrement utiles pour leur syntaxe concise. <br>

### Les conditions

```javascript
const age = 20;

if (age >= 18) {
  console.log("Vous êtes majeur.");
} else {
  console.log("Vous êtes mineur.");
}

// Utilisation de else if
const heure = 14;

if (heure < 12) {
  console.log("Bonjour !");
} else if (heure < 18) {
  console.log("Bon après-midi !");
} else {
  console.log("Bonsoir !");
}

// Opérateur ternaire
const estMajeur = age >= 18 ? "majeur" : "mineur";
console.log(`Vous êtes ${estMajeur}.`);
```

> Les conditions permettent d'exécuter du code en fonction de certaines situations. <br>
> On peut utiliser `if`, `else if`, `else` ou encore l'opérateur ternaire pour des cas simples. <br>
> Les conditions rendent le code dynamique et interactif. <br>

---

## Les strings (chaînes de caractères) :

Les strings sont un autre type de données basiques. On les utilise pour représenter du texte. <br>
Elles sont placées entre des `quotes` <br>

### Concaténation de strings

```javascript
const a = "Hello";
const b = "World";
const c = ` !`;

console.log(a + b + c);
// Hello World !
```

> Les `simple quotes` sont utilisées pour stocker une chaîne de caractères simple.<br>
> Les `double quotes` ont exactement les mêmes propriétés que les `simple quotes`. <br>
> Notez qu'il faut utiliser un caractère d'échappement si un autre de ces caractères est employé.<br>

```javascript
const a = "Il fait beau aujourd'hui !";
const b = 'Il faut sélectionner "register".';
```

> Bien qu'il soit préférable d'inverser les types de guillemets <br>

```javascript
const a = "Il fait beau aujourd'hui !";
const b = 'Il faut sélectionner "register".';
```

### Templates literals

> Et dans la syntaxe moderne, on peut aussi utiliser les `back ticks` : <br>

```javascript
const a = `Il fait beau aujourd'hui !`;
const b = `Il faut sélectionner "register".`;
```

Les `single quotes` et `double quotes` peuvent être concaténées.

```javascript
const prenom = "Alice";
const message = "Bonjour " + prenom + " !";
console.log(message);
```

> En JavaScript, les chaînes définies avec ' ou " sont équivalentes et <br>
> peuvent être mélangées lors d’une concaténation.

Les `back ticks` permettent de créer des **templates literals**.

```javascript
const nom = "Alice";
const message = `Bonjour ${nom} !`;

console.log(message); // Bonjour Alice !
```

> ici, `${nom}` est interpolé dans la chaîne. Et ceci n'est possible que grâce au backticks.

Avec ceci on peut aussi faire du multilignes :

```javascript
const texte = `Ligne 1
Ligne 2
Ligne 3`;
```

> Alors, qu'avec des `quotes`, il faudrait faire comme ceci :

```javascript
const texte = "Ligne 1 \nLigne 2 \nLigne 3";
```

---

## Les boucles

### Introduction aux boucles

Les boucles sont des outils puissants en programmation qui permettent d'exécuter un bloc de code plusieurs fois. Elles sont utilisées dans de nombreux cas pratiques, comme :

- Parcourir des listes d'éléments (par exemple, une liste de produits dans un panier d'achat).
- Répéter des calculs jusqu'à atteindre un résultat précis.
- Automatiser des tâches répétitives, comme envoyer des emails à plusieurs destinataires.

#### Exemple réel : Calculer la moyenne des notes d'une classe

```javascript
let notes = [15, 18, 12, 10, 14];
let total = 0;
for (let note of notes) {
  total += note;
}
let moyenne = total / notes.length;
console.log(`La moyenne est de ${moyenne}`);
// → La moyenne est de 13.8
```

> Ici, une boucle `for...of` est utilisée pour additionner toutes les notes dans un tableau.

---

### La boucle while

La boucle `while` est idéale lorsque vous ne savez pas à l'avance combien de fois le code devra s'exécuter. Elle repose sur une condition qui est vérifiée avant chaque itération.

#### Exemple réel : Attendre qu'un utilisateur entre une valeur correcte

```javascript
let input;
while (!input || input.length < 3) {
  input = prompt("Entrez un mot de passe (au moins 3 caractères) :");
}
console.log("Mot de passe accepté");
```

> Cette boucle continue de demander un mot de passe tant que l'utilisateur n'entre pas une valeur valide.

---

### La boucle for

La boucle `for` est parfaite lorsque le nombre d'itérations est connu à l'avance. Elle est souvent utilisée pour parcourir des tableaux ou effectuer des calculs répétitifs.

#### Exemple réel : Générer une table de multiplication

```javascript
let nombre = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
}
```

> Cette boucle génère et affiche la table de multiplication pour le nombre 7.

---

### La boucle for...of

La boucle `for...of` est utilisée pour parcourir les éléments d'une structure itérable, comme un tableau ou une chaîne de caractères.

#### Exemple réel : Afficher les noms des employés

```javascript
let employes = ["Alice", "Bob", "Charlie"];
for (let employe of employes) {
  console.log(`Bonjour, ${employe} !`);
}
```

> Cette boucle parcourt un tableau de noms et affiche un message personnalisé pour chaque employé.

---

### La boucle do...while

La boucle `do...while` garantit que le bloc de code est exécuté au moins une fois, même si la condition est fausse dès le départ.

#### Exemple réel : Simuler un jeu de dés

```javascript
let lancer;
do {
  lancer = Math.floor(Math.random() * 6) + 1;
  console.log(`Vous avez lancé un ${lancer}`);
} while (lancer !== 6);
console.log("Félicitations, vous avez obtenu un 6 !");
```

> Cette boucle simule un lancer de dés jusqu'à ce que le joueur obtienne un 6.

---

### Comparaison des boucles

Chaque type de boucle a ses avantages et inconvénients. Voici un tableau récapitulatif :

| Type de boucle | Avantages                                        | Inconvénients                            |
| -------------- | ------------------------------------------------ | ---------------------------------------- |
| `while`        | Flexible, idéal pour des conditions dynamiques   | Risque de boucle infinie si mal utilisée |
| `for`          | Simple et clair pour un nombre fixe d'itérations | Moins adapté aux conditions dynamiques   |
| `for...of`     | Lisible, parfait pour les tableaux               | Ne donne pas accès à l'index             |
| `do...while`   | Exécute toujours au moins une fois               | Moins utilisé, peut être déroutant       |

---

### Erreurs courantes avec les boucles

1. **Boucles infinies** :
   Une boucle infinie se produit lorsque la condition de sortie n'est jamais remplie.

   ```javascript
   let i = 0;
   while (i < 5) {
     console.log(i);
     // Oubli d'incrémenter i
   }
   ```

2. **Mauvaise condition** :
   Une condition incorrecte peut entraîner des résultats inattendus.

   ```javascript
   for (let i = 0; i <= 10; i--) {
     // Mauvaise incrémentation
     console.log(i);
   }
   ```

3. **Modification de la structure pendant l'itération** :
   Modifier un tableau pendant qu'on le parcourt peut causer des erreurs.

   ```javascript
   let array = [1, 2, 3];
   for (let i = 0; i < array.length; i++) {
     array.pop();
   }
   ```

4. **Utilisation incorrecte de `for...of`** :
   Si vous avez besoin de l'index, utilisez `for` au lieu de `for...of`.

   ```javascript
   let fruits = ["pomme", "banane", "cerise"];
   for (let i = 0; i < fruits.length; i++) {
     console.log(`${i}: ${fruits[i]}`);
   }
   ```
