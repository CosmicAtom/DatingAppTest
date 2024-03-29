﻿using API.Entities;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedUsers(DataContext _context)
        {
            if (await _context.Users.AnyAsync())
            {
                return;
            }
            var userData =await System.IO.File.ReadAllTextAsync("Data/UserSeedData.json");
            var users = JsonSerializer.Deserialize<List<AppUser>>(userData);
            foreach (var user in users)
            {
                using var hmac = new HMACSHA512();

                user.UserName = user.UserName.ToLower();
                user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("Pas$$0rd"));
                user.PasswordSalt = hmac.Key;

                _context.Users.Add(user);
            }

            await _context.SaveChangesAsync();
        }
    }
}
