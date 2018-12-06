using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using NetCoreVueApp.Core.Data;

namespace NetCoreVueApp.Web.Controllers
{
    [Route("api/[controller]")]
    public class MakesController : Controller
    {
        private readonly IMakeRepository makeRepository;

        public MakesController(IMakeRepository makeRepository)
        {
            this.makeRepository = makeRepository;
        }

        [HttpGet("[action]")]
        public IEnumerable<Make> GetMakes()
        {
            return makeRepository.GetMakes();
        }

        [HttpGet("[action]/{makeId}")]
        public Make MakeEdit(int makeId)
        {
            return makeRepository.Get(makeId);
        }

        [HttpPost("[action]")]
        public Make Save([FromBody]Make make)
        {
            return makeRepository.Save(make);
        }
    }
}