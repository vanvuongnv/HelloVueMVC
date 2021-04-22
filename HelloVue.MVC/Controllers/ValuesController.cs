using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HelloVue.MVC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [Route("get-numbers")]
        [HttpGet]
        public IActionResult GetNumbers()
        {
            return Ok(new int[] { 1, 2, 3, 4 });
        }
    }
}
