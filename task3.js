// Write code under this line
const getUsersWithGender = (array, gender) => {
  return array
    .filter((array) => array.gender === gender)
    .map((array) => array.name);
};

function array({ name }) {
  return name;
}

console.log(getUsersWithGender(users, "male"));

/* [
  "Moore Hensley",
  "Ross Vazquez",
  "Carey Barr",
  "Blackburn Dotson"
] */
