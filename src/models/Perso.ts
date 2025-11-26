export class Perso {
  nom: string;
  race: string;
  force: number;
  magie: number;
  vie: number;
  enVie: boolean;
  xp: number;
  constructor(nom: string, race: string, force: number, magie: number, vie: number, enVie: boolean, xp: number) {
    this.nom = nom;
    this.race = race;
    this.force = force;
    this.magie = magie;
    this.vie = vie;
    this.enVie = enVie;
    this.xp = xp;
  }
  presentation(): string {
    return (`salut je suis ${this.nom} je suis de la race ${this.race} ma force est de ${this.force} et ma magie de ${this.magie} et ma vie est de ${this.vie} points et j'ai ${this.xp} d'XP`)
  };

  attaqueMain(cible: Perso, degat: number) {
    const totalDegat = degat;
    cible.vie -= totalDegat;
    cible.mettreAJourEtat();
    this.gagneXp(10);
    if(cible.vie <= 0) {
      return (`${this.nom} attaque ${cible.nom} avec une attaque de ${degat} est le met KO`)
    }
    return (`${this.nom} attaque a la main ${cible.nom} et lui fait perdre ${degat} point de vie, il reste ${cible.vie} PV a ${cible.nom} `);
  };

  attaqueEpee(cible: Perso, degat: number) {
    let bonus = 0;
    if (this.race === "chevalier") {
      bonus = 20;
    }
    const totalDegat = degat + bonus;
    cible.vie -= totalDegat;
    cible.mettreAJourEtat();
    this.gagneXp(20);
    if(cible.vie <= 0) {
      return (`${this.nom} attaque ${cible.nom} avec une attaque de ${degat} est le met KO`)
    }
    return (`${this.nom} attaque a l'épée ${cible.nom} et lui fait perdre ${totalDegat} points de vie, dont ${bonus} point de bonus, il reste ${cible.vie} PV a ${cible.nom}`)
  };

  attaqueMagie(cible: Perso, degat: number){
    let bonus = 0;
    if (this.race === "mage") {
      bonus = 20;
    }
    const totalDegat = degat + bonus;
    cible.vie -= totalDegat;
    cible.mettreAJourEtat();
    this.gagneXp(20);
    if(cible.vie <= 0) {
      return (`${this.nom} attaque ${cible.nom} avec une attaque de ${totalDegat} est le met KO`)
    }
      return (`${this.nom} attaque en magie ${cible.nom} et lui a fait perdre ${totalDegat} points de vie, dont ${bonus} point de bonus, il reste ${cible.vie} PV a ${cible.nom}`)
  };

  attaqueMarteau(cible: Perso, degat: number): string {
    let bonus = 0;
    if (this.race === "nain" || this.race === "orgue") {
      bonus = 20;
    }
    const totalDegat = degat + bonus;
    cible.vie -= totalDegat;
    cible.mettreAJourEtat();
    this.gagneXp(30);
    if (cible.vie <= 0) {
      return `${this.nom} attaque ${cible.nom} au marteau avec ${totalDegat} de dégâts et le met KO !`;
    }
    return `${this.nom} attaque ${cible.nom} au marteau et lui fait perdre ${totalDegat} points. Il reste ${cible.vie} PV à ${cible.nom}.`;
  };

  attaqueArc(cible: Perso, degat: number): string {
    let bonus = 0;
    if (this.race === "elfe") {
      bonus = 20;
    }
    const totalDegat = degat + bonus;
    cible.vie -= totalDegat;
    cible.mettreAJourEtat();
    this.gagneXp(20);
    if(cible.vie <= 0) {
      return `${this.nom} attaque ${cible.nom} a l'arc avec ${totalDegat} de dégâts et le met KO !`;
    }
    return `${this.nom} attaque ${cible.nom} a l'arc et lui fait perdre ${totalDegat} point. il reste ${cible.vie} PV a ${cible.nom}`
  }

  attaqueRandom(cible: Perso): string {
    const attaque = [
      () => this.attaqueMain(cible, 10),
      () => this.attaqueEpee(cible, 20),
      () => this.attaqueMagie(cible, 20),
      () => this.attaqueMarteau(cible, 30),
      () => this.attaqueArc(cible, 25),
    ];
    const alea = Math.floor(Math.random() * attaque.length);
    return attaque[alea]?.() || `${this.nom} rate son attaque`;
  }

  mettreAJourEtat(): void {
  if (this.vie <= 0) {
    this.enVie = false;
    this.vie = 0; 
  }
}
  etat(): string {
    return ` | Race : ${this.race} | XP : ${this.xp} | En vie: ${this.enVie ? "✅" : "🚫"}`
  }
  gagneXp(points: number): void {
    this.xp += points;
  }
}



