// form validation 

let fname = document.getElementById('fname');
let sname = document.getElementById('sname');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let dob = document.getElementById('dob');
let children = document.getElementById('children');
let radio = document.getElementById('radio');

    
    
   /* function validate(){
        if(fname.value ===""){
            alert('First Name must be filled');
            return false;
        }else if(sname.value ===""){
            alert('Surname must be provided');
                return false;
            }else if(phone.value ===""){
                alert('Phone number must be provided');
                return false;

            }else if(email.value ===""){
                alert('email must be provided');
                return false;

            }else if(dob.value === ""){
                alert('Date of Birth must be provided');
                return false; 

            }else if(radio.value ===""){
                alert('You must select the Gender!');
                return false;

            }else if(children.value ===""){
                alert('No. of children must be provided');
                return false;

            }else{
                alert('Your message has been recorded')
            }

            }*/
        
            // form validation using logical operator
            function validate(){

            if(fname.value==='' || sname.value ==='' || phone.value===''  || email.value===''  || dob.value===''  || children.value==='' || radio.value===''){
                alert('Input must be filled out');
                return false;
            }else{
                alert('Message received.')
                return true;
            }
        }