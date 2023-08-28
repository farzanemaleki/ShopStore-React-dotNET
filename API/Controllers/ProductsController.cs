using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext dbContext;

        public ProductsController(StoreContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public ActionResult<List<Product>> GetProducts() 
        {
            var products = dbContext.Products.ToList();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id) 
        {
            var product = dbContext.Products.SingleOrDefault(p => p.Id == id);
            return Ok(product);
        }
    }
}