import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

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
import {RouterModule, Routes} from "@angular/router";

import {ProgressBar, ProgressBarModule} from "ngx-progress-bar";
import { MaterialModule } from "./material/material.module";
import {MatCardModule} from "@angular/material";


const appRoutes: Routes =[
  {path: 'animal-select', component: AnimalSelectComponent},

  {  path: 'game/:id',
      component: GameEngineComponent,
  },

  {
    path: '',
    redirectTo: '/animal-select',
    pathMatch: 'full'
  }
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
  providers: [MagicCountService, ActivitiesService,MagicEngineComponent,  WonderlandEngineComponent, AnimalEngineComponent, GameEngineComponent,SaveLoadComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
