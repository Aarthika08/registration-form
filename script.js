var form =document.querySelector("#userForm");
const allusersData=[];
const resetForm=function()
{
    form.classList.remove('was-validated')
    const name=document.getElementById('name');
    name.value="";
    const email=document.getElementById('email');
    email.value="";
    const website=document.getElementById('website');
    website.value="";
    const image=document.getElementById('image');
    image.value="";
    const genderE1=document.querySelectorAll('input[name="gender"]');
    for(const rb of genderE1)
    {
        rb.checked=false;
    }
    const skillE1=document.querySelectorAll('input[name="skill"]');
    for(const rb of skillE1)
    {
        rb.checked=false;
    }
};
const getData=function()
{
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const website=document.getElementById('website').value;
    const image=document.getElementById('image').value;
    let gender;
    let skills=[];
    const genderE1=document.querySelectorAll('input[name="gender"]');
    for(const rb of genderE1)
    {
       if(rb.checked)
       {
        gender=rb.value;break;
       }
    };
    const skillE1=document.querySelectorAll('input[name="skill"]');
    for(const rb of skillE1)
    { if(rb.checked)
        {
         skills=push(rb.value);
        }
    }
    return{name,email,website,image,gender,skills};
};

form.addEventListener("submit",function(event)
{
    event.preventDefault();
    if(form.checkValidity())
    {
        const data=getData();
        allusersData.push(data);
        printResult(data);
        resetForm();
    }
    else{
        form.classList.add('was-validated');
            };
            removeSpan();
});

function removeSpan()
{
    var span=document.getElementById("span");
    if(span)
    {
        span.remove();
    }
};

function printResult(data){
    const resultE1=document.getElementById('enroll-students');
    let sectionHeading=null;
    if(allusersData.length==1){
        sectionHeading=document.createElement('div');
        const description=document.createElement('p');
        description.innerHTML="Description";
        description.className="description";
        const image=document.createElement('p');
        image.innerHTML="Image"
        image.className="Image";
        sectionHeading.className="sectionHeading";
        sectionHeading.append(description,image);
    };
    const wrapper = document.createElement('div');
    wrapper.className="wrapper";
    wrapper.addEventListener('click',function(e){
        console.log(e.target.className);
        if(e.target.className.include('userDeleteBtn'))
        {
            console.log('aaafasdfasdf');
            e.currentTarget.remove();
        }
    });
    const deleteBtn=document.createElement('button');
    deleteBtn.innerHTML="+";
    deleteBtn.className="userDeleteBtn";
    const textInfoContainer=document.createElement('div');
    textInfoContainer.className="textInfoContainer";
    const imageContainer=document.createElement('div');
    imageContainer.className="imageContainer";
    const imageHyperlink=Document.createElement('a');
    imageHyperlink.href=data.image;
    imageHyperlink.target="_blank";

    let name=document.createElement('p');
    name.className="infoText userName";
    name.innerHTML=data.name;

    let gender=document.createElement('p');
    gender.className="infoText gender";
    gender.innerHTML=data.gender;
    
    let email=document.createElement('p');
    email.className="infoText email";
    email.innerHTML=data.email;

    let website=document.createElement('a');
    website.className="infoText website";
    website.innerHTML=data.website;
    website.href=data.website;
    website.target="_blank";

    let skills=document.createElement('p');
    skills.className="infoText skills";
    skills.innerHTML=data.skills.join(', ');

    let userImage=document.createElement('p');
    userImage.className="userImage";
    userImage.src=data.image;

    textInfoContainer.append(name,gender,email,website,skills);
    imageHyperlink.appendChild(userImage);
    imageContainer.appendChild(imageHyperlink);
    wrapper.append(textInfoContainer,imageContainer,deleteBtn);
    if(sectionHeading==null)
    {
        resultE1.append(wrapper);
    }
    else
    {
        resultE1.append(sectionHeading,wrapper)
    };  
};