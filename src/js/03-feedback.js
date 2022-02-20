import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');


const STORAGE_KEY = 'feedback-form-state';

let formData={};
formRef.addEventListener('input',throttle(onContentInput,500));
formRef.addEventListener('submit', onFormSubmit);

populateForm();

function onContentInput (event){
    let localStorageValue = localStorage.getItem(STORAGE_KEY);
    if(!localStorageValue ){localStorage.setItem(STORAGE_KEY,JSON.stringify(formData));}
    else{formData = JSON.parse(localStorage.getItem(STORAGE_KEY));  
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY,JSON.stringify(formData))
//console.log(formData);
};
}



function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
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


