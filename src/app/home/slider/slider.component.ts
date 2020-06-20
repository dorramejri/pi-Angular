import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../shared/service/home.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
 datas : any
  constructor(
    private service : HomeService
  ) { }

  ngOnInit() {
    this.service.getHomeData().subscribe(data => {
      this.datas = data
    })
  }

}
