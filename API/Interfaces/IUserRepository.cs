using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IUserRepository
    {

        void Update(AppUser user);

        Task<bool> SaveAllAsync();

        Task<IEnumerable<AppUser>> GetUsersAsync();

        Task<AppUser> GetUserByIdlAsync(int id);
        
        Task<AppUser> GetUserByUsernamelAsync(string username);

        Task<Photo> GetPhotoList(string username);

        Task<IEnumerable<MemberDto>> GetMembersAsync();

        Task<MemberDto> GetMemberAsync(string username);
    }
}
