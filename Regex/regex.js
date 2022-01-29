"use strict";

/* Write a function that take a string and return true if the string only contain uppercase and lowercase
characters (no numbers and symbols) and it should end with capital A else return false */

function capitalA(s) {
  let regex = /[A-Za-z]*?[A$]/;
  result = regex.test(s);
  return result;
}

/* Write a function that take a string and return true if the the sting is following the emails pattern
which end with io (example@example.io) */

function ioEmail(email) {
  let regex = /^[a-zA-Z0-9]+@example+.io$/;
  result = regex.test(email);
  return result;
}

/* You have a text that contain image names with their extention you need to write a function to 
find all images in that text and return their names and extention in an array 
required extention are jpg, jpeg and png.
*/

function imagesSearcher(text) {
  regex = /\w*.png\b|\w*.jpeg\b|\w*.jpg\b/g;
  arr = text.match(regex);
  return arr;
}
