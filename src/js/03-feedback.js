import throttle from 'lodash.throttle';
const Refs ={
formRef: document.querySelector('.feedback-form'),
};

const STORAGE_KEY = 'feedback-form-state';
let formData={};
Refs.formRef.addEventListener('input',throttle(onContentInput,500));
Refs.formRef.addEventListener('submit', onFormSubmit);

populateForm();

function onContentInput (event){
    
    formData[event.target.name] = event.target.value;
//console.log(formData);
localStorage.setItem(STORAGE_KEY,JSON.stringify(formData));
}


function onFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY); 
};
function populateForm(){
 let formData = localStorage.getItem(STORAGE_KEY);
    if (formData) {
        formData = JSON.parse(formData);
        Object.entries(formData).forEach(
          ([name, value]) => (Refs.formRef.elements[name].value = value),
        );
      }
}


