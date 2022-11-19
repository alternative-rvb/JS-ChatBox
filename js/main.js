console.log("script is runing ...");
const form1 = document.getElementById("chatForm1");
const form2 = document.getElementById("chatForm2");
const accessMsg1 = document.getElementById("message1");
const accessMsg2 = document.getElementById("message2");
const displayMsg1 = document.getElementById("msgBox1");
const displayMsg2 = document.getElementById("msgBox2");
// const mesValue1 = "Moi: " + accessMsg1.value;
// const mesValue2 = "Moi: " + accessMsg2.value;

const handleForm = (e) => {
  e.preventDefault();
};

form1.addEventListener("submit", handleForm);
form2.addEventListener("submit", handleForm);

const sendMessage1 = () => {
  displayMsg1.innerHTML += `<p class="chat__line line1"><strong>Moi:</strong><br> ${accessMsg1.value}</p>`;
  displayMsg2.innerHTML += `<p class="chat__line line2"><strong>Mohamed:</strong><br> ${accessMsg1.value}</p>`;
  scrollToBottom("msgBox1");
  form1.reset();
};
const sendMessage2 = () => {
  displayMsg1.innerHTML += `<p class="chat__line line2"><strong>Nico:</strong><br> ${accessMsg2.value}</p>`;
  displayMsg2.innerHTML += `<p class="chat__line line1"><strong>Moi:</strong><br> ${accessMsg2.value}</p>`;
  scrollToBottom("msgBox2");
  form2.reset();
};
const scrollToBottom = (id) => {
  var div = document.getElementById(id);
  div.scrollTop = div.scrollHeight - div.clientHeight;
};
