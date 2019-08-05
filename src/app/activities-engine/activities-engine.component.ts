import {Component, OnInit,} from '@angular/core';

import { Activity } from "./activities";
import { ActivitiesService } from "../activites.service";
import { Animal } from "../animal-engine/animals";
import { MagicEngineComponent } from "../magic-engine/magic-engine.component";
import { GameEngineComponent} from "../game-engine/game-engine.component";
import { AnimalEngineComponent} from "../animal-engine/animal-engine.component";
import {AnimalsService} from "../animals.service";
import { interval} from "rxjs";
import { takeWhile } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-activities-engine',
  templateUrl: './activities-engine.component.html',
  styleUrls: ['./activities-engine.component.scss']
})

export class ActivitiesEngineComponent implements OnInit {

    activities: Activity[] = [];
    animals: Animal[] = [];
    width: any = 0;
    id: any = 0;
    isHiddenVisible: false;
    private timerCounter: 0;
    buttonDisabled = true;

    constructor(
        private activitiesService: ActivitiesService,
        private magicEngine: MagicEngineComponent,
        private gameEngine: GameEngineComponent,
        private animalEngine: AnimalEngineComponent,
        private animalService: AnimalsService,
        private route: ActivatedRoute
    ) {
    }

    public getActivities(): void {

        this.activitiesService.getActivities()
            .subscribe(activities => this.activities = activities);

    }

    public getAnimals(): void {
        this.animalService.getAnimals()
            .subscribe(animals => this.animals = animals);
    }



    public checkActivities(id) {

        /**this will check against total magic and current animal lvl to see if there enough available for you to purchase an activity,
         * if there is it will set the button to enabled **/

        let currentAnimalLvl = Number(this.getCurrentAnimallvl());
        let activityLvl = this.getActivityLvl(id);
        let currentMagic = this.magicEngine.getMagic();
        let animalSpeed = Number(this.getAnimalSpeed());
        let animalBeauty = Number(this.getAnimalBeauty());
        let animalStr = Number(this.getAnimalStr());
        let animalInt = Number(this.getAnimalInt());

        //console.log('this is inside checkActivities', currentAnimalLvl);


        for (let i = 0; i < this.activities.length; i++) {

            if (this.activities[i].id === id && this.activities[i].cost > currentMagic ) {

                //console.log('true', activityLvl, 'true',currentMagic,  'Name:', this.activities[i].name, 'Lvl', this.activities[i].lvl );

                return true;

            } if (this.activities[i].id === id && this.activities[i].lvl > currentAnimalLvl) {

                return true;

            } if (this.activities[i].id === id && this.activities[i].speed > animalSpeed) {

                return true;

            } if (this.activities[i].id === id && this.activities[i].str > animalStr) {

                return true;

            } if (this.activities[i].id === id && this.activities[i].beauty > animalBeauty) {

                return true;
            } if (this.activities[i].id === id && this.activities[i].intelligence > animalInt) {

                return true;
            }

        }

    }

