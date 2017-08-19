var counter_num = 1;
var counter_wrapper = document.getElementsByClassName('counter-wrapper')[0];
var interval_timer;	



counter_wrapper.addEventListener("transitionend", removeSpan, false);

function autoPlusOne(){
	if (! interval_timer) {
		interval_timer = setInterval(plusOne, 200);
	} else {
		stop();
		autoPlusOne();
	}
}

function autoMinusOne(){
	if (! interval_timer) {
		interval_timer = setInterval(minusOne, 200);
	} else {
		stop();
		autoMinusOne();
	}
}

function stop(){
	if (interval_timer) {
		interval_timer = clearInterval(interval_timer);
	}
}

function plusOne(){
	playPlusOne();
	counter_wrapper.lastElementChild.classList.add('plus');
	var new_span = newCounter(++counter_num);
	counter_wrapper.appendChild(new_span);
	new_span.className = 'new-plus';
	setTimeout(()=> new_span.classList.remove('new-plus'), 0);
}

function minusOne(){
	counter_wrapper.lastElementChild.classList.add('minus');
	var new_span = newCounter(--counter_num);
	counter_wrapper.appendChild(new_span);
	new_span.className = 'new-minus';
	setTimeout(()=> new_span.classList.remove('new-minus'), 0);
}

function newCounter(counter_num){
	var span = document.createElement('span');
	span.innerHTML = counter_num + 's';
	return span;
}

function removeSpan(e) {
	var span = e.target;

	if (span.classList.contains('plus') || span.classList.contains('minus')) {
		this.removeChild(span);
	}
	
}

function playPlusOne() {
	var plus_audio = document.createElement('audio');
	plus_audio.src = './assets/plus-one.mp3';
	plus_audio.play();
	setTimeout(function(){
		plus_audio = null;
	}, 2000);
}