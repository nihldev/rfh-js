export interface VendorProductCode {
  id: string;
  vendorId: string;
}

export interface ProductLine {
  id: string;
  name: string;
}

export interface SatCatalogItem {
  id: string;
  code: string;
  description: string;
}

export interface Units {
  id: string;
  name: string;
}

export interface Price {
  id: string;
  date: Date;
  productId: string;
  priceInCents: Number;
}

export interface Product {
  id: string;
  canonicName: string;
  shortName: string;
  knownNames: string[];
  internalCode: string;
  productLines: string[];
  satCatalogOptions: string[];
  unitId: string;
  vendorProductCodes: VendorProductCode[];
}
