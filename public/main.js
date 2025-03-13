/* eslint-disable no-restricted-globals */
let oldLog = console.log;

let names = ["3024-day.css", "3024-night.css", "abcdef.css", "ambiance-mobile.css", "ambiance.css", "ayu-dark.css", "ayu-mirage.css", "base16-dark.css", "base16-light.css", "bespin.css", "blackboard.css", "cobalt.css", "colorforth.css", "darcula.css", "dracula.css", "duotone-dark.css", "duotone-light.css", "eclipse.css", "elegant.css", "erlang-dark.css", "gruvbox-dark.css", "hopscotch.css", "icecoder.css", "idea.css", "isotope.css", "lesser-dark.css", "liquibyte.css", "lucario.css", "material-darker.css", "material-ocean.css", "material-palenight.css", "material.css", "mbo.css", "mdn-like.css", "midnight.css", "monokai.css", "moxer.css", "neat.css", "neo.css", "night.css", "nord.css", "oceanic-next.css", "panda-syntax.css", "paraiso-dark.css", "paraiso-light.css", "pastel-on-dark.css", "railscasts.css", "rubyblue.css", "seti.css", "shadowfox.css", "solarized.css", "ssms.css", "the-matrix.css", "tomorrow-night-bright.css", "tomorrow-night-eighties.css", "ttcn.css", "twilight.css", "vibrant-ink.css", "xq-dark.css", "xq-light.css"
];
let path = "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/";
for (let i = 0; i < names.length; i++) {
  let ele = document.createElement("link");
  ele.rel = "stylesheet";
  ele.type = "text/css";
  ele.href = path + names[i];
  // add to top
  document.head.insertBefore(ele, document.head.firstChild);
}

let languageNames = ["apl", "asciiarmor", "asn.1", "asterisk", "brainfuck", "clike", "clojure", "cmake", "cobol",
  "coffeescript", "commonlisp", "crystal", "css", "cypher", "d", "dart", "diff", "django", "dockerfile", "dtd", "dylan",
  "ebnf", "ecl", "eiffel", "elm", "erlang", "factor", "fcl", "forth", "fortran", "gas", "gfm", "gherkin", "go", "groovy",
  "haml", "handlebars", "haskell", "haskell-literate", "haxe", "htmlembedded", "htmlmixed", "http", "idl", "javascript",
  "jinja2", "jsx", "julia", "livescript", "lua", "markdown", "mathematica", "mbox", "mirc", "mllike", "modelica",
  "mscgen", "mumps", "nginx", "nsis", "ntriples", "octave", "oz", "pascal", "pegjs", "perl", "php", "pig", "powershell",
  "properties", "protobuf", "pug", "puppet", "python", "q", "r", "rpm", "rst", "ruby", "sas", "sass", "scheme",
  "shell", "sieve", "slim", "smalltalk", "smarty", "solr", "soy", "sparql", "spreadsheet", "sql", "stex", "stylus",
  "swift", "tcl", "textile", "tiddlywiki", "tiki", "toml", "tornado", "troff", "ttcn", "ttcn-cfg", "turtle", "twig", "vb",
  "vbscript", "velocity", "verilog", "vhdl", "vue", "wast", "webidl", "xml", "xquery", "yacas", "yaml",
  "yaml-frontmatter", "z80"];

let languagePath = "./codemirror5/mode/";
for (let i = 0; i < languageNames.length; i++) {
  let ele = document.createElement("script");
  ele.src = languagePath + languageNames[i] + "/" + languageNames[i] + ".js";
  // add to top
  document.head.insertBefore(ele, document.head.firstChild);
}



/* eslint-disable no-undef */
function makeMarker(msg) {
  const marker = document.createElement('div');
  marker.classList.add('error-marker');
  marker.innerHTML = '&nbsp;';

  const error = document.createElement('div');
  error.innerHTML = msg;
  error.classList.add('error-message');

  marker.appendChild(error);
  return marker;
}

