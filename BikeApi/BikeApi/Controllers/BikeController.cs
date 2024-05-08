using BikeApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace BikeApi.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class BikeController : ControllerBase
{ private BikeStoreContext _bikeStoreContext;

    public BikeController(BikeStoreContext bikeStoreContext)
    {
        _bikeStoreContext = bikeStoreContext;
    }
    // GET
    [HttpGet("get-store")] 
    public IActionResult GetAllBooks()
    {
        var stores = _bikeStoreContext.Stores;
        return Ok(stores);
    }
}