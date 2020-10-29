using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Contact
    {
        public int ContactID { get; set; }
        public string ContactName { get; set; }
        public string ContactTel { get; set; }
        public string ContactEmail { get; set; }
    }
}