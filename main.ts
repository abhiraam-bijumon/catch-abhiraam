namespace SpriteKind {
    export const Wall = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
info.setLife(3)
let mySprite = sprites.create(img`
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
let mySprite2 = sprites.create(img`
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    `, SpriteKind.Wall)
mySprite.x = 0
game.onUpdateInterval(1000, function () {
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
