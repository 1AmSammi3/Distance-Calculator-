function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;  
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}



function getdistance(){
    const lt1 = document.querySelector(".lat1").value;
const lg1 = document.querySelector(".log1").value;
const lt2 = document.querySelector(".lat2").value;
const lg2 = document.querySelector(".log2").value;

const lat1 = parseFloat(lt1);
const lat2 = parseFloat(lt2);
const log1 = parseFloat(lg1);
const log2 = parseFloat(lg2);

    alert ("The distance between those two points on the map is: " + getDistanceFromLatLonInKm(lat1, log1, lat2, log2) + " Kilometers");
}

function change()
{
    document.querySelector("#legend1").classList.toggle("active");
    
    document.querySelector("#legend2").classList.toggle("active");
    document.querySelector("h1").classList.toggle("active");
    document.querySelector("h2").classList.toggle("active");
    document.querySelector("body").classList.toggle("active");
    document.querySelector(".lat1").classList.toggle("active");
    document.querySelector(".lat2").classList.toggle("active");
    document.querySelector(".log1").classList.toggle("active");
    document.querySelector(".log2").classList.toggle("active");
}function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
	  var R = 6371; // Radius of the earth in km
	  var dLat = deg2rad(lat2-lat1);  // deg2rad below
	  var dLon = deg2rad(lon2-lon1); 
	  var a = 
		    Math.sin(dLat/2) * Math.sin(dLat/2) +
		    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
		    Math.sin(dLon/2) * Math.sin(dLon/2)
	    ; 
	  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	  var d = R * c; // Distance in km
	  return d;  
}

function deg2rad(deg) {
	  return deg * (Math.PI/180)
}



function getdistance(){
	    const lt1 = document.querySelector(".lat1").value;
	const lg1 = document.querySelector(".log1").value;
	const lt2 = document.querySelector(".lat2").value;
	const lg2 = document.querySelector(".log2").value;

	const lat1 = parseFloat(lt1);
	const lat2 = parseFloat(lt2);
	const log1 = parseFloat(lg1);
	const log2 = parseFloat(lg2);

	    alert ("The distance between those two points on the map is: " + getDistanceFromLatLonInKm(lat1, log1, lat2, log2) + " Kilometers");
}

function change()
{
	    document.querySelector("#legend1").classList.toggle("active");
	    
	    document.querySelector("#legend2").classList.toggle("active");
	    document.querySelector("h1").classList.toggle("active");
	    document.querySelector("h2").classList.toggle("active");
	    document.querySelector("body").classList.toggle("active");
	    document.querySelector(".lat1").classList.toggle("active");
	    document.querySelector(".lat2").classList.toggle("active");
	    document.querySelector(".log1").classList.toggle("active");
	    document.querySelector(".log2").classList.toggle("active");
}function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
	  var R = 6371; // Radius of the earth in km
	  var dLat = deg2rad(lat2-lat1);  // deg2rad below
	  var dLon = deg2rad(lon2-lon1); 
	  var a = 
		    Math.sin(dLat/2) * Math.sin(dLat/2) +
		    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
		    Math.sin(dLon/2) * Math.sin(dLon/2)
	    ; 
	  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	  var d = R * c; // Distance in km
	  return d;  
}

function deg2rad(deg) {
	  return deg * (Math.PI/180)
}



function getdistance(){
	    const lt1 = document.querySelector(".lat1").value;
	const lg1 = document.querySelector(".log1").value;
	const lt2 = document.querySelector(".lat2").value;
	const lg2 = document.querySelector(".log2").value;

	const lat1 = parseFloat(lt1);
	const lat2 = parseFloat(lt2);
	const log1 = parseFloat(lg1);
	const log2 = parseFloat(lg2);

	    alert ("The distance between those two points on the map is: " + getDistanceFromLatLonInKm(lat1, log1, lat2, log2) + " Kilometers");
}

function change()
{
	    document.querySelector("#legend1").classList.toggle("active");
	    
	    document.querySelector("#legend2").classList.toggle("active");
	    document.querySelector("h1").classList.toggle("active");
	    document.querySelector("h2").classList.toggle("active");
	    document.querySelector("body").classList.toggle("active");
	    document.querySelector(".lat1").classList.toggle("active");
	    document.querySelector(".lat2").classList.toggle("active");
	    document.querySelector(".log1").classList.toggle("active");
	    document.querySelector(".log2").classList.toggle("active");
}function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
	  var R = 6371; // Radius of the earth in km
	  var dLat = deg2rad(lat2-lat1);  // deg2rad below
	  var dLon = deg2rad(lon2-lon1); 
	  var a = 
		    Math.sin(dLat/2) * Math.sin(dLat/2) +
		    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
		    Math.sin(dLon/2) * Math.sin(dLon/2)
	    ; 
	  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	  var d = R * c; // Distance in km
	  return d;  
}

function deg2rad(deg) {
	  return deg * (Math.PI/180)
}



function getdistance(){
	    const lt1 = document.querySelector(".lat1").value;
	const lg1 = document.querySelector(".log1").value;
	const lt2 = document.querySelector(".lat2").value;
	const lg2 = document.querySelector(".log2").value;

	const lat1 = parseFloat(lt1);
	const lat2 = parseFloat(lt2);
	const log1 = parseFloat(lg1);
	const log2 = parseFloat(lg2);

	    alert ("The distance between those two points on the map is: " + getDistanceFromLatLonInKm(lat1, log1, lat2, log2) + " Kilometers");
}

