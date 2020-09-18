const { getDB } = require("./db");
module.exports = async (ctx) => {
  // const uId = ctx.state.user.uId;
  const uId = 2;
  const sql = `SELECT * FROM photos WHERE uId=?`;
  const [rows] = await getDB().execute(sql, [uId]);

  ctx.body = {
    state: 1,
    data:[ 
      ...rows,
    ],
  };
};
