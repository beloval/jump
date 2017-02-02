import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import {TranslateService} from "ng2-translate";

@Component({
    selector: 'my-home',
    templateUrl: 'components/home/home.component.html',
    styleUrls: ['components/home/home.component.css']
})
export class HomeComponent {
    name: string = "Home page";
    users: {};
    currentLocale:string;

    constructor(http: Http, private translate: TranslateService) {

        this.currentLocale = translate.currentLang;


        http.get("/users")
            .map(data => data.json())
            .subscribe((data) => this.users = data);
    }

    onChangeLocaleClick(loc:string) {
        this.currentLocale = loc;
        this.translate.use(loc);
    }
}