/* Web Design & Client Side Scripting _ Week 8 Lab 

Damien Portanier 

22 11 2022

Please complete any 2 of the following:

- Create a web page that prints all of the lyrics to '99 bottles of beer' https://www.songfacts.com/lyrics/traditional/99-bottles-of-beer

- Take the previously created Rock Paper Scissors application and allow the user to play 3 times.

Bonus: The game should stop if the user wins

Bonus: The computer should change their guess each time

- Create a web page that asks a user how many subjects they take, and what marks they got in each subject. The application should then output their results

Bonus: Tell the user their grade from A-F based on their results

Please commit your attempts to GitHub, and then upload a link here.
*/

//in the index.html file a button is created to run what is inside the function check ()
function beerSong(){//begin with function give more control on js code 
	
	for(i=99;i>1;i--){
		x=i-1;
		if(x>1){
			document.write(i+" bottles of beer on the wall, "+i+" bottles of beer"+"<br/>"+"Take one down and pass it around, "+x+" bottles of beer on the wall"+"<br/>"+"<br/>");
		}
		else{
		    document.write(i+" bottles of beer on the wall, "+i+" bottles of beer"+"<br/>"+"Take one down and pass it around, "+x+" bottle of beer on the wall"+"<br/>"+"<br/>"+x+" bottle of beer on the wall, "+x+" bottle of beer"+"<br/>"+"Take one down and pass it around, no more bottles of beer on the wall"+"<br/>"+"<br/>"+"No more bottles of beer on the wall, no more bottles of beer"+"<br/>"+"Go to the store and buy some more, 99 bottles of beer on the wall");
		}
	}
}//close function

/* console.log(beerSong());  */