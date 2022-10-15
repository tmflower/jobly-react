import React from "react";
import userContext from "../src/Components/userContext";

const demoUser = {
  username: "testuser",
  first_name: "testfirst",
  last_name: "testlast",
  email: "test@test.net"
};

const UserProvider =
    ({ children, currentUser = demoUser, hasAppliedToJob = () => false }) => (
    <userContext.Provider value={{ currentUser, hasAppliedToJob }}>
      {children}
    </userContext.Provider>
);

export { UserProvider };