using Microsoft.AspNetCore.Mvc;
using mission14.Data;

namespace mission14.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movies> Get()
        {
            var resp = context.Movies.Where(x => x.Edited == "Yes")
                .OrderBy(s => s.Title).ToArray();
            return resp;
        }
    }
}