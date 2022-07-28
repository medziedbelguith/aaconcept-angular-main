import { Component, OnInit,  Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-demandedevis2',
  templateUrl: './demandedevis2.component.html',
  styleUrls: ['./demandedevis2.component.css']
})
export class Demandedevis2Component implements OnInit {

  @Output() showDivsEvent = new EventEmitter<number>();

  @Output() setNatureTravaux = new EventEmitter<string>();

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
    this.setNatureTravaux.emit(text)
    this.showDivsEvent.emit(3)
    //this.request.typeTravaux = string
  }

}
