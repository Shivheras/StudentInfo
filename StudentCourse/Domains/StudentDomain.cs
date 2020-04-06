using StudentCourse.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentCourse.Domains
{
    public class StudentDomain:BaseDomain
    {
        public void update(Students student)
        {
            this.ExecuteNonQuery($"update  Students  set Name ='{student.Name}',Password='{student.Password}',EmailId='{student.EmailId}',MobileNo='{student.MobileNo}' where StudentId={student.StudentId}");
        }
        public void del(int StudentId)
        {
            this.ExecuteNonQuery($"delete from Students  where StudentId={StudentId}");
        }
        public void Add(Students student)
        {
            this.ExecuteNonQuery($"insert into Students  values('{student.Name}','{student.Password}','{student.EmailId}','{student.MobileNo}')");
        }
       
        public List<Students> Get(int StudentId)
        {
            var reader = this.GetReader($"select * from Students where StudentId='{StudentId}' ");
            var courses = new List<Students>();
            while (reader.Read())
            {
                var course = new Students();

                course.StudentId = reader.GetInt32(0);
                course.Name = reader.GetString(1);
                course.MobileNo = reader.GetString(2);
                course.EmailId = reader.GetString(3);
                course.Password = reader.GetString(4);



                courses.Add(course);
            }
            return courses;
        }
        public List<Students> Get()
        {
            var reader = this.GetReader($"select * from Students  ");
            var courses = new List<Students>();
            while (reader.Read())
            {
                var course = new Students();
                course.StudentId = reader.GetInt32(0);
                course.Name = reader.GetString(1);
                course.MobileNo = reader.GetString(2);
                course.EmailId = reader.GetString(3);
                course.Password = reader.GetString(4);


                courses.Add(course);
            }
            return courses;
        }
    }
}
