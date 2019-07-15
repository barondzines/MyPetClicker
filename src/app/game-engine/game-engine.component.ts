import {Component, OnInit} from '@angular/core';
import {NgModule} from "@angular/core";
import {MagicEngineComponent} from "../magic-engine/magic-engine.component";

@Component({
  selector: 'app-game-engine',
  templateUrl: './game-engine.component.html',
  styleUrls: ['./game-engine.component.scss']
})
export class GameEngineComponent implements OnInit {

  totalMagic = 0;

  constructor(private magicEngine: MagicEngineComponent) { }

  public magicTotal(){

    this.totalMagic = parseInt(document.getElementById('magicTotal').innerHTML);

  }


  createAllMagic(){

    this.magicEngine.createMagic();

  }

  ngOnInit() {

  }




}
