(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/activities-engine/activities-engine.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/activities-engine/activities-engine.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n\n\n<div class=\"mat-headline\">Animal Activities</div>\n<div  class=\"grid-x grid-margin-x grid-padding-x grid-padding-y\">\n\n    <div class=\"cell\" *ngFor=\"let activity of activities\">\n\n        <div class=\"grid-x\">\n\n            <div id=\"{{activity.id}}\" class=\"cell\"><strong><span id=\"activity-name\">{{activity.name}}</span></strong></div>\n\n            <div class=\"cell\">\n\n                <strong>Minimum Stats Needed</strong>\n                <div class=\"grid-x small-up-4\">\n                    <div class=\"cell\"><strong>Strength: </strong><span id=\"{{activity.name}}-activity-str\"></span>{{activity.str}}</div>\n                    <div class=\"cell\"><strong>Beauty: </strong><span id=\"{{activity.name}}-activity-beauty\"></span>{{activity.beauty}}</div>\n                    <div class=\"cell\"><strong>Intelligence: </strong><span id=\"{{activity.name}}-activity-int\"></span>{{activity.intelligence}}</div>\n                    <div class=\"cell\"><strong>Speed: </strong><span id=\"{{activity.name}}-activity-speed\"></span>{{activity.speed}}</div>\n            </div>\n\n            <div class=\"cell\">\n\n                <strong class=\"space\">Details</strong>\n                <div class=\"grid-x small-up-5 details\">\n                    <div class=\"cell\"><strong>Lvl: </strong><span id=\"{{activity.name}}-activity-lvl\"></span>{{activity.lvl}}</div>\n                    <div class=\"cell\"><strong>Cost: </strong><span id=\"{{activity.name}}-activity-cost\"></span>{{activity.cost}}</div>\n                    <div class=\"cell\"><strong>Count: </strong><span id=\"{{activity.name}}-activity-count\"></span>{{activity.count}}</div>\n                    <div class=\"cell\"><strong>Reward: </strong><span id=\"{{activity.name}}-activity-reward\"></span>{{activity.reward}}</div>\n                    <div class=\"cell\"><strong>Exp Gain: </strong><span>{{activity.expGain}}</span></div>\n                </div>\n\n            </div>\n\n            <div class=\"cell\">\n\n                <div [class.hidden]=\"activity.isrunning === false\" class=\"bar space\"><span [style.width.%]=\"width\"></span></div>\n\n            </div>\n\n            <div class=\"cell space\"><button [disabled]=\"checkActivities(activity.id)\" class=\"button primary\" (click)=\"purchaseActivity(activity.cost, activity.id)\">Enter {{activity.name}}</button></div>\n\n        </div>\n\n    </div>\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/animal-engine/animal-engine.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/animal-engine/animal-engine.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--- This is the animal output html block ---->\n\n<div class=\"grid-x\">\n\n    <div *ngFor=\"let core of animals\" class=\"cell text-center\">\n        <div *ngIf=\"core.selected === true\" class=\"grid-x\">\n\n            <div class=\"cell\"><h2>{{core.name}}</h2></div>\n            <div class=\"cell animal-img\"><img [src]=\"core.img\" alt=\"{{core.name}}\"></div>\n\n        </div>\n    </div>\n\n    <div class=\"cell animal-cell\">\n        <div class=\"grid-x animal-container\">\n\n            <div *ngFor=\"let animal of animals\" class=\"cell\">\n\n                <div *ngIf=\"animal.selected === true\" class=\"grid-x\">\n\n                    <div id=\"animal-id\" class=\"cell hide\">{{animal.id}}</div>\n\n                    <div class=\"cell\"><strong>Level: </strong><span id=\"animal-lvl\">{{animal.lvl}}</span></div>\n\n                    <div  class=\"cell\">\n                        <strong>Experience</strong>\n                    </div>\n\n                    <div id=\"needed-xp\" class=\"cell xp-bar\">\n                        <div class=\"xp-bar-container\"><p class=\"xp-bar-text\"><span id=\"current-xp\">{{animal.currentExperience}}</span>/<span id=\"animal-exp\">{{animal.experienceNeeded}}</span></p></div>\n                        <progress class=\"alert xp-bar-progress\" max=\"{{animal.experienceNeeded}}\" value=\"{{animal.currentExperience}}\"></progress>\n                    </div>\n\n                    <div class=\"cell\">\n\n                        <div class=\"grid-x small-up-4 details\">\n                            <div class=\"cell\"><strong>Int:</strong> <span id=\"animal-int\">{{animal.intelligence}}</span></div>\n                            <div class=\"cell\"><strong>Beauty:</strong> <span id=\"animal-beauty\">{{animal.beauty}}</span></div>\n                            <div class=\"cell\"><strong>Str:</strong> <span id=\"animal-str\">{{animal.str}}</span></div>\n                            <div class=\"cell\"><strong>Speed:</strong> <span id=\"animal-speed\">{{animal.speed}}</span></div>\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n\n</div>\n<!--- This is the end of the animal output html block ---->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/animal-select/animal-select.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/animal-select/animal-select.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--- This is the animal select HTML Object ---->\n\n\n<div class=\"grid-container\">\n\n    <h2 class=\"text-center padding-y\">Animal Select</h2>\n\n    <div class=\"grid-x small-up-5 grid-padding-x\">\n\n        <div *ngFor=\"let animal of animals\" class=\"cell text-center auto\">\n\n            <div class=\"grid-x\">\n\n                <div class=\"cell\">\n                    <div><img [src]=\"animal.icon\" alt=\"\"></div>\n                    <div class=\"mat-headline\">{{animal.name}}</div>\n                    <div class=\"mat-body-1\">{{animal.description}}</div>\n                </div>\n\n                <div class=\"cell spacing\">\n                    <button mat-raised-button (click)=\"selectedAnimal(animal.id)\" [routerLink]=\"['/game', animal.id]\"> Select {{animal.name}}</button>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n\n<!--- This is the end of the animal select HTML Object ---->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game-engine/game-engine.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game-engine/game-engine.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--- This is the general game content block ---->\n<div class=\"grid-container full\">\n<app-save-load></app-save-load>\n</div>\n<div class=\"grid-container full\">\n  <div class=\"grid-x grid-padding-x padding-y medium-up-2\">\n\n    <div class=\"cell activities-wall \">\n\n      <mat-tab-group>\n        <mat-tab label=\"One\">\n          <app-activities-engine></app-activities-engine>\n        </mat-tab>\n        <mat-tab label=\"Two\">\n          <app-wonderland-engine></app-wonderland-engine>\n        </mat-tab>\n      </mat-tab-group>\n\n    </div>\n\n    <div class=\"cell animal-wall\">\n      <div class=\"grid-x grid-margin-y\">\n        <div class=\"cell animal-wall-section\">\n          <app-animal-engine></app-animal-engine>\n        </div>\n        <div class=\"cell magic-wall-section\">\n          <app-magic-engine></app-magic-engine>\n          <div class=\"cell text-center button-container\">\n            <div class=\"cell\" >\n              <button id=\"magicButton\" (click)=\"createAllMagic()\" class=\"button primary\">Make Magic</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n<!--- This is the end of the general game content block ---->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/magic-engine/magic-engine.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/magic-engine/magic-engine.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-x grid-padding-y magic-count-container\">\n    <div class=\"cell text-center\"><h4 id=\"magicTotal\">{{magicCount.count}}</h4></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/save-load/save-load.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/save-load/save-load.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container padding-y\">\n  <div class=\"grid-x\">\n    <div class=\"cell text-right\">\n      <button class=\"primay button\" (click)=\"saveGame()\">Save Game</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wonderland-engine/wonderland-engine.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wonderland-engine/wonderland-engine.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n\n  <div class=\"mat-headline\">Animal Items</div>\n\n  <div  class=\"grid-x padding-y\">\n\n    <div class=\"cell\" *ngFor=\"let item of items\">\n\n      <div class=\"grid-x grid-margin-x grid-padding-x grid-padding-y\">\n\n        <div class=\"cell item-card-container\">\n          <div class=\"grid-x\">\n            <h6>{{item.name}}</h6>\n            <div class=\"cell\">{{item.description}}</div>\n\n            <div class=\"cell\">\n\n              <div class=\"grid-x small-up-3\">\n                <div class=\"cell\"><strong>Cost:</strong><span id=\"{{item.name}}-item-cost\">{{item.cost}}</span> </div>\n                <div class=\"cell\"><strong>Count:</strong> <span id=\"{{item.name}}-item-count\">{{item.count}}</span></div>\n                <div class=\"cell\"><strong>Lvl:</strong> <span id=\"{{item.name}}-item-lvl\">{{item.lvl}}</span></div>\n              </div>\n\n            </div>\n\n            <div class=\"cell\">\n\n              <h5 class=\"space\">Skill Bonus:</h5>\n              <div class=\"grid-x small-up-5 align-center align-middle details\">\n                <div class=\"cell\"><strong>Strength: </strong> +<span id=\"{{item.name}}-item-str\">{{item.strUpgrade}}</span></div>\n                <div class=\"cell\"><strong>Beauty: </strong> +<span id=\"{{item.name}}-item-beauty\">{{item.beautyUpgrade}}</span></div>\n                <div class=\"cell\"><strong>Int: </strong> +<span id=\"{{item.name}}-item-int\">{{item.intUpgrade}}</span></div>\n                <div class=\"cell\"><strong>Speed: </strong> +<span id=\"{{item.name}}-item-speed\">{{item.speedUpgrade}}</span></div>\n                <div class=\"cell\"><strong>Exp Gain: </strong> <span>{{item.expGain}}</span></div>\n              </div>\n\n            </div>\n\n            <div class=\"cell space\">\n              <button [disabled]=\"checkItems(item.id)\" class=\"button primary\" (click)=\"purchaseItem(item.cost, item.id)\">Purchase {{item.name}}</button>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/Models/activities-list.ts":
/*!*******************************************!*\
  !*** ./src/app/Models/activities-list.ts ***!
  \*******************************************/
/*! exports provided: ACTIVITY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVITY", function() { return ACTIVITY; });
const ACTIVITY = [
    {
        id: 123,
        isrunning: false,
        cost: 10,
        //1 second equals 1000
        time: '10',
        reward: 12,
        count: 0,
        img: ',/assets/race-icon.png',
        lvl: 1,
        name: 'Race',
        speed: 0,
        beauty: 0,
        happiness: 0,
        intelligence: 0,
        str: 0,
        activityIncrease: 2,
        expGain: 50,
    },
    {
        id: 124,
        isrunning: false,
        cost: 20,
        time: '100',
        reward: 25,
        count: 0,
        img: ',/assets/race-icon.png',
        lvl: 1,
        name: 'Candy Pull',
        speed: 0,
        beauty: 0,
        happiness: 0,
        intelligence: 0,
        str: 100,
        activityIncrease: 5,
        expGain: 75
    }
];


/***/ }),

