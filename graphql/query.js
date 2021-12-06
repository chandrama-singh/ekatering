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

export const REGISTER_CATERER = graphql`
mutation Mutation($data: CatererInput!) {
    registerCaterer(data: $data)
  }
  `;




export const LOGIN_CATERER = graphql`
mutation LoginCatererMutation($password: String!, $email: String!) {
    result: loginCaterer(password: $password, email: $email) {
      token
      caterer {
        id
        email
        fullName
        first_name
        last_name
        email
        photo
        banner
        bio
        facebook
        instagram
        twitter
        mobile
        role
        business_name
        business_category{
          name
          value
        }
        business_email
        isVerified
        isEmailVerified
        isRegistered
        isSubscribed
        isAvailable
        fhrs_date
        status
        remark
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
  query mySelf {
    mySelf {
      id
        email
        fullName
        first_name
        last_name
        email
        photo
        banner
        bio
        facebook
        instagram
        twitter
        mobile
        role
        business_name
        business_category{
          name
          value
        }
        business_email
        isVerified
        isEmailVerified
        isRegistered
        isSubscribed
        isAvailable
        fhrs_date
        status
        remark
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


export const GET_ALL_CATERER = graphql`
  query caterers {
    caterers {
      id
        email
        fullName
        first_name
        last_name
        email
        photo
        banner
        bio
        facebook
        instagram
        twitter
        mobile
        role
        business_name
        business_category{
          name
          value
        }
        business_email
        isVerified
        isEmailVerified
        isRegistered
        isSubscribed
        isAvailable
        fhrs_date
        status
        remark
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


export const GET_PENDING_CATERER = graphql`
  query pendingCaterers {
    pendingCaterers {
        id
        email
        fullName
        first_name
        last_name
        email
        photo
        banner
        bio
        facebook
        instagram
        twitter
        mobile
        role
        business_name
        business_category{
          name
          value
        }
        business_email
        isVerified
        isEmailVerified
        isRegistered
        isSubscribed
        isAvailable
        fhrs_date
        status
        remark
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



export const GET_CATERER_BY_ID = graphql`
  query caterer($id: ID!) {
    caterer(id: $id) {
      id
      email
      fullName
      first_name
      last_name
      email
      photo
      banner
      bio
      facebook
      instagram
      twitter
      mobile
      role
      business_name
      business_category{
        name
        value
      }
      business_email
      isVerified
      isEmailVerified
      isRegistered
      isSubscribed
      isAvailable
      fhrs_date
      status
      remark
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


export const REQUEST_RESET_CATERER_PASSWORD = graphql`
mutation RequestResetCatererPasswordMutation($email: String!) {
    requestResetCatererPassword(email: $email)
  }
  `;





export const RESET_CATERER_PASSWORD = graphql`
mutation ResetCatererPasswordMutation($reqId: String!, $password: String!) {
    resetCatererPassword(reqId: $reqId, password: $password)
  }
  `;

  export const PAY_REGISTRATION= graphql`
mutation acceptRegistrationFee {
  result:acceptRegistrationFee
  }
  `;


  export const VERIFY_REGISTRATION_PAYMENT = graphql`
  mutation verifyRegistrationPayment($id: ID!) {
   response: verifyRegistrationPayment(id: $id){
      catererId
      status
      customer
      mode
      payment_intent
    }
  }
`;







export const UPDATE_CATERER = graphql`
  mutation updateCaterer($data: CatererUpdateInput!) {
    result: updateCaterer(data: $data)
  }
`;

export const UPDATE_CATERER_ADDRESS = graphql`
  mutation updateCatererAddress($data: AddressInput!) {
    result: updateCatererAddress(data: $data)
  }
`;

export const UPDATE_CATERER_EMAIL = graphql`
  mutation updateCatererEmail($id: ID!, $email: String!) {
    result: updateCatererEmail(id: $id, email: $email )
  }
`;

export const UPDATE_CATERER_SOCIAL = graphql`
  mutation updateCatererSocial($facebook: String, $twitter: String, $instagram: String) {
    result: updateCatererSocial(facebook: $facebook, twitter: $twitter,  instagram: $instagram)
  }
`;

export const UPDATE_CATERER_PROFILE = graphql`
  mutation uploadCatererPhoto($file: Upload!) {
    result: uploadCatererPhoto(file: $file)
  }
`;

export const UPDATE_CATERER_BANNER = graphql`
  mutation uploadCatererBanner($file: Upload!) {
    result: uploadCatererBanner(file: $file)
  }
`;

export const UPDATE_CATERER_ADDRESS_PROOF = graphql`
  mutation uploadCatererAddressProof($file: Upload!) {
    result: uploadCatererAddressProof(file: $file)
  }
`;

export const UPDATE_CATERER_FOOD_REGISTRATION = graphql`
  mutation uploadCatererFoodRegistrationLetter($file: Upload!) {
    result: uploadCatererFoodRegistrationLetter(file: $file)
  }
`;
export const UPDATE_CATERER_FHRS_LETTER = graphql`
  mutation uploadCatererFHRSLetter($file: Upload!) {
    result: uploadCatererFHRSLetter(file: $file)
  }
`;

export const UPDATE_FHRS_DATE = graphql`
  mutation updateCatererFhrsDate($dueDate: DateTime!) {
    result: updateCatererFhrsDate(dueDate: $dueDate)
  }
`;

export const FORGOT_PASSWORD = graphql`
  mutation forgetPassword($email: String!) {
    result: requestResetCatererPassword(email: $email)
  }
`;



export const CHANGE_PASSWORD = graphql`
  mutation changeCatererPassword($password: String!) {
    changeCatererPassword(password: $password)
  }
`;


export const VERIFY_CATERER = graphql`
mutation verifyCaterer($id: ID!, $remark: String) {
  verifyCaterer(id: $id, remark: $remark)
  }
  `;

  export const DECLINE_CATERER = graphql`
mutation declineCaterer($id: ID!, $remark: String) {
  declineCaterer(id: $id, remark: $remark)
  }
  `;




export const VERIFY_CATERER_EMAIL = graphql`
  mutation verifyCatererEmail($id: ID!) {
    verifyCatererEmail(id: $id)
  }
`;

export const VERIFY_USER_EMAIL = graphql`
  mutation verifyUserEmail($id: ID!) {
    verifyUserEmail(id: $id)
  }
`;

export const DELETE_CATERER = graphql`
  mutation deleteCaterer($id: ID!) {
    result: deleteCaterer(id: $id)
  }
`;


////Caterer


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





export const SUBSCRIBE_CATERER = graphql`
  mutation subscribeCaterer {
    result: subscribeCaterer
  }
`;


export const VERIFY_SUBSCRIPTION_PAYMENT = graphql`
  mutation verifySubscriptionPayment($id: ID!) {
   result: verifySubscriptionPayment(id: $id){
      subscription
      status
      mode
      customer
    }
  }
`;









