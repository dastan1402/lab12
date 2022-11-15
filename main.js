console.log(document);

let h1_arr= document.getElementsByTagName("h1");
console.log (h1_arr[0]);
let h=h1_arr[0];
h.innerHTML ="Lab12 Assignment";
h.style.color="blue";
document.body.appendChild(h);

var hr= document.createElement("hr");
console.log(hr);
document.body.appendChild(hr);


let h2 = document.createElement("h2");
h2.innerHTML = "Task";
h2.style.color="red";
document.body.appendChild(h2);

let p1= document.createElement("p");
p1.innerHTML= "In this task you have to reproduce this HTML page as is using <strong> only </strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"     
document.body.appendChild(p1);

var ul = document.createElement("ul");
var li=document.createElement("li");
li.innerHTML="find elements in the DOM (<strong>5 points</strong>);";
li.style.color="green";
ul.appendChild(li);

var li=document.createElement("li");
li.innerHTML="create/add/remove elements(<strong>5 points</strong>);";
li.style.color="purple";
ul.appendChild(li);

var li=document.createElement("li");
li.innerHTML="change content of the elements(<strong>5 points</strong>);";
li.style.color="green";
ul.appendChild(li);

var li=document.createElement("li");
li.innerHTML="change styles of the elements(<strong>5 points</strong>);";
li.style.color="purple";
ul.appendChild(li);

var li=document.createElement("li");
li.innerHTML="change attributes of the elements(<strong>5 points</strong>);";
li.style.color="green";
ul.appendChild(li);

var li=document.createElement("li");
li.innerHTML="change classes of the elements(<strong>5 points</strong>);";
li.style.color="purple";
ul.appendChild(li);

document.body.appendChild(ul)

let b1 = document.createElement("b1")
b1.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this "
document.body.appendChild(b1)

let a1 = document.createElement("a"); 
a1.href = "https://github.com/yessen/nu_web_programming/tree/main/week12";
a1.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12"); 
a1.innerText = "link."; 
document.body.appendChild(a1);

var hr = document.createElement("hr")
console.log(hr)
document.body.appendChild(hr)

var h3 = document.createElement("h3")
h3.innerHTML = "Submission"
h3.style.color = "red"
h3.style.fontSize = "24px";
document.body.appendChild(h3)

let p2 = document.createElement("p2")
p2.innerHTML = "To submit your work, follow these instructions:"
document.body.appendChild(p2)

var ul = document.createElement("ul")
var li = document.createElement("li")
li.innerHTML = "Create a new repository on Github, named <strong>lab12</strong> (<strong>1 point</strong>)."
li.style.color = "green"
ul.appendChild(li);

var li = document.createElement("li")
li.innerHTML = "Clone this repository to your local machine and work inside it."
li.style.color = "purple"
ul.appendChild(li);

var li = document.createElement("li")
li.innerHTML = "Create a new HTML file, called <strong>index.html</strong>, which has only one &lt;h1&gt; tag with &Prime;Hello, World!&Prime; message (<strong>1 point</strong>)."
li.style.color = "green"
ul.appendChild(li);

var li = document.createElement("li")
li.innerHTML = "Create a new JavaScript file, called <strong>main.js</strong>, which must contain your program (assignment) described above (<strong>1 point</strong>)."
li.style.color = "purple"
ul.appendChild(li);

var li = document.createElement("li")
li.innerHTML = "Link this <strong>main.js</strong> file to your <strong>index.html</strong> file (Note: place your script at the end of the <strong>body</strong> section)."
li.style.color = "green"
ul.appendChild(li);

var li = document.createElement("li")
li.innerHTML = " Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>)."
li.style.color = "purple"
ul.appendChild(li);

var li = document.createElement("li")
li.innerHTML = "After you finish your work, submit it to the Github (<strong>2 points</strong>)."
li.style.color = "green"
ul.appendChild(li);

document.body.appendChild(ul)

var hr = document.createElement("hr")
console.log(hr)
document.body.appendChild(hr)

console.log(document);