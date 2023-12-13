
import axios from 'axios';

class StudentService{

   getStudents(){

     return axios.get(`http://localhost:8080/students`);

   }

   getStudentById(id){
const userId = id;
  return axios.get(`http://localhost:8080/students/${userId}`);

   }

   updateStudent(id,student){
    const userId = id;
    return axios.put(`http://localhost:8080/students/${userId}`,student)

  }

  deleteStudent(id) {
    const userId = id;
    return axios.delete(`http://localhost:8080/students/${userId}`);

  }

  addStudent(student) {

    return axios.post(`http://localhost:8080/students`,student);

  }

//   createcourse(course){
//     return axios.post(COURSE_REST_API+"/courses",course);
// }

}
const vari =new StudentService();
export default vari;









