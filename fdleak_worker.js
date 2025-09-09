import createModule from "./fdleak.js";

self.onmessage = (e) => {
  createModule().then((Module) => {
    console.log("Wasm ready", Module);
  }); 
}