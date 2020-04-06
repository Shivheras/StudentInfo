using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;


namespace StudentCourse.Domains
{
    public class BaseDomain
    {
        public BaseDomain()
        {
            this.SqlConnection = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Shivangi\Documents\StudentInfoDb.mdf;Integrated Security=True;Connect Timeout=30");
            this.SqlConnection.Open();
        }

        public SqlDataReader GetReader(string commandText)
        {
            this.SqlCommand = new SqlCommand(commandText, this.SqlConnection);
            return this.SqlCommand.ExecuteReader();
        }

        public void ExecuteNonQuery(string commandText)
        {
            this.SqlCommand = new SqlCommand(commandText, this.SqlConnection);
            this.SqlCommand.ExecuteNonQuery();
        }

        public void CloseConnection()
        {
            this.SqlConnection.Close();
        }

        protected SqlCommand SqlCommand { get; set; }
        private SqlConnection SqlConnection { get; set; }

    }

}
