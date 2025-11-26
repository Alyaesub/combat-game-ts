# Combat Game (TypeScript)

Mini simulateur de combat tour par tour en console. Il illustre la creation de personnages avec des stats, l application de bonus selon la race et l enchainement d attaques avec mise a jour des PV/XP.

## Concept
- Chaque personnage (`Perso`) dispose de stats : nom, race, force, magie, vie, XP, etat vivant/KO.
- Attaques disponibles : main, epee, magie, marteau, arc, plus une attaque aleatoire qui pioche parmi ces coups.
- Bonus de degats selon la race (mage, chevalier, nain, orque, elfe) et gain d XP a chaque action reussie.
- Un scenario de demonstration dans `src/utils/combatManager.ts` cree plusieurs heros/ennemis et trace le deroulement du combat dans la console.

## Stack technique
- TypeScript 5 (ES modules).
- Node.js + ts-node pour executer directement le code TS (`npm start`).
- `tsc` pour compiler vers JavaScript (`npm run build`).

## Structure du projet
- `src/index.ts` : point d entree qui lance la demo de combat.
- `src/models/Perso.ts` : classe personnage et toutes les attaques + bonus.
- `src/utils/combatManager.ts` : mise en place des personnages et orchestration du tour de combat de demonstration.
- `src/data/enemies.ts` : emplacement pour definir d autres adversaires ou presets de scenario.
- `dist/` : sortie de compilation apres `npm run build`.

## Demarrage rapide
1) Installer les dependances : `npm install`
2) Lancer la demo console : `npm start`
3) Compiler si besoin : `npm run build` (JS genere dans `dist/`)

## Personnaliser
- Modifier les personnages et leurs stats dans `src/utils/combatManager.ts` (ou creer de nouvelles instances `Perso`).
- Ajouter de nouvelles attaques ou ajuster les bonus dans `src/models/Perso.ts`.
- Renseigner `src/data/enemies.ts` avec des profils d ennemis/presets de combat pour varier les scenarios.

## Pistes d amelioration
- Tests unitaires sur les calculs de degats, bonus et transitions vivant/KO.
- Boucle de combat interactive (CLI) ou interface web pour choisir les actions en temps reel.
- Systemes additionnels : inventaire, effets de statut, IA ennemie, journal de combat persistant.
