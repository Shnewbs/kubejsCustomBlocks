StartupEvents.registry("block", (event) => {

 

  function capfirst (str) {
    str = (str + '').toLowerCase();
    return str.replace(".", ' ').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}
var TFCStoneTypes = ["andesite","basalt","chalk","chert","claystone","conglomerate","dacite","diorite","dolomite","gabbro","gneiss","granite","limestone","marble","phyllite","quartzite","rhyolite","schist","shale","slate"/*"venus","mars","moon", "mercury", "netherrack", "endstone"*/]

var TFCStoneVarient = ["brick","chiseled","cobble","cracked.brick","mossy.brick","mossy.cobble","raw","smooth"]


TFCStoneVarient.forEach(TFCStoneVarient => {
  let TFCStoneOptionNames = capfirst(`${TFCStoneVarient}`)    
  TFCStoneTypes.forEach(TFCStoneTypes => {
    let displayMaterial = capfirst(`${TFCStoneTypes}`)  

    event.create(`${TFCStoneVarient}.rock.pile.${TFCStoneTypes}`, 'cardinal') // Create a new block
    .displayName(`${displayMaterial} Large ${TFCStoneOptionNames} Rock Pile`) // Set a custom name
    .soundType("stone") // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .model(`kubejs:block/stone/${TFCStoneVarient}/large_rock_pile/${TFCStoneTypes}`)

    .renderType('cutout')
    .box(1.5, -3, 2.5, 8.5, 1.5, 13)
    .box(5.5, -10, 2.5, 16.5, 0.5, 9.5)
    .box(-7, -6.5, 11, 0, -2, 21.5)
    .box(11.5, -5.5, 13.5, 22, -1, 20.5)
    .box(9, -5.5, 17, 19.5, -1, 24)
    .box(15.5, -3, 18.5, 22.5, 1.5, 25.5)
    .box(15.5, -4, 15.5, 26, 0.5, 22.5)
    .box(7.5, -1.5, 0, 18, 3, 7)
    .waterlogged()
})
})})

	