module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.plugins["email"].services.email.send({
        to: `${result.email}`,
        from: "aromosevictor@gmail.com",
        templateId: "d-b58099c9553e4c38809645c43c1ac412",
        dynamic_template_data: {
          fullname: result.fullname,
          message: result.message,
        },
      });
      await strapi.plugins["email"].services.email.send({
        to: `vitechglobanet@gmail.com`,
        from: "aromosevictor@gmail.com",
        templateId: "d-0bb754e4d3b646dda43609a95db85973",
        dynamic_template_data: {
          senderName: result.fullname,
          senderEmail: result.email,
          message: result.message,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
