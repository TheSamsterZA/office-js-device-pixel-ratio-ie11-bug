import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  devicePixelRatio: number = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // Get initial default value and store it away
    this.router.events
      .filter((event) => event instanceof NavigationStart)
      .take(1)
      .subscribe((event) => {
        console.log(`[FIRST NavigationStart] DEVICE PIXEL RATIO: ${window.devicePixelRatio}`);
        this.devicePixelRatio = window.devicePixelRatio;
      });


    this.router.events
      .filter((event) => event instanceof NavigationStart)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .subscribe((event) => {
        console.log(`[NavigationStart] DEVICE PIXEL RATIO: ${window.devicePixelRatio}`);
        if (window.devicePixelRatio !== this.devicePixelRatio) {
          console.log(`Reset of window.devicePixelRatio to ${this.devicePixelRatio}`);
          //window.devicePixelRatio = this.devicePixelRatio; // window.devicePixelRatio is read-only. See: https://www.caniuse.com/#search=devicePixelRatio
        }
      });

    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .subscribe((event) => {
        console.log(`[NavigationEnd] DEVICE PIXEL RATIO: ${window.devicePixelRatio}`);
      });
  }
}
