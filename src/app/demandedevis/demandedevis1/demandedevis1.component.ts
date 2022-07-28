import { Component, OnInit,  Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-demandedevis1',
  templateUrl: './demandedevis1.component.html',
  styleUrls: ['./demandedevis1.component.css']
})
export class Demandedevis1Component implements OnInit {

  @Output() showDivsEvent = new EventEmitter<number>();

  @Output() setTypeTravaux2 = new EventEmitter<string>();
 
  constructor() { }

  ngOnInit(): void {
  }

  showDivs(number){
    this.showDivsEvent.emit(number)
  }

  setTypeTravaux(event){
    var text = ""
    if(event.target.nodeName == 'IMG'){
      text = event.target.parentElement.children[1].innerHTML
    }else if(event.target.nodeName == 'P'){
      text = event.target.innerHTML
    }else if(event.target.nodeName == 'DIV'){
      text = event.target.children[1].innerHTML
    }
    this.setTypeTravaux2.emit(text)
    this.showDivsEvent.emit(2)
    //this.request.typeTravaux = string
  }
}