    public getCurrentAnimallvl() {
        //TODO: create a check for active animal currently there is only 1 animal

        let currentAnimal = this.id;

        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].id == currentAnimal) {
                return this.animals[i].lvl;

            }
        }

    }

    public getAnimalInt() {
        //TODO: create a check for active animal currently there is only 1 animal

        let currentAnimal = this.id;

        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].id == currentAnimal) {
                return this.animals[i].intelligence;

            }
        }
    }

    public getAnimalSpeed() {
        //TODO: create a check for active animal currently there is only 1 animal

        let currentAnimal = this.id;

        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].id == currentAnimal) {
                return this.animals[i].speed;

            }
        }
    }

    public getAnimalStr() {

        let currentAnimal = this.id;

        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].id == currentAnimal) {
                return this.animals[i].str;

            }
        }
    }

    public getAnimalBeauty(){

        let currentAnimal = this.id;

        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].id == currentAnimal) {
                return this.animals[i].beauty;

            }
        }
    }

    public getActivitySpeed(id) {
        let activityArray = this.activities;

        let activitySpeed = activityArray.filter((item: any) => {
            return item.id === id;
        }).map(function (item) {
            return item.speed;
        });

        return activitySpeed.toString()
    }


    public getActivityLvl(id) {
        let activityArray = this.activities;

        let activitylvl = activityArray.filter((item: any) => {
            return item.id === id;
        }).map(function (item) {
            return item.lvl;
        });

        return activitylvl.toString();
    }

    public getActivitytime(id) {
        let activityArray = this.activities;

        let activitylvl = activityArray.filter((item: any) => {
            return item.id === id;
        }).map(function (item) {
            return item.time;
        });

        return activitylvl.toString();
    }

    public getActivityExp(id) {
        let activityArray = this.activities;

        let activityExp = activityArray.filter((item: any) => {
            return item.id === id;
        }).map(function (item) {
            return item.expGain;
        });

        return activityExp.toString();
    }

    public purchaseActivity(cost, id) {

        let totalMagic = document.getElementById('magicTotal').innerHTML;

        if (totalMagic >= cost) {

            this.gameEngine.totalMagic -= cost;
            this.magicEngine.removeMagic(cost);
            this.updateActivity(id);
            this.checkClass(id);

        } else {

            console.log('You Do not have enough magic');
        }

    }



    updateActivity(id) {

        for (let i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id == id) {
                this.activities[i].count++;
                this.activities[i].cost += this.activities[i].activityIncrease;

            }
        }

    }

    resetActivity(id){
        //TODO: create function to reset all setting back to 0

        let totalMagic = this.magicEngine.getMagic();

        for (let i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id == id) {
                this.activities[i].isrunning = false;
                this.width = 0;
                let allTheMagic = ( totalMagic += this.activities[i].reward );
                this.magicEngine.updateMagic(allTheMagic);
                this.updateAnimalExp(id);
                setTimeout(() =>
                    this.levelUpAnimal(), 1500);
            }
        }

    }

    checkClass(id){

        for (let i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id == id) {
                this.runProgressBar(id);
                this.activities[i].isrunning = true;
            }
        }
    }


    runProgressBar(id) {

        let time = Number(this.getActivitytime(id));

        let countDown =  interval(time)
            .pipe(takeWhile(() =>
                this.isWidthWithinLimit(id)
            ));

       countDown.subscribe(() => {
            this.width = this.width + 1;
        });

       return() => {
           clearInterval();
       }
    }

    isWidthWithinLimit(id) {
        if (this.width === 100) {
            setTimeout(() =>
            this.resetActivity(id), 3000);
            return false;
        } else {
            return true;
        }
    }

    updateAnimalExp(id){

        /**
         * This will update the animal with the bonus amount from the item you are purchasing.
         */

        let animalId = Number(document.getElementById('animal-id').innerHTML);

        let activityExp = Number(this.getActivityExp(id));

        console.log('Total Exp: ', activityExp);

        for(let i=0; i < this.animals.length; i++){
            if(this.animals[i].id === animalId && activityExp > 0 ){

                let upgrade = ( activityExp + this.animals[i].currentExperience );
                return this.animals[i].currentExperience = upgrade;

            }

        }

    }

    levelUpAnimal(){

        let animalId = Number(document.getElementById('animal-id').innerHTML);
        let currentXp = Number(document.getElementById('current-xp').innerHTML);

        for(let i=0; i < this.animals.length; i++) {

            if( this.animals[i].id === animalId && this.animals[i].experienceNeeded <= currentXp ) {


                let newXp = ( 10 / 100 ) * this.animals[i].experienceNeeded;
                let upgradedXp = (this.animals[i].experienceNeeded + newXp);


                this.animals[i].lvl++;
                this.animals[i].experienceNeeded = upgradedXp;
                this.animals[i].currentExperience = 0;


            }

        }

    }


    ngOnInit() {
        this.getActivities();
        this.getAnimals();

        this.id = this.route.snapshot.paramMap.get("id");

    }

}
