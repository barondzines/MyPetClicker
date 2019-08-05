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
import {GameEngineComponent} from "../game-engine/game-engine.component";


@Component({
  selector: 'app-save-load',
  templateUrl: './save-load.component.html',
  styleUrls: ['./save-load.component.scss']
})
export class SaveLoadComponent implements OnInit {

  magic: number = 0;
  id: any;
  public animals: Animal[] = [];
  public items: Items[] = [];
  public activities: Activity[] = [];


  constructor(

      public magicEngine: MagicEngineComponent,
      public animalService: AnimalsService,
      public itemsService: ItemsService,
      public activitiesService: ActivitiesService,
      public gameEngine: GameEngineComponent,
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


  /**
   * Load the Animal Data
   * @param saveData
   * @param animalSelectedId
   */

  static getAnimalSelected(saveData, animalSelectedId){

    for (let i = 0; i < saveData.animals.length; i++) {
      if (saveData.animals[i].id == animalSelectedId) {

        return saveData.animals[i].selected;
      }
    }

  }

  static getAnimalSelectedLvl(saveData, animalSelectedId){

    for (let i = 0; i < saveData.animals.length; i++) {
      if (saveData.animals[i].id == animalSelectedId) {

        return saveData.animals[i].lvl;
      }
    }

  }

  static getAnimalSelectedStr(saveData, animalSelectedId){

    for (let i = 0; i < saveData.animals.length; i++) {
      if (saveData.animals[i].id == animalSelectedId) {

        return saveData.animals[i].str;
      }
    }

  }

  static getAnimalSelectedBeauty(saveData, animalSelectedId){

    for (let i = 0; i < saveData.animals.length; i++) {
      if (saveData.animals[i].id == animalSelectedId) {

        return saveData.animals[i].beauty;
      }
    }

  }

  static getAnimalSelectedInt(saveData, animalSelectedId){

    for (let i = 0; i < saveData.animals.length; i++) {
      if (saveData.animals[i].id == animalSelectedId) {

        return saveData.animals[i].intelligence;
      }
    }

  }

  static getAnimalSelectedSpeed(saveData, animalSelectedId){

    for (let i = 0; i < saveData.animals.length; i++) {
      if (saveData.animals[i].id == animalSelectedId) {

        return saveData.animals[i].speed;
      }
    }

  }

  static getAnimalSelectedExp(saveData, animalSelectedId){

    for (let i = 0; i < saveData.animals.length; i++) {
      if (saveData.animals[i].id == animalSelectedId) {

        return saveData.animals[i].currentExperience;
      }
    }

  }


  /**
   * Load the data for Activities
   * @param saveData
   * @param activitiesId
   */
  static getActivityLoadCount(saveData, activitiesId){

    for (let i = 0; i < saveData.activities.length; i++) {
      if (saveData.activities[i].id == activitiesId) {

        return saveData.activities[i].count;
      }
    }

  }

  static getActivityLoadLvl(saveData, activitiesId){

    for (let i = 0; i < saveData.activities.length; i++) {
      if (saveData.activities[i].id == activitiesId) {

        return saveData.activities[i].lvl;
      }
    }

  }

  static getActivityLoadStr(saveData, activitiesId){

    for (let i = 0; i < saveData.activities.length; i++) {
      if (saveData.activities[i].id == activitiesId) {

        return saveData.activities[i].str;
      }
    }

  }

  static getActivityLoadInt(saveData, activitiesId){

    for (let i = 0; i < saveData.activities.length; i++) {
      if (saveData.activities[i].id == activitiesId) {

        return saveData.activities[i].intelligence;
      }
    }

  }

  static getActivityLoadBeauty(saveData, activitiesId){

    for (let i = 0; i < saveData.activities.length; i++) {
      if (saveData.activities[i].id == activitiesId) {

        return saveData.activities[i].beauty;
      }
    }

  }

  static getActivityLoadSpeed(saveData, activitiesId){

    for (let i = 0; i < saveData.activities.length; i++) {
      if (saveData.activities[i].id == activitiesId) {

        return saveData.activities[i].speed;
      }
    }

  }


  /**
   * Load the data for Items
   * @param saveData
   * @param itemsId
   */
  static getItemsLoadCount(saveData, itemsId){

    for (let i = 0; i < saveData.items.length; i++) {
      if (saveData.items[i].id == itemsId) {

        return saveData.items[i].count;
      }
    }

  }

  static getItemsLoadLvl(saveData, itemsId){

    for (let i = 0; i < saveData.items.length; i++) {
      if (saveData.items[i].id == itemsId) {

        return saveData.items[i].lvl;
      }
    }

  }

  static getItemsLoadCost(saveData, itemsId){

    for (let i = 0; i < saveData.items.length; i++) {
      if (saveData.items[i].id == itemsId) {

        return saveData.items[i].cost;
      }
    }

  }




  /**
   * Below are static functions to help get general game info
   */
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


  /**
   * This will update the Animal Data for the load Function
   * @param saveData
   */
  private updateAnimalData(saveData){


    for (let i = 0; i < this.animals.length; i++) {
      if (this.animals[i].id > 0) {

        let animalSelectedId = this.animals[i].id;

        this.animals[i].selected          = SaveLoadComponent.getAnimalSelected(saveData, animalSelectedId);
        this.animals[i].lvl               = SaveLoadComponent.getAnimalSelectedLvl(saveData, animalSelectedId);
        this.animals[i].str               = SaveLoadComponent.getAnimalSelectedStr(saveData, animalSelectedId);
        this.animals[i].beauty            = SaveLoadComponent.getAnimalSelectedBeauty(saveData, animalSelectedId);
        this.animals[i].intelligence      = SaveLoadComponent.getAnimalSelectedInt(saveData, animalSelectedId);
        this.animals[i].speed             = SaveLoadComponent.getAnimalSelectedSpeed(saveData, animalSelectedId);
        this.animals[i].currentExperience = SaveLoadComponent.getAnimalSelectedExp(saveData, animalSelectedId);


      }
    }

  }


  /**
   * This will update the Activities data for the load function
   * @param saveData
   */
  private updateActivitiesData(saveData){

    for (let i = 0; i < this.activities.length; i++) {
      if (this.activities[i].id > 0) {

        let activitiesId = this.activities[i].id;

        this.activities[i].count             = SaveLoadComponent.getActivityLoadCount(saveData, activitiesId);
        this.activities[i].lvl               = SaveLoadComponent.getActivityLoadLvl(saveData, activitiesId);
        this.activities[i].str               = SaveLoadComponent.getActivityLoadStr(saveData, activitiesId);
        this.activities[i].beauty            = SaveLoadComponent.getActivityLoadBeauty(saveData, activitiesId);
        this.activities[i].intelligence      = SaveLoadComponent.getActivityLoadInt(saveData, activitiesId);
        this.activities[i].speed             = SaveLoadComponent.getActivityLoadSpeed(saveData, activitiesId);



      }
    }

  }

  /**
   * This will update the Activities data for the load function
   * @param saveData
   */
  private updateItemsData(saveData){

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id > 0) {

        let itemsId = this.items[i].id;

        this.items[i].count             = SaveLoadComponent.getItemsLoadCount(saveData, itemsId);
        this.items[i].lvl               = SaveLoadComponent.getItemsLoadLvl(saveData, itemsId);
        this.items[i].cost              = SaveLoadComponent.getItemsLoadCost(saveData, itemsId);

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
       animals:    this.animals,
       items:      this.items,
       activities: this.activities

    };

    console.log('This is What is saved', JSON.stringify(save));

    localStorage.setItem('save', JSON.stringify(save));

  }

  loadGame() {

    let saveData = JSON.parse(localStorage.getItem('save'));

    let magicAmount = saveData.magic;
    let animals     = saveData.animals;
    let activities  = saveData.activities;
    let items       = saveData.items[0];


    this.gameEngine.totalMagic = magicAmount;
    this.magicEngine.updateMagic(magicAmount);

    //this.animals.length = 0;
    //this.items.length = 0;
    //this.activities.length = 0;

    this.animals.map(val => animals.push(Object.assign([], val)));
    this.updateAnimalData(saveData);

    this.items.map(val => items.push(Object.assign([], val)));
    this.updateItemsData(saveData);

    this.activities.map(val => activities.push(Object.assign([], val)));
    this.updateActivitiesData(saveData);

    //this.animals = saveData.animals;
    //this.items = saveData.items;
    //this.activities = saveData.activities;

    console.log(this.animals);
    //console.log(saveData.animals);
    //console.log(this.animals);



  }

  ngOnInit() {

    this.getAnimals();
    this.getItems();
    this.getActivities();
    this.id = this.route.snapshot.paramMap.get("id")

  }

}
