let tablinks=document.getElementsByClassName("tablink");
let tabcontents=document.getElementsByClassName("tabcontents");
let sidemenu=document.getElementById("sidemenu");
function opentab(tabname){
 for(tablink of tablinks){
    tablink.classList.remove("active");
 }
 for(tabcontent of tabcontents){
    tabcontent.classList.remove("activetab");
 }
 event.currentTarget.classList.add("active");
 document.getElementById(tabname).classList.add("activetab");

}


function openmenu(){
   sidemenu.style.right="0";
}
function closemenu(){
   sidemenu.style.right="-200px"
}
let form=document.getElementById("form");
let naam=document.getElementById("name");
let email=document.getElementById("email");

let nerror=document.getElementById("nerror");
let eerror=document.getElementById("eerror");



form.addEventListener("submit",(e)=>{
    let email_check=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   if(naam.value.trim()===''){
      e.preventDefault();
      nerror.innerHTML="Name is required";
      
     
   }
   else{
      nerror.innerHTML="";
   }
   if(!email.value.match(email_check)){
      e.preventDefault();
      eerror.innerHTML="Valid email is requied";
   }
   else{
      eerror.innerHTML="";
   }

});
