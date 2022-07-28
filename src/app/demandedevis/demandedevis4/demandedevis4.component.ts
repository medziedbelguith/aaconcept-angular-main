import { Component, OnInit,  Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-demandedevis4',
  templateUrl: './demandedevis4.component.html',
  styleUrls: ['./demandedevis4.component.css']
})
export class Demandedevis4Component implements OnInit {

  @Output() showDivsEvent = new EventEmitter<number>();

  @Output() setCoordonnees = new EventEmitter<any>();
  
  @Input() isLoading = false
  
  request = {
    firstName:"",
    lastName:"",
    email:"",
    telephone1:"",
    telephone2:"",
    adresse:""
  }

  erreurRequest = {
    firstName:"",
    lastName:"",
    email:"",
    telephone1:"",
    adresse:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  showDivs(number){
     this.showDivsEvent.emit(number)
  }

  setCoordonnees2(){

    for(let key in this.erreurRequest){
      this.erreurRequest[key] = ""
      document.getElementById(key).classList.remove("erreur")
    }

    var isValid = true

    for(let key in this.erreurRequest){
      if(this.request[key] == ""){
        this.erreurRequest[key] = "SVP inserer ce champs."
        document.getElementById(key).classList.add("erreur")
        isValid = false
      }
    }

    if(!isValid){
        return
    }
     
    this.setCoordonnees.emit(this.request)
  }

}
