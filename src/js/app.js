import $ from "jquery";
import { add } from "../modules/math";
import { greet } from "../modules/greet";

console.log("app");

const result = add(1, 2);
greet("bob");

console.log(result);

$("body")
  .append(result)
  .append(`<p>${greet("App")}</p>`);
