import { NgModule } from "@angular/core";
import { RouterModule ,Routes} from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { CommandeComponent } from "./commande/commande.component";
import { PanierComponent } from "./panier/panier.component";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';



const routes: Routes = [
    {path:'',component:ConnexionComponent},
    {path:'',component:InscriptionComponent},
    {path:'',component:AccueilComponent},
    {path:'',component:CommandeComponent},
    {path:'',component:PanierComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[HeaderComponent,AccueilComponent,ConnexionComponent,InscriptionComponent,CommandeComponent,PanierComponent,MatToolbarModule, MatButtonModule, MatIconModule,AppRoutingModule],
})
export class AppRoutingModule{}