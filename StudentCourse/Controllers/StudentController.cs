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
    public class StudentController : ControllerBase
    {
        public StudentController()
        {
            this.StudentDomain = new StudentDomain();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var experiences = this.StudentDomain.Get(id);
            return Ok(experiences);

        }
        
        [HttpGet]
        public IActionResult Get()
        {
            var experiences = this.StudentDomain.Get();
            return Ok(experiences);

        }

        [HttpPost]
        public IActionResult Post(Students student)
        {
            StudentDomain.Add(student);
            return Ok();
        }

        

        [HttpPut]
        public IActionResult Put(Students student)
        {
            StudentDomain.update(student);
            return Ok();
        }

        
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            StudentDomain.del(id);
            return Ok();
        }


        private StudentDomain StudentDomain { get; set; }
    }

}
