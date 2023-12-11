
StartupEvents.registry("block", (event) => {
 

        function capfirst (str) {
          str = (str + '').toLowerCase();
          return str.replace(".", ' ').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
              return $1.toUpperCase();
          });
      }
      var TFCStoneTypes = ["andesite","basalt","chalk","chert","claystone","conglomerate","dacite","diorite","dolomite","gabbro","gneiss","granite","limestone","marble","phyllite","quartzite","rhyolite","schist","shale","slate"/*"venus","mars","moon", "mercury", "netherrack", "endstone"*/]
      
      var TFCStoneVarient = ["aged.brick", "cobble.mortor", "drystone", "brick","chiseled","cobble","cracked.brick","mossy.brick","mossy.cobble","raw","smooth"]
      
      
    //   TFCStoneVarient.forEach(TFCStoneVarient => {
    //     let TFCStoneOptionNames = capfirst(`${TFCStoneVarient}`)    
        TFCStoneTypes.forEach(TFCStoneTypes => {
          let displayMaterial = capfirst(`${TFCStoneTypes}`)  
      
    event.create(`${TFCStoneTypes}.brick.plaster.block`) // Create a new block
.displayName(`${displayMaterial} Brick & Plaster`) // Set a custom name
.soundType("stone") // Set a material (affects the sounds and some properties)
.hardness(1.0) // Set hardness (affects mining time)
.resistance(1.0) // Set resistance (to explosions, etc)
.textureAll(`kubejs:block/tfc/block/rock/brick_plaster/${TFCStoneTypes}`)


        }
    )
})

