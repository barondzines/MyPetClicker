import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatMenuModule } from '@angular/material';
import { MatTabsModule} from "@angular/material";
import { MatIconModule } from '@angular/material/icon';

const MaterialComponents = [
      MatButtonModule,
      MatMenuModule,
      BrowserAnimationsModule,
      MatTabsModule,
      MatIconModule,
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule { }
