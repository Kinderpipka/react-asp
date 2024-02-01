using asdf.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace asdf.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorckerController : ControllerBase
    {
        public readonly WorckerContext _worckerContext;

        public WorckerController(WorckerContext worckerContext)
        {
            _worckerContext=worckerContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Worcker>>> GetWorckers()
        {
            if (_worckerContext.Worckers==null)
            {
                return NotFound();
            }
            return await _worckerContext.Worckers.ToListAsync();
        }
        [HttpGet("{Id}")]
        public async Task<ActionResult<Worcker>> GetWorcker(int Id)
        {
            if (_worckerContext.Worckers == null)
            {
                return NotFound();
            }
            var worcker = await _worckerContext.Worckers.FindAsync(Id);
            if (worcker == null)
            {
                return NotFound();
            }
            return worcker;
        }

        [HttpPost]

        public async Task<ActionResult<Worcker>> PostWorcker(Worcker worcker)
        {
            _worckerContext.Worckers.Add(worcker);
            await _worckerContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetWorcker), new { Id = worcker.Id }, worcker);
        }

        [HttpPut("{Id}")]

        public async Task<ActionResult> PutWorcker(int Id, Worcker worcker)
        {
            if (Id != worcker.Id)
            {
                return BadRequest();
            }

            _worckerContext.Entry(worcker).State= EntityState.Modified;
            try
            {
                await _worckerContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok();


        }

        [HttpDelete("{Id}")]
        public async Task<ActionResult> DeleteWorcker(int Id)
        {
            if (_worckerContext.Worckers == null)
            {
                return NotFound();
            }

            var worcker = await _worckerContext.Worckers.FindAsync(Id);
            if (worcker == null)
            {
                return NotFound();
            }

            _worckerContext.Worckers.Remove(worcker);
            await _worckerContext.SaveChangesAsync();

            return Ok();
        }
    }
}
