const btnLion = document.getElementsByTagName("li")[0].getElementsByTagName("button")[0];
const btnLeopard = document.getElementsByTagName("li")[1].getElementsByTagName("button")[0];
const btnElephant = document.getElementsByTagName("li")[2].getElementsByTagName("button")[0];
const btnRhino = document.getElementsByTagName("li")[3].getElementsByTagName("button")[0];
const btnBuffalo = document.getElementsByTagName("li")[4].getElementsByTagName("button")[0];
const spottedAnimalList = document.getElementById("spotted-animals-list");
const deleteButton = document.getElementById("remove-first-item-button");
const deleteAllButton = document.getElementById("remove-all-button");

const createListItem = Animal => {
	const createItem = document.createElement("li"); // Create a new li element. 
	spottedAnimalList.appendChild(createItem); // Adds the new element to the HTML.
	createItem.classList.add("spotted-animals-list-item"); // Adds the class to the li element. 
	createItem.innerHTML = Animal;
};

const deleteListItem = item => {
	const deleteItem = document.getElementsByClassName("spotted-animals-list-item")[0];
	item = deleteItem.textContent;
	console.log("Deleted:", item);
	spottedAnimalList.removeChild(deleteItem);
}

const deleteAllListItems = item => {
	const lis = document.getElementById("spotted-animals-list").querySelectorAll("li");
	let i = 0;
	while (lis[i]) {
		spottedAnimalList.removeChild(lis[i]);
		item = lis[i].textContent;
		console.log("Deleted:", item);
		i++;
	}
}

btnLion.addEventListener('click', Animal => {
	Animal = btnLion.textContent;
	console.log(Animal);
	createListItem(Animal);
});

btnLeopard.addEventListener('click', Animal => {
	Animal = btnLeopard.textContent;
	console.log(Animal);
	createListItem(Animal);
});

btnElephant.addEventListener('click', Animal => {
	Animal = btnElephant.textContent;
	console.log(Animal);
	createListItem(Animal);
});

btnRhino.addEventListener('click', Animal => {
	Animal = btnRhino.textContent;
	console.log(Animal);
	createListItem(Animal);
});

btnBuffalo.addEventListener('click', Animal => {
	Animal = btnBuffalo.textContent;
	console.log(Animal);
	createListItem(Animal);
});

deleteButton.addEventListener('click', item => deleteListItem(item));

deleteAllButton.addEventListener('click', item => deleteAllListItems(item));