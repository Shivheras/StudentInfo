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
    public class CourseListController:ControllerBase
    {
        public CourseListController()
        {
            this.CourseListDomain = new CourseListDomain();
        }
        
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var list = this.CourseListDomain.Get(id);
            return Ok(list);

        }
        [HttpPost]
        public IActionResult Post(CourseLists courseLists)
        {
            CourseListDomain.Add(courseLists);
            return Ok();
        }
        [HttpGet]
        public IActionResult Get()
        {
            var list = this.CourseListDomain.Get();
            return Ok(list);

        }

        private CourseListDomain CourseListDomain { get; set; }
    }

}
