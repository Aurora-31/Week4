let products =[
    {
        id: 1001,
        title: "Cat Food, 25lb bag",
        description:
          "A 25 pound bag of <em>irresistible</em>," +
          " organic goodness for your cat.",
        price: 2000,
        image: "Images/catFood.jpg_480Wx480H",
        availableInventory: 10,
        inventory:10,
        rating:3
      },
      {
        id: 1002,
        title: "Cat Food, 25lb bag",
        description:
          "A 25 pound bag of <em>irresistible</em>," +
          " organic goodness for your cat.",
        price: 2100,
        image: "Images/2.jpg",
        availableInventory: 4,
        inventory:4,
        rating:4
      },
      {
        id: 1003,
        title: "Cat Food, 25lb bag",
        description:
          "A 25 pound bag of <em>irresistible</em>," +
          " organic goodness for your cat.",
        price: 2500,
        image: "Images/3.jpg",
        availableInventory: 8,
        inventory:8,
        rating:2
      },
      {
        id: 1004,
        title: "Cat Food, 25lb bag",
        description:
          "A 25 pound bag of <em>irresistible</em>," +
          " organic goodness for your cat.",
        price: 900,
        image: "Images/4.jpg",
        availableInventory: 8,
        inventory:8,
        rating:1
      },
      {
        id: 1005,
        title: "Cat Food, 25lb bag",
        description:
          "A 25 pound bag of <em>irresistible</em>," +
          " organic goodness for your cat.",
        price: 5000,
        image: "Images/5.jpg",
        availableInventory: 1,
        inventory:1,
        rating:5
      }
]

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}