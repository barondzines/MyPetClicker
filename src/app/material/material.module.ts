import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatMenuModule } from '@angular/material';
import { MatTabsModule} from "@angular/material";
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from "@angular/material";
import { MatCardModule } from "@angular/material";

const MaterialComponents = [
      MatButtonModule,
      MatMenuModule,
      BrowserAnimationsModule,
      MatTabsModule,
      MatIconModule,
      MatGridListModule,
    MatCardModule
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule { }
