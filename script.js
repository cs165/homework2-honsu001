// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

var q1 = null, q2 = null, q3 = null;
var map = null;

function check(){
	if(q1 != null && q2 != null && q3 != null){
		const restart = document.getElementById('restart');
		restart.classList.remove('hidden');
		
		if(q1 == q2)
			map = q1;
		else if(q1 == q3)
			map = q1;
		else if(q2 == q3)
			map = q2;
		else
			map = q1;
		
		result_title.textContent = RESULTS_MAP[map]['title'];
		result_contents.textContent = RESULTS_MAP[map]['contents'];
	}
}

function onClick1(event){
	const choosed = event.currentTarget;
	
	if(q1 != null && q2 != null && q3 != null){
	}
	
	else{
		for (const set of set1){
			if(choosed == set){
				const img = set.querySelector('.checkbox');
				img.src = 'images/checked.png';
				q1 = choosed.dataset.choiceId;
				set.style.backgroundColor = '#cfe3ff';
				set.style.opacity = 1;
				check();
			}
			else{
				const img = set.querySelector('.checkbox'); 
				img.src = 'images/unchecked.png';
				set.style.backgroundColor = '#f4f4f4';
				set.style.opacity = 0.6;
			}
		}
	}
}

function onClick2(event){
	const choosed = event.currentTarget;
	
	if(q1 != null && q2 != null && q3 != null){
	}
	
	else{
		for (const set of set2){
			if(choosed == set){
				const img = set.querySelector('.checkbox');
				img.src = 'images/checked.png';
				q2 = choosed.dataset.choiceId;
				set.style.backgroundColor = '#cfe3ff';
				set.style.opacity = 1;
				check();
			}
			else{
				const img = set.querySelector('.checkbox'); 
				img.src = 'images/unchecked.png';
				set.style.backgroundColor = '#f4f4f4';
				set.style.opacity = 0.6;
			}
		}
	}
}

function onClick3(event){
	const choosed = event.currentTarget;
	
	if(q1 != null && q2 != null && q3 != null){
	}
	
	else{
		for (const set of set3){
			if(choosed == set){
				const img = set.querySelector('.checkbox');
				img.src = 'images/checked.png';
				q3 = choosed.dataset.choiceId;
				set.style.backgroundColor = '#cfe3ff';
				set.style.opacity = 1;
				check();
			}
			else{
				const img = set.querySelector('.checkbox'); 
				img.src = 'images/unchecked.png';
				set.style.backgroundColor = '#f4f4f4';
				set.style.opacity = 0.6;
			}
		}
	}
}

function onClick_restart(event){
	q1 = null; q2 = null; q3 = null; 
	
	for(const set of set1){
		set.style.opacity = 1;
		const img = set.querySelector('.checkbox'); 
		img.src = 'images/unchecked.png';
		set.style.backgroundColor = '#f4f4f4';
	}
	for(const set of set2){
		set.style.opacity = 1;
		const img = set.querySelector('.checkbox'); 
		img.src = 'images/unchecked.png';
		set.style.backgroundColor = '#f4f4f4';
	}
	for(const set of set3){
		set.style.opacity = 1;
		const img = set.querySelector('.checkbox'); 
		img.src = 'images/unchecked.png';
		set.style.backgroundColor = '#f4f4f4';
	}
	
	result_title.textContent = null;
	result_contents.textContent = null;
	
	const restart = document.getElementById('restart');
	restart.classList.add('hidden');
}

const set1 = document.querySelectorAll('.checkbox_set[data-question-id="one"]');
for(const set of set1){
	set.addEventListener('click', onClick1);
}

const set2 = document.querySelectorAll('.checkbox_set[data-question-id="two"]');
for(const set of set2){
	set.addEventListener('click', onClick2);
}

const set3 = document.querySelectorAll('.checkbox_set[data-question-id="three"]');
for(const set of set3){
	set.addEventListener('click', onClick3);
}

const restart_bottom = document.getElementById('restart');
restart_bottom.addEventListener('click', onClick_restart);