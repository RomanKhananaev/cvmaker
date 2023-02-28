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

        [HttpPost("Test2")]
        public async Task<ActionResult> Test2(dateObj dateObj)
        {
            return Ok(dateObj.date);
        }

        public struct dateObj
        {
            public DateTime date { set; get; }

            public string name { set; get; }
        }
            
    }
}
