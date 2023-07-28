class TicTacToe
{
	constructor()
	{
		this.counter = 0;
		this.gameboard = [['', '', ''], ['', '', ''], ['', '', '']];
		this.error = "";
		this.message = "";
		this.play = ""
	}

	selectPlayer()
	{
		console.log(this.counter);
		if (this.counter === 0)
		{
			this.counter = 1;
			this.play = 'O';
		}
		else
		{
			this.counter = 0;
			this.play = 'X';
		}
	}

	paramsAreIntegers(row, col)
	{
		let	intRow; 
		let	intCol;
		
		intRow = parseInt(row, 10);
		intCol = parseInt(col, 10);
		return (row === intRow && col === intCol);
	}

	paramsRange(row, col)
	{
		let	rowBool;
		let colBool;

		rowBool = (row  >= 0 && row <= 2);
		colBool = (col  >= 0 && col <= 2);
		return (rowBool && colBool);
	}

	positionCheck(row, col)
	{
		return (this.gameboard[row][col] === '');
	}

	inputCheck(row, col)
	{
		if (!this.paramsAreIntegers(row, col))
		{
			this.error = "Error: row & col must be integers";
			return (0);
		}
		else if (!this.paramsRange(row, col))
		{
			this.error = "Error: row & col must be integers between 0 & 2";
			return (0);
		}
		else if (!this.positionCheck(row, col))
		{
			this.error = "Error: invalid move, position must be empty";
			return (0);
		}
		else if (this.message)
		{
			this.error = "Game finished, push restart to start a new game";
			return (0);
		}
		return (1);
	}

	checkRows()
	{
		for (let i = 0; i < 3; i++)
		{
			if (this.gameboard[i].filter(x => x === 'O').length === 3)
			{
				this.message = "Player One Wins";
				return (1);
			}
			if (this.gameboard[i].filter(x => x === 'X').length === 3)
			{
				this.message = "Player Two Wins";
				return (1);
			}
		}
		return (0);
	}

	checkCols()
	{
		let	playerOneCount;
		let playerTwoCount;

		for (let j = 0; j < 3; j++)
		{
			playerOneCount = 0;
			playerTwoCount = 0;
			for (let i = 0; i < 3; i++)
			{
				if (this.gameboard[i][j] === 'O')
					playerOneCount++;
				if (this.gameboard[i][j] === 'X')
					playerTwoCount++;
			}
			if (playerOneCount === 3)
			{
				this.message = "Player One Wins";
				return (1);
			}
			if (playerTwoCount === 3)
			{
				this.message = "Player Two Wins";
				return (1);
			}
		}
		return (0);
	}

	diagonalWinner = (play) =>
	{
		if (play === 'O')
			return ('Player One Wins');
		if (play === 'X')
			return ('Player Two Wins');	
	}

	checkDiagonal()
	{
		if ((this.gameboard[0][0] === this.gameboard[1][1]) && (this.gameboard[0][0] === this.gameboard[2][2]))
		{
			this.message = this.diagonalWinner(this.gameboard[0][0]);
			return (1);
		}
		if ((this.gameboard[0][2] === this.gameboard[1][1]) && (this.gameboard[0][2] === this.gameboard[2][0]))
		{
			this.message = this.diagonalWinner(this.gameboard[0][2]);
			return (1);
		}
		return (0);
	}

	checkWinner()
	{
		if (this.checkRows() === 1)
			return (1);
		else if (this.checkCols() === 1)
			return (1);
		else if (this.checkDiagonal() === 1)
			return (1);
		return (0);
	}

	checkTie(winner)
	{
		let counter;

		if (winner === 1)
			return (0);
		counter = 0;
		for (let i = 0; i < 3; i++)
		{
			for (let j = 0; j < 3; j++)
			{
				if (this.gameboard[i][j] !== '')
					counter++;
			}
		}
		if (counter === 9 && this.message === '')
		{
			this.message = "It\'s a Tie";
			return (1);
		}
		return (0);
	}

	gameReset()
	{
		this.message = "";
		for (let i = 0; i < 3; i++)
		{
			for (let j = 0; j < 3; j++)
			{
				this.gameboard[i][j] = '';
			}
		}
	}

	getPlay()
	{
		return (this.play);
	}

	setPlay(row, col)
	{
		let	winner;

		if (this.inputCheck(row, col) === 0)
			return (this.error);
		this.selectPlayer();
		this.gameboard[row][col] = this.play;
		winner = this.checkWinner();
		this.checkTie(winner);
	}
}

export default TicTacToe;
// module.exports = TicTacToe;