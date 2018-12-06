using NetCoreVueApp.Core.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetCoreVueApp.Core.ViewModels
{
    public class CarRow
    {
        public int CarId { get; set; }
        public string MakeName { get; set; }
        public string ModelName { get; set; }
        public int Year { get; set; }
        public decimal Price { get; set; }

        public string PriceFormatted
        {
            get
            {
                return Price.ToString("C0");
            }
        }
    }
}
