const Product = require("../../models/Vendor/Product/Product");
const { newTime, objectId, isValidID } = require("../../utils");
const Categories = require("../../models/Vendor/Product/Categories");
const Tag = require("../../models/Vendor/Product/Tag");
const ShareLinks = require("../../models/Vendor/Product/Share_link");
const ProductVariation = require("../../models/Vendor/Product/Products_variations");
const VariationOption = require("../../models/Vendor/Product/Product_variations_options");
module.exports = {
  // Create initial product
  async createEmptyProduct(req, res) {
    const { _id } = req.user;

    const newProduct = new Product({
      user_id: _id,
      name: "_",
      short_desc: "_",
      long_desc: "_",
      createdAt: newTime(),
      updatedAt: newTime(),
    });

    let product = await newProduct.save();

    return res.status(200).json({
      message: "Product saved successfully",
      product,
    });
  },
  // New Product creation
  async createProduct(req, res) {
    const { _id } = req.user;
    const { product_id } = req.body;

    const product = await Product.findByIdAndUpdate(
      { _id: product_id },
      req.body,
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "Product saved successfully",
      product,
    });
  },
  // Porduct category
  async createCategories(req, res) {
    let { product_id, category_name } = req.body;

    let product = await Product.findById(product_id);

    if (product) {
      const newCategory = new Categories({
        product_id: product_id,
        category_name,
      });

      const category = await newCategory.save();

      await Product.findOneAndUpdate(
        { _id: product_id },
        { categories_id: category._id },
        { new: true }
      );
      return res.status(200).json({
        message: "Product category created successfully",
        category,
      });
    } else {
      return res.status(400).json({
        message: "Invalid product",
      });
    }
  },
  // Product tag
  async createTag(req, res) {
    const { product_id, tag_name } = req.body;

    const newTag = new Tag({
      product_id,
      tag_name,
    });

    const tag = await newTag.save();

    res.status(200).json({
      message: "Tag saved successfully",
      tag,
    });
  },
  // Product variation
  async productVariations(req, res) {
    let { product_id, variation_img } = req.body;

    const newVariation = new ProductVariation({
      product_id,
      variation_img,
    });

    const variation = await newVariation.save();

    res.status(200).json({
      message: "Product variants saved successfully",
      variation,
    });
  },
  // Product variants options
  async productVariationsOptions(req, res) {
    const { product_variations_id, variations_name, price } = req.body;

    const variationOption = new VariationOption({
      product_variations_id,
      variations_name,
      price,
    });

    res.status(200).json({
      message: "Variation option successfully created",
      variationOption,
    });
  },
  // Create share link
  async createShareLink(req, res) {
    let { product_id, icon_name, url } = req.body;

    const newShareLink = new ShareLinks({
      product_id,
      icon_name,
      url,
    });

    let sharelink = await newShareLink.save();

    res.status(200).json({
      message: "Share link successfully created",
      sharelink,
    });
  },

  // Delete Oparation
  async deleteProduct(req, res) {
    const { product_id, product_variations_id } = req.body;

    await Categories.deleteMany({ product_id: { $in: [product_id] } });
    await Tag.deleteMany({ product_id: { $in: [product_id] } });
    await ShareLinks.deleteMany({ product_id: { $in: [product_id] } });
    await ProductVariation.deleteMany({ product_id: { $in: [product_id] } });
    await VariationOption.deleteMany({
      product_variations_id: { $in: [product_variations_id] },
    });

    res.status(200).json({
      message: "Deleted product successfully",
    });
  },
};
