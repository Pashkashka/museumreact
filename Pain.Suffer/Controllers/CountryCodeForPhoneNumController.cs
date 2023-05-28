using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pain.Suffer.Data.Entities;

namespace Pain.Suffer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CountryCodeForPhoneNumController : ControllerBase
    {
        private readonly CountryCodeForPhoneNumContext _countryCodeForPhoneNumcontext;
        public CountryCodeForPhoneNumController(CountryCodeForPhoneNumContext countryCodeForPhoneNumcontext)
        {
            _countryCodeForPhoneNumcontext = countryCodeForPhoneNumcontext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var countryCodeForPhoneNum = await _countryCodeForPhoneNumcontext.CountryCodeForPhoneNum.ToListAsync();
            return Ok(countryCodeForPhoneNum);
        }
    }
}