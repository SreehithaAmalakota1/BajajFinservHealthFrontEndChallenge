document.getElementById('submitButton').addEventListener('click', function() {
  fetchData();
});

function fetchData() {
  const nameInput = document.getElementById('nameInput').value.toLowerCase();
  const designationInput = document.getElementById('designationInput').value.toLowerCase();

  fetch('index.json')
    .then(response => response.json())
    .then(data => {
      let filteredDevelopers = data;

      if (nameInput) {
        filteredDevelopers = filteredDevelopers.filter(developer =>
          developer.name.toLowerCase().includes(nameInput)
        );
      }

      if (designationInput) {
        filteredDevelopers = filteredDevelopers.filter(developer =>
          developer.designation.toLowerCase().includes(designationInput) ||
          developer.skills.some(skill => skill.toLowerCase().includes(designationInput))
        );
      }

      renderDevelopers(filteredDevelopers);
      renderProjects(filteredDevelopers);
    })
    .catch(error => {
      console.error('Error fetching JSON data:', error);
    });
}

function renderDevelopers(developers) {
  const developersList = document.getElementById('developersList');
  developersList.innerHTML = '';

  if (developers.length === 0) {
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No results found.';
    developersList.appendChild(noResultsMessage);
  } else {
    developers.forEach(developer => {
      const developerCard = document.createElement('div');
      developerCard.classList.add('developer-card');

      const nameHeading = document.createElement('h2');
      nameHeading.textContent = developer.name;

      const designationParagraph = document.createElement('p');
      designationParagraph.textContent = 'Designation: ' + developer.designation;

      const skillsParagraph = document.createElement('p');
      skillsParagraph.textContent = 'Skills: ' + developer.skills.join(', ');

      developerCard.appendChild(nameHeading);
      developerCard.appendChild(designationParagraph);
      developerCard.appendChild(skillsParagraph);

      developersList.appendChild(developerCard);
    });
  }
}

function renderProjects(developers) {
  const projectsTableBody = document.getElementById('projectsTableBody');
  projectsTableBody.innerHTML = '';

  const projects = {};

  developers.forEach(developer => {
    developer.projects.forEach(project => {
      if (!projects[project.name]) {
        projects[project.name] = {
          teamSize: project.teamSize,
          completedTasks: 0
        };
      }

      if (project.completed) {
        projects[project.name].completedTasks++;
      }
    });
  });

  for (const projectName in projects) {
    const project = projects[projectName];

    const row = document.createElement('tr');
    const projectNameCell = document.createElement('td');
    const teamSizeCell = document.createElement('td');
    const completedTasksCell = document.createElement('td');

    projectNameCell.textContent = projectName;
    teamSizeCell.textContent = project.teamSize;
    completedTasksCell.textContent = project.completedTasks;

    row.appendChild(projectNameCell);
    row.appendChild(teamSizeCell);
    row.appendChild(completedTasksCell);

    projectsTableBody.appendChild(row);
  }
}
document.getElementById('submitButton').addEventListener('click', function() {
  fetchData();
});

function fetchData() {
  const nameInput = document.getElementById('nameInput').value.toLowerCase();
  const designationInput = document.getElementById('designationInput').value.toLowerCase();

  fetch('index.json')
    .then(response => response.json())
    .then(data => {
      let filteredDevelopers = data;

      if (nameInput) {
        filteredDevelopers = filteredDevelopers.filter(developer =>
          developer.name.toLowerCase().includes(nameInput)
        );
      }

      if (designationInput) {
        filteredDevelopers = filteredDevelopers.filter(developer =>
          developer.designation.toLowerCase().includes(designationInput) ||
          developer.skills.some(skill => skill.toLowerCase().includes(designationInput))
        );
      }

      renderDevelopers(filteredDevelopers);
      renderProjects(filteredDevelopers);
    })
    .catch(error => {
      console.error('Error fetching JSON data:', error);
    });
}

function renderDevelopers(developers) {
  const developersList = document.getElementById('developersList');
  developersList.innerHTML = '';

  if (developers.length === 0) {
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No results found.';
    developersList.appendChild(noResultsMessage);
  } else {
    developers.forEach(developer => {
      const developerCard = document.createElement('div');
      developerCard.classList.add('developer-card');

      const nameHeading = document.createElement('h2');
      nameHeading.textContent = developer.name;

      const designationParagraph = document.createElement('p');
      designationParagraph.textContent = 'Designation: ' + developer.designation;

      const skillsParagraph = document.createElement('p');
      skillsParagraph.textContent = 'Skills: ' + developer.skills.join(', ');

      developerCard.appendChild(nameHeading);
      developerCard.appendChild(designationParagraph);
      developerCard.appendChild(skillsParagraph);

      developersList.appendChild(developerCard);
    });
  }
}

function renderProjects(developers) {
  const projectsTableBody = document.getElementById('projectsTableBody');
  projectsTableBody.innerHTML = '';

  const projects = {};

  developers.forEach(developer => {
    developer.projects.forEach(project => {
      if (!projects[project.name]) {
        projects[project.name] = {
          teamSize: project.teamSize,
          completedTasks: 0
        };
      }

      if (project.completed) {
        projects[project.name].completedTasks++;
      }
    });
  });

  for (const projectName in projects) {
    const project = projects[projectName];

    const row = document.createElement('tr');
    const projectNameCell = document.createElement('td');
    const teamSizeCell = document.createElement('td');
    const completedTasksCell = document.createElement('td');

    projectNameCell.textContent = projectName;
    teamSizeCell.textContent = project.teamSize;
    completedTasksCell.textContent = project.completedTasks;

    row.appendChild(projectNameCell);
    row.appendChild(teamSizeCell);
    row.appendChild(completedTasksCell);

    projectsTableBody.appendChild(row);
  }
}
