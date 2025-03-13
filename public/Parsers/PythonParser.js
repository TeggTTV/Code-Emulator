function PythonParse(code) {
  // use pyscript to evaluate code
  // console.log(code);
  try {
    let output = document.createElement("div");
    output.setAttribute("id", "out");
    document.body.appendChild(output);
    
    let pyscript = document.createElement("py-script");
    pyscript.setAttribute("id", "pyscript");
    pyscript.setAttribute("out", "out");

    pyscript.innerHTML = code;

    document.body.appendChild(pyscript);

    let msg = output.innerHTML;
    // remove
    document.body.removeChild(output);
    document.body.removeChild(pyscript);


    return { type: "success", value: "" };

  } catch (error) {
    return { type: "error", msg: "Error: " + error };
  }
}