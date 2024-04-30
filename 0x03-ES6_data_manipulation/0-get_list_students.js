/**
 * Retrieves a list of students.
 * @author Onsongo Onditi <https://github.com/Pronothurah>
 * @returns {{id: Number, firstName: String, location: String}[]}
 */

const getListStudents = () => {
    return [
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

]
}

export default getListStudents;