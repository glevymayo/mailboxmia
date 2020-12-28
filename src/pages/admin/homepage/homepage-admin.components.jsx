import React from "react";
import { useSelector } from "react-redux";

export const HomepageAdmin = () =>{
   const error = useSelector(state => state.common.error);

   return <div>
      <h1>This is home admin{error}</h1>
   </div>;
}

