// 1

const time = {
  hours: 14,
  minutes: 26,
};

function showCurrentTime({ hours, minutes }) {
  let timeString = `${hours} г. ${!minutes ? "" : `${minutes} хв.`}`;
  return timeString;
}

const currentTime = showCurrentTime(time);
console.log(currentTime);

// 2

function showDeadlineMsg(day) {
  let dayMsg = "";
  let deadlineMsg = "";

  if (day > 3) {
    deadlineMsg = `Date in the future`;
  } else {
    switch (day) {
      case 0:
        dayMsg = "today";
        break;
      case 1:
        dayMsg = "tomorrow";
        break;
      case 2:
        dayMsg = "overmorrow";
        break;
    }
    deadlineMsg = `Your deadline is ${dayMsg}`;
  }
  return deadlineMsg;
}

console.log(showDeadlineMsg(5));

// 3

const option = 2;
let deliveryMsg = "";

switch (option) {
  case 1:
    deliveryMsg =
      "You can receive the ordered goods tomorrow at 12:00 p.m. in our office";
    break;
  case 2:
    deliveryMsg =
      "A courier will deliver the order tomorrow from 9:00 a.m. to 18:00 p.m.";
    break;
  case 3:
    deliveryMsg = "A parcel will be delivered today";
    break;
  default:
    deliveryMsg = "Our manager will call you";
}

console.log(deliveryMsg);

// 4

const supportedBrowsers = ["Chrome", "Safari", "Edge", "Firefox", "Opera"];

const userBrowser = "Safari";

let result = false;

function checkBrowser(supportedBrowsers, userBrowser) {
  supportedBrowsers.map((browser) => {
    if (browser === userBrowser) {
      result = true;
    }
  });
  return result;
}

console.log(checkBrowser(supportedBrowsers, userBrowser));

console.log(
  result
    ? "Well, your browsers is supported"
    : `Sorry,${userBrowser} is not supported`
);

// 5

const sub = "vip";

let hasAccess = sub === "pro" || sub === "vip";

// let hasAccess = sub !== "free";

console.log("Does user get access?", hasAccess);

// 6

const isOnline = true;
const isFriend = true;
const isDnd = false; // Do Not Disturb

const canOpenChat = isOnline && isFriend && !isDnd;

console.log("Can be opened a chat?", canOpenChat);

// 7
