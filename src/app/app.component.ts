import { Component } from '@angular/core';
import { IaService } from './ia.service';
import { ReversiGameEngineService } from './reversi-game-engine.service';
import { Board_RO, C } from './ReversiDefinitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public RGS: ReversiGameEngineService, private ia: IaService) {}

  get board(): Board_RO {
    return this.RGS.board;
  }

  symboleFor(c: C): string {
    switch (c) {
      case 'Player1': return "X";
      case 'Player2': return "O";
      default: return "";
    }
  }

  play(i: number, j: number): void {
    this.RGS.play(i, j);
  }

  get score(): string {
    let nb1 = 0;
    let nb2 = 0;
    this.RGS.board.forEach( L => L.forEach( c => {
      switch (c) {
        case 'Player1': nb1++; break;
        case 'Player2': nb2++; break;
      }
    }) );

    const t = this.RGS.turn;

    return `${t === 'Player1' ? '-->': '   '}Player 1 (X) : ${nb1}
${t === 'Player2' ? '-->': '   '}Player 2 (O) : ${nb2}`
  }
}
