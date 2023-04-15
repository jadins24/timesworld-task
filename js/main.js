var i=1;

        console.log("Dins")
	function navbar(){
		i++;
		if(i%2==0){
			document.querySelector('.nav-link').style='display:flex;width: 50%;flex-direction: column;position: absolute;background: white;right: 0;top: 50px;'
		
		}
		if(i%2!=0){
			document.querySelector('.nav-link').style='display:none'
		}
		console.log('hi')
	}
	function fun(){
		if(document.querySelector('.nav-link').style.display=='flex'){
			document.querySelector('.nav-link').style='display:none'
			i=1
		}
        console.log("Dins")
	}



     