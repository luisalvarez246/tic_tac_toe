import	TicTacToe from "./TicTacToe.js";

export const	tictac = new TicTacToe();

export const	gameReset = () =>
{
	let	cell;
	let	message;
	
	tictac.gameReset();
	message = document.getElementById('winner');
	message.innerText = '';
	for (let i = 0; i < 3; i++)
	{
		for (let j = 0; j < 3; j++)
		{
			cell = document.getElementById(`cell${i}${j}`);
			cell.innerText = '';
		}
	}
}

export const	ftClickListener = () =>
{
	const	board = document.getElementById('gameboard');
	const	message = document.getElementById('winner');

	board.addEventListener('click', (event)=>
	{
		const	position = event.target.id.match(/[0-9]/g);
		const	row = Number(position[0]);
		const	col = Number(position[1]);

		tictac.setPlay(row, col);
		if (tictac.error === '')
			event.target.innerText = tictac.getPlay();
		if (tictac.message !== '')
			message.innerText = tictac.message;
	})
}

window.gameReset = gameReset;