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
    public class LoggedController : ControllerBase
    {
            public LoggedController()
        {
            this.AdminDomain = new AdminDomain();
        }
        [HttpPost]
        public IActionResult Post(Admin admin)
        {
           var login= AdminDomain.IsLogin(admin);
            return Ok(login);
        }
        private AdminDomain AdminDomain { get; set; }
    }
}
