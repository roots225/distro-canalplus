class UserModel {
  id;
  name;
  email;
  emailVerifiedAt;

  constructor(
    id,
    name,
    email,
    emailVerifiedAt
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.emailVerifiedAt = emailVerifiedAt;
  }

  static fromJson(json) {
    return new UserModel(
      json.id,
      json.name,
      json.email,
      json.email_verified_at,
    );
  }
}