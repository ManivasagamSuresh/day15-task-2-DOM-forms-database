let box = document.createElement("div");
box.setAttribute("class","box");

let container = document.createElement("div");
container.setAttribute("class","container");
let row = document.createElement("div");
row.setAttribute("class","row");
let col4 = document.createElement("div");
col4.setAttribute("class","cols-4");
let col8 = document.createElement("div");
col8.setAttribute("class","cols-8");
let divi1= document.createElement("div")
divi1.setAttribute("class","forms")

let h1=document.createElement("h1")
h1.innerHTML="Form Submission"

// gender section

let span1=document.createElement("span");
span1.innerHTML="Gender"
let br11=breaktag("br")

let male=document.createElement("input");
male.setAttribute("type","radio");
male.setAttribute("id","male");
male.setAttribute("name","gender")
let male1=document.createElement("label");
male1.setAttribute("for","male");
male1.innerHTML="Male"

let female=document.createElement("input");
female.setAttribute("type","radio");
female.setAttribute("id","female");
female.setAttribute("name","gender")
let female1=document.createElement("label");
female1.setAttribute("for","female");
female1.innerHTML="Female";
let br12=breaktag("br");

// span for food choice
let span2=document.createElement("span");
span2.innerHTML="Choice of Food(must choose atleast 2 out of 5)";
let br13=breaktag("br") 

// button for submit

let button = document.createElement("button");
button.setAttribute("type","button");
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
let south1=input("input","id","si","type","checkbox");
let br14 =breaktag("br");
let north=label("label","for","ni","North Indian");
let north1=input("input","id","ni","type","checkbox");
let br15 =breaktag("br");
let chinese=label("label","for","chinese","chinese");
let chinese1=input("input","id","chinese","type","checkbox");
let br16 =breaktag("br");
let russian=label("label","for","russian","Russian");
let russian1=input("input","id","russian","type","checkbox");
let br17 =breaktag("br");
let fastfood=label("label","for","fastfood","Fastfood");
let fastfood1=input("input","id","fastfood","type","checkbox");
let br18 =breaktag("br");



divi1.append(h1,firstname,br1,firstname1,br2,lastname,br3,lastname1,br4,addressone,br5,addressone1,br6,addresstwo,br7,addresstwo1,br8,pin,br9,pin1,br10,span1,br11,male,male1,female,female1,br12,span2,br13,south,south1,br14,north,north1,br15,chinese,chinese1,br16,russian,russian1,br17,fastfood,fastfood1,br18,button)
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



