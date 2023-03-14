import React from "react";
import classes from "./Nav.module.css";
import { useNavigate } from 'react-router-dom';


export default function Nav({ isSign = false }) {
  const nevigate = useNavigate();
  const handleClick = () => {
    nevigate("/signin");
  }
  const handleclick = () => {
    
  }
  return (
    <div className={classes.nav}>
      <img
        className={classes.logo}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-V9ycLxcoikE3W2u6UI3ZCjuEbnVuxFud1AGrpFqL&s"
        alt="Netflix Logo"
        onClick={handleclick}
      />
      {!isSign ? (
        <img
          className={classes.user}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEX///8AAAD6+vqamprs7Oyfn58ODg7Hx8fMzMx5eXlra2vp6enW1ta5ubkxMTF8fHylpaXc3NxNTU0pKSmDg4Pi4uI6OjqUlJRSUlKtra1lZWVcXFyLi4vy8vJDQ0NycnIiIiIYGBgD4NsoAAAEwElEQVRoge1bWZuiMBAknMolOoKOgsf//5Mr47iGXF1JcN0H65UvqRC609WdJgg++OCD/xZh3JZZ1SRRlDRVVrZx+K94syjf1CnjkNabPMpevYJwsdszLfa7xev4Fys98QOrxSuYi+SLph7xlRQzU5fLlKZ9IF2WM1K3Z5z5jnM7E3WxtaUesZ1l8xMX6hGJN3Vbu3IzVnvufeNOPaLxoI5zP27G8tiVe935cjPWrd24M3/qEZkL9/c83Ix923Pv5uJmbPdGbmv2Wbkt2Wf73g9YfPfF3NyMwWF+PT83Y6C/xzOcLTI67KzzPlPVyBFuz1iiBxBl2ldxM0ZHWI/4TaGmuJ11CwJC2xTwRPVhV5XrdVntDvhmmXUdqhUPGec5cXYAh21N3KC1naUTYw2Ka5PNQVNclEfl4gItW89dIuNzTTIYQoeTPpdZAqNX+rUDeSRb6gYXQD6mHQwuPtUZPODjRxN3EBzpGXS+TufAFyIBK2ir+1KPBCREZeYOgoqeQy0raHshNn0EvfFKiw1dFz0BsH0qV6WHkVFpBH3Qq16hJ0dFCHlETtPLg0JDjesXkAak1ede3veYHMQQ7iCg55GlJJ2TbjDyDTmRnLfS38p4sj5Bn7Gy7dAxCbI35C0kER3SuwVWl+gIsREtLqb9c7Y3r0WLa+lwqvBPFejzIhXFFCBiDhg5ICZFOQNUfzTBUARQnBZ9DYiFbEC4B2AiMTIj6SEZzdG3EFNGJE0CwjmkpCSnpR2EUdnOD6B8S3RaiBxwNtrRFORQdio5qATguGDytmP1CNLVsYxRNDjESBl5xEIfT3YbtMRsdDfwDaRDBsoRRxgULFw7FI9XzFJUy7bePNlugZD6gKaKi9eKpZAKiInnYMXWLyyqWJKYsKs77rPJ+DCjdTcHuRYJeskD3TZrh9sKwqHNtpbFWtlf7a9z0m5/PO47ixveX8gmCyQNc0FOGoB0aSYo0iXQVU6Hw8n2iQCVqwLnU50Uo40VjeSXm+b+JAE8TnVGksWBa/RXxIXZmWOpz0/PG6IrNY+yjkeURfKpjhnKql/l+aqvyqmwLIgTQ13IM+57anElmhm9TxOZDIr7CMnmBwaDitSpf72UAjOlJ/RSTpduasufDt0PuhfRlj91eT2ULIjQqBp9hUEtZ5y4deyG9h1Vsd+RW81uKParrjnAkoAKiihtFP7SBY9pqSSkjTRe8EipVmfl3yIGUWUQyZ7gIp7tXYIFky47CUseH/yOyWenC8e8zZ28uwpDPsQDrVJcyujsZU9w/gY1Sj1Dol04UYELMdDlPd+2oLvAQ8Fd9IFtC3zJHCrD6MGFVrhBi9Pwnce7h5ybW2gRrkmnduwpu20g57VWzVmcjk5doxqnDjyao7YOWx/yUcKrLexkvfXrkw+30Jy1tROQk+Do0IwnSOk0gfc+TCZa0LHzetqAWX9jVefvSWhybcCUWk+7iCy+FtE0hLu3ngZyYTKvDK8/VGKm5NN0G6jajY+JUmGUiZSm+LYbB2r5X/dNVbbxcEPcllXTqzJj/0brQN9inl4vN1w1ac48LebBW5vrR7zxt4IRb/yh4gfv+5XkB+GiN/1E07/wJ5o7/9t+H3qu4D0/Tn3wwQcu+AOPijz5B8KHaAAAAABJRU5ErkJggg=="
          alt="userPhoto"
        />
      ) : (
        <button className={classes.signButton} onClick = {handleClick}>Sign In</button>
      )}
    </div>
  );
}
