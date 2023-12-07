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

    event.create(`${TFCStoneVarient}.arrowslit.${TFCStoneTypes}`, 'cardinal') // Create a new block
    .displayName(`${TFCStoneOptionNames} ${displayMaterial} Arrowslit`) // Set a custom name
    .soundType("stone") // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .model(`kubejs:block/stone/${TFCStoneVarient}/arrowslit/${TFCStoneTypes}`)

    .defaultCutout()
    .waterlogged()
    
    .box(9, 0, 15, 16, 16, 16)
    .box(0, 0, 15, 7, 16, 16)
    .box(13, 0, 8, 16, 16, 15)
    .box(0, 0, 8, 3, 16, 15)
    .box(3, 0, 12.5, 4.5, 16, 15)
    .box(4.5, 0, 14, 5.5, 16, 15)
    .box(11.5, 0, 12.5, 13, 16, 15)
    .box(10.5, 0, 14, 11.5, 16, 15) 



  })})
})