/***/ "./src/app/Models/animal-list.ts":
/*!***************************************!*\
  !*** ./src/app/Models/animal-list.ts ***!
  \***************************************/
/*! exports provided: ANIMALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMALS", function() { return ANIMALS; });
const ANIMALS = [
    {
        id: 789,
        name: 'Unicorn',
        description: 'The Unicorn. The Unicorn is a mythical horse-like beast, with a horn attached on its forehead. Unicorns can live to be hundreds, perhaps even thousands of years old if left untouched by evil hands. There is little genuine fact known about the animal, due to it being mainly a creature of myth and legend.',
        age: 1,
        experienceNeeded: 50,
        currentExperience: 0,
        lvl: 1,
        beauty: 10,
        happiness: 100,
        intelligence: 80,
        speed: 100,
        str: 25,
        img: 'assets/unicorn.jpg',
        icon: 'assets/unicorn-icon.jpg',
        upgradeCost: 1000,
        selected: false,
    },
    {
        id: 101112,
        name: 'Hippogriff',
        description: 'A Hippogriff is a magical beast that has the front legs, wings, and head of a giant eagle and the body, hind legs and tail of a horse. It is very similar to another magical creature, the Griffin, with the horse rear replacing the lion rear.',
        age: 1,
        experienceNeeded: 50,
        currentExperience: 0,
        lvl: 1,
        beauty: 10,
        happiness: 100,
        intelligence: 80,
        speed: 100,
        str: 25,
        img: 'assets/hypogriff.jpg',
        icon: 'assets/hypogriff-icon.jpg',
        upgradeCost: 1000,
        selected: false,
    },
    {
        id: 131415,
        name: 'Dragon',
        description: 'Dragon, legendary monster usually conceived as a huge, bat-winged, fire-breathing, scaly lizard or snake with a barbed tail. The belief in these creatures apparently arose without the slightest knowledge on the part of the ancients of the gigantic, prehistoric, dragon-like reptiles.',
        age: 1,
        experienceNeeded: 50,
        currentExperience: 0,
        lvl: 1,
        beauty: 10,
        happiness: 100,
        intelligence: 80,
        speed: 100,
        str: 25,
        img: 'assets/dragon.jpg',
        icon: 'assets/dragon-icon.jpg',
        upgradeCost: 1000,
        selected: false,
    },
];


/***/ }),

