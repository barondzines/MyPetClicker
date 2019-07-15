import {Activity} from "../activities-engine/activities";

export const ACTIVITY: Activity[] = [

    {
        id: 123,
        isrunning: false,
        cost: 10 ,
        //1 second equals 1000
        time: '10',
        reward: 12,
        count: 0,
        img: ',/assets/race-icon.png' ,
        lvl: 1,
        name:'Race',
        speed: 0,
        beauty: 0,
        happiness: 0,
        intelligence: 0,
        str: 0,
        activityIncrease: 2,
        expGain: 50,
    },
    {
        id: 124,
        isrunning: false,
        cost: 20 ,
        time: '100',
        reward: 25,
        count: 0,
        img: ',/assets/race-icon.png' ,
        lvl: 1,
        name:'Candy Pull',
        speed: 0,
        beauty: 0,
        happiness: 0,
        intelligence: 0,
        str: 100,
        activityIncrease: 5,
        expGain: 75
    }

];
