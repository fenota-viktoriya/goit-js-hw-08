import throttle from 'lodash.throttle';
const Refs ={
formRef: document.querySelector('.feedback-form'),
};

const STOREGE_KEY = 'feedback-form-state';
let formData={};
Refs.formRef.addEventListener('input',throttle(onContentInput,500));
Refs.formRef.addEventListener('submit', onFormSubmit);

populateForm();

function onContentInput (event){
    formData[event.target.name] = event.target.value;
//console.log(formData);
localStorage.setItem(STOREGE_KEY,JSON.stringify(formData));
}


function onFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    event.target.reset();
    localStorage.removeItem(STOREGE_KEY); 
};
function populateForm(){
formData = localStorage.getItem(STOREGE_KEY)
    if (formData) {
        formData = JSON.parse(formData);
        Object.entries(formData).forEach(
          ([name, value]) => (Refs.formRef.elements[name].value = value),
        );
      }
}


