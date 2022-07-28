import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sliderpage',
  templateUrl: './sliderpage.component.html',
  styleUrls: ['./sliderpage.component.css']
})
export class SliderpageComponent implements OnInit {

  constructor() { }

  @Input() name = "";
  
  ngOnInit(): void {
  }

}
