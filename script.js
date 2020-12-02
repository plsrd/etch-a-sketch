const container = document.getElementById('container');
const clear = document.getElementById('clear');
const pick = document.getElementById('pick');
const custom = document.getElementById('custom');
const shade = document.getElementById('shade');
const rgb = document.getElementById('rgb');
const black = document.getElementById('black');
const erase = document.getElementById('erase');
const slider = document.getElementById("gridSize");
let square = [];

function drawColumns(num) {
  let result = '';
  for(let i = 1; i <= num; i++) {
    result += '1fr ';
  }
  return container.style.gridTemplateColumns = result;
}

function drawGrid(num) {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  drawColumns(num);
  let total = (num * num);
  for (let i = 1; i <= total; i++){
    const div = document.createElement('div');
    div.style.height = `${(600/num)}px`;
    div.style.width = `${(600/num)}px`;
    div.style.backgroundColor = 'white';
    container.appendChild(div);
  } 
  square = Array.from(container.getElementsByTagName('div'));
  for(let i = 0; i < square.length; i++) {
    square[i].style.height = 
    square[i].addEventListener("mouseover", () => {
      square[i].style.backgroundColor = 'black';
    });
  }
}

function getColor() {

  const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'];
  
  //function for picking a random numer
  function getIndex(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //get random index and store in a variable
  let num = getIndex(0, colors.length-1);

  return colors[num];
}

function increaseShade(num) {
  if( !(square[num].classList.contains('shade1')) &&
      !(square[num].classList.contains('shade2')) &&
      !(square[num].classList.contains('shade3')) &&
      !(square[num].classList.contains('shade4')) &&
      !(square[num].classList.contains('shade5')) &&
      !(square[num].classList.contains('shade6')) &&
      !(square[num].classList.contains('shade7')) &&
      !(square[num].classList.contains('shade8'))) {
        square[num].classList.add('shade1');
        square[num].style.backgroundColor = '#e9ecef';
      } else if (square[num].classList.contains('shade1')) {
        square[num].classList.add('shade2');
        square[num].classList.remove('shade1');
        square[num].style.backgroundColor = '#dee2e6';
      } else if (square[num].classList.contains('shade2')) {
        square[num].classList.add('shade3');
        square[num].classList.remove('shade2');
        square[num].style.backgroundColor = '#ced4da';
      } else if (square[num].classList.contains('shade3')) {
        square[num].classList.add('shade4');
        square[num].classList.remove('shade3');
        square[num].style.backgroundColor = '#adb5bd';
      } else if (square[num].classList.contains('shade4')) {
        square[num].classList.add('shade5');
        square[num].classList.remove('shade4');
        square[num].style.backgroundColor = '#6C757D';
      } else if (square[num].classList.contains('shade5')) {
        square[num].classList.add('shade6');
        square[num].classList.remove('shade5');
        square[num].style.backgroundColor = '#495057';
      } else if (square[num].classList.contains('shade6')) {
        square[num].classList.add('shade7');
        square[num].classList.remove('shade6');
        square[num].style.backgroundColor = '#343A40';
      } else if (square[num].classList.contains('shade7')) {
        square[num].classList.add('shade8');
        square[num].classList.remove('shade7');
        square[num].style.backgroundColor = '#212529';
      }
}


drawGrid(16);

shade.addEventListener("click", () => {
  for(let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseover", () => {
      square[i].style.backgroundColor = `${increaseShade(i)}`;
    });
  }
});

pick.addEventListener("click", () => {
  for(let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseover", () => {
      square[i].style.backgroundColor = `${custom.value}`;
    });
  }
});

rgb.addEventListener("click", () => {
  for(let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseover", () => {
        square[i].style.backgroundColor = `${getColor()}`;
    });
  }
});

black.addEventListener("click", () => {
  for(let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseover", () => {
      square[i].style.backgroundColor = 'black';
    });
  }
});

erase.addEventListener('click', () => {
  for(let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseover", () => {
      square[i].style.backgroundColor = 'white';
    });
  }
});

clear.addEventListener("click", () => {
  for(let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = 'white';
  }
});

slider.oninput = function() {

  drawGrid(this.value);
}
