StartupEvents.registry("block", (event) => {

 

  function capfirst (str) {
    str = (str + '').toLowerCase();
    return str.replace(".", ' ').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}
var TFCStoneTypes = ["andesite","basalt","chalk","chert","claystone","conglomerate","dacite","diorite","dolomite","gabbro","gneiss","granite","limestone","marble","phyllite","quartzite","rhyolite","schist","shale","slate"/*"venus","mars","moon", "mercury", "netherrack", "endstone"*/]

var TFCStoneVarient = ["aged.brick", "cobble.mortor", "drystone", "brick","chiseled","cobble","cracked.brick","mossy.brick","mossy.cobble","raw","smooth"]


TFCStoneVarient.forEach(TFCStoneVarient => {
  let TFCStoneOptionNames = capfirst(`${TFCStoneVarient}`)    
  TFCStoneTypes.forEach(TFCStoneTypes => {
    let displayMaterial = capfirst(`${TFCStoneTypes}`)  

    event.create(`${TFCStoneVarient}.rock.pile.4.${TFCStoneTypes}`, 'cardinal') // Create a new block
    .displayName(`${displayMaterial} Large ${TFCStoneOptionNames} Rock Pile 4`) // Set a custom name
    .soundType("stone") // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .model(`kubejs:block/tfc/stone/${TFCStoneVarient}/large_rock_pile_4/${TFCStoneTypes}`)

    .renderType('cutout')
    .box(-7, -2, 16, -2.5, 1, 21)
    .box(12, -2.5, 5.5, 20, 2.5, 12.5)
    .box(16.8737, -2.5, 8.052299, 21.3737, 0.5, 13.5523)
    .box(8, -5, 16, 16, 0, 23)
    .box(0.8737, -1, 10.0523, 5.3737, 2, 15.5523)
    .box(3.5, 0, 13, 11.5, 5, 20)
    .box(-9, -8, 19, -1, -1, 24)
    .box(12, -4.5, 12, 20, 0.5, 19)
    .box(6, -4.5, 9, 14, 0.5, 16)
    .waterlogged()
})
})})

	