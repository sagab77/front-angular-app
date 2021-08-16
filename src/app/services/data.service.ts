import { Injectable } from '@angular/core';
import Collegue from '../models/Collegue';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  rechercherParNom(nom: string): string[] {
    // TODO retourner une liste de matricules fictifs à partir du fichier
    // tslint:disable-next-line: no-unused-expression
    return `src/app/mock/matricules.mock.ts`.;
    }
    recupererCollegueCourant(): Collegue {
      // TODO retourner le collègue fictif à partir du fichier
      // tslint:disable-next-line: no-unused-expression
      return `src/app/mock/collegues-mock.ts`.;
}
}
