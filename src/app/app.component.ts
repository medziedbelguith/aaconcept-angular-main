import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { Router, Event } from '@angular/router';
import { NavigationStart, NavigationError, NavigationEnd } from '@angular/router'; 

import { element } from 'protractor';
import { interval, timer } from 'rxjs';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  
  title = 'aaconcept-angular';
  routePath=""

  constructor( private router: Router) {
   
    this.routePath = localStorage.getItem("routePath");
    
    this.router.events.subscribe((event: Event) => {

      let top = document.getElementById('pagebody');
      if (top !== null) {
        top.scrollIntoView();
        top = null;
      }


    //  this.initFacebookService();

      if (event instanceof NavigationEnd) {
          // if(event.url != this.routePath && event.url != "/accueil"){
          if(event.url != this.routePath){
            localStorage.setItem("routePath", event.url);
            //location.reload();
               
              //window.scroll(0,0);
             // document.body.scrollTop = 0;
              
         
             
          }

      }  

    });

  }

  ngAfterViewInit() {
  }

  

  ngOnInit(): void {
  }
/*
  private initFacebookService(): void {
    const initParams: InitParams = {xfbml:true, version:'v3.2'};
    this.facebookService.init(initParams);
  }
*/
   scrollTop(){
    window.scrollTo(0,0); 
             
   }
 
 
  
}
