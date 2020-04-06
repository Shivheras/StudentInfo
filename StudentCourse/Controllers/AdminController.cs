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
    public class AdminController : ControllerBase
    {
        public AdminController()
        {
            this.AdminDomain = new AdminDomain();
        }
        [HttpPost]
        public IActionResult Post(Admin admin)
        {
            AdminDomain.Add(admin);
            return Ok();
        }
        private AdminDomain AdminDomain { get; set; }
    }
}
