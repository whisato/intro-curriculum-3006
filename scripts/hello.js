'use strict';
module.exports = function(robot){
    robot.hear( /hello/i, function(msg){
        const user_id = msg.message.user.id;
        msg.send(`やあ！新しいゲームあるよ！おみくじって言ってみてよ,<@${user_id}>`);
    } );

    robot.hear(/おみくじ/i, function(msg){
        const user_id = msg.message.user.id;
        const lots = ['大吉','吉','中吉','末吉','凶','大凶'];
        const lot = lots[Math.floor(Math.random() *
            lots.length)];
            msg.send(`${lot},<@${user_id}>`);
    });
};

