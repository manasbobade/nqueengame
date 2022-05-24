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
    else if(value==false)
        {
            callsoffunctions--;
            checksolution[cellocation]=cellocation;
            document.getElementById("as").innerHTML="number of queens entered  "+callsoffunctions;

        }
}


function checksol(){
    
    if(checksolution[1]==0 && checksolution[13]==0 && checksolution[24]==0 &&checksolution[30]==0 && checksolution[35]==0 && checksolution[47]==0 && checksolution[50]==0 && checksolution[60]==0)
    {
        document.getElementById("sa").innerHTML="Correct WELL PLAYED!!";
    }
    else
    {
        document.getElementById("sa").innerHTML="Opps! try again";
    }


}
var b11=false
var b12=false
var b13=false
var b14=false
var b15=false
var b16=false
var b17=false
var b18=false

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
         count(1,b11);
       }
 }
function f12(){
     if(b12==false)
       { 
         b12=true;
         document.getElementById("man12").src="crown.png";
         count(2,b12);
       }
    else if(b12=true)
       {
         b12=false;
         document.getElementById("man12").src="white.png";
         count(2,b12);
       }
 }
function f13(){
     if(b13==false)
       { 
         b13=true;
         document.getElementById("man13").src="crown.png";
         count(3,b13);
       }
    else if(b13=true)
       {
         b13=false;
         document.getElementById("man13").src="black.png";
         count(3,b13);
       }
  }
function f14(){
     if(b14==false)
       { 
         b14=true;
         document.getElementById("man14").src="crown.png";
         count(4,b14);
       }
    else if(b14=true)
       {
         b14=false;
         document.getElementById("man14").src="white.png";
         count(4,b14);
       }
  }
function f15(){
     if(b15==false)
     { 
       b15=true;
       document.getElementById("man15").src="crown.png";
       count(5,b15);
     }
     else if(b15=true)
     {
       b15=false;
       document.getElementById("man15").src="black.png";
       count(5,b15);
     }
  }
function f16(){
     if(b16==false)
     { 
       b16=true;
       document.getElementById("man16").src="crown.png";
       count(6,b16);
     }
     else if(b16=true)
     {
       b16=false;
       document.getElementById("man16").src="white.png";
       count(6,b16);
     }
   }
function f17(){
     if(b17==false)
     { 
       b17=true;
       document.getElementById("man17").src="crown.png";
       count(7,b17);
     }
     else if(b17=true)
     {
       b17=false;
       document.getElementById("man17").src="black.png";
       count(7,b17);
     }
   }
 function f18(){
     if(b18==false)
     { 
       b18=true;
       document.getElementById("man18").src="crown.png";
       count(8,b18);
     }
     else if(b18=true)
     {
       b18=false;
       document.getElementById("man18").src="white.png";
       count(8,b18);
     }
 }



var b21=false
var b22=false
var b23=false
var b24=false
var b25=false
var b26=false
var b27=false
var b28=false

function f21(){
    if(b21==false)
       { 
         b21=true;
         document.getElementById("man21").src="crown.png";
         count(9,b21);
       }
    else if(b21=true)
       {
         b21=false;
         document.getElementById("man21").src="white.png";
         count(9,b21);
       }
 }
 function f22(){
     if(b22==false)
       { 
         b22=true;
         document.getElementById("man22").src="crown.png";
         count(10,b22);
       }
    else if(b22=true)
       {
         b22=false;
         document.getElementById("man22").src="black.png";
         count(10,b22);
       }
 }
 function f23(){
     if(b23==false)
       { 
         b23=true;
         document.getElementById("man23").src="crown.png";
         count(11,b23);
       }
    else if(b23=true)
       {
         b23=false;
         document.getElementById("man23").src="white.png";
         count(11,b23);
       }
  }
 
  function f24(){
     if(b24==false)
       { 
         b24=true;
         document.getElementById("man24").src="crown.png";
         count(12,b24);
       }
    else if(b24=true)
       {
         b24=false;
         document.getElementById("man24").src="black.png";
         count(12,b24);
       }
  }
  function f25(){
     if(b25==false)
     { 
       b25=true;
       document.getElementById("man25").src="crown.png";
       count(13,b25);
     }
     else if(b25=true)
     {
       b25=false;
       document.getElementById("man25").src="white.png";
       count(13,b25);
     }
  }
  function f26(){
     if(b26==false)
     { 
       b26=true;
       document.getElementById("man26").src="crown.png";
       count(14,b26);
     }
     else if(b26=true)
     {
       b26=false;
       document.getElementById("man26").src="black.png";
       count(14,b26);
     }
   }
   function f27(){
     if(b27==false)
     { 
       b27=true;
       document.getElementById("man27").src="crown.png";
       count(15,b27);
     }
     else if(b27=true)
     {
       b27=false;
       document.getElementById("man27").src="white.png";
       count(15,b27);
     }
   }
 function f28(){
     if(b28==false)
     { 
       b28=true;
       document.getElementById("man28").src="crown.png";
       count(16,b28);
     }
     else if(b28=true)
     {
       b28=false;
       document.getElementById("man28").src="black.png";
       count(16,b28);
     }
 }




