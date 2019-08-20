import { Component } from '@angular/core';
import {RouteConfigLoadEnd, Router} from "@angular/router";
import {ActivitiesEngineComponent} from "../activities-engine/activities-engine.component";

/*
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})*/


@Component({

  selector: 'NavBar',
  template: `
  <h2>Select Helpers</h2>
  <a [routerLink]="['caretaker']">Activities</a>
  <a [routerLink]="['activities']">Activities</a> 
      <div class="inner-outlet">
        <router-outlet></router-outlet>
      </div>
  `
})

export class NavbarComponent {

  constructor(private router: Router) {}

}
