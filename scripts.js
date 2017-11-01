let d = document;

function addButtons () {
  let cal = d.getElementById('cal');
  let display = createEleWithAttr('div', {'id': 'display'});
  display.innerHTML = '';
  cal.appendChild(display);

  let buttonList = [7, 8, 9, '*', 4, 5, 6, '+', 3, 2, 1, '/', 0, '.', 'C', '='];
  let counter = 0;
  let row = createEleWithAttr('div', {'class': 'row'});
  let button;

  for (let i in buttonList) {
    button = createEleWithAttr('div', {'class': 'button'});
    button.addEventListener('click', pressButton);
    if (counter >= 4) {
      cal.appendChild(row);
      row = createEleWithAttr('div', {'class': 'row'});
      counter = 0;
    } 
    if (isNaN(buttonList[i])) {
      button.setAttribute('class', 'button operator');
    }

    button.innerHTML = buttonList[i];
    row.appendChild(button);
    counter++;
  }
  cal.appendChild(row);
}

function createEleWithAttr(ele, attr) {
  let element = d.createElement(ele);
  for (let k in attr) {
    element.setAttribute(k, attr[k]);
  }
  return element;
}

function pressButton (e) {
  let display = d.getElementById('display');
  let press = e.target.innerHTML;
  let curr = display.innerHTML;
  if (isNaN(curr[curr.length - 1]) && (press ==='*' || press === '+' || press === '/')) {
    // Do nothing
  } else {
    if(press === 'C') {
      display.innerHTML = '';
  } else if (press === '=') {
    let request = new Request(`http://localhost:3000/cal/${curr}`, {
      'method': 'GET',
    })
    fetch(request).then(res => {
      return res.json();
    }).then(results => display.innerHTML = results).catch(err => console.log('Request failed', err));
  } else {
    curr += press;
    display.innerHTML = curr;
  }  
  }
}



