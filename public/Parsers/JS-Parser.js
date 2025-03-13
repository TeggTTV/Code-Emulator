// JS-Parser

// eslint-disable-next-line no-unused-vars
function JSParse(code) {
  // Evaluate code
  // console.log(code);
  try {
    let msg = eval(code);
    return { type: "success", value: msg };

  } catch (error) {
    return { type: "error", msg: "Error: " + error };
  }
}