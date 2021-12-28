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

export const UPDATE_CATERER_AVAILABILITY = graphql`
  mutation changeCatererAvailability($availability: Boolean!) {
    result: changeCatererAvailability(availability: $availability)
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
      description
      price
      mrp
      willDeliver
      caterer{
      id
      first_name
      business_name
      }
      category{
        id
        title
      }
      cuisine{
      id
      name
      }
      images
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_PUBLISHED_PRODUCT = graphql`
  query publishedProducts {
    publishedProducts {
      id
      name
      slug
      banner
      description
      price
      mrp
      willDeliver
      caterer{
      id
      first_name
      business_name
      }
      category{
        id
        title
      }
      cuisine{
      id
      name
      }
      images
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_PRODUCT_BY_ID = graphql`
  query product($id: ID!) {
    product(id: $id) {
      id
      name
      slug
      banner
      description
      price
      mrp
      willDeliver
      caterer{
      id
      first_name
      business_name
      }
      category{
        id
        title
      }
      cuisine{
      id
      name
      }
      images
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_PRODUCT_BY_SLUG = graphql`
  query productBySlug($id: ID!) {
    productBySlug(id: $id) {
      id
      name
      slug
      banner
      description
      price
      mrp
      willDeliver
      caterer{
      id
      first_name
      business_name
      }
      category{
        id
        title
      }
      cuisine{
      id
      name
      }
      images
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

export const CHANGE_PRODUCT_STATUS = graphql`
  mutation changeProductStatus($id: ID!, $status: String!) {
    result: changeProductStatus(id: $id, status: $status)
  }
`;

export const CHANGE_PRODUCT_WILLDELIVER = graphql`
  mutation changeProductWillDeliver($id: ID!, $status: Boolean!) {
    result: changeProductWillDeliver(id: $id, status: $status)
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



export const REMOVE_PRODUCT_IMAGE = graphql`
  mutation removeProductImages($url: String!,$id: ID!,) {
    result: removeProductImages(url: $url, id: $id)
  }
`;

export const DELETE_PRODUCT = graphql`
  mutation deleteProduct($id: ID!) {
    result: deleteProduct(id: $id)
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


export const ADD_LOCALFORM = graphql`
  mutation addLocalForm($data: LocalFormInput!) {
    result: addLocalForm(data: $data)
  }
`;

export const VERIFY_LOCALFORM_PAYMENT = graphql`
mutation verifyLocalFormPayment($id: String!) {
 response: verifyLocalFormPayment(id: $id){
    status
    customer
    mode
    payment_intent
  }
}
`;

// Cuisine

export const ADD_NEW_CUISINE = graphql`
  mutation addCuisine($data: CuisineInput!) {
    result: addCuisine(data: $data)
  }
`;

export const GET_CUISINE_BY_ID = graphql`
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

export const UPDATE_CUISINE = graphql`
  mutation updateCuisine($id: ID!, $data: CuisineInput!) {
    result: updateCuisine(id: $id, data: $data)
  }
`;

export const UPDATE_CUISINE_STATUS = graphql`
  mutation changeCuisineStatus($id: ID!, $status: Boolean!) {
    result: changeCuisineStatus(id: $id, status: $status)
  }
`;


export const GET_ALL_ACTIVE_CUSINE = graphql`
  query activeCuisines {
    activeCuisines {
      id
      name
      image
      status
    }
  }
`;


export const GET_ALL_CUISINE = graphql`
  query cuisines {
    cuisines {
      id
      name
      image
      status
      recommendedBy{
          id
          business_name
      }
    }
  }
`;


export const ADD_CATERER_SERVICE = graphql`
  mutation addService($data: ServiceInput!) {
    result: addService(data: $data){
      id
      name
    description
    price
      mrp
    banner
    catalogue
    slug
    createdAt
    updatedAt
    }
  }
`;



export const GET_ALL_SERVICE = graphql`
query services {
    services {
      id
      name
      slug
      banner
      description
      price
      mrp
      catalogue
      
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_PUBLISHED_SERVICE = graphql`
  query publishedServices {
    publishedServices{
      id
  name
  slug
  banner
  description
  price
  mrp
 
  catalogue
  caterer{
    id
    first_name
    business_name
    
  }
  status
  createdAt
  updatedAt
    }
  }
`;

export const GET_SERVICE_BY_ID = graphql`
  query service($id: ID!) {
    service(id: $id) {
      id
      name
      slug
      banner
      description
      price
      mrp
      caterer{
        id
        first_name
        business_name
        
      }
      catalogue
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_SERVICE_BY_SLUG = graphql`
  query serviceBySlug($id: ID!) {
    serviceBySlug(id: $id) {
      id
  name
  slug
  banner
  description
  price
  mrp
  caterer{
    id
    first_name
    business_name
    
  }
  catalogue
  status
  createdAt
  updatedAt
    }
  }
`;

export const UPDATE_SERVICE_BANNER = graphql`
  mutation uploadServiceBanner($file: Upload!,$id: ID!,) {
    result: uploadServiceBanner(file: $file, id: $id)
  }
`;

export const CHANGE_SERVICE_STATUS = graphql`
  mutation changeServiceStatus($id: ID!, $status: String!) {
    result: changeServiceStatus(id: $id, status: $status)
  }
`;

export const CHANGE_SERVICE_WILLDELIVER = graphql`
  mutation changeServiceWillDeliver($id: ID!, $status: Boolean!) {
    result: changeServiceWillDeliver(id: $id, status: $status)
  }
`;

export const UPDATE_SERVICE = graphql`
  mutation updateService($id: ID!, $data: ProductInput!) {
    result: updateService(id: $id, data: $data)
  }
`;

export const UPDATE_SERVICE_PRICE = graphql`
  mutation updateServicePrice($id: ID!, $data: PriceInput!) {
    result: updateServicePrice(id: $id, data: $data)
  }
`;


export const UPDATE_SERVICE_CATALOGUE = graphql`
  mutation uploadServiceCatalogue($file: Upload!,$id: ID!,) {
    result: uploadServiceCatalogue(file: $file, id: $id)
  }
`;



export const REMOVE_SERVICECATALOGUE = graphql`
  mutation deleteServiceCatalogue($url: String!,$id: ID!,) {
    result: deleteServiceCatalogue(url: $url, id: $id)
  }
`;

export const DELETE_SERVICE = graphql`
  mutation deleteService($id: ID!) {
    result: deleteService(id: $id)
  }
`;



export const ADD_CONSULTATION = graphql`
  mutation addConsultation($form_name:FormType!, $data: ConsultationInput!) {
    result: addConsultation(form_name:$form_name, data: $data)
  }
`;

export const VERIFY_CONSULTATION_PAYMENT = graphql`
mutation verifyConsultationPayment($id: String!) {
 response: verifyConsultationPayment(id: $id){
    status
    customer
    mode
    payment_intent
  }
}
`;


export const GET_ALL_CONSULTATION = graphql`
  query consultations {
    consultations {
      id
      name
      email
      contact_number
      address
      business_types
      type_of_cuisine
      menu
      delivery_option
      delivery_service
      customer
      mode
      payment_intent
      createdAt
      updatedAt
    }
  }
`;

export const GET_CONSULTATION_BY_ID = graphql`
  query consultation($id: ID!) {
    consultation(id: $id) {
      id
      name
      email
      contact_number
      address
      business_types
      type_of_cuisine
      menu
      delivery_option
      delivery_service
      customer
      mode
      payment_intent
      createdAt
      updatedAt
    }
  }
`;


export const ADD_NEW_CONTACT = graphql`
  mutation addContact($data: ContactInput!) {
    result: addContact(data: $data)
  }
`;












