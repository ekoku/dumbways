function total(){
	var input = [2,3,4,5,6];
	var angka1 = 2+3+5+6
	var angka2 = 3+4+5+6
	var angka3 = 2+4+5+6
	var angka4 = 2+3+4+6
	var angka5 = 2+3+4+5
	var mini = Math.min(angka1,angka2,angka3,angka4,angka5);
	var maxi = Math.max(angka1,angka2,angka3,angka4,angka5);
	console.log('angka terkecil',mini);
	console.log('angka terbesar',maxi);
}	
total();