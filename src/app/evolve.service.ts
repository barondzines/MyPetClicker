import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Evolve} from "./evolve-engine/evolve";
import {EVOLVE} from "./Models/evolve-list";

@Injectable({
  providedIn: 'root'
})
export class EvolveService {

  constructor() { }

  getEvolveLevels(): Observable<Evolve[]>{

    return of(EVOLVE);

  }

}
