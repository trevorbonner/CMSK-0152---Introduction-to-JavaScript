using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Dto
{
    public class PersonDto
    {
        public int ID { get; set; }
        public string? Firstname { get; set; }
        public string? Lastname { get; set; }
        public int Age { get; set; }
    }
}
