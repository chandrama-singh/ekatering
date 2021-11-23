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
    registerUser(data: $data)
  }
  `;




export const LOGIN_USER = graphql`
mutation LoginUserMutation($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      token
      user {
        id
        email
        fullName
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
        business_name
        business_email
        isVerified
        createdAt
        updatedAt
        address{
          address_line_1
          address_line_2
          country
          town
          latitude
          longitude
          postcode
        }
        documents{
          address_proof
          food_registration_letter
          fhrs_letter
        }
      }
    }
  }
  `;


export const GET_ME = graphql`
  query me {
    me {
      id
      id
      email
      fullName
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
      business_name
      business_email
      isVerified
      createdAt
      updatedAt
      address{
        address_line_1
        address_line_2
        country
        town
        latitude
        longitude
        postcode
      }
      documents{
        address_proof
        food_registration_letter
        fhrs_letter
      }
    }
  }
`;


export const VERIFY_USER = graphql`
mutation VerifyUserMutation($verifyUserId: String!) {
    verifyUser(id: $verifyUserId)
  }
  `;




export const REQUEST_RESET_USER_PASSWORD = graphql`
mutation RequestResetUserPasswordMutation($email: String!) {
    requestResetUserPassword(email: $email)
  }
  `;





export const RESET_USER_PASSWORD = graphql`
mutation ResetUserPasswordMutation($reqId: String!, $password: String!) {
    resetUserPassword(reqId: $reqId, password: $password)
  }
  `;




export const UPDATE_USER = graphql`
  mutation updateUser($data: UserUpdateInput!) {
    result: updateUser(data: $data)
  }
