using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class ContactController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"select ContactID,ContactName,ContactTel,ContactEmail from
            dbo.Contact";

            DataTable table = new DataTable();
            using (var connect = new SqlConnection(ConfigurationManager.
                ConnectionStrings["ContactListAppDB"].ConnectionString))
            using (var command = new SqlCommand(query, connect))
            using (var dataAdapter = new SqlDataAdapter(command))
            {
                command.CommandType = CommandType.Text;
                dataAdapter.Fill(table);
            }
        
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public string Post(Contact contact)
        {
            try
            {
                string query = @"insert into dbo.Contact values(
                '" + contact.ContactName + @"',
                '" + contact.ContactTel + @"',
                '" + contact.ContactEmail + @"'
                )";

                DataTable table = new DataTable();
                using (var connect = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["ContactListAppDB"].ConnectionString))
                using (var command = new SqlCommand(query, connect))
                using (var dataAdapter = new SqlDataAdapter(command))
                {
                    command.CommandType = CommandType.Text;
                    dataAdapter.Fill(table);
                }

                return "Contact added successfully!";
            }
            catch (Exception)
            {
                return "Failed to add contact!";
            }
        }

        public string Put(Contact contact)
        {
            try
            {
                string query = @"update dbo.Contact set 
                ContactName='" + contact.ContactName + @"',
                ContactTel='" + contact.ContactTel + @"',
                ContactEmail='" + contact.ContactEmail + @"'
                where ContactID=" + contact.ContactID+@"
                ";

                DataTable table = new DataTable();
                using (var connect = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["ContactListAppDB"].ConnectionString))
                using (var command = new SqlCommand(query, connect))
                using (var dataAdapter = new SqlDataAdapter(command))
                {
                    command.CommandType = CommandType.Text;
                    dataAdapter.Fill(table);
                }

                return "Contact updated successfully!";
            }
            catch (Exception)
            {
                return "Failed to update contact!";
            }
        }

        public string Delete(int id)
        {
            try
            {
                string query = @"delete from dbo.Contact
                where ContactID=" + id + @"";

                DataTable table = new DataTable();
                using (var connect = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["ContactListAppDB"].ConnectionString))
                using (var command = new SqlCommand(query, connect))
                using (var dataAdapter = new SqlDataAdapter(command))
                {
                    command.CommandType = CommandType.Text;
                    dataAdapter.Fill(table);
                }

                return "Contact deleted successfully!";
            }
            catch (Exception)
            {
                return "Failed to delete contact!";
            }
        }
    }
}
