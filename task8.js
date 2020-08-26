// Write code under this line
const getUsersWithFriend = (array, friendName) => {
  return array
    .filter((array) => array["friends"].includes(friendName))
    .map((array) => array.name);
};

function array({ friends }, { name }) {
  return friends, name;
}

console.log(getUsersWithFriend(users, "Briana Decker"));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, "Goldie Gentry"));
// [ 'Elma Head', 'Sheree Anthony' ]
