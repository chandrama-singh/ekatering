
export default ({app,store, error}) => {
  var hasToken = !!app.$apolloHelpers.getToken()
  var role='';
  var isVerified=false;
  if(store.getters.user){
    role = store.getters.user.role;
    isVerified = store.getters.user.isVerified;
  }

  if (!hasToken || !role || role!='caterers' || isVerified==false) {
    error({
      errorCode:503,
      message:'You are not allowed to see this'
    })
  }
}
