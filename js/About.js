

var countries = ['egypt' , 'tunisia ' , 'iraq', 'jordan' , 'palestine' ,'sudan'] ;
var x = 0;
for ( var p=0 ; p<5 ;p++){
    //console.log(p); 
    if (x === 10){
        break;
    }
 
 var country = prompt('There are alots of countries that i like, you should know on of them at least, write down what you giss');
   //console.log(country); 
  
   for (var g=0 ; g<countries.length ; g++){
    // console.log(g);
      //console.log(countries[g]);
         if ( country === countries[g] ) {
            var x = 10;
         //  console.log('my lovely country is ' + country );
          alert(" Thats right :) , you know me well ");
           break;
         } else {
        
           // alert(" Thats not right  ");

           //console.log('your choise not right');
          
       }
    } 
    
  }






  /*alert('Can you giss my edu choose between: doctor, army man, engineer,fire man,monky')
var edu =['doctor', 'army man', 'engineer','fire man','monky']
for(var k =0 ; k < 7;k++){ 
  var m = prompt("giss my edu");
  var tag = false;  
  for(var n = 0; n < edu.length ; n = n+1)
  {
  
    if (edu[n]===m)
    {
      console.log("finaly")
      n=edu.length
      tag = true
      break
    }
    else
    {
      console.log('No try Again !');
    }
  }
  if (tag == true){
    k = 7
    alert('congrats')
    }
  else{alert('try again')}
}*/




















      /*switch (country) {

              case countries[0]:
                  alert('correct');
                  console.log('your choise is egypt')
              break;

              case countries[1]:
                alert('correct');
                console.log('your choise is egypt')

              break;

              case countries[2]:
                alert('correct');
                console.log('your choise is egypt')


              break;

              case countries[3]:
                alert('correct');
                console.log('your choise is egypt');
              break;

              case countries[4]:
                alert('correct');
                console.log('your choise is egypt');
              break;

              case countries[5]:
                alert('correct');
                console.log('your choise is egypt');
              break;   
      
             default:
              alert("no choise is correct");
              break;
      } */ 

    
