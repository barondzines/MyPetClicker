import {Component, OnInit} from '@angular/core';

import { MagicCountService } from "../magic-count.service";

@Component({
  selector: 'app-magic-engine',
  templateUrl: './magic-engine.component.html',
  styleUrls: ['./magic-engine.component.scss']
})
export class MagicEngineComponent implements OnInit {

  constructor(public magicCount: MagicCountService) { }

  public getMagic() {

    return this.magicCount.count;
  }

  public createMagic(){

    this.magicCount.count += 1;

  }

  public removeMagic(cost){

    this.magicCount.count -= cost;

  }

  public updateMagic(magic) {
    this.magicCount.count = magic;
  }

  ngOnInit() {

    this.getMagic();

  }

}



