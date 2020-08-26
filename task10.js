// Write code under this line
const getSortedUniqueSkills = (array) => {
  let skillsNotUnique = array.reduce(
    (acc, { skills }) => [...acc, ...skills],
    []
  );

  skillsNotUnique = skillsNotUnique.sort();

  return [...new Set(skillsNotUnique)];
};

console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
