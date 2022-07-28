import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router, RouterModule } from '@angular/router';
import { InformationGenaraleService } from 'src/app/services/information-genarale.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  request = {
    email:"",
  }

  erreurRequest = {
  }

  isLoading = false

  
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
    this.http.post(this.inforamtion.baseURL + "api/sendhtmlemail2", this.request).subscribe(
      res => {
        let resultat: any = res
        this.isLoading = false
        console.log(res)
        if (resultat.status == true) {
          alert("Merci pour votre confiance !!")
    //      this.router.navigate(['/accueil']);
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