var b31=false
var b32=false
var b33=false
var b54=false
var b55=false
var b56=false
var b57=false
var b58=false

function f31(){
    if(b31==false)
       { 
         b31=true;
         document.getElementById("man31").src="crown.png";
         count(17,b31);
       }
    else if(b31=true)
       {
         b31=false;
         document.getElementById("man31").src="black.png";
         count(17,b31);
       }
 }
function f32(){
     if(b32==false)
       { 
         b32=true;
         document.getElementById("man32").src="crown.png";
         count(18,b32);
       }
    else if(b32=true)
       {
         b32=false;
         document.getElementById("man32").src="white.png";
         count(18,b32);
       }
 }
function f33(){
     if(b33==false)
       { 
         b33=true;
         document.getElementById("man33").src="crown.png";
         count(19,b33);
       }
    else if(b33=true)
       {
         b33=false;
         document.getElementById("man33").src="black.png";
         count(19,b33);
       }
  }
 function f34(){
     if(b34==false)
       { 
         b34=true;
         document.getElementById("man34").src="crown.png";
         count(20,b34);
       }
    else if(b34=true)
       {
         b34=false;
         document.getElementById("man34").src="white.png";
         count(20,b34);
       }
  }
function f35(){
     if(b35==false)
     { 
       b35=true;
       document.getElementById("man35").src="crown.png";
       count(21,b35);
     }
     else if(b35=true)
     {
       b35=false;
       document.getElementById("man35").src="black.png";
       count(21,b35);
     }
  }
function f36(){
     if(b36==false)
     { 
       b36=true;
       document.getElementById("man36").src="crown.png";
       count(22,b36);
     }
     else if(b36=true)
     {
       b36=false;
       document.getElementById("man36").src="white.png";
       count(22,b36);
     }
   }
function f37(){
     if(b37==false)
     { 
       b37=true;
       document.getElementById("man37").src="crown.png";
       count(23,b37);
     }
     else if(b37=true)
     {
       b37=false;
       document.getElementById("man37").src="black.png";
       count(23,b37);
     }
   }
function f38(){
     if(b38==false)
     { 
       b38=true;
       document.getElementById("man38").src="crown.png";
       count(24,b38);
     }
     else if(b38=true)
     {
       b38=false;
       document.getElementById("man38").src="white.png";
       count(24,b38);
     }
 }

 var b41=false
 var b42=false
 var b43=false
 var b44=false
 var b45=false
 var b46=false
 var b47=false
 var b48=false

 function f41(){
    if(b41==false)
       { 
         b41=true;
         document.getElementById("man41").src="crown.png";
         count(25,b41);
       }
    else if(b41=true)
       {
         b41=false;
         document.getElementById("man41").src="white.png";
         count(25,b41);
       }
 }
 function f42(){
     if(b42==false)
       { 
         b42=true;
         document.getElementById("man42").src="crown.png";
         count(26,b42);
       }
    else if(b42=true)
       {
         b42=false;
         document.getElementById("man42").src="black.png";
         count(26,b42);
       }
 }
function f43(){
     if(b43==false)
       { 
         b43=true;
         document.getElementById("man43").src="crown.png";
         count(27,b43);
       }
    else if(b43=true)
       {
         b43=false;
         document.getElementById("man43").src="white.png";
         count(27,b43);
       }
  }
 function f44(){
     if(b44==false)
       { 
         b44=true;
         document.getElementById("man44").src="crown.png";
         count(28,b44);
       }
    else if(b44=true)
       {
         b44=false;
         document.getElementById("man44").src="black.png";
         count(28,b44);
       }
  }
function f45(){
     if(b45==false)
     { 
       b45=true;
       document.getElementById("man45").src="crown.png";
       count(29,b45);
     }
     else if(b45=true)
     {
       b45=false;
       document.getElementById("man45").src="white.png";
       count(29,b45);
     }
  }
function f46(){
     if(b46==false)
     { 
       b46=true;
       document.getElementById("man46").src="crown.png";
       count(30,b46);
     }
     else if(b46=true)
     {
       b46=false;
       document.getElementById("man46").src="black.png";
       count(30,b46);
     }
   }
function f47(){
     if(b47==false)
     { 
       b47=true;
       document.getElementById("man47").src="crown.png";
       count(31,b47);
     }
     else if(b47=true)
     {
       b47=false;
       document.getElementById("man47").src="white.png";
       count(31,b47);
     }
   }