function logToConsole(...args) {
  // Combine all the arguments into a single message
  const message = args.map((arg) => {
    return typeof arg === 'object' ? JSON.stringify(arg) : arg;
  }).join(' ');

  // Create a new log element
  const logElem = document.createElement('p');
  logElem.classList.add('log');
  logElem.textContent = message;

  // Add the log element to the console element
  const consoleElem = document.querySelector('#console');
  consoleElem.appendChild(logElem);

  // scroll
  consoleElem.scrollTop = consoleElem.scrollHeight;


  // Log the message to the console using the original console.log()
  console.log(...args);
}
function toCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

window.codeMirror = null;
window.options = {};
window.onload = function () {
  
  window.language = "javascript";
  JSHINT.options = {
    esversion: '6',
  };

  if (!console) {
    console = {};
  }
  var old = console;
  var logger = document.getElementById('console');

  const originalLog = console.log;
  const originalError = console.error;


  console.log = function (...args) {
    let message = args.map(arg => String(arg));
    // JSON.strinify each arg
    message = args.map((arg) => {
      return typeof arg === 'object' ? JSON.stringify(arg) : arg;
    }).join(' ');

    originalLog(...args);

    logger.innerHTML += `<div class="console-line">${message
      } </div>`;
    logger.scrollTop = logger.scrollHeight;
  };
  console.error = function (...args) {
    let message = args.map(arg => String(arg));
    // JSON.strinify each arg
    message = args.map((arg) => {
      return typeof arg === 'object' ? JSON.stringify(arg) : arg;
    }).join(' ');

    originalError(...args);

    logger.innerHTML += `<div class="console-line error">${message
      } </div>`;
    logger.scrollTop = logger.scrollHeight;
  };

  codeMirror = CodeMirror(document.querySelector("#code-mirror"), {
    lineNumbers: !0, tabSize: 2, value: 'function hello() {\n  let hello = "Hello"; \n  let world = "World"; \n  console.log(hello, world); \n}\nhello();', mode: { name: "javascript", globalVars: !0 }, theme: "monokai", gutters: ["error"], animatedScroll: !1, behavioursEnabled: !0, cursorStyle: "ace", displayIndentGuides: !0, dragDelay: 150, enableMultiselect: !0, fadeFoldWidgets: !1, firstLineNumber: 1, focusTimout: 0, foldStyle: void 0, fontFamily: void 0, fontSize: 12, hScrollBarAlwaysVisible: !1, highlightActiveLine: !0, highlightGutterLine: !0, highlightSelectedWord: !0, maxLines: void 0, mergeUndoDeltas: !0, minLines: void 0, newLineMode: "auto", overwrite: !1, printMargin: 80, printMarginColumn: 80, readOnly: !1, scrollPastEnd: 0, scrollSpeed: 2, selectionStyle: "line", showFoldWidgets: !0, showGutter: !0, showInvisibles: !1, showPrintMargin: !0, useSoftTabs: !0, useWorker: !0, wrap: "on", wrapBehavioursEnabled: !0, esversion: 6, autoCloseBrackets: true, indentWithTabs: true,
  });

  codeMirror.setOption("extraKeys", {
    Tab: function (cm) {
      var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
      cm.replaceSelection(spaces);
    },
    "Ctrl-Space": "autocomplete",
    // add space and than run autocomplete
    "Space": function (cm) {
      cm.replaceSelection(" ");
      CodeMirror.commands.autocomplete(cm, null, { completeSingle: false });
    },
    ".": function (cm) {
      cm.replaceSelection(".");
      CodeMirror.commands.autocomplete(cm, null, { completeSingle: false });
    },
    "Shift-Enter": function (cm) {
      // got to front of line
      cm.execCommand("goLineStart");
      cm.replaceSelection("\n");
      cm.execCommand("goLineUp");
      cm.execCommand("indentAuto");
      // indent
      // if cursor is at the first char of the line
      var cursor = cm.getCursor();
      var line = cm.getLine(cursor.line);
    },
    // if in between two curley braces and user cliks enter/return, add a new line and add the same indentation
    "Enter": function (cm) {
      var cursor = cm.getCursor();
      var line = cm.getLine(cursor.line);
      var spaces = line.match(/^\s*/)[0];
      cm.replaceSelection("\n" + spaces);
      // if cursor is in between two curly braces, add a new line and add the same indentation
      if (cursor.ch > 0 && line[cursor.ch - 1] === '{' && line[cursor.ch] === '}') {
        cm.replaceSelection("\n" + spaces);
        // go 1 line up
        cm.execCommand("goLineUp");
        // indent
        cm.execCommand("indentAuto");

      } else if (cursor.ch > 0 && line[cursor.ch - 1] === '(' && line[cursor.ch] === ')') {
        cm.replaceSelection("\n" + spaces);
        // go 1 line up
        cm.execCommand("goLineUp");
        // indent
        cm.execCommand("indentAuto");

      } else if (cursor.ch > 0 && line[cursor.ch - 1] === '[' && line[cursor.ch] === ']') {
        cm.replaceSelection("\n" + spaces);
        // go 1 line up
        cm.execCommand("goLineUp");
        // indent
        cm.execCommand("indentAuto");

      } else if (line[cursor.ch - 1] === '{' || line[cursor.ch - 1] === '(' || line[cursor.ch - 1] === '[') {
        cm.replaceSelection("\n" + spaces + "  ");
        // go 1 line up
        cm.execCommand("goLineUp");
        // indent
        cm.execCommand("indentAuto");
      }

    },
    "Shift-[": function (cm) {
      if (window.codeMirror.getOption("autoCloseBrackets")) {
        // put curly brace on next character
        cm.replaceSelection("{}");
        // go 1 character back
        cm.execCommand("goCharLeft");
      } else {
        cm.replaceSelection("{");
      }
    },
    "Shift-9": function (cm) {
      if (window.codeMirror.getOption("autoCloseBrackets")) {
        // put curly brace on next character
        cm.replaceSelection("()");
        // go 1 character back
        cm.execCommand("goCharLeft");
      } else {
        cm.replaceSelection("(");
      }
    },
    "[": function (cm) {
      if (window.codeMirror.getOption("autoCloseBrackets")) {
        // put curly brace on next character
        cm.replaceSelection("[]");
        // go 1 character back
        cm.execCommand("goCharLeft");
      } else {
        cm.replaceSelection("[");
      }
    },
    "Shift-0": function (cm) {
      //if next char is a ')', go to next char
      var cursor = cm.getCursor();
      var line = cm.getLine(cursor.line);
      if (line[cursor.ch] === ')') {
        cm.execCommand("goCharRight");
      } else {
        cm.replaceSelection(")");
      }
    },
    "Shift-]": function (cm) {
      if (window.codeMirror.getOption("autoCloseBrackets")) {
        // if next char is a '}', go to next char
        var cursor = cm.getCursor();
        var line = cm.getLine(cursor.line);
        if (line[cursor.ch] === '}') {
          cm.execCommand("goCharRight");
        } else {
          cm.replaceSelection("}");
        }
      }
    },
    "]": function (cm) {
      if (window.codeMirror.getOption("autoCloseBrackets")) {
        // if next char is a ']', go to next char
        var cursor = cm.getCursor();
        var line = cm.getLine(cursor.line);
        if (line[cursor.ch] === ']') {
          cm.execCommand("goCharRight");
        } else {
          cm.replaceSelection("]");
        }
      }
    },
    "Shift-'": function (cm) {
      var cursor = cm.getCursor();
      var line = cm.getLine(cursor.line);
      if (line[cursor.ch] === '"') {
        cm.execCommand("goCharRight");
      } else if (window.codeMirror.getOption("autoCloseBrackets")) {
          // put curly brace on next character
          cm.replaceSelection('""');
          // go 1 character back
          cm.execCommand("goCharLeft");
        } else {
          cm.replaceSelection('"');
        }

    },
    "Backspace": function (cm) {
      var cursor = cm.getCursor();
      var line = cm.getLine(cursor.line);
      if (window.codeMirror.getOption("autoCloseBrackets")) {
        if (line[cursor.ch - 1] === "(" && line[cursor.ch] === ")") {
          // remove both caracters
          cm.execCommand("delCharBefore");
          cm.execCommand("delCharAfter");
        } else if (line[cursor.ch - 1] === "[" && line[cursor.ch] === "]") {
          // remove both caracters
          cm.execCommand("delCharBefore");
          cm.execCommand("delCharAfter");
        } else if (line[cursor.ch - 1] === "{" && line[cursor.ch] === "}") {
          // remove both caracters
          cm.execCommand("delCharBefore");
          cm.execCommand("delCharAfter");
        } else {
          cm.execCommand("delCharBefore");
        }
      }
    },
  });

  codeMirror.on('change', (cm, change) => {
    JSHINT(cm.getValue(), JSHINT.options);
    const errors = Array.isArray(JSHINT.errors) ? JSHINT.errors : [];

    codeMirror.clearGutter('error');
    for (const error of errors) {
      codeMirror.setGutterMarker(error.line - 1, 'error', makeMarker(error.reason));
    }
  });

  window.options = JSON.parse(localStorage.getItem('options'));
  // load settings from local storage
  Object.keys(window.options).forEach((key) => {
    if (key === 'Font Size') {
      let r = document.querySelector(":root");
      r.style.setProperty("--fontSize", window.options[key] + "px");
    }
    // settings[key].value = window.options[key];
    if(key === 'Tab Size') {
      window.codeMirror.setOption('indentUnit', window.options[key]);
      window.codeMirror.setOption('tabSize', window.options[key]);
    } else {
      window.codeMirror.setOption(toCamelCase(key), window.options[key]);
    }
  });

  // on load
  JSHINT(codeMirror.getValue(), JSHINT.options);
  const errors = Array.isArray(JSHINT.errors) ? JSHINT.errors : [];
  codeMirror.clearGutter('error');
  for (const error of errors) {
    codeMirror.setGutterMarker(error.line - 1, 'error', makeMarker(error.reason));
  }

  document.querySelector("#Run").addEventListener("click", () => {
    const code = codeMirror.getValue();
    if (window.language === "undefined") {
      console.log("Language not set, defaulting to javascript");
      window.language = "javascript";
      console.log(window.language);
    }

    let result;
    switch (window.language) {
      case "undefined":
        console.error("Language not set");
        break;

      case "javascript":
        result = JSParse(code);
        if (result.type === "error") console.error(result.msg);
        break;
      case "python":
        result = PythonParse(code);
        if (result.type === "error") console.error(result.msg);
        break;
      default:
        console.error("Language not supported" + " " + window.language + " " + typeof window.language);
        break;
    }

    // check if banner shows up due to pyscript
    // check if: alert-banner py-warning exists
    setTimeout(() => {
      const banner = document.querySelector(".alert-banner.py-warning");
      if (banner) {
        banner.remove();
      }
    }, 100);
  });
  document.querySelector("#Open").addEventListener("click", () => {
    // Open File Dialog
    let text = "";

    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".js,.py";
    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        text = e.target.result;
        codeMirror.setValue(text);
      };
      reader.readAsText(file);
    };
    input.click();

    // Set CodeMirror Value
    window.codeMirror.setValue(text);

    // remove input
    input.remove();

  });

  document.querySelector("#Save").addEventListener("click", () => {
    // Save File Dialog
    const text = window.codeMirror.getValue();
    const blob = new Blob([text], { type: "text/plain" });
    const a = document.createElement("a");
    let exetension = "";
    switch (window.language) {
      case "javascript":
        exetension = ".js";
        break;
      case "python":
        exetension = ".py";
        break;
      default:
        exetension = ".txt";
        break;
    }

    a.download = prompt("Enter file name", "untitled") + exetension;
    a.href = URL.createObjectURL(blob);
    a.dataset.downloadurl = ["text/plain", a.download, a.href].join(":");
    a.click();
    a.remove();
  });
  document.querySelector("#Format").addEventListener("click", () => {
    window.codeMirror.execCommand("selectAll");
    autoFormatSelection();
    window.codeMirror.execCommand("goLineEnd");
  });
};

function getSelectedRange() {
  return { from: window.codeMirror.getCursor(true), to: window.codeMirror.getCursor(false) };
}

function autoFormatSelection() {
  var range = getSelectedRange();
  window.codeMirror.autoFormatRange(range.from, range.to);
}
