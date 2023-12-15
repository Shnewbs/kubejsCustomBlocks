


StartupEvents.registry("block", (event) => {
 

    function capfirst(str) {
        var i, frags = str.split('.');
        for (i=0; i<frags.length; i++) {
          frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
        return frags.join(' ');
      }
      const StoneTypes = ["stone.01","stone.02","stone.03"]

      const StoneVarient = [""]
      
      const StoneNoneTFCVarientBlock = [""]
      
      const StoneOptions = ["rock.pile.1","large.rock.pile","large.rock.pile.2","large.rock.pile.3","large.rock.pile.4"]
      
      const StonePathway = ["pathway.diamond","pathway.dumble","pathway.honeycomb","pathway.pavement","pathway.square","pathway.basket.weave","pathway.clover"]
    
      
      StoneTypes.forEach(StoneTypes => {
            let displayType = capfirst(`${StoneTypes}`)  

      event.create(`dwarvin.${StoneTypes}.block`, 'cardinal')
      .displayName(`Dwarvin ${displayType} Block`) // Set a custom name // Create a new block
      .soundType("stone") // Set a material (affects the sounds and some properties)
      .hardness(1.0) // Set hardness (affects mining time)
      .resistance(1.0) // Set resistance (to explosions, etc)
      .textureAll(`kubejs:block/wcraft/block/rock/if/${StoneTypes}`)
      .modelJson = {
        parent: `kubejs:block/parent/block`,
        textures: {
            texture: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`,
            particle: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`
            }}
        })

    StoneTypes.forEach(StoneTypes => {
        StoneOptions.forEach(StoneOptions => {    
                let displayType = capfirst(`${StoneTypes}`)  
                    let displayOptions = capfirst(`${StoneOptions}`)  

    event.create(`${StoneTypes}.${StoneOptions}`, 'cardinal')
        .displayName(`Dwarvin ${displayType} ${displayOptions}`) // Set a custom name // Create a new block
        .soundType("stone") // Set a material (affects the sounds and some properties)
        .hardness(1.0) // Set hardness (affects mining time)
        .resistance(1.0) // Set resistance (to explosions, etc)
        .modelJson = {
            parent: `kubejs:block/parent/${StoneOptions}`,
            textures: {
            texture: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`,
            particle: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`
                }}
            }
        )
    })  

StoneTypes.forEach(StoneTypes => {
         StoneVarient.forEach(StoneVarient => {
             let displayType = capfirst(`${StoneTypes}`)  
                     let displayVarient = capfirst(`${StoneVarient}`)  
 event.create(`${StoneTypes}.arch.small.half`, 'cardinal')
     .displayName(`Dwarvin ${displayType} Small Arch Half`) // Set a custom name // Create a new block
     .soundType("stone") // Set a material (affects the sounds and some properties)
     .hardness(1.0) // Set hardness (affects mining time)
     .resistance(1.0) // Set resistance (to explosions, etc)
     .box(-2.5, -0.006, 8.03, 0, 15.994, 15.975)
     .box(0, 4, 8, 3, 16, 16)
     .box(13, 5, 8, 16, 16, 16)
     .box(16, -0.009, 8.05, 18.5, 15.991, 15.95)
     .box(6.2, 9.8, 14.6, 10.2, 12.8, 16.85)
     .box(6.2, 9.65, 7.15, 10.2, 12.65, 9.4)
     .box(3, 6.05, 8, 13, 16, 16)
     .modelJson = {
         parent: `kubejs:block/parent/arch.small.half`,
         textures: {
             texture: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`,
             particle: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`
            }}
       }
   )
})  


StoneTypes.forEach(StoneTypes => {
        StoneVarient.forEach(StoneVarient => {
            let displayType = capfirst(`${StoneTypes}`)  
                    let displayVarient = capfirst(`${StoneVarient}`)  
 event.create(`${StoneTypes}.capital.base`, 'cardinal')
     .displayName(`Dwarvin ${displayType} Capital Base`) // Set a custom name // Create a new block
     .soundType("stone") // Set a material (affects the sounds and some properties)
     .hardness(1.0) // Set hardness (affects mining time)
     .resistance(1.0) // Set resistance (to explosions, etc)
     .box(4, 8, 4, 12, 16, 12)
     .box(0, 0, 0, 16, 8, 16)
     .modelJson = {
         parent: `kubejs:block/parent/capital.base`,
         textures: {
             texture: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`,
             particle: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`
            }}
       }
   )
})  


StoneTypes.forEach(StoneTypes => {
    StoneVarient.forEach(StoneVarient => {
        let displayType = capfirst(`${StoneTypes}`)  
                let displayVarient = capfirst(`${StoneVarient}`)  
 event.create(`${StoneTypes}.capital`, 'cardinal')
     .displayName(`Dwarvin ${displayType} Capital`) // Set a custom name // Create a new block
     .soundType("stone") // Set a material (affects the sounds and some properties)
     .hardness(1.0) // Set hardness (affects mining time)
     .resistance(1.0) // Set resistance (to explosions, etc)
     .box(0, 8, 0, 16, 16, 16) 
     .box(4, 0, 4, 12, 8, 12)
     .modelJson = {
         parent: `kubejs:block/parent/capital`,
         textures: {
             texture: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`,
             particle: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`
            }}
       }
   )
})  


StoneTypes.forEach(StoneTypes => {
    StoneVarient.forEach(StoneVarient => {
        let displayType = capfirst(`${StoneTypes}`)  
                let displayVarient = capfirst(`${StoneVarient}`)  
 event.create(`${StoneTypes}.window`, 'cardinal')
     .displayName(`Dwarvin ${displayType} Window`) // Set a custom name // Create a new block
     .soundType("stone") // Set a material (affects the sounds and some properties)
     .hardness(1.0) // Set hardness (affects mining time)
     .resistance(1.0) // Set resistance (to explosions, etc)
     .box(0, 0, 0, 4, 16, 4)
     .box(0, 0, 12, 4, 16, 16)
     .box(12, 0, 12, 16, 16, 16)
     .box(12, 0, 0, 16, 16, 4)
     .box(4, 0, 12, 12, 2.5, 16)
     .box(0, 0, 4, 4, 2.5, 12)
     .box(4, 0, 0, 12, 2.5, 4)
     .box(12, 0, 4, 16, 2.5, 12)
     .box(4, 13.5, 12, 12, 16, 16)
     .box(0, 13.5, 4, 4, 16, 12)
     .box(4, 13.5, 0, 12, 16, 4)
     .box(12, 13.5, 4, 16, 16, 12)
     .modelJson = {
         parent: `kubejs:block/parent/window`,
         textures: {
             texture: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`,
             particle: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`
            }}
       }
   )
})  


 
 StoneTypes.forEach(StoneTypes => {
    StoneVarient.forEach(StoneVarient => {
        let displayType = capfirst(`${StoneTypes}`)  
                let displayVarient = capfirst(`${StoneVarient}`)  
 event.create(`${StoneTypes}.window.half`, 'cardinal')
     .displayName(`Dwarvin ${displayType} Half Window`) // Set a custom name // Create a new block
     .soundType("stone") // Set a material (affects the sounds and some properties)
     .hardness(1.0) // Set hardness (affects mining time)
     .resistance(1.0) // Set resistance (to explosions, etc)
     .box(0, 0, 0, 4, 16, 4)
     .box(12, 0, 0, 16, 16, 4)
     .box(4, 0, 0, 12, 2.5, 4)
     .box(4, 13.5, 0, 12, 16, 4)
     .modelJson = {
         parent: `kubejs:block/parent/window.half`,
         textures: {
             texture: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`,
             particle: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`
            }}
       }
   )
})  


  
 StoneTypes.forEach(StoneTypes => {
    StoneVarient.forEach(StoneVarient => {
        let displayType = capfirst(`${StoneTypes}`)  
                let displayVarient = capfirst(`${StoneVarient}`)  
 event.create(`${StoneTypes}.balustrade.base`, 'cardinal')
     .displayName(`Dwarvin ${displayType} Balustrade Base`) // Set a custom name // Create a new block
     .soundType("stone") // Set a material (affects the sounds and some properties)
     .hardness(1.0) // Set hardness (affects mining time)
     .resistance(1.0) // Set resistance (to explosions, etc)
     .box(2, 0, 2, 14, 4, 14)
     .box(3, 4, 3, 13, 5, 13)
     .box(4, 5, 4, 12, 11, 12)
     .box(2, 11, 2, 14, 16, 14)
     .modelJson = {
         parent: `kubejs:block/parent/balustrade.base`,
         textures: {
             texture: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`,
             particle: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`
            }}
       }
   )
})  


    
 StoneTypes.forEach(StoneTypes => {
    StoneVarient.forEach(StoneVarient => {
        let displayType = capfirst(`${StoneTypes}`)  
                let displayVarient = capfirst(`${StoneVarient}`)  
 event.create(`${StoneTypes}.balustrade`, 'cardinal')
     .displayName(`Dwarvin ${displayType} Balustrade`) // Set a custom name // Create a new block
     .soundType("stone") // Set a material (affects the sounds and some properties)
     .hardness(1.0) // Set hardness (affects mining time)
     .resistance(1.0) // Set resistance (to explosions, etc)
     .box(2, 0, 2, 14, 4, 14)
     .box(4, 4, 3, 12, 5, 13)
     .box(6, 5, 4, 10, 10, 12)
     .box(3, 10, 0, 13, 16, 16)
     .modelJson = {
         parent: `kubejs:block/parent/balustrade`,
         textures: {
             texture: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`,
             particle: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`
            }}
       }
   )
})  


StoneTypes.forEach(StoneTypes => {
    StoneVarient.forEach(StoneVarient => {
        let displayType = capfirst(`${StoneTypes}`)  
                let displayVarient = capfirst(`${StoneVarient}`)  
 event.create(`${StoneTypes}.eighth.slab`, 'cardinal')
     .displayName(`Dwarvin ${displayType} Eighth Slab`) // Set a custom name // Create a new block
     .soundType("stone") // Set a material (affects the sounds and some properties)
     .hardness(1.0) // Set hardness (affects mining time)
     .resistance(1.0) // Set resistance (to explosions, etc)
     .box(0, 0, 0, 8, 8, 8)
     .modelJson = {
         parent: `kubejs:block/parent/eighth.slab`,
         textures: {
             texture: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`,
             particle: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`
            }}
       }
   )
})  


StoneTypes.forEach(StoneTypes => {
    StoneVarient.forEach(StoneVarient => {
        let displayType = capfirst(`${StoneTypes}`)  
                let displayVarient = capfirst(`${StoneVarient}`)  
 event.create(`${StoneTypes}.stairs`, 'cardinal')
     .displayName(`Dwarvin ${displayType} Stairs`) // Set a custom name // Create a new block
     .soundType("stone") // Set a material (affects the sounds and some properties)
     .hardness(1.0) // Set hardness (affects mining time)
     .resistance(1.0) // Set resistance (to explosions, etc)
     .box(0, 0, 0, 16, 8, 16)
     .box(0, 0, 0, 16, 8, 16)
     .box(0, 8, 8, 16, 16, 16)
     .box(0, 8, 8, 16, 16, 16)
     .modelJson = {
         parent: `kubejs:block/parent/stairs`,
         textures: {
             texture: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`,
             particle: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`
            }}
       }
   )
})  


StoneTypes.forEach(StoneTypes => {
    StoneVarient.forEach(StoneVarient => {
        let displayType = capfirst(`${StoneTypes}`)  
                let displayVarient = capfirst(`${StoneVarient}`)  
 event.create(`${StoneTypes}.pillar`, 'cardinal')
     .displayName(`Dwarvin ${displayType} Pillar`) // Set a custom name // Create a new block
     .soundType("stone") // Set a material (affects the sounds and some properties)
     .hardness(1.0) // Set hardness (affects mining time)
     .resistance(1.0) // Set resistance (to explosions, etc)
     .box(4, 0, 4, 12, 16, 12)
     .modelJson = {
         parent: `kubejs:block/parent/pillar`,
         textures: {
             texture: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`,
             particle: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`
            }}
       }
   )
})  


StoneTypes.forEach(StoneTypes => {
   StoneVarient.forEach(StoneVarient => {
       let displayType = capfirst(`${StoneTypes}`)  
               let displayVarient = capfirst(`${StoneVarient}`)  
event.create(`${StoneTypes}.arch.small`, 'cardinal')
    .displayName(`Dwarvin ${displayType} Small Arch`) // Set a custom name // Create a new block
    .soundType("stone") // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .box(3, 6.05, 0, 13, 16, 16)
    .box(0, 4, 0, 3, 16, 16)
    .box(-2.5, -0.006, 0.03, 0, 15.994, 15.975)
    .box(13, 5, 0, 16, 16, 16)
    .box(16, -0.009, 0.05, 18.5, 15.991, 15.95)
    .box(6.2, 9.8, 14.6, 10.2, 12.8, 16.85)
    .modelJson = {
        parent: `kubejs:block/parent/arch.small`,
        textures: {
            texture: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`,
            particle: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`
            }}
        }
    )
})  


StoneTypes.forEach(StoneTypes => {
    let displayType = capfirst(`${StoneTypes}`)
    StonePathway.forEach(StonePathway => {
        let displayPathway = capfirst(`${StonePathway}`) 
        StoneVarient.forEach(StoneVarient => {
            let displayVarient = capfirst(`${StoneVarient}`) 

event.create(`${StoneTypes}.${StonePathway}`, 'cardinal')
    .displayName(`Dwarvin ${displayType} ${displayPathway}`) // Set a custom name // Create a new block   
    .soundType("stone") // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)     
    .defaultCutout()
    .waterlogged()
    .box(0, 0, 0, 16, 0.8, 16)        
    .modelJson = {
        parent: `kubejs:block/parent/${StonePathway}`,
        textures: {
            texture: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`,
            particle: `kubejs:block/wcraft/block/rock/if/${StoneTypes}`
                }}
            })
        })
    })
})


