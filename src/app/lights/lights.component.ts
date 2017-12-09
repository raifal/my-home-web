import{Component, OnInit}from '@angular/core';
import {Light}from '../light';
import {LightService} from '../light.service';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css']
})
export class LightsComponent implements OnInit {

  lights : Light[];

  constructor(private lightService: LightService) { }

  getLights(): void {
    this.lightService.getLights()
      .subscribe((lights: Light[]) => this.lights = lights);
  }

  ngOnInit() {
    this.getLights();
  }

}
