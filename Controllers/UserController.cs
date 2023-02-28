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

        [HttpGet("Test2")]
        public async Task<ActionResult> Test2()
        {
            return Ok(3);
        }
    }
}
