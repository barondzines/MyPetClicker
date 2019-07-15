import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

import {ITEMS} from "./Models/items-list";
import {Items} from "./wonderland-engine/items";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  getItems(): Observable<Items[]>{

    return of(ITEMS);

  }
}
