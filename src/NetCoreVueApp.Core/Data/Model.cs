using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NetCoreVueApp.Core.Data
{
    public class Model
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ModelId { get; set; }

        public int MakeId { get; set; }

        public string ModelName { get; set; }

        public virtual Make Make { get; set; }
    }
}