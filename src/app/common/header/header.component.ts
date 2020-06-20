import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  codeSnippetText = 'Source Code';
  minValue2 = 1000;
  maxValue2 = 2000;
  step2 = 500;
  currentValues = [0, 0];
  currentValues2 = [2000, 3500];

  onSliderChange(selectedValues: number[]) {
    this.currentValues = selectedValues;
  }

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {

  }

  IsNotAdminUser() {
    return this.router.snapshot.url.toString().indexOf('admin') > 0 ;
  }

}
