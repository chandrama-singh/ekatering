import gql from "graphql-tag";

export const REGISTER_USER = gql`
mutation Mutation($data: UserInput!) {
    registerUser(data: $data)
  }
  `;
/*
//Register Data Input 
  {
    "data": {
      "username":"insided",
      "email": "osizone01@gmail.com",
      "password": "12345678"
    }
  }

  // Register Output
  {
  "data": {
    "registerUser": "A verification link has been sent to your email account"
       }
  }
*/



export const LOGIN_USER = gql`
mutation LoginUserMutation($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      token
      user {
        id
        username
        email
      }
    }
  }
  `;
/*
//Login Data Input 
  {
  "password": null,
  "email": null
}

  // Register Output
 {
  "data": {
    "loginUser": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InJvbGUiOiJ1c2VyIiwiZW1haWwiOiJvc2l6b25lMDFAZ21haWwuY29tIn0sImlhdCI6MTYzNDA4MjQ0MSwiZXhwIjoxNjM0MTY4ODQxLCJzdWIiOiI2MTY2MWMwY2MwNDExZDNiZmNhNWVmOWIifQ.LGk--6gxygj73om4dZbIfCxSUImi0V2Zffy3xMCPFsQ",
      "user": {
        "id": "61661c0cc0411d3bfca5ef9b",
        "username": "insided",
        "email": "osizone01@gmail.com"
      }
    }
  }
}
*/


export const VERIFY_USER = gql`
mutation VerifyUserMutation($verifyUserId: String!) {
    verifyUser(id: $verifyUserId)
  }
  `;
/*
 //  VERIFY_USER Input
 {
  "verifyUserId": null
}
*/



export const REQUEST_RESET_USER_PASSWORD = gql`
mutation RequestResetUserPasswordMutation($email: String!) {
    requestResetUserPassword(email: $email)
  }
  `;
/*
//RESET_USER_PASSWORD Input 
 {
  "email": null
}

*/




export const RESET_USER_PASSWORD = gql`
mutation ResetUserPasswordMutation($reqId: String!, $password: String!) {
    resetUserPassword(reqId: $reqId, password: $password)
  }
  `;
/*
//RESET_USER_PASSWORD Input 

 {  "reqId": null,
  "password": nulll
}
*/







  