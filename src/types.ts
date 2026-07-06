export interface WindowStickerOption {
  code: string;
  name: string;
  price: number;
}

export interface WindowStickerData {
  vin: string;
  year: number;
  make: string; // "Porsche"
  model: string; // e.g. "911", "Taycan", "Panamera", "Cayenne", "Macan", "718"
  trim: string; // e.g. "GT3 RS", "Turbo S", "Carrera GTS", "S", "Base"
  exteriorColor: {
    name: string;
    code: string;
  };
  interiorColor: {
    name: string;
    material: string;
  };
  engine: string; // e.g. "4.0-Liter Naturally Aspirated Boxer 6"
  transmission: string; // e.g. "7-Speed Porsche Doppelkupplung (PDK)"
  baseMlrp: number; // Base MSRP
  options: WindowStickerOption[];
  deliveryCharge: number; // e.g. 1650
  totalMlrp: number; // Base + Options + Delivery
  fuelEconomy: {
    city: number;
    highway: number;
    combined: number;
    annualCost: number;
  };
  standardEquipment: {
    category: string;
    items: string[];
  }[];
  portOfEntry: string;
  dealerName: string;
  dealerCityState: string;
}

export interface LookupRequest {
  type: 'vin' | 'plate' | 'ymm';
  vin?: string;
  plate?: string;
  state?: string;
  year?: number;
  model?: string;
  trim?: string;
}
