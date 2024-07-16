const projectArray = [
  {
    name: "Coolest Random Password Generator",
    link: "randomPassword/main.html",
  },
  { name: "quizApp", link: "quizApp/main.html" },
  { name: "30in30toDoList", link: "30in30toDoList/main.html" },
  { name: "ageCalcApp", link: "ageCalcApp/main.html" },
  { name: "qrCodeGenerator", link: "qrCodeGenerator/main.html" },
  { name: "quoteGenerator", link: "quoteGenerator/main.html" },
  { name: "toastNotifications", link: "toastNotficiations/main.html" },
  { name: "weatherApp", link: "weatherApp/main.html" },
  { name: "notesApp", link: "notesApp/main.html" },
  { name: "toDoList", link: "toDoList/main.html" },
];

projectArray.forEach(function (project) {
  const button = document.createElement("button"); // <button></button>
  button.innerHTML = `<a href="${project.link}">${project.name}</a> `;
  const projectContainer = document.getElementById("projects");
  console.log(projectContainer);
  projectContainer.appendChild(button);
  projectContainer.appendChild(document.createElement("br"));
});
