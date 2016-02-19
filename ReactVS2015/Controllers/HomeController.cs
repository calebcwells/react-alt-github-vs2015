using Microsoft.AspNet.Mvc;

namespace ReactVS2015.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}