import { Injectable } from '@angular/core';

import { Activity } from "./activities-engine/activities";
import { ACTIVITY } from "./Models/activities-list";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ActivitiesService {

  constructor() { }


  getActivities(): Observable<Activity[]> {

    return of(ACTIVITY);

  }

}
