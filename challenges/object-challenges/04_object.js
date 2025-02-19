// You just need to implement the removePassword function
function removePassword(user) {
  // Remove password property
  if ("password" in user) {
    delete user.password;
  }
  return user;
}