/***/ "./src/app/Models/items-list.ts":
/*!**************************************!*\
  !*** ./src/app/Models/items-list.ts ***!
  \**************************************/
/*! exports provided: ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEMS", function() { return ITEMS; });
const ITEMS = [
    {
        id: 111,
        name: 'Hay',
        description: 'Cupcake ipsum dolor sit amet I love fruitcake candy canes. Lemon drops carrot cake chocolate cake I love danish donut gingerbread. ',
        cost: 10,
        costIncrease: 5,
        count: 0,
        lvl: 0,
        beautyUpgrade: 0,
        happinessUpgrade: 1,
        speedUpgrade: 1,
        strUpgrade: 1,
        intUpgrade: 1,
        img: '',
        expGain: 50
    },
    {
        id: 115,
        name: 'WaterBucket',
        description: 'Cupcake ipsum dolor sit amet I love fruitcake candy canes. Lemon drops carrot cake chocolate cake I love danish donut gingerbread. ',
        cost: 20,
        costIncrease: 8,
        count: 0,
        lvl: 5,
        beautyUpgrade: 0,
        happinessUpgrade: 1,
        speedUpgrade: 1,
        intUpgrade: 0,
        strUpgrade: 0,
        img: '',
        expGain: 50
    }
];


/***/ }),

/***/ "./src/app/activites.service.ts":
/*!**************************************!*\
  !*** ./src/app/activites.service.ts ***!
  \**************************************/
/*! exports provided: ActivitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesService", function() { return ActivitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Models_activities_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Models/activities-list */ "./src/app/Models/activities-list.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let ActivitiesService = class ActivitiesService {
    constructor() { }
    getActivities() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_Models_activities_list__WEBPACK_IMPORTED_MODULE_2__["ACTIVITY"]);
    }
};
ActivitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ActivitiesService);



/***/ }),

/***/ "./src/app/activities-engine/activities-engine.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/activities-engine/activities-engine.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2aXRpZXMtZW5naW5lL2FjdGl2aXRpZXMtZW5naW5lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/activities-engine/activities-engine.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/activities-engine/activities-engine.component.ts ***!
  \******************************************************************/
