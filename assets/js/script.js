'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const clickedText = this.innerHTML.toLowerCase();
    console.log('Navigation clicked:', clickedText); // Debug log

    // Debug log all pages and their data-page attributes
    pages.forEach(page => {
      console.log('Available page:', page.dataset.page);
    });

    for (let i = 0; i < pages.length; i++) {
      const pageType = pages[i].dataset.page;
      console.log(`Comparing clicked "${clickedText}" with page "${pageType}"`);

      if (clickedText === pageType) {
        console.log('Match found! Activating page:', pageType);
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
        
        if (pageType === 'hackathons') {
          console.log('Initializing hackathons page');
          initializeHackathons();
        }
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Blog functionality
document.addEventListener('DOMContentLoaded', function() {
  const blogPostsList = document.getElementById('blogPostsList');
  const modal = document.getElementById('blogModal');

  // Render blog posts
  function renderBlogPosts() {
    blogPostsList.innerHTML = blogPosts.map(post => `
      <li class="blog-post-item" data-post-id="${post.id}">
        <a href="#">
          <figure class="blog-banner-box">
            <img src="${post.thumbnail}" alt="${post.title}" loading="lazy">
          </figure>
          <div class="blog-content">
            <div class="blog-meta">
              <p class="blog-category">${post.category}</p>
              <span class="dot"></span>
              <time datetime="${post.date}">${post.date}</time>
            </div>
            <h3 class="h3 blog-item-title">${post.title}</h3>
          </div>
        </a>
      </li>
    `).join('');

    // Add click handlers to blog posts
    document.querySelectorAll('.blog-post-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const postId = parseInt(item.dataset.postId);
        openBlogPost(postId);
      });
    });
  }

  // Open blog post modal
  function openBlogPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    const modalContent = modal.querySelector('.modal-content');
    modalContent.querySelector('.blog-category').textContent = post.category;
    modalContent.querySelector('time').textContent = post.date;
    modalContent.querySelector('h2').textContent = post.title;
    modalContent.querySelector('.modal-header-image').src = post.headerImage;
    modalContent.querySelector('.modal-body').innerHTML = post.content;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  // Close modal
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  // Event listeners
  modal.querySelector('.close-button').addEventListener('click', closeModal);
  window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Initialize blog posts
  renderBlogPosts();
});

// Hackathon functionality
document.addEventListener('DOMContentLoaded', function() {
  const hackathonList = document.getElementById('hackathonProjectsList');
  const modal = document.getElementById('hackathonModal');

  // Render hackathon projects
  function renderHackathonProjects() {
    hackathonList.innerHTML = hackathonProjects.map(project => `
      <li class="hackathon-project-item" data-project-id="${project.id}">
        <a href="#">
          <figure class="project-banner-box">
            <img src="${project.thumbnail}" alt="${project.title}" loading="lazy">
          </figure>
          <div class="project-content">
            <div class="project-meta">
              <p class="project-category">${project.event}</p>
              <span class="dot"></span>
              <time datetime="${project.date}">${project.date}</time>
            </div>
            <h3 class="h3 project-item-title">${project.title}</h3>
            <p class="project-achievement">${project.achievement}</p>
          </div>
        </a>
      </li>
    `).join('');

    // Add click handlers to hackathon projects
    document.querySelectorAll('.hackathon-project-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = parseInt(item.dataset.projectId);
        openHackathonProject(projectId);
      });
    });
  }

  // Open hackathon project modal
  function openHackathonProject(projectId) {
    const project = hackathonProjects.find(p => p.id === projectId);
    if (!project) return;

    const modalContent = modal.querySelector('.modal-content');
    modalContent.querySelector('.project-category').textContent = project.event;
    modalContent.querySelector('time').textContent = project.date;
    modalContent.querySelector('h2').textContent = project.title;
    modalContent.querySelector('.project-achievement').textContent = project.achievement;
    modalContent.querySelector('.modal-header-image').src = project.thumbnail;
    modalContent.querySelector('.project-description').textContent = project.description;
    
    // Render technologies
    modalContent.querySelector('.project-tech').innerHTML = project.technologies
      .map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    
    // Render team members
    modalContent.querySelector('.team-members').innerHTML = 
      `<p>Team:</p>` + project.teamMembers
        .map(member => `<span class="team-member">${member}</span>`).join('');
    
    // Update links
    modalContent.querySelector('.demo-link').href = project.demoLink;
    modalContent.querySelector('.github-link').href = project.githubLink;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  // Close modal
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  // Event listeners
  if (modal) {
    modal.querySelector('.close-button').addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Initialize hackathon projects if on hackathon page
  if (hackathonList) {
    renderHackathonProjects();
  }
});

// Initialize Hackathons
function initializeHackathons() {
  const projectsList = document.getElementById('hackathonProjectsList');
  
  projectsList.innerHTML = hackathonProjects.map(project => `
    <li class="hackathon-project-item">
      <div class="project-card">
        <img src="${project.thumbnail}" alt="${project.title}" class="project-image">
        <div class="project-info">
          <h3 class="project-title">${project.title}</h3>
          <div class="project-metadata">
            <p class="project-event">${project.event}</p>
            <p class="project-date">${project.date}</p>
          </div>
          <p class="project-achievement">${project.achievement}</p>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${project.technologies.map(tech => `
              <span class="tech-tag">${tech}</span>
            `).join('')}
          </div>
          <div class="team-members">
            <p>Team:</p>
            ${project.teamMembers.map(member => `
              <span class="team-member">${member}</span>
            `).join('')}
          </div>
          <div class="project-links">
            <a href="${project.demoLink}" class="demo-link">Live Demo</a>
            <a href="${project.githubLink}" class="github-link">GitHub</a>
          </div>
        </div>
      </div>
    </li>
  `).join('');
}

// Update the existing elementIsInView function to include hackathons
function elementIsInView(elem) {
  const activeElement = elem.getBoundingClientRect();
  return (
    activeElement.top <= 0 &&
    activeElement.bottom > document.documentElement.clientHeight
  );
}

// Update the existing switchTab function
document.addEventListener('click', function (e) {
  if (e.target.matches('[data-nav-link]')) {
    [...this.querySelectorAll('[data-nav-link]')].forEach(item => {
      if (item === e.target) {
        item.classList.add('active');
        updateContent(item);
      } else {
        item.classList.remove('active');
      }
    });
  }
});

// Update the existing updateContent function
function updateContent(button) {
  const pages = document.querySelectorAll('[data-page]');
  
  pages.forEach(page => {
    if (page.dataset.page === button.textContent.toLowerCase()) {
      page.classList.add('active');
      if (page.dataset.page === 'hackathons') {
        initializeHackathons();
      }
    } else {
      page.classList.remove('active');
    }
  });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  // Your existing initialization code
  initializeHackathons();
});