function f48(){
     if(b48==false)
     { 
       b48=true;
       document.getElementById("man48").src="crown.png";
       count(32,b48);
     }
     else if(b48=true)
     {
       b48=false;
       document.getElementById("man48").src="black.png";
       count(32,b48);
     }
 }




 var b51=false
 var b52=false
 var b53=false
 var b54=false
 var b55=false
 var b56=false
 var b57=false
 var b58=false
 
 function f51(){
     if(b51==false)
        { 
          b51=true;
          document.getElementById("man51").src="crown.png";
          count(33,b51);
        }
     else if(b51=true)
        {
          b51=false;
          document.getElementById("man51").src="black.png";
          count(33,b51);
        }
  }
 function f52(){
      if(b52==false)
        { 
          b52=true;
          document.getElementById("man52").src="crown.png";
          count(34,b52);
        }
     else if(b52=true)
        {
          b52=false;
          document.getElementById("man52").src="white.png";
          count(34,b52);
        }
  }
 function f53(){
      if(b53==false)
        { 
          b53=true;
          document.getElementById("man53").src="crown.png";
          count(35,b53);
        }
     else if(b53=true)
        {
          b53=false;
          document.getElementById("man53").src="black.png";
          count(35,b53);
        }
   }
  function f54(){
      if(b54==false)
        { 
          b54=true;
          document.getElementById("man54").src="crown.png";
          count(36,b54);
        }
     else if(b54=true)
        {
          b54=false;
          document.getElementById("man54").src="white.png";
          count(36,b54);
        }
   }
 function f55(){
      if(b55==false)
      { 
        b55=true;
        document.getElementById("man55").src="crown.png";
        count(37,b55);
      }
      else if(b55=true)
      {
        b55=false;
        document.getElementById("man55").src="black.png";
        count(37,b55);
      }
   }
 function f56(){
      if(b56==false)
      { 
        b56=true;
        document.getElementById("man56").src="crown.png";
        count(38,b56);
      }
      else if(b56=true)
      {
        b56=false;
        document.getElementById("man56").src="white.png";
        count(38,b56);
      }
    }
 function f57(){
      if(b57==false)
      { 
        b57=true;
        document.getElementById("man57").src="crown.png";
        count(39,b57);
      }
      else if(b57=true)
      {
        b57=false;
        document.getElementById("man57").src="black.png";
        count(39,b57);
      }
    }
 function f58(){
      if(b58==false)
      { 
        b58=true;
        document.getElementById("man58").src="crown.png";
        count(40,b58);
      }
      else if(b58=true)
      {
        b58=false;
        document.getElementById("man58").src="white.png";
        count(40,b58);
      }
  }

  
  var b61=false
  var b62=false
  var b63=false
  var b64=false
  var b65=false
  var b66=false
  var b67=false
  var b68=false
  
  function f61(){
     if(b61==false)
        { 
          b61=true;
          document.getElementById("man61").src="crown.png";
          count(41,b61);
        }
     else if(b61=true)
        {
          b61=false;
          document.getElementById("man61").src="white.png";
          count(41,b61);
        }
  }
  function f62(){
      if(b62==false)
        { 
          b62=true;
          document.getElementById("man62").src="crown.png";
          count(42,b62);
        }
     else if(b62=true)
        {
          b62=false;
          document.getElementById("man62").src="black.png";
          count(42,b62);
        }
  }
  function f63(){
      if(b63==false)
        { 
          b63=true;
          document.getElementById("man63").src="crown.png";
          count(43,b63);
        }
     else if(b63=true)
        {
          b63=false;
          document.getElementById("man63").src="white.png";
          count(43,b63);
        }
   }
  function f64(){
      if(b64==false)
        { 
          b64=true;
          document.getElementById("man64").src="crown.png";
          count(44,b64);
        }
     else if(b64=true)
        {
          b64=false;
          document.getElementById("man64").src="black.png";
          count(44,b64);
        }
   }
  function f65(){
      if(b65==false)
      { 
        b65=true;
        document.getElementById("man65").src="crown.png";
        count(45,b65);
      }
      else if(b65=true)
      {
        b65=false;
        document.getElementById("man65").src="white.png";
        count(45,b65);
      }
   }
  function f66(){
      if(b66==false)
      { 
        b66=true;
        document.getElementById("man66").src="crown.png";
        count(46,b66);
      }
      else if(b66=true)
      {
        b66=false;
        document.getElementById("man66").src="black.png";
        count(46,b66);
      }
    }
  function f67(){
      if(b67==false)
      { 
        b67=true;
        document.getElementById("man67").src="crown.png";
        count(47,b67);
      }
      else if(b67=true)
      {
        b67=false;
        document.getElementById("man67").src="white.png";
        count(47,b67);
      }
    }
  function f68(){
      if(b68==false)
      { 
        b68=true;
        document.getElementById("man68").src="crown.png";
        count(48,b68);
      }
      else if(b68=true)
      {
        b68=false;
        document.getElementById("man68").src="black.png";
        count(48,b68);
      }
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