/*! exports provided: ActivitiesEngineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesEngineComponent", function() { return ActivitiesEngineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _activites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../activites.service */ "./src/app/activites.service.ts");
/* harmony import */ var _magic_engine_magic_engine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../magic-engine/magic-engine.component */ "./src/app/magic-engine/magic-engine.component.ts");
/* harmony import */ var _game_engine_game_engine_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game-engine/game-engine.component */ "./src/app/game-engine/game-engine.component.ts");
/* harmony import */ var _animal_engine_animal_engine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animal-engine/animal-engine.component */ "./src/app/animal-engine/animal-engine.component.ts");
/* harmony import */ var _animals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animals.service */ "./src/app/animals.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let ActivitiesEngineComponent = class ActivitiesEngineComponent {
    constructor(activitiesService, magicEngine, gameEngine, animalEngine, animalService, route) {
        this.activitiesService = activitiesService;
        this.magicEngine = magicEngine;
        this.gameEngine = gameEngine;
        this.animalEngine = animalEngine;
        this.animalService = animalService;
        this.route = route;
        this.activities = [];
        this.animals = [];
        this.width = 0;
        this.id = 0;
        this.buttonDisabled = true;
    }
    getActivities() {
        this.activitiesService.getActivities()
            .subscribe(activities => this.activities = activities);
    }
    getAnimals() {
        this.animalService.getAnimals()
            .subscribe(animals => this.animals = animals);
    }
    checkActivities(id) {
        /**this will check against total magic and currnet animal lvl to see if there enough available for you to purchase an activity,
         * if there is it will set the button to enabled **/
        let currentAnimalLvl = Number(this.getCurrentAnimallvl());
        let activityLvl = this.getActivityLvl(id);
        let currentMagic = this.magicEngine.getMagic();
        let animalSpeed = Number(this.getAnimalSpeed());
        let animalBeauty = Number(this.getAnimalBeauty());
        let animalStr = Number(this.getAnimalStr());
        let animalInt = Number(this.getAnimalInt());
        //console.log('this is inside checkActivities', currentAnimalLvl);
        for (let i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id === id && this.activities[i].cost > currentMagic) {
                //console.log('true', activityLvl, 'true',currentMagic,  'Name:', this.activities[i].name, 'Lvl', this.activities[i].lvl );
                return true;
            }
            if (this.activities[i].id === id && this.activities[i].lvl > currentAnimalLvl) {
                return true;
            }
            if (this.activities[i].id === id && this.activities[i].speed > animalSpeed) {
                return true;
            }
            if (this.activities[i].id === id && this.activities[i].str > animalStr) {
                return true;
            }
            if (this.activities[i].id === id && this.activities[i].beauty > animalBeauty) {
                return true;
            }
            if (this.activities[i].id === id && this.activities[i].intelligence > animalInt) {
                return true;
            }
        }
    }
    getCurrentAnimallvl() {
        //TODO: create a check for active animal currently there is only 1 animal
        let currentAnimal = this.id;
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].id == currentAnimal) {
                return this.animals[i].lvl;
            }
        }
    }
    getAnimalInt() {
        //TODO: create a check for active animal currently there is only 1 animal
        let currentAnimal = this.id;
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].id == currentAnimal) {
                return this.animals[i].intelligence;
            }
        }
    }
    getAnimalSpeed() {
        //TODO: create a check for active animal currently there is only 1 animal
        let currentAnimal = this.id;
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].id == currentAnimal) {
                return this.animals[i].speed;
            }
        }
    }
    getAnimalStr() {
        let currentAnimal = this.id;
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].id == currentAnimal) {
                return this.animals[i].str;
            }
        }
    }
    getAnimalBeauty() {
        let currentAnimal = this.id;
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].id == currentAnimal) {
                return this.animals[i].beauty;
            }
        }
    }
    getActivitySpeed(id) {
        let activityArray = this.activities;
        let activitySpeed = activityArray.filter((item) => {
            return item.id === id;
        }).map(function (item) {
            return item.speed;
        });
        return activitySpeed.toString();
    }
    getActivityLvl(id) {
        let activityArray = this.activities;
        let activitylvl = activityArray.filter((item) => {
            return item.id === id;
        }).map(function (item) {
            return item.lvl;
        });
        return activitylvl.toString();
    }
    getActivitytime(id) {
        let activityArray = this.activities;
        let activitylvl = activityArray.filter((item) => {
            return item.id === id;
        }).map(function (item) {
            return item.time;
        });
        return activitylvl.toString();
    }
    getActivityExp(id) {
        let activityArray = this.activities;
        let activityExp = activityArray.filter((item) => {
            return item.id === id;
        }).map(function (item) {
            return item.expGain;
        });
        return activityExp.toString();
    }
    purchaseActivity(cost, id) {
        let totalMagic = document.getElementById('magicTotal').innerHTML;
        if (totalMagic >= cost) {
            this.gameEngine.totalMagic -= cost;
            this.magicEngine.removeMagic(cost);
            this.updateActivity(id);
            this.checkClass(id);
        }
        else {
            console.log('You Do not have enough magic');
        }
    }
    updateActivity(id) {
        for (let i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id == id) {
                this.activities[i].count++;
                this.activities[i].cost += this.activities[i].activityIncrease;
            }
        }
    }
    resetActivity(id) {
        //TODO: create function to reset all setting back to 0
        let totalMagic = this.magicEngine.getMagic();
        for (let i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id == id) {
                this.activities[i].isrunning = false;
                this.width = 0;
                let allTheMagic = (totalMagic += this.activities[i].reward);
                this.magicEngine.updateMagic(allTheMagic);
                this.updateAnimalExp(id);
                setTimeout(() => this.levelUpAnimal(), 1500);
            }
        }
    }
    checkClass(id) {
        for (let i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id == id) {
                this.runProgressBar(id);
                this.activities[i].isrunning = true;
            }
        }
    }
    runProgressBar(id) {
        let time = Number(this.getActivitytime(id));
        let countDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["interval"])(time)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeWhile"])(() => this.isWidthWithinLimit(id)));
        countDown.subscribe(() => {
            this.width = this.width + 1;
        });
        return () => {
            clearInterval();
        };
    }
    isWidthWithinLimit(id) {
        if (this.width === 100) {
            setTimeout(() => this.resetActivity(id), 3000);
            return false;
        }
        else {
            return true;
        }
    }
    updateAnimalExp(id) {
        /**
         * This will update the animal with the bonus amount from the item you are purchasing.
         */
        let animalId = Number(document.getElementById('animal-id').innerHTML);
        let activityExp = Number(this.getActivityExp(id));
        console.log('Total Exp: ', activityExp);
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].id === animalId && activityExp > 0) {
                let upgrade = (activityExp + this.animals[i].currentExperience);
                return this.animals[i].currentExperience = upgrade;
            }
        }
    }
    levelUpAnimal() {
        let animalId = Number(document.getElementById('animal-id').innerHTML);
        let currentXp = Number(document.getElementById('current-xp').innerHTML);
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].id === animalId && this.animals[i].experienceNeeded <= currentXp) {
                let newXp = (10 / 100) * this.animals[i].experienceNeeded;
                let upgradedXp = (this.animals[i].experienceNeeded + newXp);
                this.animals[i].lvl++;
                this.animals[i].experienceNeeded = upgradedXp;
                this.animals[i].currentExperience = 0;
            }
        }
    }
    ngOnInit() {
        this.getActivities();
        this.getAnimals();
        this.id = this.route.snapshot.paramMap.get("id");
    }
};
ActivitiesEngineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activities-engine',
        template: __webpack_require__(/*! raw-loader!./activities-engine.component.html */ "./node_modules/raw-loader/index.js!./src/app/activities-engine/activities-engine.component.html"),
        styles: [__webpack_require__(/*! ./activities-engine.component.scss */ "./src/app/activities-engine/activities-engine.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_activites_service__WEBPACK_IMPORTED_MODULE_2__["ActivitiesService"],
        _magic_engine_magic_engine_component__WEBPACK_IMPORTED_MODULE_3__["MagicEngineComponent"],
        _game_engine_game_engine_component__WEBPACK_IMPORTED_MODULE_4__["GameEngineComponent"],
        _animal_engine_animal_engine_component__WEBPACK_IMPORTED_MODULE_5__["AnimalEngineComponent"],
        _animals_service__WEBPACK_IMPORTED_MODULE_6__["AnimalsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])
], ActivitiesEngineComponent);



/***/ }),

