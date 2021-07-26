# Node Employee Panel MERN

Login Credentials

Email address: admin@email.com<br>
Password: 12345

# Libraries used
<ul>
  <li>React Redux</li>
  <li>Redux Saga</li>
  <li>Bootstrap</li>
  <li>React Bootstrap</li>
  <li>Formik</li>
  <li>Axios</li>
  <li>Json Web Token</li>
  <li>Mongoose</li>
</ul>

Routes<br>

<ul>
  <li>Login</li>
    URL = localhost:5000/api/auth/login<br>
    Method: POST<br>
    Body: {email: 'admin@email.com', password: '12345'}
  <br><br>
  
  <li>Register</>
    URL = localhost:5000/api/employee/register<br>
    Method: POST<br>
    Body: {
      "employeeId":"e-10015",
      "name":"Awin",
      "email":"alwin@email.com",
      "mobile":"9874563210",
      "age":26,
      "address":"No 321, North Canada"
    }
  <br><br>
  
  <li>Search</li>
    URL = localhost:5000/api/employee/search?k={search_term}<br>
    Method: GET<br>
</ul>
