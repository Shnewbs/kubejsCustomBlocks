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

    event.create(`${TFCStoneVarient}.arch.small.half.${TFCStoneTypes}`, 'cardinal') // Create a new block
    .displayName(`${TFCStoneOptionNames} ${displayMaterial} Small Arch Half`) // Set a custom name
    .soundType("stone") // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .model(`kubejs:block/stone/${TFCStoneVarient}/arch_small_half/${TFCStoneTypes}`)
    .defaultCutout()
    .waterlogged()

    .box(-2.5, -0.006, 8.03, 0, 15.994, 15.975)
    .box(0, 4, 8, 3, 16, 16)
    .box(13, 5, 8, 16, 16, 16)
    .box(16, -0.009, 8.05, 18.5, 15.991, 15.95)
    .box(6.2, 9.8, 14.6, 10.2, 12.8, 16.85)
    .box(6.2, 9.65, 7.15, 10.2, 12.65, 9.4)
    .box(3, 6.05, 8, 13, 16, 16)



  })})
})