
// ------------------------------------------------------------------------------------------------------
// const boxes = document.querySelectorAll('.newbox');

// boxes.forEach(box => {
//   box.addEventListener('mouseover', () => {
//     // Set the width and height of the hovered box to 100% of the viewport
//     box.style.width = '80%';
//     box.style.height = '80vh';

//     // Hide the other boxes
//     boxes.forEach(otherBox => {
//       if (otherBox !== box) {
//         otherBox.style.display = 'none';
//       }
//     });
//   });

//   box.addEventListener('mouseout', () => {
//     // Reset the width and height of all boxes
//     boxes.forEach(otherBox => {
//       otherBox.style.display = 'block';
//       otherBox.style.width = '';
//       otherBox.style.height = '';
//     });
//   });
// });
// -------------------------------------------------------------------------------------------------------
 
const boxes = document.querySelectorAll('.newbox');

boxes.forEach(box => {
  box.addEventListener('mouseover', () => {
    box.style.width = '50%'; // Increase width on hover
    boxes.forEach(otherBox => {
      if (otherBox !== box) {
        otherBox.style.width = '15%'; // Reduce width of other boxes on hover
      }
    });
  });

  box.addEventListener('mouseout', () => {
    boxes.forEach(otherBox => {
      otherBox.style.width = ''; // Reset width of all boxes on mouseout
    });
  });
});


// ------------------------------------------------------------------------------------------------------

// Fade in Animation

document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.fade-in');

  function checkInView() {
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if the element is in view
      if (elementTop < windowHeight) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkInView);
  window.addEventListener('resize', checkInView);

  // Check initially
  checkInView();
});
