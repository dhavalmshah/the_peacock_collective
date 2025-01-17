const { SubCategory } = require('../SubCategory');

exports.createBulk = async (body) => await SubCategory.bulkCreate(body);

exports.getAndCountAll = async (query) => {
  const res = await SubCategory.aggregate(query);
  return {
    data: res[0].data,
    // eslint-disable-next-line no-nested-ternary
    count: res[0].metadata
      ? res[0].metadata.length
        ? res[0].metadata[0].total
        : 0
      : 0,
  };
};