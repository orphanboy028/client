export const allCategories = [
  {
    id: 1,
    categoryName: "Electronics",
    slug: "electronics",
    subCategories: [
      {
        subId: "s1",
        subName: "Mobile Phones",
        lefCategories: [
          { lefId: "l1", lefName: "Apple" },
          { lefId: "l2", lefName: "Samsung" },
          { lefId: "l3", lefName: "Xiaomi" },
          { lefId: "l4", lefName: "Huawei" },
        ],
      },
      {
        subId: "s2",
        subName: "Laptops",
        lefCategories: [
          {
            lefId: "l5",
            lefName: "Apple",
          },
          {
            lefId: "l6",
            lefName: "Dell",
          },
          {
            lefId: "l7",
            lefName: "HP",
          },
          {
            lefId: "l8",
            lefName: "Lenovo",
          },
        ],
      },
      {
        subId: "s3",
        subName: "Cameras",
        lefCategories: [
          {
            lefId: "l9",
            lefName: "Canon",
          },
          {
            lefId: "l10",
            lefName: "Nikon",
          },
          {
            lefId: "l11",
            lefName: "Sony",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    categoryName: "Clothing",
    slug: "clothing",
    subCategories: [
      {
        subId: "s4",
        subName: "Men's Clothing",
        lefCategories: [
          {
            lefId: "l12",
            lefName: "T-Shirts",
          },
          {
            lefId: "l13",
            lefName: "Jeans",
          },
          {
            lefId: "l14",
            lefName: "Jackets",
          },
          {
            lefId: "l15",
            lefName: "Suits",
          },
        ],
      },
      {
        subId: "s5",
        subName: "Women's Clothing",
        lefCategories: [
          {
            lefId: "l16",
            lefName: "Dresses",
          },
          {
            lefId: "l17",
            lefName: "Tops",
          },
          {
            lefId: "l18",
            lefName: "Pants",
          },
          {
            lefId: "l19",
            lefName: "Skirts",
          },
        ],
      },
      {
        subId: "s6",
        subName: "Kid's Clothing",
        lefCategories: [
          {
            lefId: "l20",
            lefName: "T-Shirts",
          },
          {
            lefId: "l21",
            lefName: "Jeans",
          },
          {
            lefId: "l22",
            lefName: "Dresses",
          },
          {
            lefId: "l23",
            lefName: "Jackets",
          },
        ],
      },
    ],
  },
];
