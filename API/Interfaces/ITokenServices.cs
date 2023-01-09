using API.Entities;

namespace API.Interfaces
{
    public interface ITokenServices
    {
        string CrateToken(AppUser user);
    }
}
