import TicTacToe from "./TicTacToe";

class Scenarios extends TicTacToe
{
	rowWin(row, player)
	{
		for (let i = 0; i < 3; i++)
			this.gameboard[row][i] = player;
	}

	colWin(col, player)
	{
		for (let j = 0; j < 3; j++)
			this.gameboard[j][col] = player;
	}

	diagonalLeftWin(player)
	{
		for (let i = 0; i < 3; i++)
			this.gameboard[i][i] = player;
	}

	diagonalRightWin(player)
	{
		this.gameboard[0][2] = player;
		this.gameboard[1][1] = player;
		this.gameboard[2][0] = player;
	}

	drawCondition()
	{
		for (let i = 0; i < 3; i++)
		{
			for (let j = 0; j < 3; j++)
			{
				if ((i === 0 && j === 2) || (i === 2 && j === 2))
					this.gameboard[i][j] = 'X';
				else if (i === 1 && (j === 0 || j === 1))
					this.gameboard[i][j] = 'X';
				else
					this.gameboard[i][j] = 'O';
			}
		}
	}
}

export default Scenarios;
