import { useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState(null);
  const [resp, setResponse] = useState(null);
  const [err, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters with atleast 1(letter,number and special character!)",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = e.target[0].value;
    const password = e.target[1].value;
    const data = { email, password };
    console.log(data);
    axios
      .post("http://localhost:5000/login", data)
      .then((response) => {
        console.log(response);
        setStatus("Success");
        setResponse(response.data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.message);
        setStatus("error");
        setError(error.response.data.message);
        setIsLoading(false);
      });
    console.log(resp);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
             <div className='card'  style={{width:'500px',height:'450px',marginLeft:'510px',marginTop:'60px', borderRadius: '30px'}}>
      <form onSubmit={handleSubmit}>
      <h1 style={{ marginTop: '20px', marginLeft: '45px', fontFamily: 'Inter, sans-serif', fontWeight: 'bold', fontSize: '25px'}}>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            style={{ marginBottom: '10px', fontFamily: 'Exo, Sans-serif', color: 'black' }}
          />
        ))}
        <button disabled={isLoading} style={{ height: '50px', width: '60%', marginTop:'10px',marginRight: '100px', backgroundColor: '#45B3CF', borderRadius: '15px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <a href="/" style={{ color: 'white', fontSize: '20px',fontFamily: 'Inter, sans-serif', fontWeight: '800', textDecoration: 'none' }} >{isLoading ? 'Loading...' : 'Log In'}</a>
        </button>
        <div className="buttons" style={{ marginTop: '90px', marginLeft: '20px', backgroundColor: 'white' }}></div>
        <p style={{ marginTop: '10px', textAlign: 'center', fontSize:'16px', fontFamily: 'Exo, sans-serif',color: '#A9A9A9',}}>Don't have an Account? 
    <a href="/signup" style={{ fontSize: '16px', fontFamily: 'Exo, sans-serif', color: '#45B3CF', marginLeft: '5px', textDecoration: 'none' }}>Signup</a>
  </p>
      </form>
      {status === "Success" && <div>{resp}</div>}
      {status === "error" && <div>{err}</div>}
    </div>
    </div>
  );
};

export default Login;
