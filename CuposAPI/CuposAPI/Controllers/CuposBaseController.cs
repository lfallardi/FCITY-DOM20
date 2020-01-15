﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CuposAPI.Data;
using CuposAPI.Models;
using Microsoft.AspNetCore.Authorization;

namespace CuposAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CuposBaseController : ControllerBase
    {
        // private CuposDbContext _cuposDbContext = new CuposDbContext();

        private CuposDbContext _cuposDbContext;
        public CuposBaseController(CuposDbContext cuposDbContext)
        {
            _cuposDbContext = cuposDbContext;
        }


        // GET: api/CuposBase
        [HttpGet()]
        public async Task<IActionResult> Get()
        {

            return Ok(_cuposDbContext.ECCupoBase.ToList());

        }
        //public IEnumerable<CupoBase> Get()
        //{
        //    return _cuposDbContext.ECCupoBase;
        //}

        // GET: api/CuposBase/5
        [HttpGet("{id}")]
        public CupoBase Get(int id)
        {
            var cupoBase = _cuposDbContext.ECCupoBase.Find(id);
            return cupoBase;
        }

        // PUT: api/CuposBase/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }
    }
}