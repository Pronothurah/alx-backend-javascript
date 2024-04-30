/**
 * Retrieves a list of student ids.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 *  }[]} students - The list of students.
 */
export default function getListStudentIds(students) {
    if (students instanceof Array) {
      return students.map((student) => student.id);
    }
    return [];
}
