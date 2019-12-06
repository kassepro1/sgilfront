import {Trajet} from './trajet';
import {Client} from './client';
// @ts-ignore
import {Livreur} from './livreurs';

export interface Notelivreur {
  id: number;
  trajet: Trajet;
  liveur: Livreur;
  note: number;
  datenote: string ;
}
