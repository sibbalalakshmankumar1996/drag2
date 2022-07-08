const data_items = document.querySelectorAll(".each-item");
const circle_items = document.querySelectorAll(".circle-shape");

let dataItemsArr = []


const prioritySection = document.getElementById("priority-section");
const thanksSection = document.getElementById("thanks-section");

let draggedItem = null;

for(let i=0; i<data_items.length; i++){
    const item = data_items[i]
    
    //dragstart: It is used to call a function, that specifies what data to be dragged.
    item.addEventListener('dragstart', function(){
        draggedItem = item; 
         setTimeout(function () {
			item.style.display = 'none';
		 }, 0)

    })

    //dragEnd: It occurs when the user has finished dragging an element.
    //when the user leave that dragged element dragend event triggered
    item.addEventListener('dragend', function (e) {
        setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

    for (let j = 0; j < circle_items.length; j ++) {
		const each_circle = circle_items[j];

		each_circle.addEventListener('dragstart', function(){
			let eachCircleId = each_circle.id;
			let dropItem = document.getElementById(eachCircleId);
			console.log(dropItem);
			console.log(dropItem.textContent);
			//console.log(dropItem.textContent);
			if(dropItem.textContent!==""){
				dropItem.style.borderWidth="2px";
			}
			
		})

		let eachCircleId = each_circle.id;
			let dropItem = document.getElementById(eachCircleId);
			console.log(dropItem.textContent);

        //dragOver: It specifies where the dragged data can be dropped.
		each_circle.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		
		//drop: It specifies where the drop has occurred at the end of the drag operation.
		each_circle.addEventListener('drop', function (e) {
			let draggedItemId = draggedItem.id; 

		    dataItemsArr.push(draggedItemId);
			let uniqueArr = [...new Set(dataItemsArr)];
			if(uniqueArr.length===10){
				prioritySection.classList.add("d-none");
                thanksSection.classList.add("d-flex", "flex-column", "justify-content-around");
			}
			this.append(draggedItem);

			let eachCircleId = each_circle.id;
			let dropItem = document.getElementById(eachCircleId);
			console.log(dropItem);
			console.log(dropItem.textContent);
			if(dropItem.textContent!==""){
				dropItem.style.borderWidth="0px";
			}
			else{
				dropItem.style.borderWidth="2px";
			}

			let draggedEl = document.getElementById(draggedItemId);
			draggedEl.classList.add("text-center");
			draggedEl.style.backgroundColor = "transparent";
		 });
	}
}

