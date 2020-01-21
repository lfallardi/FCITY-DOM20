using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using CuposAPI.Data;
using CuposAPI.Models;


namespace CuposAPI.Controllers
{
    [EnableCors("AllowAllOrigins")]
    [Route("api/[controller]")]
    [ApiController]
    public class CupoProductoController : ControllerBase
    {

        private CuposDbContext _cuposDbContext;
        public CupoProductoController(CuposDbContext cuposDbContext)
        {
            _cuposDbContext = cuposDbContext;
        }

        // GET: api/CupoProducto
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_cuposDbContext.ECCupoProducto.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var entityCP = _cuposDbContext.ECCupoProducto.Find(id);
            if (entityCP == null)
            {
                return NotFound("Registro no encontrado");
            }
            return Ok(entityCP);
        }

        [HttpGet("getByKey/{key}")]
        public IActionResult GetByKey(string key)
        {
            var entityCP = _cuposDbContext.ECCupoProducto.Find(key);

            if (entityCP == null)
            {
                return NotFound("Registro no encontrado");
            }
            return Ok(entityCP);

        }
    }
}
