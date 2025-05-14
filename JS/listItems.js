$(document).ready(function() {
    let sortedItems = [];

    fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/")
        .then(function(response){
            return response.json();
        })
        .then(function(result){
            console.log(result);

            let ItemList = result.data;
            console.log(ItemList);
            

            //Para que salgan en orden
            ItemList.sort(function(a, b) {
                return a.id - b.id;
            });

            sortedItems = ItemList;

            ItemList.forEach(function(item){ 
                renderItemCard(item);
            });
            
            $("#loader").hide();
        })
        .then(function() {
            $(".card-creature > img").hover(
                function() {                    
                    $(this).next().css("opacity", "1");
                }, function() {
                    $(this).next().css("opacity", "0");
                    
                }
            );
        })
        .then(function(){
            $(".card-creature > img").click(function(){
                $("#overlay, #cardFloat").fadeIn();
                let creatureData = $(this).data('itemDetails');
                console.log(creatureData);
                
                renderFloatCard(creatureData);
            });
            $("#overlay").click(function(){
                $("#overlay, #cardFloat").fadeOut();
                
            })
        })
        .catch(function(err){
            console.log(err);
            
        });
        
        


    //Función que renderiza los datos de los Items
    function renderItemCard(itemDetails){
            let itemHTML = `
       
            <div id="${itemDetails.id }" class="card-creature col d-flex flex-column align-items-center ${itemDetails.category}">
                    <img src="${itemDetails.image}" class="border border-3 border-info p-2" alt="...">
                    <h4 class="text-info text-capitalize">${itemDetails.name}</h4>
            </div>
        
        `;
        $("#item-cont").append(itemHTML);

        $(`#${itemDetails.id} img`).data('itemDetails', itemDetails);
    }

    function renderFloatCard(cardDetails){
        $("#cardFloat").empty();

        let lootItems = "";
        let lootNameTitle = "";
        if (!cardDetails.drops || cardDetails.drops.length === 0) {
            // If there are no drops
            if (cardDetails.edible && cardDetails.cooking_effect && cardDetails.cooking_effect !== "none") {
                // Show cooking effect if edible and has a cooking effect
                lootNameTitle = `Cooking Effects`
                lootItems = `<h5 class="col text-capitalize">${cardDetails.cooking_effect}</h5>`;
            } else {
                lootNameTitle = `Droppables`
                lootItems = "<h5>None</h5>";
            }
        } else {
            // If it has drops
            lootNameTitle = `Loot`
            cardDetails.drops.forEach(drop => {
                lootItems += `<h5 class="col text-capitalize">${drop}</h5>`;
            });
        }

        let cardHTML = `<div class="d-flex flex-column align-items-center border border-3 border-info p-4 rounded-4 text-info gap-4">
                <div class=" img_descrip-cont d-flex justify-content-center align-items-center gap-4">
                    <div class="d-flex flex-column gap-2">
                        <div class="d-flex flex-row justify-content-between gap-4 ">
                            <h4>${cardDetails.id}</h4>
                            <h4 class="text-capitalize">${cardDetails.name}</h4>
                        </div>
                        <div>
                            <img class="rounded-4 border border-3 border-info p-2" style="box-shadow: 0 0 10px 4px rgba(0, 198, 255, 0.6);" src="${cardDetails.image}"  alt="">
                        </div>
                    </div>
                    <div class="d-flex flex-column gap-2">
                        <h4>Description</h4>
                        <p>${cardDetails.description}</p>
                    </div>
                </div>
                <div class="d-flex flex-column gap-2 justify-content-center align-items-center">
                    <h4 class="border-bottom border-info border-3 justify-self-center" style="width: 100%;">${lootNameTitle}</h4>
                    <div class="loot-cont scroll-box overflow-auto p-3">
                        <div class="container row justify-content-center">
                            ${lootItems}
                        
                        </div>
                    </div>
                </div>
            </div>
        
        `
        $("#cardFloat").append(cardHTML)
    }

})