import * as sapper from '@sapper/app';

window.addEventListener('load', (event) => {
	sapper.start({
		target: document.getElementById('sapper')
	});
});