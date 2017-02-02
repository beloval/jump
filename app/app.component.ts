import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
    selector: 'my-app',
    styles: [`h1 {
	color: white;
	background: darkgray;
	padding: 20px;
}
`],
    template: `
<h1>My First {{name}} app</h1>
<router-outlet></router-outlet>

<a [routerLink]="['/']">Home</a> | <a [routerLink]="['/about/', { id: 2 }]">About</a>`,
})
export class AppComponent {
    name: string = "Angular 2 on Express";

    constructor(private translate: TranslateService) {
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    }
}
