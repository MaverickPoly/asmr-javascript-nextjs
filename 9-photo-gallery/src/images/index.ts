type Image = {
    title: string,
    imageUrl: string,
    createdAt: string,
};


const images: Image[] = [
    {
        title: "Mountains",
        imageUrl: "https://hips.hearstapps.com/hmg-prod/images/ama-dablam-mountain-peak-view-from-chola-pass-royalty-free-image-1623254695.jpg?crop=1xw:1xh;center,top&resize=980:*",
        createdAt: "2025-01-14",
    },
    {
        title: "Valley",
        imageUrl: "https://images.pexels.com/photos/210068/pexels-photo-210068.jpeg?cs=srgb&dl=pexels-pixabay-210068.jpg&fm=jpg",
        createdAt: "2025-01-15",
    },
    {
        title: "Sea",
        imageUrl: "https://thumbs.dreamstime.com/b/ocean-beach-sunrise-colorful-75364306.jpg",
        createdAt: "2025-01-16",
    },
    {
        title: "Forest",
        imageUrl: "https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/master/pass/BlackForest-Germany-GettyImages-147180370.jpg",
        createdAt: "2025-01-18",
    },
];


export default images;
export type {Image};