/***/ "./src/app/animal-engine/animal-engine.component.scss":
/*!************************************************************!*\
  !*** ./src/app/animal-engine/animal-engine.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuaW1hbC1lbmdpbmUvYW5pbWFsLWVuZ2luZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/animal-engine/animal-engine.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/animal-engine/animal-engine.component.ts ***!
  \**********************************************************/
/*! exports provided: AnimalEngineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalEngineComponent", function() { return AnimalEngineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animals.service */ "./src/app/animals.service.ts");



let AnimalEngineComponent = class AnimalEngineComponent {
    constructor(animalService) {
        this.animalService = animalService;
        this.animals = [];
    }
    getAnimals() {
        this.animalService.getAnimals()
            .subscribe(animals => this.animals = animals);
    }
    getCurrentAnimal() {
        //TODO: create a check for active animal currently there is only 1 animal
        let currentAnimalvl = this.animals.filter((item) => {
            return item.lvl >= 1;
        }).map(function (item) {
            return item.name;
        });
        return currentAnimalvl.toString();
    }
    ngOnInit() {
        this.getAnimals();
        this.getCurrentAnimal();
    }
};
AnimalEngineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-animal-engine',
        template: __webpack_require__(/*! raw-loader!./animal-engine.component.html */ "./node_modules/raw-loader/index.js!./src/app/animal-engine/animal-engine.component.html"),
        styles: [__webpack_require__(/*! ./animal-engine.component.scss */ "./src/app/animal-engine/animal-engine.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_animals_service__WEBPACK_IMPORTED_MODULE_2__["AnimalsService"]])
], AnimalEngineComponent);



/***/ }),

/***/ "./src/app/animal-select/animal-select.component.scss":
/*!************************************************************!*\
  !*** ./src/app/animal-select/animal-select.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuaW1hbC1zZWxlY3QvYW5pbWFsLXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/animal-select/animal-select.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/animal-select/animal-select.component.ts ***!
  \**********************************************************/
/*! exports provided: AnimalSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalSelectComponent", function() { return AnimalSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animal_engine_animal_engine_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animal-engine/animal-engine.component */ "./src/app/animal-engine/animal-engine.component.ts");
/* harmony import */ var _animals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animals.service */ "./src/app/animals.service.ts");




let AnimalSelectComponent = class AnimalSelectComponent {
    constructor(animalEngine, animalService) {
        this.animalEngine = animalEngine;
        this.animalService = animalService;
        this.animals = [];
    }
    getAnimals() {
        this.animalService.getAnimals()
            .subscribe(animals => this.animals = animals);
    }
    selectedAnimal(id) {
        for (let i = 0; i < this.animals.length; i++) {
            if (id === this.animals[i].id) {
                this.animals[i].selected = true;
            }
        }
    }
    ngOnInit() {
        this.getAnimals();
    }
};
AnimalSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'animal-select',
        template: __webpack_require__(/*! raw-loader!./animal-select.component.html */ "./node_modules/raw-loader/index.js!./src/app/animal-select/animal-select.component.html"),
        styles: [__webpack_require__(/*! ./animal-select.component.scss */ "./src/app/animal-select/animal-select.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_animal_engine_animal_engine_component__WEBPACK_IMPORTED_MODULE_2__["AnimalEngineComponent"],
        _animals_service__WEBPACK_IMPORTED_MODULE_3__["AnimalsService"]])
], AnimalSelectComponent);



/***/ }),

/***/ "./src/app/animals.service.ts":
/*!************************************!*\
  !*** ./src/app/animals.service.ts ***!
  \************************************/
/*! exports provided: AnimalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalsService", function() { return AnimalsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Models_animal_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Models/animal-list */ "./src/app/Models/animal-list.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AnimalsService = class AnimalsService {
    constructor() { }
    getAnimals() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_Models_animal_list__WEBPACK_IMPORTED_MODULE_2__["ANIMALS"]);
    }
};
AnimalsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AnimalsService);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Animal Game';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _magic_engine_magic_engine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./magic-engine/magic-engine.component */ "./src/app/magic-engine/magic-engine.component.ts");
/* harmony import */ var _animal_engine_animal_engine_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animal-engine/animal-engine.component */ "./src/app/animal-engine/animal-engine.component.ts");
/* harmony import */ var _activities_engine_activities_engine_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activities-engine/activities-engine.component */ "./src/app/activities-engine/activities-engine.component.ts");
/* harmony import */ var _wonderland_engine_wonderland_engine_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wonderland-engine/wonderland-engine.component */ "./src/app/wonderland-engine/wonderland-engine.component.ts");
/* harmony import */ var _magic_count_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./magic-count.service */ "./src/app/magic-count.service.ts");
/* harmony import */ var _activites_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./activites.service */ "./src/app/activites.service.ts");
/* harmony import */ var _game_engine_game_engine_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./game-engine/game-engine.component */ "./src/app/game-engine/game-engine.component.ts");
/* harmony import */ var _save_load_save_load_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./save-load/save-load.component */ "./src/app/save-load/save-load.component.ts");
/* harmony import */ var _animal_select_animal_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./animal-select/animal-select.component */ "./src/app/animal-select/animal-select.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-progress-bar */ "./node_modules/ngx-progress-bar/index.js");
/* harmony import */ var ngx_progress_bar__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngx_progress_bar__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");


















