import { Injectable } from '@angular/core';

export interface HeaderControllerInput {
  toggleTaskAdd(): void;
}

@Injectable({
  providedIn: 'root',
})
export class HeaderController implements HeaderControllerInput {
  toggleTaskAdd() {
    console.debug('Header controller: toggleTaskAdd()');
  }
}
