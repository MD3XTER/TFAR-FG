 function set_radio() {
 	if($("#arma").val() == "a2") {
	 	if($("#radio").val() == "kv") {
	 		$("#min").val(30);
	 		$("#max").val(512);
	 	}
	 	else {
	 		$("#min").val(1);
	 		$("#max").val(20);	
	 	}
	 }
	 else {
	 	if($("#radio").val() == "kv") {
	 		$("#min").val(50);
	 		$("#max").val(500);
	 	}
	 	else {
	 		$("#min").val(30);
	 		$("#max").val(70);	
	 	}
	 }
 }

 function gen_radio() {

 	var radio, plus, shift, rd, b_minus, b_plus, rd_fin, min, max;

 	min = $("#min").val();
 	max = $("#max").val();

 	$("#arma").val();
 	$("#radio").val();
 	$("#tag").val();

 	for (var i = 0; i < 2; i++) {

 		shift = 1;
 		
 		if($("#zecimal").val() == "лёгкий")
 			//3 digits
	 		if (rand(0,1) == 0){
	 			//222
	 			if (rand(0,1) == 0){
		 			rd = rand(1,4) * 100;
		 			rd2 = rd;
		 			rd += rd2/10;
		 			rd += rd2/100;	
	 			}
	 			//265
	 			else{
		 			rd = rand(1,4) * 100;
		 			rd += rand(1,9) * 10;
		 			if (rand(0,1) == 0)
		 				rd += 5;	
	 			}
	 		}
	 		//2 digits
	 		else{
	 			//66
	 			if (rand(0,1) == 0){
		 			rd = rand(5,9) * 10;
	 				rd += rd/10;
	 			}
	 			//85
	 			else{
	 				rd = rand(5,9) * 10;
	 				if (rand(0,1) == 0)
	 					rd += 5;	
	 			}
	 		}	
	 	//hardcore mode
 		else
 			rd = rand(min,max);

 		if ((rd - shift) <= $("#min").val())
	 		b_minus = false;

	 	if ((rd + shift) >= $("#max").val())
	 		b_plus = false;

	 	if (b_plus != false && b_minus != false) {
	 		if($("#zecimal").val() == "лёгкий"){
	 			//345 +- 5
		 		if (rd % 10 == 5){
		 			shift = rd % 10;
		 			if (rand(0,1) == 0)
			 			plus = "+";
			 		else
			 			plus = "-";
			 	}
			 	//3 digits
			 	else if(rd/100 >= 0)
				 	//222 +- 2
			 		if (rd % 100 / 11 == rd % 10){
			 			shift = rd % 10;
			 			if(rd % 10 + shift > 10)
							plus = "-";
						else
							plus = "+";
			 		}
		 		//2 digits
			 	else if(rd/100 < 0)
					//77 +- 7
			 		if (Math.round(rd / 10 - rd % 10 / 10) == rd % 10){
			 			shift = rd % 10;
				 		if(rd % 10 + shift > 10)
							plus = "-";
						else
							plus = "+";
			 		}
		 		//230 + rand(1,9)
		 		else if (rd % 10 == 0){
		 			shift = rand(1,9);
		 			plus = "+";
		 		}
		 	}
		 	//hardcore mode
		 	else{
		 		shift = rand(1,9);
		 		if (rand(0,1) == 0)
			 		plus = "+";
			 	else
			 		plus = "-";
		 	}
	 	}

 		if(i==0) {
 			if($("#zecimal").val() == "лёгкий")
 				rd_fin = rd+" "+plus+shift;
 			else
 				rd_fin = rd+"."+rand(1,9)+" "+plus+shift;
		}
 		else {
 			if($("#zecimal").val() == "лёгкий")
 				rd_fin = rd_fin+" [Резерв] "+ rd+" "+plus+shift;
 			else
 				rd_fin = rd_fin +" [Резерв] "+ rd+"."+rand(1,9)+" "+plus+shift;
 		}

	}

	if(rd_fin.indexOf('undefined') >= 0)
		gen_radio();
	else
		if($("#radio").val() == "dv") {
	 			radio = "ДВ";
	 			$("#gen").val("["+radio+"] "+rd_fin);
	 	}
		 	else {
		 		radio = "КВ";
		 		$("#gen").val("["+$("#tag").val()+"] ["+radio+"] "+rd_fin);
		}
 }

function rand( min, max ) {
	if(max) {
		return Math.floor(Math.random() * (max - min + 1)) + parseInt(min, 10);
	} else {
		return Math.floor(Math.random() * (min + 1));
	}
}
