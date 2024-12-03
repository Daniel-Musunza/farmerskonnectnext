
const blogs = [
    {
        id: "1",
        title: "THE FUTURE OF CANOLA FARMING",
        description:
            "Discover innovative techniques transforming canola farming for higher yields.",
        mainContent: 
            "Dive into the advancements in canola farming, from sustainable practices to technological innovations, ensuring better yields and healthier crops.",
        dateUpdated: "Friday, 4 October, 2024",
        buttonText: "LEARN MORE",
        img: "https://canolainfo.org/media/files/canola/images/canola-field.jpg",
    },
    {
        id: "2",
        title: "CANOLA: A VERSATILE CROP",
        description:
            "Explore the wide-ranging uses of canola, from cooking oil to biofuel production.",
        mainContent: 
            "Canola is not just a crop but a resource for the future. Learn how its versatility makes it an essential component in the food and energy sectors.",
        dateUpdated: "Friday, 4 October, 2024",
        buttonText: "EXPLORE",
        img: "https://www.capitalfm.co.ke/business/files/2024/05/WhatsApp-Image-2024-05-30-at-14.51.20-e1717069949453.jpeg",
    },
    {
        id:" 3",
        title: "HEALTH BENEFITS OF CANOLA OIL",
        description:
            "Understand why canola oil is one of the healthiest choices for cooking.",
        mainContent: 
            "Canola oil is rich in omega-3 and low in saturated fats. Discover how it contributes to heart health and enhances culinary experiences.",
        dateUpdated: "Friday, 4 October, 2024",
        buttonText: "READ MORE",
        img: "https://canadianfoodfocus.org/wp-content/uploads/2021/11/how-to-make-canola-oil.jpg",
    },
    {
        id:" 4",
        title: "SUSTAINABLE CANOLA FARMING",
        description:
            "Learn how sustainable farming practices benefit both farmers and the environment.",
        mainContent: 
            "Discover the eco-friendly methods employed in canola farming that reduce carbon footprints while improving soil health and crop productivity.",
        dateUpdated: "Friday, 4 October, 2024",
        buttonText: "DISCOVER",
        img: "https://learncanola.com/wp-content/uploads/2022/05/Young-canola-plants-scaled.jpg",
    }
];

export const getBlogs = async (): Promise<any> => {
    try {

        return blogs;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw new Error("Failed to fetch blogs.");
    }
};

