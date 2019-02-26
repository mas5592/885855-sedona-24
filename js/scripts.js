var link=document.querySelector(".booking-btn");
var searchForm=document.querySelector(".booking-info");
var dateArrival=searchForm.querySelector("#arrival");
var form=document.querySelector("form");
var dateDeparture=searchForm.querySelector("#departure");
var kids=searchForm.querySelector("#kids-number");
var grownup=searchForm.querySelector("#grownup-number");

link.addEventListener("click",function(event)
	{event.preventDefault();

if(searchForm.classList.contains("booking-info-visible")){
	searchForm.classList.add("booking-info-invisible");
	searchForm.classList.remove("booking-info-visible");
	searchForm.classList.remove("booking-info-error");
}else{
	searchForm.classList.add("booking-info-visible");
	searchForm.classList.remove("booking-info-invisible");
};dateArrival.focus();});

	form.addEventListener("submit",function(event)
	{if(!dateArrival.value||!dateDeparture.value||!kids.value||!grownup.value)
	{event.preventDefault();
	searchForm.classList.remove("booking-info-error");
	searchForm.offsetWidth=searchForm.offsetWidth;
	searchForm.classList.add("booking-info-error");}});
window.addEventListener("keydown",function(event)
	{if(event.keyCode===27)
	{if(searchForm.classList.contains("booking-info-visible"))
	{searchForm.classList.remove("booking-info-visible");
	searchForm.classList.add("booking-info-invisible");
	searchForm.classList.remove("booking-info-error");}}});



