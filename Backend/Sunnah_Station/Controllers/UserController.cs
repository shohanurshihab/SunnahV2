using BCrypt.Net;
using BLL.DTOs;
using BLL.Services;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Common.EntitySql;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Sunnah_Station.Controllers
{
    public class UserController : ApiController
    {
        [HttpPost]
        [Route("api/register")]
        public HttpResponseMessage Register(UserDTO request)
        {
            try
            {
                UserDTO user = new UserDTO
                {
                    Name = request.Name,
                    Email = request.Email,
                    Address = request.Address,
                    Phone = request.Phone,
                    Dob = request.Dob,
                    Password = BCrypt.Net.BCrypt.HashPassword(request.Password),
                    Type = request.Type,
                    Image = request.Image
                };

                var data = UserService.Create(user);

                var responseData = new
                {
                    data.Id,
                    data.Name,
                    data.Email,
                    data.Address,
                    data.Phone,
                    data.Dob,
                    Type = GetUserType(data.Type),
                    data.Image
                };

                return Request.CreateResponse(HttpStatusCode.OK, responseData);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, new { ex });
            }
        }

        [HttpPost]
        [Route("api/login")]
        public HttpResponseMessage Login(UserDTO request)
        {
            try
            {
                var data = UserService.GetByEmail(request.Email);

                if (!BCrypt.Net.BCrypt.Verify(request.Password, data.Password))
                {
                    return Request.CreateResponse(HttpStatusCode.NotAcceptable, new { Message = "Invalid Credentials." });
                }

                var responseData = new
                {
                    data.Id,
                    data.Name,
                    data.Email,
                    data.Address,
                    data.Phone,
                    data.Dob,
                    Type = GetUserType(data.Type),
                    data.Image
                };

                return Request.CreateResponse(HttpStatusCode.OK, responseData);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, new { ex });
            }
        }

        [HttpGet]
        [Route("api/users")]
        public HttpResponseMessage Users()
        {
            try
            {
                var data = UserService.Get();

                return Request.CreateResponse(HttpStatusCode.OK, data);
            } catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, new { ex });
            }
        }
        [HttpGet]
        [Route("api/user")]
        public HttpResponseMessage AuthUser(string email)
        {
            try
            {
                var data = UserService.GetByEmail(email);

                var responseData = new
                {
                    data.Id,
                    data.Name,
                    data.Email,
                    data.Address,
                    data.Phone,
                    data.Dob,
                    Type = GetUserType(data.Type),
                    data.Image
                };

                return Request.CreateResponse(HttpStatusCode.OK, responseData);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, new { ex });
            }
        }

        [HttpGet]
        [Route("api/users/{id}")]
        public HttpResponseMessage Users(int id)
        {
            try
            {
                var data = UserService.Get(id);

                return Request.CreateResponse(HttpStatusCode.OK, data);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, new { ex });
            }
        }

        [HttpPost]
        [Route("api/users/delete/{id}")]
        public HttpResponseMessage Delete(int id)
        {
            try
            {
                var data = UserService.DeleteUser(id);
                return Request.CreateResponse(HttpStatusCode.OK, data);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, new { Message = ex.Message });
            }
        }

        public string GetUserType(BLL.DTOs.Type type)
        {
            string userType = "Customer";
            switch (type)
            {
                case BLL.DTOs.Type.Admin:
                    userType = "Admin";
                    break;
                case BLL.DTOs.Type.Manager:
                    userType = "Manager";
                    break;
                case BLL.DTOs.Type.Employee:
                    userType = "Employee";
                    break;
                case BLL.DTOs.Type.Customer:
                    userType = "Customer";
                    break;
            }

            return userType;
        }
        [HttpPut]
        [Route("api/users/update")]
        public HttpResponseMessage UpdateUser(UserDTO userDTO)
        {
            try
            {
                var user = new UserDTO
                {
                    Id = userDTO.Id,
                    Name = userDTO.Name,
                    Email = userDTO.Email,
                    Address = userDTO.Address,
                    Phone = userDTO.Phone,
                    Dob = userDTO.Dob,
                    Password = userDTO.Password,
                    Type = userDTO.Type,
                    Image = userDTO.Image
                };

                var updatedUser = UserService.UpdateUser(user);

                if (updatedUser != null)
                {
                    var updatedUserDTO = new UserDTO
                    {
                        Id = userDTO.Id,
                        Name = userDTO.Name,
                        Email = userDTO.Email,
                        Address = userDTO.Address,
                        Phone = userDTO.Phone,
                        Dob = userDTO.Dob,
                        Password = userDTO.Password,
                        Type = userDTO.Type,
                        Image = userDTO.Image
                    };

                    return Request.CreateResponse(HttpStatusCode.OK, updatedUserDTO);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, new { Message = ex.Message });
            }
        }

    }
}