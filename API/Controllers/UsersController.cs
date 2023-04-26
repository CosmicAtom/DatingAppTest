using API.Data;
using API.DTOs;
using API.Entities;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    //[Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        public readonly IMapper _mapper;

        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            var users = await _userRepository.GetMembersAsync();

            //var userToReturn = _mapper.Map<IEnumerable<MemberDto>>(users);

            return Ok(users);
        }

        //[HttpGet("{id}")]
        //public async Task<ActionResult<MemberDto>> GetUser(int id)
        //{
        //    var user = await _userRepository.GetUserByIdlAsync(id);
        //    return _mapper.Map<MemberDto>(user);
        //}

        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {

            //var user = await _userRepository.GetUserByUsernamelAsync(username);

            //var userMap =  _mapper.Map<MemberDto>(user);
            
            //return userMap;

            return await _userRepository.GetMemberAsync(username);
        }
    }
}
 