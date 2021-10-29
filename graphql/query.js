import graphql from "graphql-tag";


export const GET_CONFIG = graphql`
  query getConfig {
    getConfig{
        id
        websiteName
        websiteUrl
        description
        logo
    }
  }
`;

export const REGISTER_USER = graphql`
mutation Mutation($data: UserInput!) {
    registerUser(data: $data) {
      token
      user {
        id
        username
        email
        first_name
        last_name
        email
        photo
        bio
        facebook
        instagram
        twitter
        mobile
        role
        isVerified
        createdAt
        updatedAt
      }
    }
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



export const LOGIN_USER = graphql`
mutation LoginUserMutation($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      token
      user {
        id
        username
        email
        first_name
        last_name
        email
        photo
        bio
        facebook
        instagram
        twitter
        mobile
        role
        isVerified
        createdAt
        updatedAt
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

export const GET_ME = graphql`
  query me {
    me {
      id
        username
        email
        first_name
        last_name
        email
        photo
        bio
        facebook
        instagram
        twitter
        mobile
        role
        isVerified
        createdAt
        updatedAt
    }
  }
`;


export const VERIFY_USER = graphql`
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



export const REQUEST_RESET_USER_PASSWORD = graphql`
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




export const RESET_USER_PASSWORD = graphql`
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




export const UPDATE_USER = graphql`
  mutation updateUser($data: UserUpdateInput!) {
    result: updateUser(data: $data)
  }
`;

export const UPDATE_USER_EMAIL = graphql`
  mutation updateUserEmail($id: ID!, $email: String!) {
    result: updateUserEmail(id: $id, email: $email )
  }
`;

export const UPDATE_USER_SOCIAL = graphql`
  mutation updateUserSocial($facebook: String, $twitter: String, $instagram: String) {
    result: updateUserSocial(facebook: $facebook, twitter: $twitter,  instagram: $instagram)
  }
`;

export const UPDATE_USER_PROFILE = graphql`
  mutation uploadUserPhoto($file: Upload!) {
    result: uploadUserPhoto(file: $file)
  }
`;

export const FORGOT_PASSWORD = graphql`
  mutation forgetPassword($email: String!) {
    result: requestResetUserPassword(email: $email)
  }
`;



export const CHANGE_PASSWORD = graphql`
  mutation changeUserPassword($password: String!) {
    changeUserPassword(password: $password)
  }
`;

export const VERIFY_EMAIL = graphql`
  mutation verifyUser($id: ID!) {
    verifyUser(id: $id)
  }
`;

export const DELETE_USER = graphql`
  mutation deleteUser($id: ID!) {
    result: deleteUser(id: $id)
  }
`;







