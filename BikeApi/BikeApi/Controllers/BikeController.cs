using Microsoft.AspNetCore.Mvc;

namespace BikeApi.Controllers;

public class BikeController : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }
}