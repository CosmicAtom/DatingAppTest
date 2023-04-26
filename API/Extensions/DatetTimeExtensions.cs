namespace API.Extensions
{
    public static class DatetTimeExtensions
    {
        public static int CaculaterAge(this DateTime dob)
        {
            var today = DateTime.Today;
            var age = today.Year - dob.Year;
            if(dob.Date > today.AddYears(-age)) --age;
            return age;
        }
    }
}
