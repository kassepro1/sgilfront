import {Client} from './client';
// @ts-ignore
import {Livreur} from './livreurs';

export interface Trajet {
  id: number;
  lieuc: string;
  lieud: string;
  nomc: string;
  tel: string;
  descolis: string;
  etat: number;
  datecmd: string ;
  dateliv: string;
  client: Client;
  livreur: Livreur;
}
