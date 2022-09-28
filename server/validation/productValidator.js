module.exports = (product) => {
  const errors = {};

  if (!product.title) {
    errors.title = "Title is required";
  } else if (product.title.trim().length === 0) {
    errors.title = "Title cannot be empty";
  }

  if (!product.thumbnail_image) {
    errors.thumbnail_image = "Thumbnail image is required";
  } else if (product.thumbnail_image.trim().length === 0) {
    errors.thumbnail_image = "Thumbnail image cannot be empty";
  }

  if (!product.hover_image) {
    errors.hover_image = "Hover image is required";
  } else if (product.hover_image.trim().length === 0) {
    errors.hover_image = "Hover image cannot be empty";
  }

  if (!product.total_review) {
    errors.total_review = "Total review is required";
  }

  if (!product.pricing) {
    errors.pricing = "Pricing is required";
  } else if (Object.keys(product.pricing).length === 0) {
    errors.pricing = "Pricing cannot be empty";
  }
  if (!product.short_description) {
    errors.short_description = "Short description is required";
  } else if (product.short_description.trim().length === 0) {
    errors.short_description = "Short description cannot be empty";
  }

  if (!product.long_description) {
    errors.long_description = "Long description is required";
  } else if (product.long_description.trim().length === 0) {
    errors.long_description = "Long description cannot be empty";
  }

  if (!product.options) {
    errors.options = "Options is required";
  } else if (Object.keys(product.options).length === 0) {
    errors.options = "Options cannot be empty";
  }

  if (!product.categorie) {
    errors.categorie = "Categorie is required";
  } else if (product.categorie.trim().length === 0) {
    errors.categorie = "Categorie cannot be empty";
  }

  if (!product.tags) {
    errors.tags = "Tags is required";
  } else if (product.tags.length === 0) {
    errors.tags = "Tags cannot be empty";
  }

  if (!product.small_images) {
    errors.small_images = "Small images are required";
  } else if (product.small_images.length === 0) {
    errors.small_images = "Small images cannot be empty";
  }

  if (!product.share_link) {
    errors.share_link = "Share link is required";
  } else if (product.share_link.length === 0) {
    errors.share_link = "Share link cannot be empty";
  }

  console.log(errors);
  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
