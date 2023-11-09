using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{ 
    public class BuggyController : BaseApiController
    {
        
        [HttpGet("not-found")]
        public IActionResult GetNotFound()
        {
            return NotFound() ;
        }


        [HttpGet("bad-request")]
        public IActionResult GetBadRequest()
        {
            return BadRequest(new ProblemDetails { Title="This Bad request" });
        }


        [HttpGet("unauthorised")]
        public IActionResult GetUnauthorised()
        {
            return Unauthorized();
        }

        [HttpGet("validation-error")]
        public IActionResult GetValidationError()
        {
            ModelState.AddModelError("problem1", "This is problem one");
            ModelState.AddModelError("problem2", "This is problem two");

            return ValidationProblem();
        }

        [HttpGet("server-error")]
        public IActionResult GetServerError()
        {
            throw new Exception("This is a server error");
        }
    }
}
