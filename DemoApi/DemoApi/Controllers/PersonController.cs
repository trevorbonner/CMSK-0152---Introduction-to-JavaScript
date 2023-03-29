using Core.Dto;
using Data;
using Data.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DemoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonController : ControllerBase
    {
        private readonly DemoDBContext context;
        public PersonController(DemoDBContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PersonDto>>> GetPeople()
        {
            return await context.People
                .Select(x => ItemToDto(x))
                .ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PersonDto>> GetPerson(int id)
        {
            var person = await context.People.FindAsync(id);

            if (person == null)
            {
                return NotFound();
            }

            return ItemToDto(person);
        }

        [HttpPost]
        public async Task<ActionResult<PersonDto>> PostPeople(PersonDto personDto)
        {
            var person = new Person
            {
                Firstname = personDto.Firstname,
                Lastname = personDto.Lastname,
                Age = personDto.Age
            };

            context.People.Add(person);
            await context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetPerson),
                new { id = person.PersonID },
                ItemToDto(person));
        }


        private PersonDto ItemToDto(Person person)
        {
            var dto = new PersonDto()
            {
                Firstname = person.Firstname,
                Lastname = person.Lastname,
                Age = person.Age,
                ID = person.PersonID,
            };

            return dto;
        }
    }
}
