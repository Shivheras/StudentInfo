using StudentCourse.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentCourse.Domains
{
    public class AdminDomain:BaseDomain
    {
        public void Add(Admin admin)
        {
            this.ExecuteNonQuery($"insert into Admins  values('{admin.UserName}','{admin.Password}')");
        }
        public bool IsLogin(Admin user)
        {
            var reader = this.GetReader($"select * from Admins where UserName='{user.UserName}' and Password = '{user.Password}'");
            var isLoggedIn = false;
            while (reader.Read())
            {
                isLoggedIn = true;
            }
            return isLoggedIn;
        }
    }
}
