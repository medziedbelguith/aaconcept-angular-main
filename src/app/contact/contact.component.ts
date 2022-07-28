import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router, RouterModule } from '@angular/router';
import { InformationGenaraleService } from '../services/information-genarale.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  request = {
    name:"",
    adresse:"",
    email:"",
    telephone:"",
    codePostal:"",
    ville:"",
    projets:"",
    message:""
  }

  erreurRequest = {
    email:"",
    telephone:"",
  }

  isLoading = false

  clickProjets(event){
    if(this.request.projets.indexOf(event.target.name) == -1){
      this.request.projets += "//"+event.target.name
   }else{
      this.request.projets = this.request.projets.replace("//"+event.target.name,"")
    }

  }

  controleInput(){

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
     
    this.isLoading = true
    this.http.post(this.inforamtion.baseURL + "api/sendhtmlemail", this.request).subscribe(
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


  constructor( private inforamtion:InformationGenaraleService, private router: Router,  private http: HttpClient, 
    ) { }


  ngOnInit(): void { }



}
