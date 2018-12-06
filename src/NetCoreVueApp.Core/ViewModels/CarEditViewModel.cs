﻿using NetCoreVueApp.Core.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetCoreVueApp.Core.ViewModels
{
    public class CarEditViewModel
    {
        public Car Car { get; set; }
        public List<Make> Makes { get; set; }
        public List<Model> Models { get; set; }
    }
}
