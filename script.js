

setTimeout(function() {
    document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
    }, 1000); // Add a delay before adding the class
        });
        
        document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('skills-link').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        
        
        const skillsSection = document.getElementById('skills');
        skillsSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the skills section
    });
});

const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false, 
    },
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable:true,
    }, 
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  function scrollToProjects() {
    // Get the position of the projects div
    const projectsDiv = document.getElementById('projects');
    const projectsDivPosition = projectsDiv.offsetTop;

    // Scroll to the projects div
    window.scrollTo({
      top: projectsDivPosition,
      behavior: 'smooth' // Optional: Smooth scrolling animation
    });
  }
