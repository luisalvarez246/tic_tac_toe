import Scenarios from "../js/Scenarios.js";
import TicTac from "../js/TicTacToe.js";

describe("Basic logical verification", () =>
{
	const	tictac = new TicTac();
	const	gameScenarios = new Scenarios();

	it('first player should be O', () =>
	{
		//arrange
		let	play;
		let	playerOne = 'O';
		//act
		tictac.selectPlayer();
		play = tictac.play;
		//assert
		expect(play).toBe(playerOne);
	}),
	it('second player should be X', () =>
	{
		//arrange
		let	play;
		let	playerTwo = 'X';
		//act
		tictac.selectPlayer();
		play = tictac.play;
		//assert
		expect(play).toBe(playerTwo);
	}),
	it('a gameboard has 3 rows', () =>
	{
		//arrange
		let	gameboard;
		let	gameboardRows = 3;
		//act
		gameboard = tictac.gameboard;
		//assert
		expect(gameboard.length).toBe(gameboardRows);
	}),
	it('Each row has 3 columns', () =>
	{
		//arrange
		let	gameboard;
		let	gameboardCols = 3;
		//act
		gameboard = tictac.gameboard;
		//assert
		for (let i = 0; i < gameboard.length; i++)
			expect(gameboard[i].length).toBe(gameboardCols);
	}),
	it('row & col must be integers', () =>
	{
		//arrange
		let	row;
		let	col;
		let	play;
		let	playTwo
		let	playThree
		//act
		row = 2;
		col = 1;
		play = tictac.paramsAreIntegers(row, col);
		//act2
		row = 1.5;
		col = 0;
		playTwo = tictac.paramsAreIntegers(row, col);
		//act3
		row = 1;
		col = "hi";
		playThree = tictac.paramsAreIntegers(row, col);
		//assert
		expect(play).toBe(true);
		expect(playTwo).toBe(false);
		expect(playThree).toBe(false);
	}),
	it('row && col must be integers between 0 and 2', () =>
	{
		//arrange
		let	row;
		let	col;
		let	play;
		let	playTwo
		let	playThree
		//act
		row = 2;
		col = 1;
		play = tictac.paramsRange(row, col);
		//act2
		row = 3;
		col = 0;
		playTwo = tictac.paramsRange(row, col);
		//act3
		row = 1;
		col = -1;
		playThree = tictac.paramsRange(row, col);
		//assert
		expect(play).toBe(true);
		expect(playTwo).toBe(false);
		expect(playThree).toBe(false);
	}),
	it('each player take an unoccupied position', () =>
	{
		//arrange
		let	gameboard;
		let	row;
		let	col;
		let	play;
		let	playTwo
		let	playThree
		//act
		gameboard = tictac.gameboard;
		row = 2;
		col = 1;
		play = tictac.positionCheck(row, col);
		//act2
		gameboard[2][2] = 'X';
		row = 2;
		col = 2;
		playTwo = tictac.positionCheck(row, col);
		//act3
		row = 1;
		col = 1;
		playThree = tictac.positionCheck(row, col);
		//assert
		expect(play).toBe(true);
		expect(playTwo).toBe(false);
		expect(playThree).toBe(true);
	}),
	it('method gameReset clears the gameboard', () =>
	{
		//arrange
		let	gameboard;
		let check;
		//act
		tictac.gameReset();
		gameboard = tictac.gameboard;
		check = true;
		console.table(gameboard);
		for (let i = 0; i < 3; i++)
		{
			for (let j = 0; j < 3; j++)
			{
				if (gameboard[i][j] !== '')
					check = false;
			}
		}
		//assert
		expect(check).toBe(true);
	}),
	it('if a row is filled with O player 1 wins', () =>
	{
		//arrange
		let	rowWinner;
		//act
		gameScenarios.rowWin(0, 'O');
		rowWinner = gameScenarios.checkRows();
		//assert
		expect(rowWinner).toBe(1);
		expect(gameScenarios.message).toBe("Player One Wins");
	}),
	it('if a row is filled with X player 2 wins', () =>
	{
		//arrange
		let	rowWinner;
		//act
		gameScenarios.gameReset();
		gameScenarios.rowWin(2, 'X');
		rowWinner = gameScenarios.checkRows();
		//assert
		expect(rowWinner).toBe(1);
		expect(gameScenarios.message).toBe("Player Two Wins");
	}),
	it('method gameReset clears the message', () =>
	{
		//arrange
		let	message;
		//act
		tictac.message = "Hello";
		tictac.gameReset();
		message = tictac.message;
		//assert
		expect(message).toBe("");
	}),
	it('method gameReset sets counter to 0', () =>
	{
		//arrange
		let	counter;
		//act
		tictac.counter = 1;
		tictac.gameReset();
		counter = tictac.counter;
		//assert
		expect(counter).toBe(0);
	}),
	it('if a col is filled with O player 1 wins', () =>
	{
		//arrange
		let	colWinner;
		//act
		gameScenarios.gameReset();
		gameScenarios.colWin(0, 'O');
		colWinner = gameScenarios.checkCols();
		//assert
		expect(colWinner).toBe(1);
		expect(gameScenarios.message).toBe("Player One Wins");
	}),
	it('if a col is filled with X player 2 wins', () =>
	{
		//arrange
		let	colWinner;
		//act
		gameScenarios.gameReset();
		gameScenarios.colWin(1, 'X');
		colWinner = gameScenarios.checkCols();
		//assert
		expect(colWinner).toBe(1);
		expect(gameScenarios.message).toBe("Player Two Wins");
	}),
	it('if a diagonal line is filled from left to right with O, player 1 wins', () =>
	{
		//arrange
		let	diagonalWinner;
		//act
		gameScenarios.gameReset();
		gameScenarios.diagonalLeftWin('O');
		diagonalWinner = gameScenarios.checkDiagonal();
		//assert
		expect(diagonalWinner).toBe(1);
		expect(gameScenarios.message).toBe("Player One Wins");
	}),
	it('if a diagonal line is filled from right to left with X, player 2 wins', () =>
	{
		//arrange
		let	diagonalWinner;
		//act
		gameScenarios.gameReset();
		gameScenarios.diagonalRightWin('X');
		diagonalWinner = gameScenarios.checkDiagonal();
		//assert
		expect(diagonalWinner).toBe(1);
		expect(gameScenarios.message).toBe("Player Two Wins");
	}),
	it('if gameboard is full and there are no winners it\'s a tie', () =>
	{
		//arrange
		let	tie;
		let message;
		//act
		gameScenarios.gameReset();
		gameScenarios.drawCondition();
		tie = gameScenarios.checkTie(0);
		message = gameScenarios.message;
		//assert
		expect(tie).toBe(1);
		expect(message).toBe("It\'s a Tie");
	}),
	it('if gameboard is full and there are winners tie message is not assigned', () =>
	{
		//arrange
		let	tie;
		let message;
		//act
		gameScenarios.gameReset();
		gameScenarios.drawCondition();
		tie = gameScenarios.checkTie(1);
		message = gameScenarios.message;
		//assert
		expect(tie).toBe(0);
		expect(message).toBe("");
	}),
	it('no further input is allowed when a game is finished', () =>
	{
		//arrange
		let	result;
		let	error;
		//act
		tictac.gameReset();
		tictac.message = "Test";
		result = tictac.inputCheck(0, 0);
		error = tictac.error;
		//assert
		expect(result).toBe(0);
		expect(error).toBe("Game finished, push restart to start a new game");
	}),
	it('setPlay should place an O or X on the desired position', () =>
	{
		//arrange
		let	gameboard;
		//act
		tictac.gameReset();
		tictac.setPlay(0, 0);
		tictac.setPlay(0, 1);
		gameboard = tictac.gameboard;
		//assert
		expect(gameboard[0][0]).toBe('O');
		expect(gameboard[0][1]).toBe('X');
	})
})