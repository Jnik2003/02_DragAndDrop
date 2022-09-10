const item = document.querySelector('.item');

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart(e){
	e.target.classList.add('hold');
	setTimeout(() => {
		e.target.classList.add('hide');
	},0)
	
}

function dragend(e){
	e.target.classList.remove('hold', 'hide');
}