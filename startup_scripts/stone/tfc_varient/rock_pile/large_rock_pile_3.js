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

    event.create(`${TFCStoneVarient}.rock.pile.3.${TFCStoneTypes}`, 'cardinal') // Create a new block
    .displayName(`${displayMaterial} Large ${TFCStoneOptionNames} Rock Pile 3`) // Set a custom name
    .soundType("stone") // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .model(`kubejs:block/tfc/stone/${TFCStoneVarient}/large_rock_pile_3/${TFCStoneTypes}`)

    .renderType('cutout')
    .box(13, -3.5, 0.5, 23.5, 7, 8.5)
    .box(-11.5, -3.5, 12, -1, 2, 22.5)
    .box(17, -4.1935, 2.1464, 20, 2.3065, 10.6464)
    .box(0.1935, -2, 8.1464, 6.6935, 1, 16.6464)
    .box(17.1464, -1.5, 1.1464, 24.6464, 3, 9.6464)
    .box(1.5, 1.6935, 7.6464, 4.5, 8.1935, 16.1464)
    .box(1.5, -3.5, -6.5, 12, 7, 1.5)
    .box(-5, -3.5, 0.5, 5.5, 7, 8.5)
    .box(14.5, 3.1935, 7.6464, 17.5, 9.6935, 16.1464)
    .box(10.6768, 6, -1.0732, 17.1768, 10.5, 4.9268)
    .box(1.6768, 6, -1.0732, 8.1768, 10.5, 4.9268)
    .box(13, -4, 6.5, 23.5, 4, 17)
    .box(-6.5, -4, 14, 4, 4, 24.5)
    .box(-4, -1, 11.5, 6.5, 7, 22)
    .waterlogged()
})
})})

	