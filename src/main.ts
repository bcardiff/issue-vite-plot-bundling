import './style.css'
import * as Plot from "@observablehq/plot";

// console.log(Plot.plot.prototype);
// ^
// |
// +-- Without this line Plot.plot is not defined in `npm run build` output
//     Plot.plot is called ----------------------------------------------------------------+
//                                                                                         |
//                                                                                         | here!
const appElem = document.getElementById('app')! //                                        vvvv
const plot = Plot.rectY({ length: 10000 }, Plot.binX({ y: "count" }, { x: Math.random })).plot();
//                ^^^^^                         ^^^^
// Other functions that are called directly are not affected.
appElem.append(plot);
