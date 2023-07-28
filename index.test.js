const TicTac = require("./TicTacToe.js");

describe("Basic verification", () =>
{
	const	tictac = new TicTac();

	it('first player should be O', () =>
	{
		//arrange
		let	play;
		let	playerOne = 'O';
		//act
		play = tictac.selectPlayer();
		//assert
		expect(play).toBe(playerOne);
	}),
	it('second player should be X', () =>
	{
		//arrange
		let	play;
		let	playerTwo = 'X';
		//act
		play = tictac.selectPlayer();
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
		for (i = 0; i < gameboard.length; i++)
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
		let	gameboard;
		let	rowWinner;
		//act
		gameboard = tictac.gameboard;
		for (i = 0; i < 3; i++)
			gameboard[0][i] = 'O';
		rowWinner = tictac.checkRows();
		//act2
		
		//act3
		//assert
		expect(rowWinner).toBe(1);
		expect(tictac.message).toBe("Player One Wins");
	}),
	it('if a row is filled with X player 2 wins', () =>
	{
		//arrange
		let	gameboard;
		let	rowWinner;
		tictac.gameReset();
		//act
		gameboard = tictac.gameboard;
		for (i = 0; i < 3; i++)
			gameboard[2][i] = 'X';
		rowWinner = tictac.checkRows();
		//act2
		
		//act3
		//assert
		expect(rowWinner).toBe(1);
		expect(tictac.message).toBe("Player Two Wins");
	}),
	it('method gameReset clears the message', () =>
	{
		//arrange
		let	message;
		//act
		message = tictac.message;
		console.log(message);
		tictac.gameReset();
		message = tictac.message;
		//assert
		expect(message).toBe("");
	}),
	it('if a col is filled with O player 1 wins', () =>
	{
		//arrange
		let	gameboard;
		let	colWinner;
		//act
		gameboard = tictac.gameboard;
		for (j = 0; j < 3; j++)
			gameboard[j][0] = 'O';
		colWinner = tictac.checkCols();
		//assert
		expect(colWinner).toBe(1);
		expect(tictac.message).toBe("Player One Wins");
	}),
	it('if a col is filled with X player 2 wins', () =>
	{
		//arrange
		let	gameboard;
		let	colWinner;
		//act
		tictac.gameReset();
		gameboard = tictac.gameboard;
		for (j = 0; j < 3; j++)
			gameboard[j][2] = 'X';
		colWinner = tictac.checkCols();
		//assert
		expect(colWinner).toBe(1);
		expect(tictac.message).toBe("Player Two Wins");
	}),
	it('if a diagonal line is filled with O player 1 wins', () =>
	{
		//arrange
		let	gameboard;
		let	diagonalWinner;
		//act
		tictac.gameReset();
		gameboard = tictac.gameboard;
		for (i = 0; i < 3; i++)
			gameboard[i][i] = 'O';
		diagonalWinner = tictac.checkDiagonal();
		//assert
		expect(diagonalWinner).toBe(1);
		expect(tictac.message).toBe("Player One Wins");
	}),
	it('if gameboard is full and there are no winners it\'s a tie', () =>
	{
		//arrange
		let	gameboard;
		let	tie;
		let message;
		//act
		tictac.gameReset();
		gameboard = tictac.gameboard;
		for (let i = 0; i < 3; i++)
		{
			for (let j = 0; j < 3; j++)
			{
				if ((i === 0 && j === 2) || (i === 2 && j === 2))
					gameboard[i][j] = 'X';
				else if (i === 1 && (j === 0 || j === 1))
					gameboard[i][j] = 'X';
				else
					gameboard[i][j] = 'O';
			}
		}
		tie = tictac.checkTie(0);
		message = tictac.message;
		//assert
		expect(tie).toBe(1);
		expect(message).toBe("It\'s a Tie");
	}),
	it('if gameboard is full and there are winners tie message is not assigned', () =>
	{
		//arrange
		let	gameboard;
		let	tie;
		let message;
		//act
		tictac.gameReset();
		gameboard = tictac.gameboard;
		for (let i = 0; i < 3; i++)
		{
			for (let j = 0; j < 3; j++)
			{
				if ((i === 0 && j === 2) || (i === 2 && j === 2))
					gameboard[i][j] = 'X';
				else if (i === 1 && (j === 0 || j === 1))
					gameboard[i][j] = 'X';
				else
					gameboard[i][j] = 'O';
			}
		}
		tie = tictac.checkTie(1);
		message = tictac.message;
		//assert
		expect(tie).toBe(0);
		expect(message).toBe("");
	})
})