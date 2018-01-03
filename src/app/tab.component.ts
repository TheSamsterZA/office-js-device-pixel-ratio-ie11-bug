import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'tab',
  template: `<div>{{ tabName }}</div>`
})
export class TabComponent
  implements OnInit {

  tabName = '<Not Set>';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        const name = params.get('tabName');
        this.tabName = name;
      });
  }
}
