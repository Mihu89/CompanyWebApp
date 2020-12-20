using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CompanyApi.DB;
using CompanyApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CompanyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DepartmentController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public JsonResult GetDepartments()
        {
            var departments = _context.Departments.ToList();
            return new JsonResult(departments);
        }

        [HttpPost]
        public JsonResult AddDepartment(Department department)
        {
            _context.Departments.Add(department);
            _context.SaveChanges();

            return new JsonResult("Department added");
        }

        [HttpPut]
        public JsonResult UpadateDepartment(Department department)
        {
            _context.Departments.Update(department);
            _context.SaveChanges();

            return new JsonResult("Update department succeded");
        }

        [HttpDelete("{id}")]
        public JsonResult DeleteDepartment(int id)
        {
            var depToDelete = _context.Departments.FirstOrDefault(x => x.Id == id);

            if (depToDelete == null)
            {
                return new JsonResult("Department doesn't exist");
            }
            else
            {
                _context.Departments.Remove(depToDelete);
                _context.SaveChanges();
            }

            return new JsonResult("Department was deleted");
        }
    }
}