

const NativeUI = require('NativeUI');
const Materials = require('Materials');




Promise.all([
	Materials.findFirst('retouch')
	]).then(function(results) {
		const retouch = results[0];
		const slider = NativeUI.slider;
		slider.visible = true;
		slider.value = 0.5;

		slider.value.monitor().subscribe(function(val){
			retouch.opacity = val.newValue;	
		});


	});








