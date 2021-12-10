function registration()
{

    var name= document.getElementById("t1").value;
    var gender=document.getElementById("female").value;
    var gender=document.getElementById("male").value;
    var email= document.getElementById("t2").value;
    var uname= document.getElementById("t3").value;
    var pwd= document.getElementById("t4").value;           
    var cpwd= document.getElementById("t5").value;
    var checkbox= document.getElementById("terms").value;
    
    //email id expression code
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(name.value.length == 0)
    {
        alert('Please enter your name');
    }
    else if((document.getElementById("female").checked==false && document.getElementById("male").checked==false))
    {
        alert("please select a gender");
    }
    else if(!letters.test(name))
    {
        alert('Name field required only alphabet characters');
    }
    else if(email=='')
    {
        alert('Please enter your user email id');
    }
    else if (!filter.test(email))
    {
        alert('Invalid email');
    }
    else if(uname=='')
    {
        alert('Please enter the user name.');
    }
    else if(!letters.test(uname))
    {
        alert('User name field required only alphabet characters');
    }
    else if(pwd=='')
    {
        alert('Please enter Password');
    }
    else if(cpwd=='')
    {
        alert('Enter Confirm Password');
    }

    else if(!pwd_expression.test(pwd))
    {
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if(pwd != cpwd)
    {
        alert ('Password not Matched');
    }
    else if(document.getElementById("t5").value.length < 6)
    {
        alert ('Password minimum length is 6');
    }
    else if(document.getElementById("t5").value.length > 12)
    {
        alert ('Password max length is 12');
    }
    else if(document.getElementById("terms").checked== false)
    {
        alert("Agree to our terms and conditions");
    }
    else
    {                                           
           alert('Thank You for Registration & You are Redirecting to Website');
           // Redirecting to other page or webste code. 
           window.location = "https://tutorial.eyehunts.com//"; 
    }
}

function highlight() {
    var el = document.getElementById('faq1');
    var original = el.style.color;
    el.style.color='#f00';
    window.setTimeout(function() { el.style.color = original; }, 5);
}
