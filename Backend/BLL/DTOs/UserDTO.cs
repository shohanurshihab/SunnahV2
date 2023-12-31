﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTOs
{
    public enum Type
    {
        Admin,
        Employee,
        Manager,
        Customer
    }

    public class UserDTO
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        public string Address { get; set; }

        public string Phone { get; set; }

        public DateTime? Dob { get; set; } = null;

        [Required]
        public string Password { get; set; }

        public Type Type { get; set; }

        public string Image { get; set; }
    }
}