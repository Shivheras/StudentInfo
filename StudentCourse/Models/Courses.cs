using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StudentCourse.Models
{
    public class Courses
    {
        [Key]
        public int CoursesId { get; set; }
        public int StudentId { get; set; }
        public int CourseListId { get; set; }
        
    }
}
