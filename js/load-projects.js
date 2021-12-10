let bsContainer = document.querySelector('.container-fluid');
let portfolio   = document.querySelector('.projects-row');
const apiUrl    = "https://gist.githubusercontent.com/rjpiva/531678f361883c323160730450040ca4/raw/portfolio.json";

window.addEventListener("load", () => {
  let xhr = new XMLHttpRequest();
  
  xhr.open("GET", apiUrl);
  
  xhr.addEventListener("load", function () {
    let ajaxError = document.querySelector(".ajax-error");
    dismissSpinner();

    if (xhr.status == 200) {
      ajaxError.classList.add("d-none");
      let response = xhr.responseText;
      let projects = JSON.parse(response);
      
      projects.filter(project => project.active)        //filter active projects only
              .forEach(project =>                       //add them to portfolio (.projects-row)
                  addProjectToPortfolio(project));
    } else {
      ajaxError.classList.remove("d-none");
    }
  });

  xhr.send();
})

// dismissSpinner();
// projects.filter(project => project.active)                    //filter active projects only
//         .forEach(project => addProjectToPortfolio(project));  //add them to portfolio (.projects-row)

function dismissSpinner() { 
  document.querySelector(".spinner-container").classList.add("d-none");
}

function addProjectToPortfolio(project) {
  let card = document.createElement('div');
  card.classList.add("col");
  card.innerHTML = getCardTemplate(project);
  portfolio.appendChild(card);
}

function generateButtons (links) {
  let element = document.createElement('span');

  links.forEach(link => {
      element.innerHTML += getButtonTemplate(link);        
  });

  return element.innerHTML;
}

function generatePills(technologies) {
    let element = document.createElement('span');

    technologies.forEach(tech => {
        element.innerHTML += getPillTemplate(tech);        
    });

    return element.innerHTML;
}