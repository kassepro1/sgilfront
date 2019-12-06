import {Trajet} from './trajet';
import {Client} from './client';

export interface Noteclient {
  id: number;
  trajet: Trajet;
  client: Client;
  note: number;
  datenote: string ;
}
