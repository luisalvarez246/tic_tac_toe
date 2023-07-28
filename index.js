import	TicTacToe from "./TicTacToe.js";

export const	tictac = new TicTacToe();

export const	ftClickListener = () =>
{
	const	board = document.getElementById('gameboard');
	const	message = document.getElementById('winner');

	board.addEventListener('click', (event)=>
	{
		const	position = event.target.id.match(/[0-9]/g);
		const	row = Number(position[0]);
		const	col = Number(position[1]);

		console.log(position);
		tictac.setPlay(row, col);
		if (tictac.error === '')
			event.target.innerText = tictac.getPlay();
		if (tictac.message !== '')
			message.innerText = tictac.message;
	})
}
