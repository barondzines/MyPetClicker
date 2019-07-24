//TODO: create a boolean for current animal so that you can signify which animal is current

export class Animal {

    id: number;
    name: string;
    description: string;
    age: number = 0;
    evolveLvl: number = 0;
    experienceNeeded: number = 0;
    currentExperience: number = 0;
    speed: number = 0;
    str: number = 0;
    intelligence: number = 0;
    beauty: number = 0;
    happiness: number = 0;
    upgradeCost: number = 0;
    lvl: number = 0;
    currentLvl: number = 0;
    img: string;
    icon: string;
    selected: boolean;
    evolve: boolean;

}
