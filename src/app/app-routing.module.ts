import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AvantapresComponent } from './avantapres/avantapres.component';
import { ImagesComponent } from './images/images.component';
import { ServicesComponent } from './services/services.component';
import { DemandedevisComponent } from './demandedevis/demandedevis.component';
import { ContactComponent } from './contact/contact.component';
import { RealisationsComponent } from './realisations/realisations.component';

import { EnduitdecoratifComponent } from './services/enduitdecoratif/enduitdecoratif.component';
import { NettoyagetoitureComponent } from './services/nettoyagetoiture/nettoyagetoiture.component';
import { RenovationfacadeComponent } from './services/renovationfacade/renovationfacade.component';
import { RenovationinterieurComponent } from './services/renovationinterieur/renovationinterieur.component';


const routes: Routes = [
  {path: '',redirectTo:'accueil',pathMatch:"full"},

  {path: 'Enduit-decoratif' , component: EnduitdecoratifComponent },
  {path: 'Nettoyage-toiture' , component: NettoyagetoitureComponent },
  {path: 'Renovation-facade' , component: RenovationfacadeComponent },
  {path: 'Renovation-interieur' , component: RenovationinterieurComponent },

  {path: 'accueil' , component: HomeComponent },
  {path: 'Presentation' , component:  PresentationComponent },
  {path: 'Avantapres' , component:  AvantapresComponent },
  {path: 'Images' , component:  ImagesComponent },
  {path: 'Services' , component:  ServicesComponent  },
  {path: 'Demandedevis' , component:  DemandedevisComponent },
  {path: 'Contact' , component:  ContactComponent },
  {path: 'Realisations' , component:  RealisationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
