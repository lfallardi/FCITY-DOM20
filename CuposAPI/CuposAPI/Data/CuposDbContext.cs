using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CuposAPI.Models;

namespace CuposAPI.Data
{
    public class CuposDbContext : DbContext
    {

        public CuposDbContext(DbContextOptions<CuposDbContext>options):base(options)
        {

        }

        public DbSet<CupoBase> ECCupoBase { get; set; }
    }
}
