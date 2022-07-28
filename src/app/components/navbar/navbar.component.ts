import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displaySousMenu(){

    let buttons = document.getElementsByClassName("icon-menu");
    let listMobile = document.getElementsByClassName("navbar-list-mobile");
    let backgroundMobile = document.getElementsByClassName("backround-class");
    
    if( buttons[0].getAttribute("class").indexOf("desactive") == -1 ){
   
      buttons[0].setAttribute("class", "fas fa-bars icon-menu desactive");
      buttons[1].setAttribute("class", "fas fa-times icon-menu active");
      listMobile[0].setAttribute("class", "navbar-list-mobile active active-list-mobile");
      backgroundMobile[0].setAttribute("class", "content backround-class active-backround");
    }else{
   
      buttons[0].setAttribute("class", "fas fa-bars icon-menu active");
      buttons[1].setAttribute("class", "fas fa-times icon-menu desactive");
      listMobile[0].setAttribute("class", "navbar-list-mobile");
      backgroundMobile[0].setAttribute("class", "content backround-class");
    }

  }
}
