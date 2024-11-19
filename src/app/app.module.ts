import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { Component } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { CommandeComponent } from "./commande/commande.component";
import { PanierComponent } from "./panier/panier.component";
import { AppComponent } from "./app.component";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    declarations:[Component,HeaderComponent,AccueilComponent,ConnexionComponent,InscriptionComponent,CommandeComponent,PanierComponent,MatIconModule],
    imports:[BrowserModule,RouterModule,AppModule,AppRoutingModule,MatButtonModule,MatToolbarModule],
    providers:[],
    bootstrap:[AppComponent],
})
export class AppModule{}