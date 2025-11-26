import { Perso } from "../models/Perso.js";
export function combatTest() {
    const gandalf = new Perso("gandalf", "mage", 40, 100, 100, true, 10);
    const arthur = new Perso("arthur", "chevalier", 90, 20, 100, true, 10);
    const atchoum = new Perso("atchoum", "nain", 100, 50, 100, true, 10);
    const astirion = new Perso("astirion", "elfe", 80, 60, 100, true, 10);
    const sinok = new Perso("sinok", "orgue", 90, 10, 100, true, 10);
    console.log(gandalf.presentation());
    console.log(atchoum.attaqueMain(astirion, 5));
    console.log(arthur.attaqueEpee(sinok, 20));
    console.log(gandalf.attaqueMagie(arthur, 40));
    console.log(arthur.attaqueMagie(gandalf, 10));
    console.log(astirion.attaqueArc(atchoum, 30));
    console.log(sinok.attaqueRandom(astirion));
    console.log(arthur.attaqueRandom(sinok));
    console.log(atchoum.attaqueRandom(gandalf));
    console.log(gandalf.attaqueRandom(arthur));
    console.log(sinok.attaqueRandom(arthur));
    console.log(arthur.attaqueRandom(sinok));
    console.log(`il reste a arthur ${arthur.vie} point de vie ${arthur.etat()}`);
    console.log(`il reste a gandalf ${gandalf.vie} point de vie ${gandalf.etat()}`);
    console.log(`il reste a astirion ${astirion.vie} point de vie ${astirion.etat()}`);
    console.log(`il reste a atchoum ${atchoum.vie} point de vie ${atchoum.etat()}`);
    console.log(`il reste a sinok ${sinok.vie} point de vie ${sinok.etat()}`);
}
//# sourceMappingURL=combatManager.js.map