'use strict';

var height = $(window).height();
var width = $(window).width();

var game = new Phaser.Game(width, height, Phaser.AUTO, 'aws-serverless-samfarm', {
    preload: preload,
    create: create
});

var sprites;
var DESIRED_SAM_COUNT = 152;

function preload() {
    game.load.spritesheet('spinner', 'squirrel.png', 64, 64);
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
}

function create() {
    game.stage.disableVisibilityChange = true;
    game.stage.backgroundColor = '#967da7';
    sprites = game.add.physicsGroup(Phaser.Physics.ARCADE);
    createSprites(DESIRED_SAM_COUNT);
}

function createSprites(numberOfSprites) {
    for (var i = 0; i < numberOfSprites; i++) {
        var initX = game.rnd.integerInRange(100, width - 100);
        var initY = game.rnd.integerInRange(32, height - 32);
        var velX = game.rnd.integerInRange(-200, 200);
        var velY = game.rnd.integerInRange(-200, 200);

        var s = sprites.create(initX, initY, 'spinner');
        s.body.velocity.set(velX, velY);
        s.scale.setTo(1.4, 1.4);
    }

    sprites.setAll('body.collideWorldBounds', true);
    sprites.setAll('body.bounce.x', 1);
    sprites.setAll('body.bounce.y', 1);
}
