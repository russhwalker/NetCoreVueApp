using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using NetCoreVueApp.Core.Data;
using NetCoreVueApp.Core.ViewModels;

namespace NetCoreVueApp.Web.Controllers
{
    [Route("api/[controller]")]
    public class CarsController : Controller
    {
        private readonly ICarRepository carRepository;
        private readonly IMakeRepository makeRepository;
        private readonly IModelRepository modelRepository;

        public CarsController(ICarRepository carRepository, IMakeRepository makeRepository, IModelRepository modelRepository)
        {
            this.carRepository = carRepository;
            this.makeRepository = makeRepository;
            this.modelRepository = modelRepository;
        }

        [HttpGet("[action]/{visibleCarsOnly}")]
        public IEnumerable<CarRow> Inventory(bool visibleCarsOnly)
        {
            return carRepository.GetCarRows(visibleCarsOnly);
        }

        [HttpGet("[action]/{carId}")]
        public CarEditViewModel CarEdit(int carId)
        {
            return new CarEditViewModel
            {
                Car = carId == 0 ? new Car() : carRepository.Get(carId),
                Makes = makeRepository.GetMakes(),
                Models = modelRepository.GetModels()
            };
        }

        [HttpGet("[action]/{carId}")]
        public Car Car(int carId)
        {
            return carRepository.Get(carId);
        }

        [HttpPost("[action]")]
        public Car Save([FromBody]Car car)
        {
            var cars1 = carRepository.GetCarRows(false);
            var c = carRepository.Save(car);

            var cars2 = carRepository.GetCarRows(false);
            return c;
        }
    }
}