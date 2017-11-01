let d = document;

function addButtons () {
  let cal = d.getElementById('cal');
  let display = createEleWithAttr('div', {'id': 'display'});
  cal.appendChild(display);

  let buttonList = [7, 8, 9, '*', 4, 5, 6, '+', 0, '.', '='];
  let counter = 0;
  let row = createEleWithAttr('div', {'class': 'row'});
  let button;

  for (let i in buttonList) {
    button = createEleWithAttr('div', {'class': 'button', 'onclick': `pressButton()`});
    if (counter >= 4) {
      cal.appendChild(row);
      row = createEleWithAttr('div', {'class': 'row'});
      counter = 0;
    } 
    if (isNaN(buttonList[i])) {
      button.setAttribute('class', 'button operator');
    }
    if (buttonList[i] === 0) {
      button.style.cssText = 'width: 60px';
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
  let display = d.getElementById('display').innerHTML;
  console.log(e);
}

function eval () {

}