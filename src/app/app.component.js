"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let AppComponent = class AppComponent {
    constructor() {
        this.invalidName = 'Test';
        this.invalidMessage = 'Enter a valid projectName';
    }
    ngOnInit() {
        this.projectForm = new forms_1.FormGroup({
            'projectName': new forms_1.FormControl(null, [forms_1.Validators.required, this.testValidator.bind(this)]),
            'mail': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.email]),
            'status': new forms_1.FormControl('critical')
        });
    }
    onSubmit() {
        console.log(this.projectForm.value);
        this.projectForm.reset();
    }
    testValidator(control) {
        if (this.invalidName === 'Test') {
            return { 'testValidator': true };
        }
        return null;
    }
};
AppComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
