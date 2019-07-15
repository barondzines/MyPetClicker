import { Component, OnInit } from '@angular/core';
import {Items} from "./items";
import {ItemsService} from "../items.service";
import {MagicEngineComponent} from "../magic-engine/magic-engine.component";
import { map } from "rxjs/operators";
import {Animal} from "../animal-engine/animals";
import {AnimalEngineComponent} from "../animal-engine/animal-engine.component";
import {AnimalsService} from "../animals.service";

@Component({
  selector: 'app-wonderland-engine',
  templateUrl: './wonderland-engine.component.html',
  styleUrls: ['./wonderland-engine.component.scss']
})
export class WonderlandEngineComponent implements OnInit {

  items: Items[] = [];
  animals: Animal[] = [];

  totalMps = 0;

  constructor(
      private itemsService: ItemsService,
      private magicEngine: MagicEngineComponent,
      private animalEngine: AnimalEngineComponent,
      private animalService: AnimalsService,

  ) { }

  getItems(): void{
    this.itemsService.getItems()
        .subscribe(items => this.items = items);
  }

  public getAnimals(): void{
    this.animalService.getAnimals()
        .subscribe(animals => this.animals = animals);
  }

  purchaseItem(cost, id) {

    let totalMagic = document.getElementById('magicTotal').innerHTML;

    if (totalMagic >= cost) {

      //console.log('with this much magic ' + totalMagic);

      this.magicEngine.removeMagic(cost);
      this.updateItem(id);
      this.updateAnimal(id);
      this.updateAnimalExp(id);
      setTimeout(() =>
          this.levelUpAnimal(), 1500);


    } else {

      console.log('You Do not have enough magic');
    }

  }


  checkItems(id){

    /**this will check against total magic to see if there enough available for you to purchase an activity,
     * if there is it will set the button to enabled **/

    let currentMagic = this.magicEngine.getMagic();

      for (let i = 0; i < this.items.length; i++) {

        if (this.items[i].id === id && this.items[i].cost > currentMagic) {

          return true;

        }
      }
  }

  public getCurrentAnimallvl() {
    //TODO: create a check for active animal currently there is only 1 animal

    let currentAnimalvl = this.animals.filter((item: any) => {
      return item.lvl;
    }).map(function(item) {
      return item.lvl;
    });

    return currentAnimalvl.toString();
  }

  public getItemLvl(id) {
    let itemArray = this.items;

    let itemlvl = itemArray.filter((item: any) => {
      return item.id === id;
    }).map(function(item) {
      return item.lvl;
    });

    return itemlvl.toString();
  }

  public getItemStr(id){
    let itemArray = this.items;

    let itemStr = itemArray.filter((item: any) => {
      return item.id === id;
    }).map(function(item) {
      return item.strUpgrade;
    });

    return itemStr.toString();
  }

  public getItemBeauty(id){
    let itemArray = this.items;

    let itemBeauty = itemArray.filter((item: any) => {
      return item.id === id;
    }).map(function(item) {
      return item.beautyUpgrade;
    });

    return itemBeauty.toString();
  }

  public getItemSpeed(id){
    let itemArray = this.items;

    let itemSpeed = itemArray.filter((item: any) => {
      return item.id === id;
    }).map(function(item) {
      return item.speedUpgrade;
    });

    return itemSpeed.toString();
  }

  public getitemInt(id){
    let itemArray = this.items;

    let itemInt = itemArray.filter((item: any) => {
      return item.id === id;
    }).map(function(item) {
      return item.intUpgrade;
    });

    return itemInt.toString();

  }

  public getitemExp(id){
    let itemArray = this.items;

    let itemExp = itemArray.filter((item: any) => {
      return item.id === id;
    }).map(function(item) {
      return item.expGain;
    });

    return itemExp.toString();

  }



  ngOnInit() {

    this.getItems();
    this.getAnimals();

  }

  updateAnimal(id){

    /**
     * This will update the animal with the bonus amount from the item you are purchasing.
     */

    let animalId = Number(document.getElementById('animal-id').innerHTML);

    let itemStr = Number(this.getItemStr(id));
    let itemInt = Number(this.getitemInt(id));
    let itemSpeed = Number(this.getItemSpeed(id));
    let itemBeauty = Number(this.getItemBeauty(id));

    for(let i=0; i < this.animals.length; i++){
      if(this.animals[i].id === animalId && itemStr > 0 ){

        let upgrade = ( itemStr + this.animals[i].str );
        return this.animals[i].str = upgrade;


      } if(this.animals[i].id === animalId && itemInt > 0 ){

        let upgrade = ( itemInt + this.animals[i].intelligence );
        return this.animals[i].intelligence = upgrade;


      } if(this.animals[i].id === animalId && itemSpeed > 0 ){

        let upgrade = ( itemSpeed + this.animals[i].speed );
        return this.animals[i].speed = upgrade;


      } if(this.animals[i].id === animalId && itemBeauty > 0 ){

        let upgrade = ( itemBeauty + this.animals[i].beauty );
        return this.animals[i].beauty = upgrade;

      }


    }

  }

  updateAnimalExp(id){

    /**
     * This will update the animal with the bonus amount from the item you are purchasing.
     */

    let animalId = Number(document.getElementById('animal-id').innerHTML);

    let itemExp = Number(this.getitemExp(id));

    //console.log('Total Exp: ', itemExp);

    for(let i=0; i < this.animals.length; i++){
      if(this.animals[i].id === animalId && itemExp > 0 ){

        let upgrade = ( itemExp + this.animals[i].currentExperience );
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



  updateItem(id){

    for(let i=0; i < this.items.length; i++){
      if(this.items[i].id === id){
        this.items[i].count++;
        this.items[i].cost += this.items[i].costIncrease;
      }
    }
  }




}
