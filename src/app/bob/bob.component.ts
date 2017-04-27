import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/scan';
import 'rxjs/add/observable/fromEvent';


@Component({
  selector: 'app-bob',
  templateUrl: './bob.component.html',
  styleUrls: ['./bob.component.css']
})
export class BobComponent implements OnInit, OnDestroy {
  @ViewChild('button') button;    // use template reference var - see: https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ref-vars
  private ngUnsubscribe: Subject<void> = new Subject<void>()
  click$: Observable<any>;
  count: number;
  constructor() {
    this.count = 0;
  }

  ngOnInit() {
    console.log(this.button)
    this.click$ = Observable.fromEvent(this.button.nativeElement, 'click');
    this.click$.takeUntil(this.ngUnsubscribe)
               .scan(count => count + 1, 0)
               .subscribe(count => {this.count = count;
                                    console.log('clicked!!');});
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    //this.click$.unsubscribe();
  }

}
