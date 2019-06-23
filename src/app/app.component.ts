import { Component, OnInit, OnDestroy } from '@angular/core';
// import 'rxjs/Rx';
import { interval, Observable, Observer, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'course-project';
  featureLoaded = 'recipe';
  dynamicNumberSubscription: Subscription;
  myObserbableSubscription: Subscription;
  // onFeatureChange(feature: string): void {
  //   this.featureLoaded = feature;
  // }
  ngOnInit() {
    const dynamicNumber = interval(1000);
    this.dynamicNumberSubscription = dynamicNumber.subscribe((number: number) => {
      console.log(number);
    });
    const myObserable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('First data package');
      }, 2000);
      setTimeout(() => {
        observer.next('second data package');
      }, 3000);
      // setTimeout(() => {
      //   observer.error('Error');
      // }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 5000);
    });

    this.myObserbableSubscription = myObserable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('Completed');
      }
    );

    setTimeout(() => {
      this.dynamicNumberSubscription.unsubscribe();
      this.myObserbableSubscription.unsubscribe();
    }, 10000);
  }

  ngOnDestroy() {
    this.dynamicNumberSubscription.unsubscribe();
    this.myObserbableSubscription.unsubscribe();
  }
}
