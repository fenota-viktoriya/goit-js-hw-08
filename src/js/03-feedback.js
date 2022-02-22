import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');


const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('input',throttle(onContentInput,500));
formRef.addEventListener('submit', onFormSubmit);

populateForm();


function onContentInput (event){
  let formData = localStorage.getItem(STORAGE_KEY);
  if(!formData ){
  formData={};
  formData[event.target.name] = event.target.value;
}
  else{
  formData = JSON.parse(formData);  
  formData[event.target.name] = event.target.value;}
  localStorage.setItem(STORAGE_KEY,JSON.stringify(formData))

};





function onFormSubmit(event) {
    event.preventDefault();     
 validate_form();
   
        event.target.reset();
  }


function populateForm(){
 let formData = localStorage.getItem(STORAGE_KEY);
    if (formData) {
        formData = JSON.parse(formData);
        Object.entries(formData).forEach(
          ([name, value]) => (formRef.elements[name].value = value),
        );
      }
}



function validate_form ( )
{
	 //let valid = true;

        if ( formRef.elements.email.value == "" || formRef.elements.message.value == "" )
        {
                alert ( "Пожалуйста заполните поля формы" );
               // valid = false; return;
        }
         else{const valueData =JSON.parse(localStorage.getItem(STORAGE_KEY));
        
       console.log(valueData);

      localStorage.removeItem(STORAGE_KEY);}  
}

