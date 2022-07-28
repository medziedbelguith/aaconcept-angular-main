import { Component, OnInit,  Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-demandedevis3',
  templateUrl: './demandedevis3.component.html',
  styleUrls: ['./demandedevis3.component.css']
})
export class Demandedevis3Component implements OnInit {

  @Output() showDivsEvent = new EventEmitter<number>();

  @Output() setProjet = new EventEmitter<string>();

  projet = ""
  erreurProjet

  constructor() { }

  ngOnInit(): void {
  }

  showDivs(number){
    this.showDivsEvent.emit(number)
  }

  setNewProjet(){
    this.erreurProjet = ""
    document.getElementById("projet").classList.remove("erreur")
     
    if(this.projet == ""){
      this.erreurProjet = "SVP inserer votre projet."
      document.getElementById("projet").classList.add("erreur")
     
      return
    }else{
      this.setProjet.emit(this.projet)
      this.showDivsEvent.emit(3)
      
    }
  
  }

  

}
