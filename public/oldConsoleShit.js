// if (typeof console != "undefined")
  //   if (typeof console.log != 'undefined')
  //     console.olog = console.log;
  //   else {
  //     console.olog = function () { };
  //   }

  // console.log = function (...message) {
  //   let ele = document.createElement("div");
  //   // add line that the message came from
  //   let line = new Error().stack.split("at ")[2].split(" ")[0];

  //   ele.innerHTML = message.join(" ") + `<span class='line'> ` + line + `</span>`;
  //   ele.classList.add("console-line");

  //   console.olog(message);

  //   // scroll to bottom
  //   document.querySelector('#console').append(ele);
  //   document.querySelector('#console').scrollTop = document.querySelector('#console').scrollHeight;
  // };
  // console.error = function (...message) {
  //   let ele = document.createElement("div");
  //   let line = new Error().stack.split("at ")[2].split(" ")[0];
  //   ele.innerHTML = message.join(" ") + "<span class='line'>" + line + "</span>";
  //   // add line that the message came   from
  //   ele.classList.add("console-line");
  //   ele.classList.add("error");

  //   console.olog(message);

  //   // scroll to bottom
  //   document.querySelector('#console').append(ele);
  //   document.querySelector('#console').scrollTop = document.querySelector('#console').scrollHeight;
  // };
  // console.warn = function (...message) {
  //   let ele = document.createElement("div");
  //   let line = new Error().stack.split("at ")[2].split(" ")[0];
  //   ele.innerHTML = message.join(" ") + "<span class='line'>" + line + "</span>";
  //   // add line that the message came   from
  //   ele.classList.add("console-line");
  //   ele.classList.add("warn");

  //   console.olog(message);

  //   // scroll to bottom
  //   document.querySelector('#console').append(ele);
  //   document.querySelector('#console').scrollTop = document.querySelector('#console').scrollHeight;
  // };
  // console.info = function (...message) {
  //   let ele = document.createElement("div");
  //   let line = new Error().stack.split("at ")[2].split(" ")[0];
  //   ele.innerHTML = message.join(" ") + "<span class='line'>" + line + "</span>";
  //   // add line that the message came   from
  //   ele.classList.add("console-line");
  //   ele.classList.add("info");

  //   console.olog(message);

  //   // scroll to bottom
  //   document.querySelector('#console').append(ele);
  //   document.querySelector('#console').scrollTop = document.querySelector('#console').scrollHeight;
  // };
  // console.debug = function (...message) {
  //   let ele = document.createElement("div");
  //   let line = new Error().stack.split("at ")[2].split(" ")[0];
  //   ele.innerHTML = message.join(" ") + "<span class='line'>" + line + "</span>";
  //   // add line that the message came   from
  //   ele.classList.add("console-line");
  //   ele.classList.add("debug");

  //   console.olog(message);

  //   // scroll to bottom
  //   document.querySelector('#console').append(ele);
  //   document.querySelector('#console').scrollTop = document.querySelector('#console').scrollHeight;
  // };