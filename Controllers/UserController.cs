using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;

namespace cvmaker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet("Test")]
        public async Task<ActionResult<string>> Test()
        {
            return "Hi Roman !";
        }

        [HttpPost("GetAge")]
        public async Task<ActionResult> GetAge(DateObj dateObj)
        {
            dateObj.date = dateObj.date.AddHours(2);
            var today = DateTime.Today;

            // Calculate the age.
            var age = today.Year - dateObj.date.Year;

            // Go back to the year in which the person was born in case of a leap year
            if (dateObj.date.Date > today.AddYears(-age)) age--;
            return Ok(age);
        }

        public struct DateObj
        {
            public DateTime date { set; get; }
        }
            
    }
}
