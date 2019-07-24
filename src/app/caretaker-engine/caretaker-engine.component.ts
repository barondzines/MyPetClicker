import { Component, OnInit } from '@angular/core';
import {Caretaker} from "./caretaker";
import {CaretakerService} from "../caretaker.service";
import {AnimalEngineComponent} from "../animal-engine/animal-engine.component";
import {Animal} from "../animal-engine/animals";
import {AnimalsService} from "../animals.service";
import {MagicEngineComponent} from "../magic-engine/magic-engine.component";

@Component({
  selector: 'app-caretaker-engine',
  templateUrl: './caretaker-engine.component.html',
  styleUrls: ['./caretaker-engine.component.scss']
})
export class CaretakerEngineComponent implements OnInit {

  caretakers: Caretaker[] = [];
  animals: Animal[] = [];
  id: any = 0;
  MPS: any = 0;

  constructor(
      private caretakerService: CaretakerService,
      private animalEngine: AnimalEngineComponent,
      private animalService: AnimalsService,
      private magicEngine: MagicEngineComponent

  ) { }

  public getCaretakers(): void{
    this.caretakerService.getCaretakers()
        .subscribe(caretakers => this.caretakers = caretakers);
  }

  public getAnimals(): void {
    this.animalService.getAnimals()
        .subscribe(animals => this.animals = animals);
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

  public getCaretakerLvl(id) {
    let caretakerArray = this.caretakers;

    let caretakerlvl = caretakerArray.filter((caretaker: any) => {
      return caretaker.id === id;
    }).map(function (caretaker) {
      return caretaker.lvl;
    });

    return caretakerlvl.toString();
  }

  public getcaretakerStr(id){
    let caretakerArray = this.caretakers;

    let caretakerStr = caretakerArray.filter((caretaker: any) => {
      return caretaker.id === id;
    }).map(function(caretaker) {
      return caretaker.str;
    });

    return caretakerStr.toString();
  }

  public getcaretakerBeauty(id){
    let caretakerArray = this.caretakers;

    let caretakerBeauty = caretakerArray.filter((caretaker: any) => {
      return caretaker.id === id;
    }).map(function(caretaker) {
      return caretaker.beauty;
    });

    return caretakerBeauty.toString();
  }

  public getcaretakerSpeed(id){
    let caretakerArray = this.caretakers;

    let caretakerSpeed = caretakerArray.filter((caretaker: any) => {
      return caretaker.id === id;
    }).map(function(caretaker) {
      return caretaker.speed;
    });

    return caretakerSpeed.toString();
  }

  public getcaretakerInt(id){
    let caretakerArray = this.caretakers;

    let caretakerInt = caretakerArray.filter((caretaker: any) => {
      return caretaker.id === id;
    }).map(function(caretaker) {
      return caretaker.intelligence;
    });

    return caretakerInt.toString();

  }

  purchaseCaretaker(id) {

    console.log(id);

    let animalId = Number(document.getElementById('animal-id').innerHTML);

    let caretakerLvl = this.getCaretakerLvl(id);
    let currentMagic = this.magicEngine.getMagic();
    let animalSpeed = Number(this.getAnimalSpeed());
    let animalBeauty = Number(this.getAnimalBeauty());
    let animalStr = Number(this.getAnimalStr());
    let animalInt = Number(this.getAnimalInt());


    for (let i = 0; i < this.caretakers.length; i++) {

      if (this.caretakers[i].id === id && this.caretakers[i].cost <= currentMagic ) {

        if(this.caretakers[i].str > 0){

          this.magicEngine.removeMagic(this.caretakers[i].cost);
          this.caretakers[i].lvl ++;
          this.caretakers[i].cost += this.caretakers[i].upgradeCost;
          this.MPS += this.caretakers[i].MPS;
          this.updateAnimal(id);
        }

        if(this.caretakers[i].intelligence > 0){

          this.magicEngine.removeMagic(this.caretakers[i].cost);
          this.caretakers[i].lvl ++;
          this.caretakers[i].cost += this.caretakers[i].upgradeCost;
          this.MPS += this.caretakers[i].MPS;
          this.updateAnimal(id);
        }

        if(this.caretakers[i].happiness > 0){

          this.magicEngine.removeMagic(this.caretakers[i].cost);
          this.caretakers[i].lvl ++;
          this.caretakers[i].cost += this.caretakers[i].upgradeCost;
          this.MPS += this.caretakers[i].MPS;
          this.updateAnimal(id);
        }

        if(this.caretakers[i].speed > 0){

          this.magicEngine.removeMagic(this.caretakers[i].cost);
          this.caretakers[i].lvl ++;
          this.caretakers[i].cost += this.caretakers[i].upgradeCost;
          this.MPS += this.caretakers[i].MPS;
          this.updateAnimal(id);
        }

        if(this.caretakers[i].beauty > 0){

          this.magicEngine.removeMagic(this.caretakers[i].cost);
          this.caretakers[i].lvl ++;
          this.caretakers[i].cost += this.caretakers[i].upgradeCost;
          this.MPS += this.caretakers[i].MPS;
          this.updateAnimal(id);
        }


      }

    }


  }

  updateAnimal(id){

    /**
     * This will update the animal with the bonus amount from the caretaker you are purchasing.
     */

    let animalId = Number(document.getElementById('animal-id').innerHTML);

    console.log('this is the updateAnimalID', animalId);

    let caretakerStr = Number(this.getcaretakerStr(id));
    let caretakerInt = Number(this.getcaretakerInt(id));
    let caretakerSpeed = Number(this.getcaretakerSpeed(id));
    let caretakerBeauty = Number(this.getcaretakerBeauty(id));

    for(let i=0; i < this.animals.length; i++){

      if(this.animals[i].id === animalId && caretakerStr > 0 ){

        console.log(this.animals[i].str);
        let upgrade = ( caretakerStr + this.animals[i].str );
        return this.animals[i].str = upgrade;


      } if(this.animals[i].id === animalId && caretakerInt > 0 ){

        let upgrade = ( caretakerInt + this.animals[i].intelligence );
        return this.animals[i].intelligence = upgrade;


      } if(this.animals[i].id === animalId && caretakerSpeed > 0 ){

        let upgrade = ( caretakerSpeed + this.animals[i].speed );
        return this.animals[i].speed = upgrade;


      } if(this.animals[i].id === animalId && caretakerBeauty > 0 ){

        let upgrade = ( caretakerBeauty + this.animals[i].beauty );
        return this.animals[i].beauty = upgrade;

      }


    }

  }

  checkCaretakers(id){

    /**this will check against total magic to see if there enough available for you to purchase an activity,
     * if there is it will set the button to enabled **/

    let currentMagic = this.magicEngine.getMagic();

    for (let i = 0; i < this.caretakers.length; i++) {

      if (this.caretakers[i].id === id && this.caretakers[i].cost > currentMagic) {

        return true;

      }
    }
  }

  mpsEngine() {

    let totalMagic = this.magicEngine.getMagic();
    let allTheMagic = ( totalMagic += this.MPS );

    this.magicEngine.updateMagic(allTheMagic);

    console.log(this.MPS);
    console.log(allTheMagic);

  }


  ngOnInit() {

    this.getCaretakers();
    this.getAnimals();

    setInterval(() =>
        this.mpsEngine(), 1000);

  }

}
