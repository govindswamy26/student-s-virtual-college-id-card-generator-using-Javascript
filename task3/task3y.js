let buttonEl = document.getElementById("buttonEl");
let name1 = document.getElementById("name");
let college1 = document.getElementById("college");
let location1 = document.getElementById("location");
let picture=document.getElementById("picture");

let containerxy=document.getElementById("container-xy");
let image=document.getElementById("image");
let image_y=document.getElementById("image-xy");




let para_a=document.getElementById("para-a");
let para_b=document.getElementById("para-b");
let para_c=document.getElementById("para-c");
let para_d=document.getElementById("para-d");

name1.addEventListener("blur",function(event){
    if (name1.value===""){
        para_a.textContent="Please Enter Your Name";
        para_a.classList.add("text-danger");
    }
    else{
        para_a.textContent="";
    }
})


college1.addEventListener("blur",function(event){
    if (college1.value===""){
        para_b.textContent="Please Enter Your College Name";
        para_b.classList.add("text-danger");
    }
    else{
        para_b.textContent="";
    }
})


location1.addEventListener("blur",function(event){
    if (location1.value===""){
        para_c.textContent="Please Enter Your Location";
        para_c.classList.add("text-danger");
    }
    else{
        para_c.textContent="";
    }
})


picture.addEventListener("blur",function(event){
    if (picture.value===""){
        para_d.textContent="*Required**";
        para_d.classList.add("text-danger");
    }
    else{
        para_d.textContent="";
    }
})



let heading1 = document.getElementById("heading-x");
let data1 = document.getElementById("name-x");
let data2 = document.getElementById("college-x");
let data3 = document.getElementById("location-x");

buttonEl.addEventListener("click", function(event) {
    data1.textContent = "Name: " + name1.value;
    data2.textContent = "College Name: " + college1.value;
    data3.textContent = "Location: " + location1.value;
    heading1.classList.remove("d-none");
    containerxy.style.backgroundColor="#4047F0";
    image.classList.remove("d-none");
    image_y.classList.remove("d-none");
    image_y.classList.add("image-x");

})