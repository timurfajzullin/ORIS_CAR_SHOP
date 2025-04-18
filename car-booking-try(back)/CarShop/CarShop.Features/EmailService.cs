using System;
using System.Threading.Tasks;
using MimeKit;
using MailKit.Net.Smtp;
using MailKit.Security;
using CarShop.Database.Entities;
using Microsoft.Extensions.Options;

namespace CarShop.Features.Services
{
    public class EmailService : IEmailService
    {
        private readonly EmailSettings _emailSettings;

        public EmailService(IOptions<EmailSettings> emailSettings)
        {
            _emailSettings = emailSettings.Value;
        }

        public async Task SendApplicationConfirmationAsync(Applications application)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Fayzullin Group Company", _emailSettings.SenderEmail));
            message.To.Add(new MailboxAddress(application.FullName, application.Email));
            message.Subject = "Ваша заявка на лизинг принята";

            var bodyBuilder = new BodyBuilder
            {
                TextBody = $@"Уважаемый {application.FullName}!

Благодарим вас за обращение в нашу компанию. Ваша заявка на лизинг автомобиля успешно получена.

Данные вашей заявки:
- ФИО: {application.FullName}
- Контактный телефон: {application.Phone}
- Электронная почта: {application.Email}
- Страна: {application.Country}

Наш менеджер свяжется с вами в ближайшее время для уточнения деталей.

С уважением,
Команда Fayzullin_Group_Company_Industries_Corporated_Limited_OOO_OAO_EP_Samozanyatost"
            };

            message.Body = bodyBuilder.ToMessageBody();

            using var client = new SmtpClient();
            await client.ConnectAsync(_emailSettings.SmtpServer, _emailSettings.SmtpPort, SecureSocketOptions.StartTls);
            await client.AuthenticateAsync(_emailSettings.SenderEmail, _emailSettings.Password);
            await client.SendAsync(message);
            await client.DisconnectAsync(true);
        }
    }
}