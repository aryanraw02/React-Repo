import React from "react";
import ReactDOM from "react-dom/client";

// ## Components in our app
/**
 * Header
 *   - LOGO
 *   - Nav Items
 *
 * Body
 *   - Search Bar
 *   - Restaurant Container
 *      - Restaurant Card
 *         - Image
 *         - Name of Restaurant
 *         - Star rating
 *         - Cusines
 *
 * Footer
 *   - Copyright
 *   - Links
 *   - Address
 *   - Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="data:image/png;base64,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"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  // for cleaning the code we can also use destructuring as below it is optional chaning
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} </h4>
      <h4>{costForTwo}</h4>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

const reslist = [
  {
    info: {
      id: "47595",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/0ec730c6-374f-4b83-9c3b-f8f50af6ad22_47595.JPG",
      locality: "Gopalbari",
      areaName: "Gopalbari",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "8.8K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/pizza-hut-gopalbari-rest47595",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "45977",
      name: "Burger Farm",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/10/c8ea5eba-52f8-4aac-a8f8-a68bc1667265_45977.JPG",
      locality: "Azad Marg",
      areaName: "C Scheme",
      costForTwo: "₹200 for two",
      cuisines: [
        "American",
        "Continental",
        "Italian-American",
        "Snacks",
        "Grill",
        "Beverages",
        "Bakery",
        "Desserts",
        "Barbecue",
      ],
      avgRating: 4.4,
      parentId: "4660",
      avgRatingString: "4.4",
      totalRatingsString: "84K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹84",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "2.9K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/burger-farm-azad-marg-c-scheme-rest45977",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "735127",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Sodala",
      areaName: "Vivek Vihar",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.2,
      parentId: "61955",
      avgRatingString: "4.2",
      totalRatingsString: "3.5K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.3",
          ratingCount: "79",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/chinese-wok-sodala-vivek-vihar-rest735127",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "698741",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/12/0e1c8f70-2e93-44f9-9b96-b81a01921b34_698741.JPG",
      locality: "SAHAKAR MARG",
      areaName: "LAL KOTHI",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.4,
      parentId: "11633",
      avgRatingString: "4.4",
      totalRatingsString: "3.2K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "40-50 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/olio-the-wood-fired-pizzeria-sahakar-marg-lal-kothi-rest698741",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "464295",
      name: "Brot Company",
      cloudinaryImageId: "e7234ada11492135b66f3761a7680ede",
      locality: "Civil Lines",
      areaName: "Civil Lines",
      costForTwo: "₹600 for two",
      cuisines: [
        "Italian-American",
        "Italian",
        "Desserts",
        "Pizzas",
        "Continental",
        "Bakery",
        "Chinese",
        "Pastas",
      ],
      avgRating: 4.2,
      parentId: "278801",
      avgRatingString: "4.2",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "543",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/brot-company-civil-lines-rest464295",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "57722",
      name: "Dmb(Doodh Misthan Bhandar)",
      cloudinaryImageId: "mwxhhhmz9gdap5zrcojj",
      locality: "Golpark",
      areaName: "Bani Park",
      costForTwo: "₹300 for two",
      cuisines: [
        "Navratri Special",
        "Thalis",
        "Chinese",
        "Continental",
        "Snacks",
        "Punjabi",
      ],
      avgRating: 4.6,
      parentId: "7093",
      avgRatingString: "4.6",
      totalRatingsString: "139K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 22:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "6.3K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/dmb-doodh-misthan-bhandar-golpark-bani-park-rest57722",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "764055",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/4/4086b4b7-eb7e-4ac6-b6e4-ed249a17fb23_764055.JPG",
      locality: "C Scheme",
      areaName: "C Scheme",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.6,
      parentId: "1040",
      avgRatingString: "4.6",
      totalRatingsString: "2.6K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "240",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/theobroma-c-scheme-rest764055",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "502672",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/fa20f649-e582-44eb-a23a-b2a8489b5140_502672.JPG",
      locality: "Crystal Palm Mall",
      areaName: "Bais Godam",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.6,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.6",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/the-belgian-waffle-co-crystal-palm-mall-bais-godam-rest502672",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "249749",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/f2ac1fad-bff8-4a78-bc9b-f65567f93906_249749.JPG",
      locality: "Civil Lines",
      areaName: "Civil Lines",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "24K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 02:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹114",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "1.5K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/mcdonalds-civil-lines-rest249749",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "45216",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/b7988d0f-d8e5-4e02-8e8b-96dbac785073_45216.jpg",
      locality: "C Scheme",
      areaName: "C Scheme",
      costForTwo: "₹200 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.3,
      parentId: "2",
      avgRatingString: "4.3",
      totalRatingsString: "16K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 04:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "1.4K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/subway-c-scheme-rest45216",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "706724",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "5fe4444a065b60c4fe39ef975222c12b",
      locality: "C Scheme",
      areaName: "Ahinsa Circle",
      costForTwo: "₹400 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Beverages",
        "Fast Food",
        "Italian",
        "Desserts",
      ],
      avgRating: 4,
      parentId: "4961",
      avgRatingString: "4.0",
      totalRatingsString: "1.9K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 01:12:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/la-pinoz-pizza-c-scheme-ahinsa-circle-rest706724",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "262456",
      name: "The Lama",
      cloudinaryImageId: "dhulhzcsuama2zguun0i",
      locality: "Durgadas Colony",
      areaName: "C Scheme",
      costForTwo: "₹1200 for two",
      cuisines: ["Asian", "Chinese", "Indian", "Biryani"],
      avgRating: 4.5,
      parentId: "210773",
      avgRatingString: "4.5",
      totalRatingsString: "1.8K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/the-lama-durgadas-colony-c-scheme-rest262456",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "697439",
      name: "Cheesecake & co.",
      cloudinaryImageId: "b318c0b4bc2169550145ace1d6e791a2",
      locality: "Basement Floor",
      areaName: "Lal Kothi",
      costForTwo: "₹350 for two",
      cuisines: ["Indian"],
      avgRating: 4.7,
      veg: true,
      parentId: "387417",
      avgRatingString: "4.7",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/cheesecake-and-co-basement-floor-lal-kothi-rest697439",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "620980",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/ea21024e-6cf4-445d-81ae-e68d3c2f28c9_620980.JPG",
      locality: "Sawai Jai Singh Road",
      areaName: "Sindhi Camp",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.4,
      parentId: "2456",
      avgRatingString: "4.4",
      totalRatingsString: "1.7K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹55",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/dominos-pizza-sawai-jai-singh-road-sindhi-camp-rest620980",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "642906",
      name: "Bonkey'S",
      cloudinaryImageId: "531d428efa14b3c6891c185e9d08227f",
      locality: "C Scheme",
      areaName: "Lal Kothi",
      costForTwo: "₹600 for two",
      cuisines: ["Pizzas", "Italian", "Desserts"],
      avgRating: 4.4,
      parentId: "412773",
      avgRatingString: "4.4",
      totalRatingsString: "685",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "1.2K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/bonkeys-c-scheme-lal-kothi-rest642906",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "44501",
      name: "Tan-Sukh By Kanha",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/8/711a36f2-3217-46ab-b644-888f33f0d57b_44501.jpg",
      locality: "C Scheme",
      areaName: "C Scheme",
      costForTwo: "₹200 for two",
      cuisines: [
        "Thalis",
        "Chinese",
        "Mughlai",
        "Chaat",
        "Punjabi",
        "Desserts",
        "Snacks",
        "Rajasthani",
        "Tandoor",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "231081",
      avgRatingString: "4.5",
      totalRatingsString: "8.8K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-North%20Indian.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "575",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/tan-sukh-by-kanha-c-scheme-rest44501",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "44358",
      name: "Muhammadi Palace",
      cloudinaryImageId: "ad17118c58cc1f575db3df2fed9c7182",
      locality: "Chandpole Bazar",
      areaName: "Sindhi Camp",
      costForTwo: "₹300 for two",
      cuisines: ["Mughlai"],
      avgRating: 4.3,
      parentId: "6306",
      avgRatingString: "4.3",
      totalRatingsString: "33K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹19",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "11K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/muhammadi-palace-chandpole-bazar-sindhi-camp-rest44358",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "90186",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/9c75fd37-f428-4a2f-9beb-ba1f2e2cf391_90186.jpg",
      locality: "Amrapali Marg",
      areaName: "Vaishali Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "45K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/burger-king-amrapali-marg-vaishali-nagar-rest90186",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "45809",
      name: "Falahaar & Kota Kachori",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/26/f4fd55eb-4cf2-40e5-b299-6ec434ff0691_45809.jpg",
      locality: "C Scheme",
      areaName: "C Scheme",
      costForTwo: "₹200 for two",
      cuisines: ["Snacks", "Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "7019",
      avgRatingString: "4.5",
      totalRatingsString: "34K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 21:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Kachori.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Kachori.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹29",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "600",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/falahaar-and-kota-kachori-c-scheme-rest45809",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "590905",
      name: "Roastery Coffee House",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/20/d860ee40-6155-428b-983f-b59585619fa7_590905.jpg",
      locality: "C Scheme",
      areaName: "C Scheme",
      costForTwo: "₹700 for two",
      cuisines: [
        "American",
        "European",
        "Italian",
        "Desserts",
        "Continental",
        "Pizzas",
        "Beverages",
      ],
      avgRating: 4.7,
      parentId: "170319",
      avgRatingString: "4.7",
      totalRatingsString: "753",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "1.5K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-902a7a8d-a9cb-452e-b318-42dc94cbc85f",
    },
    cta: {
      link: "https://www.swiggy.com/city/jaipur/roastery-coffee-house-c-scheme-rest590905",
      type: "WEBLINK",
    },
  },
];

// not using keys (not best practice) <<<<<< index as key  <<<<<<<<<<< unique id as key (best practice)

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants..."
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="res-container">
        {reslist.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppComponent = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
