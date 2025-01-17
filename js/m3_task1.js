function slugify(title) {
  return title.split(" ").join("-").toLowerCase();
}

console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
