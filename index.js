let box = document.createElement("div");
box.setAttribute("class","box");

let container = document.createElement("div");
container.setAttribute("class","container");
let row = document.createElement("div");
row.setAttribute("class","row");
let col4 = document.createElement("div");
col4.setAttribute("class","cols-4");

let divi1= document.createElement("div")
divi1.setAttribute("class","forms")

let h1=document.createElement("h1")
h1.innerHTML="Form Submission"

// gender section

let span1=document.createElement("span");
span1.setAttribute("id","span1")
span1.innerHTML="Gender"
let br11=breaktag("br")

let male=document.createElement("input");
male.setAttribute("type","radio");
male.setAttribute("id","male");
male.setAttribute("name","gender")
male.setAttribute("value","male")
let male1=document.createElement("label");
male1.setAttribute("for","male");
male1.innerHTML="Male"

let female=document.createElement("input");
female.setAttribute("type","radio");


female.setAttribute("id","female");
female.setAttribute("name","gender")
female.setAttribute("value","female")
let female1=document.createElement("label");
female1.setAttribute("for","female");
female1.innerHTML="Female";
let br12=breaktag("br");

// span for food choice
let span2=document.createElement("span");
span2.setAttribute("id","span2")
span2.innerHTML="Choice of Food(must choose atleast 2 out of 5)";
let br13=breaktag("br") 

// button for submit

let button = document.createElement("button");
button.setAttribute("type","button");
button.addEventListener("click",main)
button.innerHTML="Submit";


// inputs for name ,address,state, country

let firstname=label("label","for","firstname","FIRST NAME :");
let br1 =breaktag("br");
let firstname1=input("input","id","firstname","type","text");
let br2 =breaktag("br");
let lastname=label("label","for","lastname","LAST NAME :");
let br3 =breaktag("br");
let lastname1=input("input","id","lastname","type","text");
let br4 =breaktag("br");
let addressone=label("label","for","address1","ADDRESS 1 :");
let br5 =breaktag("br");
let addressone1=input("input","id","address1","type","text");
let br6 =breaktag("br");
let addresstwo=label("label","for","address2","ADDRESS 2 :");
let br7 =breaktag("br");
let addresstwo1=input("input","id","address2","type","text");
let br8 =breaktag("br");
let pin=label("label","for","pin","PIN :");
let br9 =breaktag("br");
let pin1=input("input","id","pin","type","number");
let br10 =breaktag("br");

let south=label("label","for","si","South Indian");
let south1=foodinput("input","id","si","type","checkbox","name","food","value","South Indian");
let br14 =breaktag("br");
let north=label("label","for","ni","North Indian");
let north1=foodinput("input","id","ni","type","checkbox","name","food","value","North Indian");
let br15 =breaktag("br");
let chinese=label("label","for","chinese","chinese");
let chinese1=foodinput("input","id","chinese","type","checkbox","name","food","value","Chinese");
let br16 =breaktag("br");
let russian=label("label","for","russian","Russian");
let russian1=foodinput("input","id","russian","type","checkbox","name","food","value","Russian");
let br17 =breaktag("br");
let fastfood=label("label","for","fastfood","Fastfood");
let fastfood1=foodinput("input","id","fastfood","type","checkbox","name","food","value","Fast Food");
let br18 =breaktag("br");



divi1.append(h1,firstname,br1,firstname1,br2,lastname,br3,lastname1,br4,addressone,br5,addressone1,br6,pin,br9,pin1,br10,span1,br11,male,male1,female,female1,br12,span2,br13,south,south1,br14,north,north1,br15,chinese,chinese1,br16,russian,russian1,br17,fastfood,fastfood1,br18,button)
col4.append(divi1);
row.append(col4);
container.append(row);
box.append(container);
document.body.append(box);



function label(tagname,attrname,attrvalue,content)
{
let ele = document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML= content;
return ele;

}

function input(tagname,attrname1,attrvalue1,attrname2,attrvalue2)
{
    let ele=document.createElement(tagname);
    ele.setAttribute(attrname1,attrvalue1);
    ele.setAttribute(attrname2,attrvalue2);
    return ele;
}
 
function breaktag(tagname)
{
    let ele = document.createElement(tagname);
    return ele;
}
function foodinput(tagname,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3,attrname4,attrvalue4){
    let ele=document.createElement(tagname);
    ele.setAttribute(attrname1,attrvalue1);
    ele.setAttribute(attrname2,attrvalue2);
    ele.setAttribute(attrname3,attrvalue3);
    ele.setAttribute(attrname4,attrvalue4);
    return ele;
}


// code for col-8

let col8 = document.createElement("div");
col8.setAttribute("class","cols-8");

let divi2 = document.createElement("div");
divi2.setAttribute("class","divi2")

let table = document.createElement("table")

let heading_row = document.createElement("tr");
heading_row.setAttribute("class","heading_row")


let th1 = th("th","FirstName");
let th2 = th("th","LastName");
let th3 = th("th","Address1");
let th4 = th("th","PIN");
let th5 = th("th","Gender");
let th6 = th("th","Food");
let th7 = th("th","State");
let th8 = th("th","Country");

function th(tagname,content){
let ele=document.createElement(tagname);
ele.innerHTML= content;
return ele;
}

heading_row.append(th1,th2,th3,th4,th5,th6);
table.append(heading_row);
divi2.append(table);
col8.append(divi2);
row.append(col8);

// let gender=document.querySelectorAll('input[name= "gender"]')
// console.log(gender);




function main(){
    let first=document.getElementById("firstname").value
    let last=document.getElementById("lastname").value
    let address=document.getElementById("address1").value
    let pincode=document.getElementById("pin").value

   

    let row1 =document.createElement("tr")
    
    let td1=document.createElement("td")
    td1.innerHTML=first;

    let td2=document.createElement("td")
    td2.innerHTML=last;

    let td3=document.createElement("td")
    td3.innerHTML=address;

    let td4=document.createElement("td")
    td4.innerHTML=pincode;





    let gender=document.getElementsByName("gender")
    console.log(gender);
    let genderValue;
    // for(let i=0;i<gender.length;i++){
        if(gender[0].checked){
            genderValue = gender[0].value;
        }
    else{
        genderValue = gender[1].value;

    }

    let td5=document.createElement("td")
    td5.innerHTML=genderValue;


   



    




    let food = document.getElementsByName("food")
    let foodList = []
    let foodCount = 0;
    console.log(food)
    for(let i=0;i<food.length;i++){
        if(food[i].checked){
            foodList.push(food[i].value)
            foodCount++
        }
    }
    if(foodList.length<2)
    {    
        result = alert("Choose atleast 2 options out of 5 in food checkbox");
    }

    let td6=document.createElement("td")
    td6.innerHTML= foodList;

    

    row1.append(td1,td2,td3,td4,td5,td6);
    table.append(row1);
}