using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StudentCourse.Models
{
    public class CourseLists
    {
        [Key]
        public int CourseListId { get; set; }
        public string CourseName { get; set; }
        public string Description { get; set; }
        public bool Type { get; set; }
        public string Price { get; set; }
    }
}
