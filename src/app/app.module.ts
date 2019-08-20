import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { MagicEngineComponent } from './magic-engine/magic-engine.component';
import { AnimalEngineComponent } from './animal-engine/animal-engine.component';
import { ActivitiesEngineComponent } from './activities-engine/activities-engine.component';
import { WonderlandEngineComponent } from './wonderland-engine/wonderland-engine.component';
import { MagicCountService} from "./magic-count.service";
import { ActivitiesService} from "./activites.service";
import { GameEngineComponent } from './game-engine/game-engine.component';
import { SaveLoadComponent } from './save-load/save-load.component';
import { AnimalSelectComponent } from './animal-select/animal-select.component';
import { CaretakerEngineComponent } from './caretaker-engine/caretaker-engine.component';
import { EvolveEngineComponent } from './evolve-engine/evolve-engine.component';

import {RouterModule, Routes} from "@angular/router";

import { ProgressBarModule} from "ngx-progress-bar";
import { MaterialModule } from "./material/material.module";
import {MatCardModule} from "@angular/material";
import {EvolveService} from "./evolve.service";
import {AnimalsService} from "./animals.service";
import { NavbarComponent } from './navbar/navbar.component';

export const appRoutes: Routes =[
    {
        path: 'animal-select',
        component: AnimalSelectComponent
    },

    {
        path: 'game/:id',
        component: GameEngineComponent,
    },

    {
        path: '',
        redirectTo: '/animal-select',
        pathMatch: 'full'
    },

    {
        path:'NavBar',
        component: NavbarComponent,
        children: [
            {path: 'caretakers', component: CaretakerEngineComponent},
            {path: 'activities', component: ActivitiesEngineComponent},
            {path: 'items', component: WonderlandEngineComponent}
        ]
    },
];

@NgModule({
  declarations: [
    AppComponent,
    MagicEngineComponent,
    ActivitiesEngineComponent,
    GameEngineComponent,
    WonderlandEngineComponent,
    AnimalEngineComponent,
    SaveLoadComponent,
    AnimalSelectComponent,
    CaretakerEngineComponent,
    EvolveEngineComponent,
    NavbarComponent,

  ],
    imports: [

        BrowserModule,
        MaterialModule,
        FormsModule,
        ProgressBarModule,
        RouterModule.forRoot(
            appRoutes,
        ),
        MatCardModule

    ],
  providers: [

      MagicCountService,
      ActivitiesService,
      EvolveService,
      AnimalsService,
      MagicEngineComponent,
      WonderlandEngineComponent,
      AnimalEngineComponent,
      GameEngineComponent,
      SaveLoadComponent,
      EvolveEngineComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
