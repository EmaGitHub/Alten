import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private colorSelected;
    private themeChangeSubject$: BehaviorSubject<any> = new BehaviorSubject<any>("#ff0000");

    constructor() { }

    get themeChangeSubjectAsObservable(): Observable<string> {
        return this.themeChangeSubject$.asObservable();
    }

    public nextColorChange(color: string) {
        this.colorSelected = color;
        this.themeChangeSubject$.next(color);
    }

}