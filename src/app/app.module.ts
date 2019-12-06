import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { LivreursComponent } from './livreurs/livreurs.component';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginator,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {SgilService} from './service/sgil.service';
import { HeaderComponent } from './header/header.component';
import { TrajetsComponent } from './trajets/trajets.component';
import { AddtrajetComponent } from './addtrajet/addtrajet.component';
import { AddlivreurComponent } from './addlivreur/addlivreur.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AddTrajetComponent } from './add-trajet/add-trajet.component';
import { NoteclientComponent } from './noteclient/noteclient.component';
import { AjoutrajetComponent } from './ajoutrajet/ajoutrajet.component';
import { NotelivreurComponent } from './notelivreur/notelivreur.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService as AuthGuard }  from './auth-guard.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import { AppcontentrootComponent } from './appcontentroot/appcontentroot.component';
import { DetailTrajetComponent } from './detail-trajet/detail-trajet.component';

const routes: Routes = [
  { path: 'clients', component: ClientsComponent ,canActivate: [AuthGuard] },
  { path: 'livreurs', component: LivreursComponent ,canActivate: [AuthGuard]  },
  { path: 'trajets', component: TrajetsComponent ,canActivate: [AuthGuard] },
  { path: 'noteclient', component: NoteclientComponent,canActivate: [AuthGuard]  },
  { path: 'notelivreur', component: NotelivreurComponent,canActivate: [AuthGuard]  },
  { path: 'header', component: HeaderComponent,canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    LivreursComponent,
    HeaderComponent,
    TrajetsComponent,
    AddtrajetComponent,
    AddlivreurComponent,
    AddTrajetComponent,
    NoteclientComponent,
    AjoutrajetComponent,
    NotelivreurComponent,
    LoginComponent,
    AppcontentrootComponent,
    DetailTrajetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule ,
    SweetAlert2Module.forRoot(),
    SweetAlert2Module,
  ],
  entryComponents: [
    AddlivreurComponent ,
    AddTrajetComponent ,
    AjoutrajetComponent ,
   DetailTrajetComponent
],
  providers: [SgilService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
