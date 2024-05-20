import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 7000);
  }, []);
  return (
    <div className=" bg-errorImage w-full bg-cover bg-center text-center mx-auto py-10 bg-DarkPurple h-screen flex items-center justify-center">
      <div className=" text-white text-center w-full mx-4 ">
        <h2>Page Not Found</h2>
        <p className="py-10">
          Oops! Looks like you've taken a wrong turn.
          <br />
          Don't worry, even the best explorers get lost sometimes. you'll be
          taken back in a few seconds !
        </p>
      </div>
    </div>
  );
}