const appRoutes = [
    { path: 'animal-select', component: _animal_select_animal_select_component__WEBPACK_IMPORTED_MODULE_13__["AnimalSelectComponent"] },
    { path: 'game/:id',
        component: _game_engine_game_engine_component__WEBPACK_IMPORTED_MODULE_11__["GameEngineComponent"],
    },
    {
        path: '',
        redirectTo: '/animal-select',
        pathMatch: 'full'
    }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _magic_engine_magic_engine_component__WEBPACK_IMPORTED_MODULE_5__["MagicEngineComponent"],
            _activities_engine_activities_engine_component__WEBPACK_IMPORTED_MODULE_7__["ActivitiesEngineComponent"],
            _game_engine_game_engine_component__WEBPACK_IMPORTED_MODULE_11__["GameEngineComponent"],
            _wonderland_engine_wonderland_engine_component__WEBPACK_IMPORTED_MODULE_8__["WonderlandEngineComponent"],
            _animal_engine_animal_engine_component__WEBPACK_IMPORTED_MODULE_6__["AnimalEngineComponent"],
            _save_load_save_load_component__WEBPACK_IMPORTED_MODULE_12__["SaveLoadComponent"],
            _animal_select_animal_select_component__WEBPACK_IMPORTED_MODULE_13__["AnimalSelectComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_16__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_progress_bar__WEBPACK_IMPORTED_MODULE_15__["ProgressBarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(appRoutes),
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"]
        ],
        providers: [_magic_count_service__WEBPACK_IMPORTED_MODULE_9__["MagicCountService"], _activites_service__WEBPACK_IMPORTED_MODULE_10__["ActivitiesService"], _magic_engine_magic_engine_component__WEBPACK_IMPORTED_MODULE_5__["MagicEngineComponent"], _wonderland_engine_wonderland_engine_component__WEBPACK_IMPORTED_MODULE_8__["WonderlandEngineComponent"], _animal_engine_animal_engine_component__WEBPACK_IMPORTED_MODULE_6__["AnimalEngineComponent"], _game_engine_game_engine_component__WEBPACK_IMPORTED_MODULE_11__["GameEngineComponent"], _save_load_save_load_component__WEBPACK_IMPORTED_MODULE_12__["SaveLoadComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/game-engine/game-engine.component.scss":
/*!********************************************************!*\
  !*** ./src/app/game-engine/game-engine.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtZW5naW5lL2dhbWUtZW5naW5lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/game-engine/game-engine.component.ts":
/*!******************************************************!*\
  !*** ./src/app/game-engine/game-engine.component.ts ***!
  \******************************************************/
/*! exports provided: GameEngineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEngineComponent", function() { return GameEngineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _magic_engine_magic_engine_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../magic-engine/magic-engine.component */ "./src/app/magic-engine/magic-engine.component.ts");



let GameEngineComponent = class GameEngineComponent {
    constructor(magicEngine) {
        this.magicEngine = magicEngine;
        this.totalMagic = 0;
    }
    magicTotal() {
        this.totalMagic = parseInt(document.getElementById('magicTotal').innerHTML);
    }
    createAllMagic() {
        this.magicEngine.createMagic();
    }
    ngOnInit() {
    }
};
GameEngineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-engine',
        template: __webpack_require__(/*! raw-loader!./game-engine.component.html */ "./node_modules/raw-loader/index.js!./src/app/game-engine/game-engine.component.html"),
        styles: [__webpack_require__(/*! ./game-engine.component.scss */ "./src/app/game-engine/game-engine.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_magic_engine_magic_engine_component__WEBPACK_IMPORTED_MODULE_2__["MagicEngineComponent"]])
], GameEngineComponent);



/***/ }),

/***/ "./src/app/items.service.ts":
/*!**********************************!*\
  !*** ./src/app/items.service.ts ***!
  \**********************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _Models_items_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Models/items-list */ "./src/app/Models/items-list.ts");




let ItemsService = class ItemsService {
    constructor() { }
    getItems() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_Models_items_list__WEBPACK_IMPORTED_MODULE_3__["ITEMS"]);
    }
};
ItemsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ItemsService);



/***/ }),

/***/ "./src/app/magic-count.service.ts":
/*!****************************************!*\
  !*** ./src/app/magic-count.service.ts ***!
  \****************************************/
/*! exports provided: MagicCountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicCountService", function() { return MagicCountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MagicCountService = class MagicCountService {
    constructor() {
        this.count = 0;
    }
};
MagicCountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MagicCountService);



/***/ }),

/***/ "./src/app/magic-engine/magic-engine.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/magic-engine/magic-engine.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hZ2ljLWVuZ2luZS9tYWdpYy1lbmdpbmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/magic-engine/magic-engine.component.ts":
/*!********************************************************!*\
  !*** ./src/app/magic-engine/magic-engine.component.ts ***!
  \********************************************************/
