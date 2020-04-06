using StudentCourse.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentCourse.Domains
{
    public class CourseListDomain:BaseDomain
    {
        public void Add(CourseLists courseLists)
        {
            this.ExecuteNonQuery($"insert into CourseLists  values('{courseLists.CourseName}','{courseLists .Description}','{courseLists.Type }','{courseLists.Price}')");
        }
        public List<CourseLists> Get(int CourseListId)
        {
            var reader = this.GetReader($"select * from CourseLists where CourseListId='{CourseListId}' ");
            var courses = new List<CourseLists>();
            while (reader.Read())
            {
                var course = new CourseLists();
                course.CourseListId = reader.GetInt32(0);
                course.CourseName = reader.GetString(1);
                course.Description = reader.GetString(2);
                course.Type = reader.GetBoolean(3);
                course.Price = reader.GetString(4);

                courses.Add(course);
            }
            return courses;
        }

        public List<CourseLists> Get()
        {
            var reader = this.GetReader($"select * from CourseLists  ");
            var courses = new List<CourseLists>();
            while (reader.Read())
            {
                var course = new CourseLists();
                course.CourseListId = reader.GetInt32(0);
                course.CourseName = reader.GetString(1);
                course.Description = reader.GetString(2);
                course.Type = reader.GetBoolean(3);
                course.Price = reader.GetString(4);

                courses.Add(course);
            }
            return courses;
        }

    }
}