function change()
{
	    document.querySelector("#legend1").classList.toggle("active");
	    
	    document.querySelector("#legend2").classList.toggle("active");
	    document.querySelector("h1").classList.toggle("active");
	    document.querySelector("h2").classList.toggle("active");
	    document.querySelector("body").classList.toggle("active");
	    document.querySelector(".lat1").classList.toggle("active");
	    document.querySelector(".lat2").classList.toggle("active");
	    document.querySelector(".log1").classList.toggle("active");
	    document.querySelector(".log2").classList.toggle("active");
}function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
	  var R = 6371; // Radius of the earth in km
	  var dLat = deg2rad(lat2-lat1);  // deg2rad below
	  var dLon = deg2rad(lon2-lon1); 
	  var a = 
		    Math.sin(dLat/2) * Math.sin(dLat/2) +
		    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
		    Math.sin(dLon/2) * Math.sin(dLon/2)
	    ; 
	  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	  var d = R * c; // Distance in km
	  return d;  
}

function deg2rad(deg) {
	  return deg * (Math.PI/180)
}



function getdistance(){
	    const lt1 = document.querySelector(".lat1").value;
	const lg1 = document.querySelector(".log1").value;
	const lt2 = document.querySelector(".lat2").value;
	const lg2 = document.querySelector(".log2").value;

	const lat1 = parseFloat(lt1);
	const lat2 = parseFloat(lt2);
	const log1 = parseFloat(lg1);
	const log2 = parseFloat(lg2);

	    alert ("The distance between those two points on the map is: " + getDistanceFromLatLonInKm(lat1, log1, lat2, log2) + " Kilometers");
}

function change()
{
	    document.querySelector("#legend1").classList.toggle("active");
	    
	    document.querySelector("#legend2").classList.toggle("active");
	    document.querySelector("h1").classList.toggle("active");
	    document.querySelector("h2").classList.toggle("active");
	    document.querySelector("body").classList.toggle("active");
	    document.querySelector(".lat1").classList.toggle("active");
	    document.querySelector(".lat2").classList.toggle("active");
	    document.querySelector(".log1").classList.toggle("active");
	    document.querySelector(".log2").classList.toggle("active");
}function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
	  var R = 6371; // Radius of the earth in km
	  var dLat = deg2rad(lat2-lat1);  // deg2rad below
	  var dLon = deg2rad(lon2-lon1); 
	  var a = 
		    Math.sin(dLat/2) * Math.sin(dLat/2) +
		    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
		    Math.sin(dLon/2) * Math.sin(dLon/2)
	    ; 
	  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	  var d = R * c; // Distance in km
	  return d;  
}

function deg2rad(deg) {
	  return deg * (Math.PI/180)
}



function getdistance(){
	    const lt1 = document.querySelector(".lat1").value;
	const lg1 = document.querySelector(".log1").value;
	const lt2 = document.querySelector(".lat2").value;
	const lg2 = document.querySelector(".log2").value;

	const lat1 = parseFloat(lt1);
	const lat2 = parseFloat(lt2);
	const log1 = parseFloat(lg1);
	const log2 = parseFloat(lg2);

	    alert ("The distance between those two points on the map is: " + getDistanceFromLatLonInKm(lat1, log1, lat2, log2) + " Kilometers");
}

function change()
{
	    document.querySelector("#legend1").classList.toggle("active");
	    
	    document.querySelector("#legend2").classList.toggle("active");
	    document.querySelector("h1").classList.toggle("active");
	    document.querySelector("h2").classList.toggle("active");
	    document.querySelector("body").classList.toggle("active");
	    document.querySelector(".lat1").classList.toggle("active");
	    document.querySelector(".lat2").classList.toggle("active");
	    document.querySelector(".log1").classList.toggle("active");
	    document.querySelector(".log2").classList.toggle("active");
}function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
	  var R = 6371; // Radius of the earth in km
	  var dLat = deg2rad(lat2-lat1);  // deg2rad below
	  var dLon = deg2rad(lon2-lon1); 
	  var a = 
		    Math.sin(dLat/2) * Math.sin(dLat/2) +
		    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
		    Math.sin(dLon/2) * Math.sin(dLon/2)
	    ; 
	  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	  var d = R * c; // Distance in km
	  return d;  
}

function deg2rad(deg) {
	  return deg * (Math.PI/180)
}



function getdistance(){
	    const lt1 = document.querySelector(".lat1").value;
	const lg1 = document.querySelector(".log1").value;
	const lt2 = document.querySelector(".lat2").value;
	const lg2 = document.querySelector(".log2").value;

	const lat1 = parseFloat(lt1);
	const lat2 = parseFloat(lt2);
	const log1 = parseFloat(lg1);
	const log2 = parseFloat(lg2);

	    alert ("The distance between those two points on the map is: " + getDistanceFromLatLonInKm(lat1, log1, lat2, log2) + " Kilometers");
}

function change()
{
	    document.querySelector("#legend1").classList.toggle("active");
	    
	    document.querySelector("#legend2").classList.toggle("active");
	    document.querySelector("h1").classList.toggle("active");
	    document.querySelector("h2").classList.toggle("active");
	    document.querySelector("body").classList.toggle("active");
	    document.querySelector(".lat1").classList.toggle("active");
	    document.querySelector(".lat2").classList.toggle("active");
	    document.querySelector(".log1").classList.toggle("active");
	    document.querySelector(".log2").classList.toggle("active");
}
