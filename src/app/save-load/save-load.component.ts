import { Component, OnInit } from '@angular/core';
import {MagicEngineComponent} from "../magic-engine/magic-engine.component";
import {AnimalsService} from "../animals.service";
import {Animal} from "../animal-engine/animals";
import {ActivatedRoute} from "@angular/router";
import {WonderlandEngineComponent} from "../wonderland-engine/wonderland-engine.component";
import {Items} from "../wonderland-engine/items";
import {ItemsService} from "../items.service";
import {ActivitiesService} from "../activites.service";
import {Activity} from "../activities-engine/activities";


@Component({
  selector: 'app-save-load',
  templateUrl: './save-load.component.html',
  styleUrls: ['./save-load.component.scss']
})
export class SaveLoadComponent implements OnInit {

  magic: number = 0;
  id: any;
  animals: Animal[] = [];
  items: Items[] = [];
  activities: Activity[] = [];


  constructor(

      public magicEngine: MagicEngineComponent,
      public animalService: AnimalsService,
      public itemsService: ItemsService,
      public activitiesService: ActivitiesService,
      private route: ActivatedRoute

              ) { }


  public getAnimals(): void{
    this.animalService.getAnimals()
        .subscribe(animals => this.animals = animals);
  }

  public getItems(): void{
    this.itemsService.getItems()
        .subscribe(items => this.items = items);
  }

  public getActivities(): void{
    this.activitiesService.getActivities()
        .subscribe(activities => this.activities = activities);
  }

  public getCurrentAnimal() {

    let currentAnimal = this.id;

    for (let i = 0; i < this.animals.length; i++) {
      if (this.animals[i].id == currentAnimal) {
          return this.animals[i];
      }
    }

  }

  public getItemsArray() {

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id > 0) {
        return this.items[i];
      }
    }

  }

  public getActivitiesArray() {

    for (let i = 0; i < this.activities.length; i++) {
      if (this.activities[i].id > 0) {
        return this.activities[i];
      }
    }

  }


  saveGame (){

    let magicAmount = this.magicEngine.getMagic();
    let animals     = this.getCurrentAnimal();
    let items       = this.getItemsArray();
    let activities  = this.getActivitiesArray();

    let save = {

       magic:      magicAmount,
       animals:    animals,
       items:      items,
       activities: activities

    };

    console.log('This is What is saved', JSON.stringify(save));

    //localStorage.setItem('save', JSON.stringify(save));

  }

  loadGame() {



  }

  ngOnInit() {

    this.getAnimals();
    this.getItems();
    this.getActivities();
    this.id = this.route.snapshot.paramMap.get("id")

  }

}
