import { Component, OnInit } from '@angular/core';

import {Animal} from "../animal-engine/animals";
import {AnimalEngineComponent} from "../animal-engine/animal-engine.component";
import {AnimalsService} from "../animals.service";
import {Evolve} from "./evolve";
import {EvolveService} from "../evolve.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-evolve-engine',
  templateUrl: './evolve-engine.component.html',
  styleUrls: ['./evolve-engine.component.scss']
})
export class EvolveEngineComponent implements OnInit {

  animals: Animal[] = [];
  evolve: Evolve[] = [];
  id: any = 0;

  constructor(private animalEngine: AnimalEngineComponent,
              private animalService: AnimalsService,
              private evolveService: EvolveService,
              private route: ActivatedRoute
  ) { }


  public getAnimals(): void {
    this.animalService.getAnimals()
        .subscribe(animals => this.animals = animals);
  }

  public getEvolveLevels(): void {
    this.evolveService.getEvolveLevels()
        .subscribe(evolve => this.evolve = evolve )
  }

  public getCurrentAnimallvl() {
    //TODO: create a check for active animal currently there is only 1 animal

    let currentAnimal = Number(document.getElementById('animal-id').innerHTML);

    console.log('this is the animal levle', currentAnimal);

    for (let i = 0; i < this.animals.length; i++) {
      if (this.animals[i].id == currentAnimal) {

        console.log('this is the level', this.animals[i].lvl);

        return this.animals[i].lvl;

      }
    }

  }


  ngOnInit() {

    this.getAnimals();
    this.getEvolveLevels();

    this.id = this.route.snapshot.paramMap.get("id");

  }

}
