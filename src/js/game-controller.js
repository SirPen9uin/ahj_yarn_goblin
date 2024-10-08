export default class GameController {
  constructor(gamePlay) {
    this._gamePlay = gamePlay;

    this._gamePlay.addCellClickListener(this.onCellClick.bind(this));
  }

  init() {
    this._gamePlay.drawUi();
    this._gamePlay.redrawGoblinPosition();
    this._gamePlay.waitintToMove();
  }

  onCellClick(index) {
    if (this._gamePlay.isOver) {
      return;
    }

    console.log("onCellClick", index);

    if (this._gamePlay.checkGoblinCellIndex(index)) {
      this._gamePlay.redrawGoblinPosition();
      this._gamePlay.waitingToMove();
    }
  }
}
