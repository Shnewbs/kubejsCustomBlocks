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


    event.create(`${TFCStoneVarient}.small.rock.pile.${TFCStoneTypes}`, 'cardinal') // Create a new block
    .displayName(`${displayMaterial} Small ${TFCStoneOptionNames} Rock Pile`) // Set a custom name
    .soundType("stone") // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .model(`kubejs:block/stone/${TFCStoneVarient}/rock_pile_1/${TFCStoneTypes}`)

    .renderType('cutout')
        .box(3, 0, 8, 5, 2, 12)
        .box(3.4999999925494194, 0, 12, 6.499999992549419, 1.5000000074505806, 13)
        .box(7, 0, 7, 8, 0.4999999925494194, 11)
        .box(3, 0, 6, 6, 1, 8)
        .box(2, 0, 7, 3, 1, 9)
        .box(2, 0, 9, 3, 1.4999999925494194, 11)
        .box(4.499999992549419, 1, 7, 6, 1.4999999925494194, 8)
        .box(5, 0, 8, 7, 1.4999999925494194, 12)
        .box(6, 0, 6, 7, 0.4999999925494194, 8)
        .box(12, 0, 8, 15, 1, 11)
        .box(11, -1.4901161193847656e-8, 8, 12, 0.4999999776482582, 10)
        .box(15, -1.4901161193847656e-8, 8, 16, 0.4999999776482582, 10)
        .box(10, 0, 4.4000000059604645, 12, 2, 6.4000000059604645)
        .box(10, -0.4000000059604645, 3, 12, 1.5999999940395355, 6)
        .box(10.50000000745058, 0, 3.900000013411045, 11.50000000745058, 1.4999999925494194, 4.4000000059604645)
        .box(8, 0, 4, 9, 1.5000000074505806, 5)
        .box(12.49999999254942, 0, 11, 14.49999999254942, 0.4999999925494194, 11.49999999254942)
        .box(10.699999995529652, 1, 9, 12.699999995529652, 2.5000000074505806, 11)
    .waterlogged()
})
})})

	