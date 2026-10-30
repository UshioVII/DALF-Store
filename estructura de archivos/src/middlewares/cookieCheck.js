const db = require('../database/models');

// La cookie está firmada y solo guarda el id: los datos (y el rol) salen siempre de la DB
module.exports = async (req, res, next) => {
    const id = req.signedCookies.userDalfStore;
    if (id && !req.session.userLogin) {
        try {
            const user = await db.User.findByPk(id, { include: [{ association: 'avatar' }] });
            if (user) {
                req.session.userLogin = {
                    id: user.id,
                    userName: user.userName,
                    avatarFile: user.avatar ? user.avatar.filename : 'DEFAULT-IMAGE.jpg',
                    rol: user.rolId,
                };
            }
        } catch (error) {
            console.log(error);
        }
    }
    next();
};