/*! exports provided: MagicEngineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicEngineComponent", function() { return MagicEngineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _magic_count_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../magic-count.service */ "./src/app/magic-count.service.ts");



let MagicEngineComponent = class MagicEngineComponent {
    constructor(magicCount) {
        this.magicCount = magicCount;
    }
    getMagic() {
        return this.magicCount.count;
    }
    createMagic() {
        this.magicCount.count += 1;
    }
    removeMagic(cost) {
        this.magicCount.count -= cost;
    }
    updateMagic(magic) {
        this.magicCount.count = magic;
    }
    ngOnInit() {
        this.getMagic();
    }
};
MagicEngineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-magic-engine',
        template: __webpack_require__(/*! raw-loader!./magic-engine.component.html */ "./node_modules/raw-loader/index.js!./src/app/magic-engine/magic-engine.component.html"),
        styles: [__webpack_require__(/*! ./magic-engine.component.scss */ "./src/app/magic-engine/magic-engine.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_magic_count_service__WEBPACK_IMPORTED_MODULE_2__["MagicCountService"]])
], MagicEngineComponent);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");








const MaterialComponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [MaterialComponents],
        exports: [MaterialComponents],
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/save-load/save-load.component.scss":
/*!****************************************************!*\
  !*** ./src/app/save-load/save-load.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhdmUtbG9hZC9zYXZlLWxvYWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/save-load/save-load.component.ts":
/*!**************************************************!*\
  !*** ./src/app/save-load/save-load.component.ts ***!
  \**************************************************/
/*! exports provided: SaveLoadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveLoadComponent", function() { return SaveLoadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _magic_engine_magic_engine_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../magic-engine/magic-engine.component */ "./src/app/magic-engine/magic-engine.component.ts");
/* harmony import */ var _animals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animals.service */ "./src/app/animals.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");
/* harmony import */ var _activites_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../activites.service */ "./src/app/activites.service.ts");







let SaveLoadComponent = class SaveLoadComponent {
    constructor(magicEngine, animalService, itemsService, activitiesService, route) {
        this.magicEngine = magicEngine;
        this.animalService = animalService;
        this.itemsService = itemsService;
        this.activitiesService = activitiesService;
        this.route = route;
        this.magic = 0;
        this.animals = [];
        this.items = [];
        this.activities = [];
    }
    getAnimals() {
        this.animalService.getAnimals()
            .subscribe(animals => this.animals = animals);
    }
    getItems() {
        this.itemsService.getItems()
            .subscribe(items => this.items = items);
    }
    getActivities() {
        this.activitiesService.getActivities()
            .subscribe(activities => this.activities = activities);
    }
    getCurrentAnimal() {
        let currentAnimal = this.id;
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].id == currentAnimal) {
                return this.animals[i];
            }
        }
    }
    getItemsArray() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id > 0) {
                return this.items[i];
            }
        }
    }
    getActivitiesArray() {
        for (let i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id > 0) {
                return this.activities[i];
            }
        }
    }
    saveGame() {
        let magicAmount = this.magicEngine.getMagic();
        let animals = this.getCurrentAnimal();
        let items = this.getItemsArray();
        let activities = this.getActivitiesArray();
        let save = {
            magic: magicAmount,
            animals: animals,
            items: items,
            activities: activities
        };
        console.log('This is What is saved', JSON.stringify(save));
        //localStorage.setItem('save', JSON.stringify(save));
    }
    loadGame() {
    }
    ngOnInit() {
        this.getAnimals();
        this.getItems();
        this.getActivities();
        this.id = this.route.snapshot.paramMap.get("id");
    }
};
SaveLoadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-save-load',
        template: __webpack_require__(/*! raw-loader!./save-load.component.html */ "./node_modules/raw-loader/index.js!./src/app/save-load/save-load.component.html"),
        styles: [__webpack_require__(/*! ./save-load.component.scss */ "./src/app/save-load/save-load.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_magic_engine_magic_engine_component__WEBPACK_IMPORTED_MODULE_2__["MagicEngineComponent"],
        _animals_service__WEBPACK_IMPORTED_MODULE_3__["AnimalsService"],
        _items_service__WEBPACK_IMPORTED_MODULE_5__["ItemsService"],
        _activites_service__WEBPACK_IMPORTED_MODULE_6__["ActivitiesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], SaveLoadComponent);



/***/ }),

/***/ "./src/app/wonderland-engine/wonderland-engine.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/wonderland-engine/wonderland-engine.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvbmRlcmxhbmQtZW5naW5lL3dvbmRlcmxhbmQtZW5naW5lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/wonderland-engine/wonderland-engine.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/wonderland-engine/wonderland-engine.component.ts ***!
  \******************************************************************/
/*! exports provided: WonderlandEngineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WonderlandEngineComponent", function() { return WonderlandEngineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");
/* harmony import */ var _magic_engine_magic_engine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../magic-engine/magic-engine.component */ "./src/app/magic-engine/magic-engine.component.ts");
/* harmony import */ var _animal_engine_animal_engine_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animal-engine/animal-engine.component */ "./src/app/animal-engine/animal-engine.component.ts");
/* harmony import */ var _animals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animals.service */ "./src/app/animals.service.ts");






