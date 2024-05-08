using bike_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace bike_api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BrandController : ControllerBase
{
    private BikeStoreContext _bikeStoreContext;

    public BrandController(BikeStoreContext bikeStoreContext)
    {
        _bikeStoreContext = bikeStoreContext;
    }

    [HttpGet("get-brand")]
    public IActionResult GetBrand()
    {
        return Ok(_bikeStoreContext.Brands);
    }
    
   
    
    // GET
    // public IActionResult Index()
    // {
    //     return Ok();
    // }
}