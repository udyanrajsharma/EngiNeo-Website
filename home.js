
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



// nsection2

const part1 = document.querySelector('.part1');
// Select the nsec2text1 paragraph
const nsec2text1 = document.querySelector('.nsec2textr1');

// Add event listener for mouseover on part1
part1.addEventListener('mouseover', function() {
    // Show the nsec2text1 paragraph
    nsec2text1.style.display = 'block';
});

// Add event listener for mouseout on part1
part1.addEventListener('mouseout', function() {
    // Hide the nsec2text1 paragraph
    nsec2text1.style.display = 'none';
});




const part2 = document.querySelector('.part2');
// Select the nsec2text1 paragraph
const nsec2text2 = document.querySelector('.nsec2textr2');

// Add event listener for mouseover on part1
part2.addEventListener('mouseover', function() {
    // Show the nsec2text1 paragraph
    nsec2text2.style.display = 'block';
});

// Add event listener for mouseout on part1
part2.addEventListener('mouseout', function() {
    // Hide the nsec2text1 paragraph
    nsec2text2.style.display = 'none';
});



const part3 = document.querySelector('.part3');
// Select the nsec2text1 paragraph
const nsec2text3 = document.querySelector('.nsec2textr3');

// Add event listener for mouseover on part1
part3.addEventListener('mouseover', function() {
    // Show the nsec2text1 paragraph
    nsec2text3.style.display = 'block';
});

// Add event listener for mouseout on part1
part3.addEventListener('mouseout', function() {
    // Hide the nsec2text1 paragraph
    nsec2text3.style.display = 'none';
});




const part4 = document.querySelector('.part4');
// Select the nsec2text1 paragraph
const nsec2text4 = document.querySelector('.nsec2textr4');

// Add event listener for mouseover on part1
part4.addEventListener('mouseover', function() {
    // Show the nsec2text1 paragraph
    nsec2text4.style.display = 'block';
});

// Add event listener for mouseout on part1
part4.addEventListener('mouseout', function() {
    // Hide the nsec2text1 paragraph
    nsec2text4.style.display = 'none';
});