let WonderlandEngineComponent = class WonderlandEngineComponent {
    constructor(itemsService, magicEngine, animalEngine, animalService) {
        this.itemsService = itemsService;
        this.magicEngine = magicEngine;
        this.animalEngine = animalEngine;
        this.animalService = animalService;
        this.items = [];
        this.animals = [];
        this.totalMps = 0;
    }
    getItems() {
        this.itemsService.getItems()
            .subscribe(items => this.items = items);
    }
    getAnimals() {
        this.animalService.getAnimals()
            .subscribe(animals => this.animals = animals);
    }
    purchaseItem(cost, id) {
        let totalMagic = document.getElementById('magicTotal').innerHTML;
        if (totalMagic >= cost) {
            //console.log('with this much magic ' + totalMagic);
            this.magicEngine.removeMagic(cost);
            this.updateItem(id);
            this.updateAnimal(id);
            this.updateAnimalExp(id);
            setTimeout(() => this.levelUpAnimal(), 1500);
        }
        else {
            console.log('You Do not have enough magic');
        }
    }
    checkItems(id) {
        /**this will check against total magic to see if there enough available for you to purchase an activity,
         * if there is it will set the button to enabled **/
        let currentMagic = this.magicEngine.getMagic();
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id && this.items[i].cost > currentMagic) {
                return true;
            }
        }
    }
    getCurrentAnimallvl() {
        //TODO: create a check for active animal currently there is only 1 animal
        let currentAnimalvl = this.animals.filter((item) => {
            return item.lvl;
        }).map(function (item) {
            return item.lvl;
        });
        return currentAnimalvl.toString();
    }
    getItemLvl(id) {
        let itemArray = this.items;
        let itemlvl = itemArray.filter((item) => {
            return item.id === id;
        }).map(function (item) {
            return item.lvl;
        });
        return itemlvl.toString();
    }
    getItemStr(id) {
        let itemArray = this.items;
        let itemStr = itemArray.filter((item) => {
            return item.id === id;
        }).map(function (item) {
            return item.strUpgrade;
        });
        return itemStr.toString();
    }
    getItemBeauty(id) {
        let itemArray = this.items;
        let itemBeauty = itemArray.filter((item) => {
            return item.id === id;
        }).map(function (item) {
            return item.beautyUpgrade;
        });
        return itemBeauty.toString();
    }
    getItemSpeed(id) {
        let itemArray = this.items;
        let itemSpeed = itemArray.filter((item) => {
            return item.id === id;
        }).map(function (item) {
            return item.speedUpgrade;
        });
        return itemSpeed.toString();
    }
    getitemInt(id) {
        let itemArray = this.items;
        let itemInt = itemArray.filter((item) => {
            return item.id === id;
        }).map(function (item) {
            return item.intUpgrade;
        });
        return itemInt.toString();
    }
    getitemExp(id) {
        let itemArray = this.items;
        let itemExp = itemArray.filter((item) => {
            return item.id === id;
        }).map(function (item) {
            return item.expGain;
        });
        return itemExp.toString();
    }
    ngOnInit() {
        this.getItems();
        this.getAnimals();
    }
    updateAnimal(id) {
        /**
         * This will update the animal with the bonus amount from the item you are purchasing.
         */
        let animalId = Number(document.getElementById('animal-id').innerHTML);
        let itemStr = Number(this.getItemStr(id));
        let itemInt = Number(this.getitemInt(id));
        let itemSpeed = Number(this.getItemSpeed(id));
        let itemBeauty = Number(this.getItemBeauty(id));
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].id === animalId && itemStr > 0) {
                let upgrade = (itemStr + this.animals[i].str);
                return this.animals[i].str = upgrade;
            }
            if (this.animals[i].id === animalId && itemInt > 0) {
                let upgrade = (itemInt + this.animals[i].intelligence);
                return this.animals[i].intelligence = upgrade;
            }
            if (this.animals[i].id === animalId && itemSpeed > 0) {
                let upgrade = (itemSpeed + this.animals[i].speed);
                return this.animals[i].speed = upgrade;
            }
            if (this.animals[i].id === animalId && itemBeauty > 0) {
                let upgrade = (itemBeauty + this.animals[i].beauty);
                return this.animals[i].beauty = upgrade;
            }
        }
    }
    updateAnimalExp(id) {
        /**
         * This will update the animal with the bonus amount from the item you are purchasing.
         */
        let animalId = Number(document.getElementById('animal-id').innerHTML);
        let itemExp = Number(this.getitemExp(id));
        //console.log('Total Exp: ', itemExp);
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].id === animalId && itemExp > 0) {
                let upgrade = (itemExp + this.animals[i].currentExperience);
                return this.animals[i].currentExperience = upgrade;
            }
        }
    }
    levelUpAnimal() {
        let animalId = Number(document.getElementById('animal-id').innerHTML);
        let currentXp = Number(document.getElementById('current-xp').innerHTML);
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].id === animalId && this.animals[i].experienceNeeded <= currentXp) {
                let newXp = (10 / 100) * this.animals[i].experienceNeeded;
                let upgradedXp = (this.animals[i].experienceNeeded + newXp);
                this.animals[i].lvl++;
                this.animals[i].experienceNeeded = upgradedXp;
                this.animals[i].currentExperience = 0;
            }
        }
    }
    updateItem(id) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                this.items[i].count++;
                this.items[i].cost += this.items[i].costIncrease;
            }
        }
    }
};
WonderlandEngineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wonderland-engine',
        template: __webpack_require__(/*! raw-loader!./wonderland-engine.component.html */ "./node_modules/raw-loader/index.js!./src/app/wonderland-engine/wonderland-engine.component.html"),
        styles: [__webpack_require__(/*! ./wonderland-engine.component.scss */ "./src/app/wonderland-engine/wonderland-engine.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"],
        _magic_engine_magic_engine_component__WEBPACK_IMPORTED_MODULE_3__["MagicEngineComponent"],
        _animal_engine_animal_engine_component__WEBPACK_IMPORTED_MODULE_4__["AnimalEngineComponent"],
        _animals_service__WEBPACK_IMPORTED_MODULE_5__["AnimalsService"]])
], WonderlandEngineComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bpollak/Documents/angularwebsites/UnicornClicker/unicorn-clicker-core/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map