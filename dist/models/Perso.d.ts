export declare class Perso {
    nom: string;
    race: string;
    force: number;
    magie: number;
    vie: number;
    enVie: boolean;
    xp: number;
    constructor(nom: string, race: string, force: number, magie: number, vie: number, enVie: boolean, xp: number);
    presentation(): string;
    attaqueMain(cible: Perso, degat: number): string;
    attaqueEpee(cible: Perso, degat: number): string;
    attaqueMagie(cible: Perso, degat: number): string;
    attaqueMarteau(cible: Perso, degat: number): string;
    attaqueArc(cible: Perso, degat: number): string;
    attaqueRandom(cible: Perso): string;
    mettreAJourEtat(): void;
    etat(): string;
    gagneXp(points: number): void;
}
//# sourceMappingURL=Perso.d.ts.map