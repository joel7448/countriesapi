

var div=document.createElement("div");
div.innerHTML=`<input type="text" id="country">
<button type="button"  onclick="covid()">Search</button>
<p class="active"></p>
<p class="death"></p>
<p class="recovered"></p>`;
document.body.append(div);
div.style.textAlign="center";
div.style.paddingTop="100px";
document.body.setAttribute("style","background-color:azure");

async function covid(){
var countryname=document.querySelector("#country").value;
let api= await fetch(`https://api.covid19api.com/total/country/${countryname}`);
let result=await api.json();

let index=result.length-1;
var active=result[index].Active;
var act=document.querySelector(".active");
act.innerText=`Total active cases: ${active}`;
console.log(result);
var deaths=result[index].Deaths;
var death=document.querySelector(".death");
death.innerText=`Total number of deaths: ${deaths}`;
var recover=result[index].Recovered;
var rec=document.querySelector(".recovered");
rec.innerText=`Total number of people recovered: ${recover} `;


}