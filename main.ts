sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 5 5 5 
    . . . . . . . . . . . . . f 5 f 
    . . . . . . 1 1 1 1 1 1 1 5 f 5 
    . . . . . 1 1 5 5 5 5 5 8 8 5 8 
    . . . . 1 1 5 5 5 5 5 5 8 5 5 8 
    . . . 1 1 5 5 5 5 5 5 8 5 5 5 8 
    . . 1 1 5 5 5 5 5 5 8 5 5 5 5 8 
    . . 1 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . . 1 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . . 1 5 1 1 5 5 1 1 1 1 1 1 1 5 
    . . 1 1 1 . 1 1 1 . . 1 1 . 1 1 
    . . . . . . 1 . 1 . . . 1 . 1 . 
    . . . . . . 1 1 1 . . . 1 1 1 . 
    `, SpriteKind.Player)
mySprite.x = 10
controller.moveSprite(mySprite)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -50, 90)
    projectile.setBounceOnWall(true)
    projectile.y = randint(0, 120)
})
