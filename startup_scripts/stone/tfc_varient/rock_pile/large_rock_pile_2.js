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

    event.create(`${TFCStoneVarient}.rock.pile.2.${TFCStoneTypes}`, 'cardinal') // Create a new block
    .displayName(`${displayMaterial} Large ${TFCStoneOptionNames} Rock Pile 2`) // Set a custom name
    .soundType("stone") // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .model(`kubejs:block/tfc/stone/${TFCStoneVarient}/large_rock_pile_2/${TFCStoneTypes}`)

    .renderType('cutout')
    .box(4.5, -0.5, 5.5, 15, 7.5, 16)
    .box(18.1464, -2.5, 0.1464, 25.6464, 2, 8.6464)
    .box(5.5, -3, 15, 16, 2.5, 25.5)
    .box(0.5, -3, 3, 11, 2.5, 13.5)
    .box(6.6935, -2, 14.6464, 13.1935, 1, 23.1464)
    .box(4.1768, -3, -9.0732, 10.6768, 1.5, -3.0732)
    .box(17, -4.1935, 2.1464, 20, 2.3065, 10.6464)
    .box(0.1935, -2, 8.146399, 6.6935, 1, 16.6464)
    .box(7.7338, -0.9833, -9.3967, 13.2338, 2.0167, -3.3967)
    .box(17.1464, -1.5, 1.1464, 24.6464, 3, 9.6464)
    .box(21.6935, 0, 2.1464, 28.1935, 3, 10.6464)
    .waterlogged()
})
})})

	