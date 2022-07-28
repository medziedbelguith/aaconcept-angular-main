import { Component, OnInit} from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Router, RouterModule } from '@angular/router';
import { InformationGenaraleService } from '../services/information-genarale.service';
@Component({
  selector: 'app-demandedevis',
  templateUrl: './demandedevis.component.html',
  styleUrls: ['./demandedevis.component.css']
})

export class DemandedevisComponent implements OnInit {

  request = {
    typeTravaux: "",
    natureTravaux: "",
    projet:"",
    firstName:"",
    lastName:"",
    email:"",
    telephone1:"",
    telephone2:"",
    adresse:""
  }
  
  constructor( private inforamtion:InformationGenaraleService, private router: Router,  private http: HttpClient, 
    ) { }

  ngOnInit(): void {
  }

  slideIndex = 1

  showDivs(slideIndexSuivant) {
 
    var x = document.getElementsByClassName("block1");
    
    if (slideIndexSuivant > x.length){
      slideIndexSuivant = 1
    }else if (slideIndexSuivant < 1){
      slideIndexSuivant = x.length
    }
  
    for (let i = 0; i < x.length; i++) {
      x[i].setAttribute("style", "transform :translateX("+(-100 * (slideIndexSuivant-1))+"%)")
    }
  
    this.slideIndex = slideIndexSuivant

    let top = document.getElementById('slider');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  
  }

  setTypeTravaux(text){
    this.request.typeTravaux = text
  }

  setNatureTravaux(text){
    this.request.natureTravaux = text
  }

  setProjet(text){
    this.request.projet = text
  }

  isLoading = false

  setCoordonnees(newRequest){
    if(this.isLoading == true){
      return
    }

    for(let key in newRequest){
      this.request[key] = newRequest[key]
    }

    this.isLoading = true
    this.http.post(this.inforamtion.baseURL + "api/sendbasicemail", this.request).subscribe(
      res => {
        let resultat: any = res
        this.isLoading = false
        console.log(res)
        if (resultat.status == true) {
          alert("Merci pour votre confiance, Nous vous contactons le plutot possible !!")
          this.router.navigate(['/accueil']);
        }
      }, err => {
        console.log(err)
        this.isLoading = false
      }
    );
  }

}
