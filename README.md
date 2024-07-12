## ID_STUDENT: 11283009 
 
 ## App Design Decisions and Visual Representations

### 1. Drawer Menu Setup
- Package Selection: We opted for the `react-native-drawer-layout` package because of its straightforward setup and efficiency in generating a drawer interface. It offers a versatile and straightforward API for incorporating a sidebar menu.
- Drawer Organization: The drawer's layout aligns with the structure depicted in your visual guide. It categorizes content into sections like Store, Locations, Blog, Jewelry, Electronics, and Clothing, utilizing `TouchableOpacity` elements for interactivity.
- Header Configuration: The header comprises a menu toggle for accessing the drawer, a brand logo, and icons for searching and accessing the shopping cart. This arrangement follows a typical pattern seen in mobile apps, facilitating quick access to primary navigation functions.

### 2. Displaying Products and Navigating Through Them
- Product Grid Utilization: A `FlatList` component is employed to present products in a neatly arranged two-column format, enhancing readability and organization of product images and descriptions.
- Navigating to Product Details: Each item in the product list is enveloped by a `TouchableOpacity` element. Tapping on a product leads to the `ProductDetailScreen`, carrying along the product specifics and a function to add items to the cart as arguments.

### 3. Managing Data
- Using AsyncStorage for Data Retention: `AsyncStorage` is utilized to maintain the shopping cart's state. This ensures that items remain in the cart even after the app is restarted, improving the overall user experience by preventing loss of cart contents upon closing and reopening the app.
- Loading Cart Contents: Upon initialization, the cart's data is retrieved from `AsyncStorage` via the `useEffect` hook, ensuring the cart reflects any previously stored items.
- Updating Cart Information: The addition of items to the cart triggers an update to both the local state and `AsyncStorage`. This mechanism guarantees that the cart's status is consistently accurate and persists across sessions.

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













