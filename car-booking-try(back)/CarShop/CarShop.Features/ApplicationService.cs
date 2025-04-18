using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CarShop.Database;
using CarShop.Database.Entities;
using CarShop.Features.Services;
using Microsoft.EntityFrameworkCore;

namespace CarShop.Features
{
    public class ApplicationService : IIpplicationServices
    {
        private readonly IMyDBContext _context;
        private readonly IEmailService _emailService;

        public ApplicationService(IMyDBContext context, IEmailService emailService)
        {
            _context = context;
            _emailService = emailService;
        }
        
        public async Task AddApplication(Applications application)
        {
            await _context.applications.AddAsync(application);
            await _context.SaveChangesAsync();
            
            try
            {
                await _emailService.SendApplicationConfirmationAsync(application);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Ошибка отправки email: {ex.Message}");
            }
        }

        public async Task<List<Applications>> GetApplications()
        {
            return await _context.applications.ToListAsync();
        }
    }
}