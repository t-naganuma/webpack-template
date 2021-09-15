import $ from "jquery";
import { greet } from "../modules/greet"

console.log("another");

$("body")
  .append(`<p>${greet("App")}</p>`);