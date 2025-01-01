// game.service.ts
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public catchNextClicked = new EventEmitter<void>(); // Event emitter for "Catch Next"

  constructor() { }

  triggerCatchNext() {
    this.catchNextClicked.emit();
  }
}
