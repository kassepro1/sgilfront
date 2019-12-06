import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../model/client';
import {environment} from '../../environments/environment';
// @ts-ignore
import {Livreur} from '../model/livreurs';
import {Trajet} from '../model/trajet';
import {Noteclient} from '../model/noteclient';
import {Notelivreur} from '../model/notelivreur';
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class SgilService {
  
   private token: string = null;
  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Client[]> {
    console.log('execute');
    return this.http.get<Client[]>(environment.SERVER_URL + 'clients');
  }

  getAllLivreurs(): Observable<Livreur[]> {
    console.log('execute');
    return this.http.get<Livreur[]>(environment.SERVER_URL + 'livreurs');
  }
  getAllTrajets(): Observable<Trajet[]> {
    console.log('execute');
    return this.http.get<Trajet[]>(environment.SERVER_URL + 'trajets/list');
  }

  addLivreur(livreur) {
    console.log('execute');
    return this.http.post(environment.SERVER_URL + 'livreurs', livreur);
  }

  getLivreurById(id): Observable<Livreur> {
    console.log('execute');
    return this.http.get<Livreur>(environment.SERVER_URL + 'livreurs/' + id);
  }

  updateLivreur(livreur) {
    console.log('execute');
    return this.http.post(environment.SERVER_URL + 'livreurs/update', livreur);
  }

  deleteLivreur(livreur) {
    console.log('execute');
    return this.http.post(environment.SERVER_URL + 'livreurs/del', livreur);
  }

  getTrajetById(id): Observable<Trajet> {
    console.log('execute');
    return this.http.get<Trajet>(environment.SERVER_URL + 'trajets/' + id);
  }

  updateTrajet(trajet) {
    console.log('execute');
    return this.http.post(environment.SERVER_URL + 'trajets/update', trajet);
  }

  getAllNoteClient(): Observable<Noteclient[]> {
    console.log('execute');
    return this.http.get<Noteclient[]>(environment.SERVER_URL + 'note/noteclients');
  }

  getAllNoteLivreur(): Observable<Notelivreur[]> {
    console.log('execute');
    return this.http.get<Notelivreur[]>(environment.SERVER_URL + 'note/notelivreurs');
  }

  deleteTrajet(id){
    return this.http.get(environment.SERVER_URL + 'trajets/del/?idTrajet='+id);
  }

  login(user) {
    return this.http.post(environment.SERVER_URLOGIN  + 'login', user, {observe: 'response'});
  }
  register(user) {
    if (this.token == null) { this.getToken(); }
    return this.http.post(environment.SERVER_URL + '/register', user, {headers: new HttpHeaders({'Authorization': this.token})}  );
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
   //  this.parseJwt();
  }

  getToken() {
   this.token = localStorage.getItem('token');
  }

 
  deleteClient(client) {
    return this.http.post(environment.SERVER_URL  + 'clients/del', client);
  }


}
