﻿using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;

        public UserRepository(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }

        public async Task<AppUser> GetUserByIdlAsync(int id)
        {
            return await _dataContext.Users.FindAsync(id);
        }
        public async Task<AppUser> GetUserByUsernamelAsync(string username)
        {
            return await _dataContext.Users.SingleOrDefaultAsync(x => x.UserName == username);
        }

        public async Task<IEnumerable<AppUser>> GetUsersAsync()
        {
            return await _dataContext.Users
                    .Include(_ => _.Photos)
                    .ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _dataContext.SaveChangesAsync() > 0;
        }

        public void Update(AppUser user)
        {
           _dataContext.Entry(user).State = EntityState.Modified;   
        }

        public async Task<Photo> GetPhotoList(string username)
        {
            var PhotoList = await _dataContext.Users
                                .Include(_ => _.Photos)
                                .SingleOrDefaultAsync(x => x.UserName == username);

            return (Photo)PhotoList.Photos;
        }

        public async Task<IEnumerable<MemberDto>> GetMembersAsync()
        {
            return await _dataContext.Users
                     .ProjectTo<MemberDto>(_mapper.ConfigurationProvider)
                     .ToListAsync ();
        }

        public async Task<MemberDto> GetMemberAsync(string username)
        {
            return await _dataContext.Users
                     .Where(x => x.UserName == username)
                     .ProjectTo<MemberDto>(_mapper.ConfigurationProvider)
                     .SingleOrDefaultAsync();
        }
    }
}
