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

        [HttpPost("Test2/{date}")]
        public async Task<ActionResult> Test2(DateTime date)
        {
            return Ok(date);
        }
    }
}
