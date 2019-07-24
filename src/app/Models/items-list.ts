import {Items} from "../wonderland-engine/items";

export const ITEMS: Items[] = [

    {
        id: 111,
        name: 'Hay',
        description: 'this is hay and the animal likes it. ',
        cost: 10,
        costIncrease: 5,
        count: 0,
        lvl: 0,
        beautyUpgrade: 0,
        happinessUpgrade: 0,
        speedUpgrade: 0,
        strUpgrade: 1,
        intUpgrade: 0,
        img: '/assets/items/item-icon.png',
        expGain: 50
    },

    {
        id: 115,
        name: 'WaterBucket',
        description: 'this is water and the animal likes it. ',
        cost: 20,
        costIncrease: 8,
        count: 0,
        lvl: 5,
        beautyUpgrade: 0,
        happinessUpgrade: 1,
        speedUpgrade: 1,
        intUpgrade: 0,
        strUpgrade: 0,
        img: '/assets/items/item-icon.png',
        expGain: 50
    }

];
