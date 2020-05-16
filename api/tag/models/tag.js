"use strict";

const slugify = require("slugify");

module.exports = {
  beforeSave: async (model, attrs, options) => {
    if (options.method === "insert" && attrs.title) {
      model.set(
        "slug",
        slugify(attrs.title, {
          remove: /[*+~.,()'"!:@]/g,
          replacement: "-", // replace spaces with replacement
          lower: true, // result in lower case
        })
      );
    } else if (options.method === "update" && attrs.title) {
      attrs.slug = slugify(attrs.title, {
        remove: /[*+~.,()'"!:@]/g,
        replacement: "-", // replace spaces with replacement
        lower: true, // result in lower case
      });
    }
  },
};
