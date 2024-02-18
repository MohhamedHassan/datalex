import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, first, from, map, of,catchError, fromEvent, interval, Subscription, range, throwError, take, combineLatest, concat, toArray, forkJoin, merge, concatMap, exhaustMap, tap, switchMap, scan, mergeScan, mergeMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _http:HttpClient,private translateService:TranslateService){}
  ngOnInit(): void {
    this.lang()
      // let obs1$ = interval(1000)
      // obs1$.pipe(
      //  // mergeMap(() => of(1,2,3))
      // ).subscribe(console.log)
      //   // 5 + 0 = 5
      //   // 5 + 1 = 6
      //   // 6 + 2 = 8

    }
  getPosts() {
    return this._http.get<any>('https://jsonplaceholder.typicode.com/posts')
  }

 lang() {
  let lang = localStorage.getItem('lang')||'en'
  this.translateService.setDefaultLang('en')
  this.translateService.use(lang)
  if(lang=='ar') {
    document.body.classList.add('rt')
  } else {
    document.body.classList.remove('rt')
  }
 }
}
