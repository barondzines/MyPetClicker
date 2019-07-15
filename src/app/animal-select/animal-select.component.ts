import { Component, OnInit } from '@angular/core';

import { Animal } from "../animal-engine/animals";
import {AnimalEngineComponent} from "../animal-engine/animal-engine.component";
import {AnimalsService} from "../animals.service";

@Component({
  selector: 'animal-select',
  templateUrl: './animal-select.component.html',
  styleUrls: ['./animal-select.component.scss']
})
export class AnimalSelectComponent implements OnInit {

  animals: Animal[] = [];

  constructor(private animalEngine: AnimalEngineComponent,
              private animalService: AnimalsService) { }


  public getAnimals(): void {
    this.animalService.getAnimals()
        .subscribe(animals => this.animals = animals )
  }

  selectedAnimal(id) {

    for(let i=0; i < this.animals.length; i++) {
      if(id === this.animals[i].id) {
        this.animals[i].selected = true;
      }

    }

  }



  ngOnInit() {
    this.getAnimals();
  }

}
