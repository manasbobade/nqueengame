var callsoffunctions=0;
var selectedbox=[]
var checksolution=[
                  99,1,2,3,4,5,6,7,8,9,10,
                  11,12,13,14,15,16,17,18,19,20,
                  21,22,23,24,25,26,27,28,29,30,
                  31,32,33,34,35,36,37,38,39,40,
                  41,42,43,44,45,46,47,48,49,50,
                  51,52,53,54,55,56,57,58,59,60,
                  61,62,63,64
                  ]

function count(cellocation,value){
    if(value==true)
        {
            callsoffunctions++;
            checksolution[cellocation]=0;
            if(callsoffunctions>0 && callsoffunctions<8)
                {
                    document.getElementById("as").innerHTML="number of queens entered  "+callsoffunctions;
                }
            if(callsoffunctions==8)
                {
                    document.getElementById("as").innerHTML="stop 8 queens have been entered";
                }
        }
    else if(value==False)
        {
            callsoffunctions--;
            checksolution[cellocation]=cellocation;

        }
}


function checksol(){
  
    if(checksolution[1]==0 && checksolution[13]==0 && checksolution[24]==0 &checksolution[30]==0 && checksolution[35]==0
        && checksolution[47]==0 && checksolution[50]==0 && checksolution[60]==0)
    {
        document.getElementById("sa").innerHTML="Correct WELL PLAYED!!";
    }
    else
    {
        document.getElementById("sa").innerHTML="Opps! try again";
    }


}
var b11=false

function f11(){
   if(b11==false)
      { 
        b11=true;
        document.getElementById("man11").src="crown.png";
        count(1,b11);
      }
   else if(b11=true)
      {
        b11=false;
        document.getElementById("man11").src="black.png";
      }
}
function f12(){
    document.getElementById("man12").src="crown.png";
    count(2);
}
function f13(){
    document.getElementById("man13").src="crown.png";
    count(3);
 }

 function f14(){
    document.getElementById("man14").src="crown.png";
    count(4);
 }
 function f15(){
     document.getElementById("man15").src="crown.png";
     count(5);
 }
 function f16(){
     document.getElementById("man16").src="crown.png";
     count(6);
  }
  function f17(){
      document.getElementById("man17").src="crown.png";
      count(7);
  }
function f18(){
    document.getElementById("man18").src="crown.png";
    count(8);
}




function f21(){
    document.getElementById("man21").src="crown.png";
    count(9);
}

function f22(){
    document.getElementById("man22").src="crown.png";
    count(10);
}
function f23(){
    document.getElementById("man23").src="crown.png";
    count(11);
}
function f24(){
    document.getElementById("man24").src="crown.png";
    count(12);
}
function f25(){
    document.getElementById("man25").src="crown.png";
    count(13);
}
function f26(){
    document.getElementById("man26").src="crown.png";
    count(14);
}
function f27(){
    document.getElementById("man27").src="crown.png";
    count(15);
}
function f28(){
    document.getElementById("man28").src="crown.png";
    count(16);
}





function f31(){
    document.getElementById("man31").src="crown.png";
    count(17);
}
function f32(){
    document.getElementById("man32").src="crown.png";
    count(18);
}
function f33(){
    document.getElementById("man33").src="crown.png";
    count(19);
}
function f34(){
    document.getElementById("man34").src="crown.png";
    count(20);
}
function f35(){
    document.getElementById("man35").src="crown.png";
    count(21);
}
function f36(){
    document.getElementById("man36").src="crown.png";
    count(22);
}
function f37(){
    document.getElementById("man37").src="crown.png";
    count(23);
}
function f38(){
    document.getElementById("man38").src="crown.png";
    count(24);
}




function f41(){
    document.getElementById("man41").src="crown.png";
    count(25);
}
function f42(){
    document.getElementById("man42").src="crown.png";
    count(26);
}
function f43(){
    document.getElementById("man43").src="crown.png";
    count(27);
}
function f44(){
    document.getElementById("man44").src="crown.png";
    count(28);
}
function f45(){
    document.getElementById("man45").src="crown.png";
    count(29);
}
function f46(){
    document.getElementById("man46").src="crown.png";
    count(30);
}
function f47(){
    document.getElementById("man47").src="crown.png";
    count(31);
}
function f48(){
    document.getElementById("man48").src="crown.png";
    count(32);
}




function f51(){
    document.getElementById("man51").src="crown.png";
    count(33);
}
function f52(){
    document.getElementById("man52").src="crown.png";
    count(34);
}
function f53(){
    document.getElementById("man53").src="crown.png";
    count(35);
}
function f54(){
    document.getElementById("man54").src="crown.png";
    count(36);
}
function f55(){
    document.getElementById("man55").src="crown.png";
    count(37);
}
function f56(){
    document.getElementById("man56").src="crown.png";
    count(38);
}
function f57(){
    document.getElementById("man57").src="crown.png";
    count(39);
}
function f58(){
    document.getElementById("man58").src="crown.png";
    count(40);
}



function f61(){
    document.getElementById("man61").src="crown.png";
    count(41);
}
function f62(){
    document.getElementById("man62").src="crown.png";
    count(42);
}
function f63(){
    document.getElementById("man63").src="crown.png";
    count(43);
}
function f64(){
    document.getElementById("man64").src="crown.png";
    count(44);
}
function f65(){
    document.getElementById("man65").src="crown.png";
    count(45);
}
function f66(){
    document.getElementById("man66").src="crown.png";
    count(46);
}
function f67(){
    document.getElementById("man67").src="crown.png";
    count(47);
}
function f68(){
    document.getElementById("man68").src="crown.png";
    count(48);
}



function f71(){
    document.getElementById("man71").src="crown.png";
    count(49);
}
function f72(){
    document.getElementById("man72").src="crown.png";
    count(50);
}
function f73(){
    document.getElementById("man73").src="crown.png";
    count(51);
}
function f74(){
    document.getElementById("man74").src="crown.png";
    count(52);
}
function f75(){
    document.getElementById("man75").src="crown.png";
    count(53);
}
function f76(){
    document.getElementById("man76").src="crown.png";
    count(54);
}
function f77(){
    document.getElementById("man77").src="crown.png";
    count(55);
}
function f78(){
    document.getElementById("man78").src="crown.png";
    count(56);
}







function f81(){
    document.getElementById("man81").src="crown.png";
    count(57);
}
function f82(){
    document.getElementById("man82").src="crown.png";
    count(58);
}
function f83(){
    document.getElementById("man83").src="crown.png";
    count(59);
}
function f84(){
    document.getElementById("man84").src="crown.png";
    count(60);
}
function f85(){
    document.getElementById("man85").src="crown.png";
    count(61);
}
function f86(){
    document.getElementById("man86").src="crown.png";
    count(62);
}
function f87(){
    document.getElementById("man87").src="crown.png";
    count(63);
}
function f88(){
    document.getElementById("man88").src="crown.png";
    count(64);
}