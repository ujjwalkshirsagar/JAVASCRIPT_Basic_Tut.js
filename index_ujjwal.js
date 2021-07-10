   /*
   Author - Ujjwal Kshirsagar
   Date-24/06/2021
   */


   //Single line Comment
    
    /* 
    Multiline Comment
    */
    
    //1. Ways to print in JavaScript
    //console.log("Helllo");
    //window.alert("Hii");
    //document.write("This is document.write");

    //2. JavaScript Console API
    //console.log("Hello world!");
    //console.warn("This is warning");
    //console.assert(2==2);
    //console.error("This is an Error");
    //console.clear();
    //console.log("hiee",4+6,"LOG");

    //3. Javascript Variable
    //   what is Variable - Conatainers to store data value
   //================= BIG COMMENT======================================================
   /* var num1=33;
    var num2=344;
    console.log(num1+num2); 

    //4. DataTypes in JS
    // Numbers
    var num=45.2;
    var num3=45;

    //Strings
    var str="This is String";

    //Object
    var marks={
        ravi:30,
        ujj:45,
        bro:44.3
    }
    console.log(marks); 

    //Boolean
    var a=true;
    var b=false;
    console.log(a,b);

    //Undefined
    var und=undefined;
    console.log(und)

    var d;
    console.log(d) //var is only declared no values ,hence undefined.

    //Null
    var n = null;
    console.log(n) //I myself saying it is null

    //Symbol 
    //Always unique value key is generated

    //At very High Level ,There are two types of Data Type in JS
    //1. Primitive datatypes: undefined,null,number,string,boolean,symbol
    //2. Reference datatypes: Arrays and Objects

   // Array
   var arr=[1,2,3,"yoo",4];
   console.log(arr);
   console.log(arr[0])
   console.log(arr[1])
   console.log(arr[2])

   console.clear()

    
    // Operators in JS
   
    // Arithemetic Operator
    var c=89;
    var d=56;
    console.log("The Value of a+b is",a+b );
    console.log("The Value of a-b is",a-b );
    console.log("The Value of a/b is",a/b );
    console.log("The Value of a*b is",a*b );

    // Assignment Operator
    var c=d;
    c+=2; //c=c+2
    c-=2; //c=c-2
    c*=2; //c=c*2
    c/=2; //c=c/2
    console.log(c);

    //Comparision Operators
    var x=99;
    var y=70;
    console.log(x==y);
    console.log(x<=y);
    console.log(x>=y);
    console.log(x>y);
    console.log(x<y);

    //Logical Operators
    //AND
    console.log(true && false);
    console.log(true && true);
    console.log(false && true);
    console.log(false && false);

    //OR
    console.log(true || false);
    console.log(true || true);
    console.log(false|| true);
    console.log(false || false);

    // only | is bitwise operator.

    //Not
    console.log(!true);
    console.log(!false);



    // Function 
    //DRY =DO NOT REAPEAT YOURSELF
    
    function avg(a,b){
        return (a+b)/2
    }
    c1=avg (2,5);
    c2=avg(5,19);
    console.log(c1,c2);

    //Black o/p in console - String.
    //Blue o/p in console - Number.


    // Conditionals

    // Single if Statement
    // if-Else Satement
    // if-else ladder
    var age=50;
    var age=16;
    var age=7;
    
    if (age>18){
        console.log("Cannot grow nw")
    }
    else if(age>15) {
        console.log("Can Grow")
    }
    else if(age>5){
        console.log("Abhi tho paida hue ho bhai")
    }
    console.log("End Of Ladder")

    
    // Only One statement execute ..where condition gets Satisfied



    // For Loop
    // Array iteration using for loop
    var arry=[1,2,3,4,5,6,7,8]
    console.log(arry)
    for (var i=0;i<arry.length;i++){
        console.log(arry[i])
    }
    
    // Array iteration using for for each function
    arr.forEach(function(element) {
       console.log(element)
    })


    // While Loop
    let j=0;
    while (j<arr.length){
        console.log(arr[j]);
        j++;
    }
console.clear();

    // Do while Loop
    /*
    var m=2;
    do{
        console.log(arr[m]);
        m++;


    } while (m<arr.length);
    */

    // Break , Continue

   /* 
   var arry=[1,2,3,4,5,6,7,8]
 
    for (var i=0;i<arry.length;i++){
        if (i==2){
            break;
        }
        console.log(arry[i])
    }
    */
   
    /*
    for (var i=0;i<arry.length;i++){
        if (i==2){
            continue;
        }
        console.log(arry[i])
    }
    */ 
    //================= BIG COMMENT======================================================
   


    //Some methods for array
    // .push("")
    // .pop()
    // .shift()
    // .unshift()
    // .sort()
    /* //================= BIG COMMENT======================================================
    let arr1=["Fan",true,55,null];

    console.log(arr1.length)
    arr1.pop();
    console.log(arr1)

    //arr1.push("harry")
    arr1.shift()
    const newLen = arr1.unshift("Harry")
    // console.log(newLen);
    //console.log(arr1);
    //console.log(arr1.length)



    // Some methods for String
    // .length
    // .indexof("")
    // .lastIndexof("")
    // .Slice(0,3)
    // .replace("what to replace","with what")  //Dont replace for all Occurence, Replaces only First Occurence


    //Javascript Date
    let date=new Date();  // D in Capitals //new keyword is use to create new date
    console.log(date);

    // Methods of Date

    // console.log(date.getTime());
    // console.log(date.getFullYear());
    // console.log(date.getDay());
    // console.log(date.getMinutes());
    // console.log(date.getHours());


    // DOM (Document Object Model) Manipulation
    
    // document.getElementById('')
    // document.getElementsByClassName("container")  

    /*
    let elemClass = document.getElementsByClassName("container")
    console.log(elemClass);
    elemClass[0].style.background = "yellow";
    elemClass[0].classList.add("bg-primary")
    elemClass[0].classList.add("text-success")
    elemClass[0].classList.remove("text-success")
    */

    // document.getElementsByClassName("container").innerHTML
    // document.getElementsByClassName("container").innertext

    // document.getElementsByClassName("container")[0].innerHTML
    // document.getElementsByClassName("container")[0].innertext

 //================= BIG COMMENT======================================================

   
    // var elmClas=document.getElementsByClassName("container");
    // elmClas[0].classList.add("text")
    // elmClas[0].classList.remove("text")
    
    // console.log(elmClas[0].innerHTML);
    // console.log(elmClas[0].innerText);

    //tn=document.getElementsByTagName("div");
    //console.log(tn)
    //created=document.createElement('p')
    //created.innerText="This is new";
    //tn[0].appendChild(created)

   // created2=document.createElement('b')
   // created2.innerText="Newest";
   // tn[0].replaceChild(created2,created)

 //  document.URL
 // document.scripts
 //  document.links
 // document.images
 // document.domain


