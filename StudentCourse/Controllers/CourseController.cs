using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using StudentCourse.Domains;
using StudentCourse.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentCourse.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class CourseController:ControllerBase
    {
        public CourseController()
        {
            this.CourseDomain = new CourseDomain();
        }
        [HttpPost]
        public IActionResult Post(Courses courses)
        {
            this.CourseDomain.Add(courses);
            return Ok();
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var qualifications = this.CourseDomain.Get(id);
            return Ok(qualifications);

        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            CourseDomain.del(id);
            return Ok();
        }

        private CourseDomain CourseDomain { get; set; }
    }
}
