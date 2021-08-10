export class DistributorModel {
  id;
  distributorNumber;
  name;
  localisation;
  city;
  latitude;
  longitude;
  createdAt;
  updatedAt;

  constructor(
    id,
    distributorNumber,
    name,
    localisation,
    city,
    latitude,
    longitude,
    createdAt,
    updatedAt
  ) {
    this.id = id;
    this.distributorNumber = distributorNumber;
    this.name = name;
    this.localisation = localisation;
    this.city = city;
    this.latitude = latitude;
    this.longitude = longitude;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static fromJson(json) {
    return new DistributorModel(
      json.id,
      json.distributor_number,
      json.name,
      json.localisation,
      json.city,
      parseFloat(json.latitude),
      parseFloat(json.longitude),
      json.created_at,
      json.updated_at
    );
  }
}