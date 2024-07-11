## ID_STUDENT: 11283009 

  ## Design Choices and  Screenshots of the app
  
  # 1. Drawer Menu Implementation
             Package Choice: The react-native-drawer-layout package is chosen for its simplicity and effectiveness in creating a drawer layout.
                              It provides a flexible and easy-to-use API for integrating a side menu.
             Drawer Structure: The drawer content is designed to match the structure shown in your provided image.
                                 It includes sections for Store, Locations, Blog, Jewellery, Electronic, and Clothing, each represented by a TouchableOpacity component for interaction.
             Header Layout: The header contains a menu button to open the drawer, a logo, and additional icons for search and cart navigation. 
                                   This mirrors a common design pattern for mobile applications, providing easy access to the main navigation features.
  # 2. Product Listing and Navigation
                  FlatList for Products: The FlatList component is used to display the list of products in a two-column grid.
                  This ensures a clean and organized layout for the product images and details.
                  Product Details Navigation: Each product in the list is wrapped in a TouchableOpacity component.
                  When a product is tapped, it navigates to the ProductDetailScreen, passing the product details and the addToCart function as parameters.
  # 3. Data Storage
          AsyncStorage for Persistence: AsyncStorage is used to persist the cart data.
     This allows the cart items to be saved across app sessions, providing a better user experience as the cart contents are not lost when the app is closed and reopened.
          Loading Cart Data: On component mount, the cart data is loaded from AsyncStorage using the useEffect hook.
      This ensures the cart state is initialized with any previously saved items.
          Updating Cart Data: When a product is added to the cart, the addToCart function updates the local state and saves the new cart data to AsyncStorage.
      This ensures the cart is always up-to-date and the changes persist.
   ## Screenshots from the app 
  ![image](https://github.com/K-Blexx20/rn-assignment7-11283009/assets/150761912/5f00de2e-af3c-49d5-8280-40182a8224d6)
  ![image](https://github.com/K-Blexx20/rn-assignment7-11283009/assets/150761912/5808c1ec-b866-414a-82d3-4b8b03495b64)
  ![image](https://github.com/K-Blexx20/rn-assignment7-11283009/assets/150761912/61fe0893-b26f-4185-9cbe-fdf9a5222911)
  ![image](https://github.com/K-Blexx20/rn-assignment7-11283009/assets/150761912/15c35a29-eedc-45ae-929f-0c136e0f0296)
  ![image](https://github.com/K-Blexx20/rn-assignment7-11283009/assets/150761912/3a120969-0e80-48a4-8555-45ec212ec146)
  ![image](https://github.com/K-Blexx20/rn-assignment7-11283009/assets/150761912/02e1452a-0813-4e2b-b814-bcf8be5aadec)
  ![image](https://github.com/K-Blexx20/rn-assignment7-11283009/assets/150761912/90a8c7ae-64c0-4791-99fd-5ffd1d1dfaa8)
  ![image](https://github.com/K-Blexx20/rn-assignment7-11283009/assets/150761912/35b0f9d9-ed08-4a86-8a74-cb89adc002a7)
  ![image](https://github.com/K-Blexx20/rn-assignment7-11283009/assets/150761912/e03cc0da-e72d-45b9-9ea5-992ac300660d)
  ![image](https://github.com/K-Blexx20/rn-assignment7-11283009/assets/150761912/255da0de-b8f2-4edd-bb1b-e40887c5bf47)
  ![image](https://github.com/K-Blexx20/rn-assignment7-11283009/assets/150761912/12aa9ce9-5b16-4d18-9a14-83b8cb0698a2)
  ![image](https://github.com/K-Blexx20/rn-assignment7-11283009/assets/150761912/b46b1227-e318-4878-95be-a33f88fa2faf)
  ![image](https://github.com/K-Blexx20/rn-assignment7-11283009/assets/150761912/4a0f9223-feee-491e-b7c5-d6a210edf58d)
  ![image](https://github.com/K-Blexx20/rn-assignment7-11283009/assets/150761912/8873eff1-1664-4640-997d-b5d400ef3909)
  ![image](https://github.com/K-Blexx20/rn-assignment7-11283009/assets/150761912/8b4577aa-d785-43f1-ab84-6d220f784908)
  ![image](https://github.com/K-Blexx20/rn-assignment7-11283009/assets/150761912/fa283f41-0da2-4a2c-9a01-bfc6e9161179)













