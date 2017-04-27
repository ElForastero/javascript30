/**
 * Hand class
 */
class Hand {
  constructor(className) {
    this._element = this._getElement(className);
  }

  _getElement(className) {
    return document.getElementsByClassName(className)[0];
  }

  rotate(degree) {
    this._element.style.transform = `rotate(${degree}deg)`;
  }
}

/**
 * MAIN
 */

let hoursHand = new Hand('hand--hours'),
  minutesHand = new Hand('hand--minutes'),
  secondsHand = new Hand('hand--seconds');

// By default hands stay at 90 degrees;
const INITIAL_DEGREES = 90;

const renderClock = (date) => {
  let hours = date.getHours();
  if(hours > 11) {
    hours -= 12;
  }

  let additionalHoursOffset = 360 / 12 / 60 * date.getMinutes();

  const hoursHandRotate = 360 / 12 * hours + additionalHoursOffset + INITIAL_DEGREES;
  const minutesHandRotate = 360 / 60 * date.getMinutes() + INITIAL_DEGREES;
  const secondsHandRotate = 360 / 60 * date.getSeconds() + INITIAL_DEGREES;

  hoursHand.rotate(hoursHandRotate);
  minutesHand.rotate(minutesHandRotate);
  secondsHand.rotate(secondsHandRotate);
};

renderClock(new Date());
setInterval(() => renderClock(new Date()), 1000);
