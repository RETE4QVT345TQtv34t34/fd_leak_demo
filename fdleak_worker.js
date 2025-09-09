import createModule from "./fdleak.mjs";

self.onmessage = (e) => {
  createModule().then((Module) => {
    console.log("Wasm ready", Module);
  }); 
}
