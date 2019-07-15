import { Injectable } from '@angular/core';

import { Animal } from "./animal-engine/animals";
import { ANIMALS } from "./Models/animal-list";
import { Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor() { }

  getAnimals(): Observable<Animal[]>{

    return of(ANIMALS);

  }

}
