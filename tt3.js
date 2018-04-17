
p1="Player 1";
p2="Player 2";

window.onload=function()	{


	p1=prompt("Enter Name of Player 1","Player 1");
	p2=prompt("Enter Name of Player 2","Player 2");
	if(p1==null || p1=="")	{
		p1="Player 1";
	}
	if(p2==null || p2=="")	{
		p2="Player 2";
	}

	startbut=document.getElementById("start");
	startbut.innerHTML=p1+" to Begin!"

	p1name=document.getElementById("p1name");
	p2name=document.getElementById("p2name");

	p1name.innerHTML=p1;
	p2name.innerHTML=p2;
	

}



			x=1;	//player turn
			game=1;	//disable input
			pcount=1;	// count player to start
			tflag=0;	//tied game set
			function myfunc(t)	{
				
				//t=document.getElementById("hello");
				//t.innerHTML="world";
				//console.log(t.id);
				
				//console.log(t.innerHTML);
				//x=x+1;

				//console.log(g);
				if(game!=1)	{
					return;
				}

				
				if(x%2 && t.innerHTML=="")	{
				
					t.innerHTML="X";
					x=x+1;
					endgame();
					return;	
				}

				else if(!(x%2) && t.innerHTML=="")	{
				
					t.innerHTML="O";
					x=x+1;
					endgame();
					return;	
				}


			}

		
			function endgame()	{


				a=document.getElementById("11").innerHTML;
				b=document.getElementById("12").innerHTML;
				c=document.getElementById("13").innerHTML;
				d=document.getElementById("21").innerHTML;
				e=document.getElementById("22").innerHTML;
				f=document.getElementById("23").innerHTML;
				g=document.getElementById("31").innerHTML;
				h=document.getElementById("32").innerHTML;
				i=document.getElementById("33").innerHTML;

				over=document.getElementById("over");
				//l=[a,b,c,d,e,f,g,h,i];
				//console.log(g);
				if(a!="" && a==b && a==c)	{
					over.innerHTML="Game Over!";
					enablereset();
					return;
	
				}

				else if(d!="" && d==e && d==f)	{
					over.innerHTML="Game Over!";
					enablereset();
					return;
	
				}

				else if(g!="" && g==h && g==i)	{
					over.innerHTML="Game Over!";
					enablereset();
					return;
	
				}

				else if(a!="" && a==d && a==g)	{
					over.innerHTML="Game Over!";
					enablereset();
					return;
	
				}

				else if(b!="" && b==e && b==h)	{
					over.innerHTML="Game Over!";
					enablereset();
					return;
	
				}

				else if(c!="" && c==f && c==i)	{
					over.innerHTML="Game Over!";
					enablereset();
					return;
	
				}

				else if(a!="" && a==e && a==i)	{
					over.innerHTML="Game Over!";
					enablereset();
					return;
	
				}

				else if(c!="" && c==e && c==g)	{
					over.innerHTML="Game Over!";
					enablereset();
					return;
	
				}

/*				else if(a!="" && b!="" && c!="" && d!="" && e!="" && f!="" && g!="" && h!="" && i!="")	{
					over.innerHTML="Game Over!";
					tflag=1;
					enablereset();
					return;

				}
*/

				else if(x==10)	{
					over.innerHTML="Game Over!";
					tflag=1;
					enablereset();
					return;

				}

				return;

			}



			function enablereset()	{
			
				if(pcount%2==1 && tflag==0)	{

					if(x%2==0)	{
						p1s=document.getElementById("p1score");
						pval=parseInt(p1s.value);
						pval=pval+1;
						//console.log(pval);
						p1s.value=pval;
						winner=document.getElementById("winner");
						winner.innerHTML="Winner: "+p1;
					}
					else{
						p2s=document.getElementById("p2score");
						pval=parseInt(p2s.value);
						pval=pval+1;
						p2s.value=pval;
						winner=document.getElementById("winner");
						winner.innerHTML="Winner: "+p2;


					}
				}
			
				else if(pcount%2==0 && tflag==0)	{
					
					if(x%2==0)	{
						p2s=document.getElementById("p2score");
						pval=parseInt(p2s.value);
						pval=pval+1;
						p2s.value=pval;
						winner=document.getElementById("winner");
						winner.innerHTML="Winner: "+p2;
					}

					else	{
						p1s=document.getElementById("p1score");
						pval=parseInt(p1s.value);
						pval=pval+1;
						//console.log(pval);
						p1s.value=pval;
						winner=document.getElementById("winner");
						winner.innerHTML="Winner: "+p1;

					}					
				}
				else if(tflag==1)	{

					winner=document.getElementById("winner");
					winner.innerHTML="Game Drawn!";
				}
				
				
			
				but=document.getElementById("clearbutton");
				but.removeAttribute("hidden");
				game=0;
				pcount=pcount+1;

				return;

			}

			function clearall()	{

				a=document.getElementById("11");
				b=document.getElementById("12");
				c=document.getElementById("13");
				d=document.getElementById("21");
				e=document.getElementById("22");
				f=document.getElementById("23");
				g=document.getElementById("31");
				h=document.getElementById("32");
				i=document.getElementById("33");

				l=[a,b,c,d,e,f,g,h,i]
			
				l.map(clearvalue);

				document.getElementById("over").innerHTML="";
				document.getElementById("clearbutton").hidden=true;
				x=1;
				game=1;
				tflag=0;
				startbut=document.getElementById("start");
				if(pcount%2)	{
					startbut.innerHTML=p1+" to Begin!";
				}

				else{

					startbut.innerHTML=p2+" to Begin!";
				}
				winner=document.getElementById("winner");
				winner.innerHTML="";
				gameno=document.getElementById("gameno");
				gameno.innerHTML="Game: "+pcount;
				return;


			}


			function clearvalue(t)	{

				t.innerHTML="";
				return;

			}

		

