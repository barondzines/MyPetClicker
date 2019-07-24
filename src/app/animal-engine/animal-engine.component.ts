import { Component, OnInit } from '@angular/core';

import { Animal } from "./animals";
import { AnimalsService } from "../animals.service";
import {MagicEngineComponent} from "../magic-engine/magic-engine.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-animal-engine',
  templateUrl: './animal-engine.component.html',
  styleUrls: ['./animal-engine.component.scss']
})
export class AnimalEngineComponent implements OnInit {

  animals: Animal[] = [];
  id: any = 0;

  constructor(
      private animalService: AnimalsService,
      private magicEngine: MagicEngineComponent,
      private route: ActivatedRoute
  ) { }

  public getAnimals(): void{
    this.animalService.getAnimals()
        .subscribe(animals => this.animals = animals);
  }

  public getCurrentAnimal() {
    //TODO: create a check for active animal currently there is only 1 animal

    let currentAnimalvl = this.animals.filter((item: any) => {
      return item.lvl >= 1;
    }).map(function(item) {
      return item.name;
    });

    return currentAnimalvl.toString();
  }

  createAllMagic(){

    this.magicEngine.createMagic();

  }

  ngOnInit() {
    this.getAnimals();
    this.getCurrentAnimal();
    this.id = this.route.snapshot.paramMap.get("id");
  }

}


