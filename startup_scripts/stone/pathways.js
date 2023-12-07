StartupEvents.registry("block", (event) => {

 

  function capfirst (str) {
    str = (str + '').toLowerCase();
    return str.replace(".", ' ').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}
var TFCStoneTypes = ["andesite","basalt","chalk","chert","claystone","conglomerate","dacite","diorite","dolomite","gabbro","gneiss","granite","limestone","marble","phyllite","quartzite","rhyolite","schist","shale","slate"/*"venus","mars","moon", "mercury", "netherrack", "endstone"*/]

var TFCStoneVarient = ["brick","chiseled","cobble","cracked.brick","mossy.brick","mossy.cobble","raw","smooth"]

var PathStyles = ["basket.weave","clover","diamond","dumble","honeycomb","pavement","square"]

PathStyles.forEach(PathStyles => {
  let PathNames = capfirst(`${PathStyles}`)    

TFCStoneVarient.forEach(TFCStoneVarient => {
  let TFCStoneOptionNames = capfirst(`${TFCStoneVarient}`)    
  TFCStoneTypes.forEach(TFCStoneTypes => {
    let displayMaterial = capfirst(`${TFCStoneTypes}`)    

  event.create(`${TFCStoneVarient}.${PathStyles}.pathway.${TFCStoneTypes}`, 'cardinal') // Create a new block

        .displayName(`${TFCStoneOptionNames} ${displayMaterial} ${PathNames} Path`) // Set a custom name
        .soundType("stone") // Set a material (affects the sounds and some properties)
        .hardness(1.0) // Set hardness (affects mining time)
        .resistance(1.0) // Set resistance (to explosions, etc)
        .model(`kubejs:block/stone/${TFCStoneVarient}/pathway/${PathStyles}/${TFCStoneTypes}`)
        .defaultCutout()
        .waterlogged()
        .box(8, 0, 9, 15, 1, 16)
        .box(8, 0, 1, 15, 1, 8)
        .box(0, 0, 9, 7, 1, 16)
        .box(0, 0, 1, 7, 1, 8)
})})
})})