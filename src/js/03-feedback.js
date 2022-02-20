import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');


const STORAGE_KEY = 'feedback-form-state';

let formData={};
formRef.addEventListener('input',throttle(onContentInput,500));
formRef.addEventListener('submit', onFormSubmit);

populateForm();

function onContentInput (event){
    formData = localStorage.getItem(STORAGE_KEY);
    formData = formData ? JSON.parse(formData) : {};
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
          ([name, value]) => (formRef.elements[name].value = value),
        );
      }
}


