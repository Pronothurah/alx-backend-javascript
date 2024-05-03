/**
 * Retrieves a list of students.
 * @returns {Object[]} An array of student objects.
 * @property {number} id - The student's ID.
 * @property {string} firstName - The student's first name.
 * @property {string} location - The student's location.
 * @author Onsongo Onditi <https://github.com/Pronothurah>
 * @returns List
 */
const getListStudents = () => [
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  },
  {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  },
  {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  },

];

export default getListStudents;
