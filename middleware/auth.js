export default ({app,store, error}) => {
  var hasToken = !!app.$apolloHelpers.getToken()
  var role='';
  if(store.getters.user){
    role = store.getters.user.role;
  }

  if (!hasToken || !role || role!='caterers') {
    error({
      errorCode:503,
      message:'You are not allowed to see this'
    })
  }
}

