/**https://www.youtube.com/shorts/SAaIybUy4Wo */

// Throttling:
// Purpose:
// Throttling limits the execution rate of a function to a fixed interval, regardless of how often the event
// is triggered. It's like a drip, ensuring a function is called at most once within a specified period, notes a developer on Medium.

// Debouncing:
// Purpose:
// Debouncing ensures a function is called only after a period of inactivity. It's
// like waiting for the user to stop typing before performing an action (like a search).

// Throttling ⏱️ vs Debouncing ⏳: Boost Performance for your ...Debouncing and throttling are
// both techniques used to limit the frequency of function calls, primarily to optimize performance
// in event-driven scenarios like JavaScript, but they do so in different ways. Debouncing waits
// for a period of inactivity before executing a function, while throttling ensures a function
// executes at regular intervals.

//https://chatgpt.com/c/68238401-609c-800f-a3fb-cb4ccce4fde4

/** Example of debouncing */

// fetchApiData();

const debounce = (fun, pause) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fun(...args), pause);
  };
};

const handleSearch = debounce((query) => fetchApiData(query), 500);

<input onChange={(e) => handleSearch(e.target.value)}></input>;

/** Throttling */

const throttle = (fn, delay) => {
  let lastCall = 0;

  return (...arg) => {
    const now = new Date.getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...arg);
    }
  };
};

const handleThrottle = throttle((query) => console.log(window.scrollY), 500);

// const throttle = (fn, delay) => {
//   let lastCall = 0;
//   return (...arg) => {
//     const now = new Date.getTime();

//     if (now - lastCall >= delay) {
//       lastCall = now;
//       fun(...arg);
//     }
//   };
// };
