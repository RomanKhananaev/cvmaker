using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace cvmaker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet("Test")]
        public string Test()
        {
            return "Hi Roman !";
        }
    }
}
