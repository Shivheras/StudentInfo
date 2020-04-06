using StudentCourse.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentCourse.Domains
{
    public class CourseDomain:BaseDomain
    {
        public List<Courses> Get(int StudentId)
        {
            var reader = this.GetReader($"select * from Courses where StudentId='{StudentId}' ");
            var courses = new List<Courses>();
            while (reader.Read())
            {
                var course = new Courses();
                course.CoursesId = reader.GetInt32(0);
                course.StudentId = reader.GetInt32(1);
                course.CourseListId = reader.GetInt32(2);


                courses.Add(course);
            }
            return courses;
        }
        public void del(int CoursesId)
        {
            this.ExecuteNonQuery($"delete from Courses where CoursesId={CoursesId}");
        }

        public void Add(Courses courses)
        {
            this.ExecuteNonQuery($"insert into Courses  values({courses.StudentId},{courses.CourseListId})");
        }
    }
}
