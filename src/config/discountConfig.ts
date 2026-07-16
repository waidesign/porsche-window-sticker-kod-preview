export interface DiscountConfig {
  campaignName: string;
  discountText: string;
  code: string;
  percentage: number;
}

// You can edit this object to update the discount banner's coupon code, campaign text, or percentage.
export const defaultDiscount: DiscountConfig = {
  campaignName: "Presidents Day Sales",
  discountText: "20% off on reports & build sheet.",
  code: "PREZ20",
  percentage: 20
};
