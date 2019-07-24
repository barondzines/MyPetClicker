import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Caretaker} from "./caretaker-engine/caretaker";
import {CARETAKER} from "./Models/caretaker-list";

@Injectable({
  providedIn: 'root'
})
export class CaretakerService {

  constructor() { }

  getCaretakers(): Observable<Caretaker[]>{

    return of(CARETAKER);

  }


}
