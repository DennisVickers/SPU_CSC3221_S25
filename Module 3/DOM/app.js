// Demonstrating window and document object properties
console.log("Window inner width:", window.innerWidth);
console.log("Document title:", document.title);

// Selecting elements using various methods
const input = document.getElementById('newItem'); // getElementById
const addBtn = document.querySelector('#addItemBtn'); // querySelector
const clearBtn = document.getElementsByTagName('button')[1]; // getElementsByTagName
const highlightBtn = document.getElementById('highlightBtn');
const list = document.querySelector('#itemList');
const statusMsg = document.getElementById('statusMsg');

// Add item to the list
addBtn.addEventListener('click', function (e) {
   e.preventDefault(); // prevent default behavior

   const value = input.value.trim();
   if (!value) {
      statusMsg.textContent = "Please enter a value.";
      return;
   }

   // Create new list item (createElement)
   const newItem = document.createElement('li');
   newItem.textContent = value;

   // Add click listener to remove item on click (addEventListener, remove())
   newItem.addEventListener('click', function () {
      list.removeChild(newItem); // removeChild
      statusMsg.textContent = `Removed "${value}" from the list.`;
   });

   // Replace first item if it exists (replaceChild)
   if (list.children.length > 5) {
      const oldItem = list.children[0];
      list.replaceChild(newItem, oldItem);
      statusMsg.textContent = `Replaced first item with "${value}".`;
   } else {
      list.appendChild(newItem);
      statusMsg.textContent = `Added "${value}" to the list.`;
   }

   input.value = '';
});

// Clear all list items
clearBtn.addEventListener('click', () => {
   while (list.firstChild) {
     list.removeChild(list.firstChild); // removeChild in loop
   }
   statusMsg.textContent = "All items cleared.";
});

highlightBtn.addEventListener('click', () => {
   // Use querySelectorAll to get all <li> elements
   const items = document.querySelectorAll('#itemList li');
   items.forEach((item, index) => {
     item.style.backgroundColor = index % 2 === 0 ? 'lightyellow' : 'skyblue';
   });

  statusMsg.textContent = `Highlighted ${items.length} item(s).`;
});