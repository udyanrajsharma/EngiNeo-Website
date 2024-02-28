// const boxes = document.querySelectorAll('.newbox');

// boxes.forEach(box => {
//   box.addEventListener('mouseover', () => {
//     // Set the width of the hovered box to 100% and hide the other boxes
//     boxes.forEach(otherBox => {
//       if (otherBox !== box) {
//         otherBox.style.display = 'none';
//       }
//     });
//     box.style.width = '80%';
//     box.style.height= '80%';
//   });

//   box.addEventListener('mouseout', () => {
//     // Reset the width of all boxes and show them again
//     boxes.forEach(otherBox => {
//       otherBox.style.display = 'block';
//       otherBox.style.width = '';
//     });
//   });
// });
// ------------------------------------------------------------------------------------------------------
const boxes = document.querySelectorAll('.newbox');

boxes.forEach(box => {
  box.addEventListener('mouseover', () => {
    // Set the width and height of the hovered box to 100% of the viewport
    box.style.width = '80%';
    box.style.height = '90vh';

    // Hide the other boxes
    boxes.forEach(otherBox => {
      if (otherBox !== box) {
        otherBox.style.display = 'none';
      }
    });
  });

  box.addEventListener('mouseout', () => {
    // Reset the width and height of all boxes
    boxes.forEach(otherBox => {
      otherBox.style.display = 'block';
      otherBox.style.width = '';
      otherBox.style.height = '';
    });
  });
});
// -------------------------------------------------------------------------------------------------------
// const boxe = document.querySelectorAll('.box');

// boxe.forEach(box => {
//   box.addEventListener('mouseover', () => {
//     // Set the width and height of the hovered box to 100% of the viewport
//     box.style.width = '100%';
//     box.style.height = '100vh';

//     // Hide the other boxes
//     boxe.forEach(otherBox => {
//       if (otherBox !== box) {
//         otherBox.style.display = 'none';
//       }
//     });
//   });

//   box.addEventListener('mouseout', () => {
//     // Reset the width and height of all boxes
//     boxe.forEach(otherBox => {
//       otherBox.style.display = 'block';
//       otherBox.style.width = '';
//       otherBox.style.height = '';
//     });
//   });
// });
