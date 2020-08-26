// Write code under this line
const getNamesSortedByFriendsCount = (array) => {
  const sortByNumOfFriends = (userOne, userTwo) =>
    userOne["friends"].length - userTwo["friends"].length;
  return [...array].sort(sortByNumOfFriends).map(({ name }) => name);
};

function array({ name }) {
  return name;
}

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