`;

export const UPDATE_USER_ADDRESS = graphql`
  mutation updateUserAddress($data: AddressInput!) {
    result: updateUserAddress(data: $data)
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

export const UPDATE_USER_ADDRESS_PROOF = graphql`
  mutation uploadUserAddressProof($file: Upload!) {
    result: uploadUserAddressProof(file: $file)
  }
`;

export const UPDATE_USER_FOOD_REGISTRATION = graphql`
  mutation uploadUserFoodRegistrationLetter($file: Upload!) {
    result: uploadUserFoodRegistrationLetter(file: $file)
  }
`;
export const UPDATE_USER_FHRS_LETTER = graphql`
  mutation uploadUserFHRSLetter($file: Upload!) {
    result: uploadUserFHRSLetter(file: $file)
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

export const GET_ALL_CATEGORY = graphql`
  query categories {
    categories {
      id
      title
      description
      slug
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_PUBLISHED_CATEGORY = graphql`
  query publishedCategories {
    publishedCategories {
      id
      title
      description
      slug
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_CATEGORY_BY_ID = graphql`
  query category($id: ID!) {
    category(id: $id) {
      id
      title
      description
      slug
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_CATEGORY_BY_SLUG = graphql`
  query categoryBySlug($id: ID!) {
    categoryBySlug(id: $id) {
      id
      title
      description
      slug
      status
      createdAt
      updatedAt
    }
  }
`;

export const ADD_NEW_CATEGORY = graphql`
  mutation addCategory($data: CategoryInput!) {
    result: addCategory(data: $data)
  }
`;

export const UPDATE_CATEGORY_STATUS = graphql`
  mutation changeCategoryStatus($id: ID!, $status: Boolean!) {
    result: changeCategoryStatus(id: $id, status: $status)
  }
`;

export const UPDATE_CATEGORY = graphql`
  mutation updateCategory($id: ID!, $data: CategoryInput!) {
    result: updateCategory(id: $id, data: $data)
  }
`;


export const GET_ALL_COUPON = graphql`
  query coupons {
    coupons {
      id
      code
      discount
      createdAt
      updatedAt
    }
  }
`;

export const GET_COUPON_BY_ID = graphql`
  query coupon($id: ID!) {
    coupon(id: $id) {
      id
      code
      discount
      createdAt
      updatedAt
    }
  }
`;

export const ADD_NEW_COUPON = graphql`
  mutation addCoupon($data: CouponInput!) {
    result: addCoupon(data: $data)
  }
`;

export const DELETE_COUPON = graphql`
  mutation deleteCoupon($id: ID!) {
    result: deleteCoupon(id: $id)
  }
`;


export const GET_ALL_PRODUCT = graphql`
  query products {
    products {
      id
      name
      slug
      banner
      images
      description
      price
      mrp
      category{
        title
        description
      }
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_PUBLISHED_PRODUCT = graphql`
  query publishedCategories {
    publishedCategories {
      id
      name
      slug
      banner
      images
      description
      price
      mrp
      category{
        title
        description
      }
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_PRODUCT_BY_ID = graphql`
  query category($id: ID!) {
    category(id: $id) {
      id
      name
      slug
      banner
      images
      description
      price
      mrp
      category{
        title
        description
      }
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_PRODUCT_BY_SLUG = graphql`
  query categoryBySlug($id: ID!) {
    categoryBySlug(id: $id) {
      id
      name
      slug
      banner
      images
      description
      price
      mrp
      category{
        title
        description
      }
      status
      createdAt
      updatedAt
    }
  }
`;

export const ADD_NEW_PRODUCT = graphql`
  mutation addProduct($data: ProductInput!) {
    result: addProduct(data: $data){
      id
      name
    }
  }
`;

export const UPDATE_PRODUCT_STATUS = graphql`
  mutation changeProductStatus($id: ID!, $status: String!) {
    result: changeProductStatus(id: $id, status: $status)
  }
`;

export const UPDATE_PRODUCT = graphql`
  mutation updateProduct($id: ID!, $data: ProductInput!) {
    result: updateProduct(id: $id, data: $data)
  }
`;

export const UPDATE_PRODUCT_PRICE = graphql`
  mutation updateProductPrice($id: ID!, $data: PriceInput!) {
    result: updateProductPrice(id: $id, data: $data)
  }
`;


export const UPDATE_PRODUCT_BANNER = graphql`
  mutation uploadProductBanner($file: Upload!,$id: ID!,) {
    result: uploadProductBanner(file: $file, id: $id)
  }
`;

export const UPDATE_PRODUCT_IMAGES = graphql`
  mutation uploadProductImages($file: Upload!,$id: ID!,) {
    result: uploadProductImages(file: $file, id: $id)
  }
`;


export const GENERATE_PAYMENT = graphql`mutation generatePayment($packageId: String!, $coupon:String){
	response: generatePayment(packageId: $packageId, coupon: $coupon){
		id
		amount
		currency
		receipt
		status
	  }
  }`;

export const PAYMENT_DONE = graphql`mutation paymentDone($razorpay_payment_id: String!, $razorpay_order_id: String!, $razorpay_signature: String!, $packageId: String!){
    response: paymentDone(
      razorpay_payment_id: $razorpay_payment_id,
      razorpay_order_id: $razorpay_order_id,
      razorpay_signature: $razorpay_signature,
      packageId: $packageId
    )
    }`;

export const SERVICE_PAYMENT_DONE = graphql`mutation servicePaymentDone($razorpay_payment_id: String!, $razorpay_order_id: String!, $razorpay_signature: String!, $serviceId: String!){
	response: servicePaymentDone(
	  razorpay_payment_id: $razorpay_payment_id,
	  razorpay_order_id: $razorpay_order_id,
	  razorpay_signature: $razorpay_signature,
    serviceId: $serviceId
	)
  }`;

export const GENERATE_SERVICE_PAYMENT = graphql`mutation generateServicePayment($serviceId: String!, $coupon: String){
    response: generateServicePayment(serviceId: $serviceId, coupon: $coupon){
      id
      amount
      currency
      receipt
      status
      }
    }`;


export const GET_ALL_PAYMENT = graphql`
  query payments {
    payments {
      id
      orderId
      amount
      package{
        id
        title
      }
      user{
        id
      name
      email
      photo
      bio
      mobile
      role
      isVerified
      createdAt
      updatedAt
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const GET_PAYMENT_BY_ID = graphql`
  query payment($id: ID!) {
    payment(id: $id) {
      id
      orderId
      amount
      package{
        id
        title
        description
        price
        activeIncome
        passiveIncome
        status
        createdAt
      }
      user{
        id
        name
        email
        photo
      }
      status
      createdAt
      updatedAt
    }
  }
`;









