import { Component, OnInit, Input } from '@angular/core';
import {Light} from '../light';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LightService }  from '../light.service';

@Component({
  selector: 'app-light-detail',
  templateUrl: './light-detail.component.html',
  styleUrls: ['./light-detail.component.css']
})
export class LightDetailComponent implements OnInit {

  @Input() light: Light;

  constructor(
    private route: ActivatedRoute,
    private lightService: LightService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getLight();
  }

  getLight(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.lightService.getLight(id)
      .subscribe(light => this.light = light);
  }

  goBack(): void {
    this.location.back();
  }


}
