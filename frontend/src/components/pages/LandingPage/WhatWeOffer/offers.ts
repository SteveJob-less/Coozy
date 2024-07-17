export type OfferType = {
    title: string;
    imgUrl: string;
    description: string;
    path: string;
};

export const offers = [
    { title: "Ask a Designer", imgUrl: "https://www.unionegeometri.com/wp-content/uploads/2022/06/product-design-750x450.png", description: "Offer in-app consultations with interior designers for a fee, providing users with personalized advice.", path: "/services/ask-a-designer" },
    { title: "Upcycling & Repair", imgUrl: "https://www.jaipurhomeservice.com/upload/carpenter-online-services-in-jaipur.jpg", description: "Offer guides and tutorials within the app on how to upcycle or repair existing furniture, promoting sustainability and resourcefulnes.", path: "/services/upcycling-repair" },
    { title: "Personal Shopper", imgUrl: "https://info.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/service-culture.jpeg", description: "Personal Shopper make your shopping experience seamless and enjoyable whether you’re in-store or in the comfort of your home.", path: "/services/personal-shopper" },
];