// sel = document.querySelector('.container')
 //console.log(sel)
//sel = document.querySelectorAll('.container')
 //console.log(sel)

 window.onload=function(){
    console.log("LOaded")
}

 
document.getElementById("firstcontainer").classList.add("bg")
  function uj (){
    window.alert("Working bruh")
    window.location.href = "http://www.w3schools.com";

    }

    firstcontainer.addEventListener('mouseover',function(){
        document.getElementById("p1").innerText ="Inside Container"
        console.log("Clicked")
        
    }) 

 firstcontainer.addEventListener('mouseout',function(){
     console.log("Out of clickbox")
     document.getElementById("p1").innerText="Out of Container";
 })   

    // window.onload = function(){
//     console.log('The document was loaded')

// }
// Events in JavaScript
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Clicked on Container")
// })



//firstcontainer.addEventListener('click',function(){
  //  console.log("Noice")})

    //firstcontainer.addEventListener('mouseover',function(){
   // console.log("on container")})

   // firstcontainer.addEventListener('mouseenter',function(){
    //console.log("bher")})


 //   firstcontainer.addEventListener('mouseup',function(){
 //    console.log("UPe");
  //  })

 // firstcontainer.addEventListener('mousedown',function(){
  // console.log("Down");
  //  })


  //firstcontainer.addEventListener('click',function(){
  //document.querySelectorAll('.container')[1].innerHTML="<b> OOOO</b>"
  //  console.log("Noice")})
//document.getElementsByClassName("firstcontainer")


tn = document.getElementsByTagName('div')
  createdElement = document.createElement('p');
  createdElement.innerText = "This is a created para";
  tn[1].appendChild(createdElement);

  createdElement2 = document.createElement('b');
  createdElement2.innerText = "This is a created bold";
  tn[2].appendChild(createdElement2);

  document.getElementsByTagName('div')[2].innerText="Changed"





